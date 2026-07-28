"use client";

import { useState } from "react";

import AssistantButton from "./AssistantButton";
import AssistantModal from "./AssistantModal";

export default function Assistant() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <AssistantButton
        onClick={() => setOpen(true)}
      />

      <AssistantModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );

}