"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import ChatPanel from "./ChatPanel";
import PromptBox from "./PromptBox";
import Notice from "./Notice";

type Message =
  | {
      role: "user";
      content: string;
    }
  | {
      role: "assistant";
      analysis: string;
      recommendations: {
        id: string;
        reason: string;
      }[];
    };

export default function AssistantWelcome() {
  const [caseText, setCaseText] = useState("");

  const [loading, setLoading] = useState(false);

 const [messages, setMessages] = useState<Message[]>([]);


  const handleAnalyze = async () => {
    if (!caseText.trim()) return;

    try {
      setLoading(true);

      const history = [
        ...messages,
        {
          role: "user" as const,
          content: caseText,
        },
      ];

      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          case: caseText,
          history,
        }),
      });

      const data = await response.json();

      if (data.success) {

        setMessages([
          ...history,
          {
            role: "assistant",
            analysis: data.data.analysis,
            recommendations: data.data.recommendations,
          },
        ]);

        setCaseText("");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

      const conversations = messages
        .filter(
          (m): m is Extract<Message, { role: "user" }> =>
            m.role === "user"
        )
        .map((m) => m.content);

      const handleNewChat = () => {
        setMessages([]);
        setCaseText("");
      };


  return (
    <div className="mx-auto max-w-7xl px-8 py-10">

      <div className="grid grid-cols-[300px_1fr] gap-8">

        {/* Sidebar */}

        <Sidebar
          conversations={conversations}
          onNewChat={handleNewChat}
        />

        {/* Panel derecho */}

        <div className="flex flex-col gap-6">

          <ChatPanel
            messages={messages}
            loading={loading}
          />

          <PromptBox
            value={caseText}
            onChange={setCaseText}
            onSend={handleAnalyze}
            loading={loading}
          />

          <Notice />

        </div>

      </div>

    </div>
  );
}