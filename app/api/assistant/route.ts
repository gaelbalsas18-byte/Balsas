import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { buildCatalogPrompt } from "@/lib/catalog";
import { searchProducts } from "@/lib/searchProducts";
import { detectIntent } from "@/lib/intention";


export async function POST(req: Request) {
      try {
        const body = await req.json();

        const userMessage = body.case;

        const clinicalCase = body.case;

        const history = body.history ?? [];

        const intent = detectIntent(userMessage);

        const isClinical =
          intent === "clinical_case" ||
          intent === "comparison" ||
          intent === "procedure";

        console.log("INTENCIÓN:", intent);

        const conversation = history.map(
          (message: {
            role: "user" | "assistant";
            content: string;
          }) => ({
            role: message.role,
            content: message.content,
          })
      );

      let catalog = "";

          if (isClinical) {

            const relatedProducts = searchProducts(clinicalCase, 20);

            console.table(
              relatedProducts.map((p) => ({
                id: p.id,
                nombre: p.name,
                categoria: p.category,
              }))
            );

            catalog = buildCatalogPrompt(relatedProducts);

          }

        const systemPrompt = isClinical

        ? `
        Eres un especialista en materiales dentales de Balsas Dental.

        Tu única fuente de información es el catálogo de productos que recibirás.

        No debes utilizar conocimientos externos ni recomendar productos que no aparezcan en dicho catálogo.

        ==========================
        REGLAS OBLIGATORIAS
        ==========================

        - Nunca inventes productos.
        - Nunca inventes marcas.
        - Nunca recomiendes productos que no existan en el catálogo.
        - Si el catálogo no contiene un producto adecuado debes decirlo.
        - No hagas suposiciones sobre productos que no aparezcan en el catálogo.
        - No recomiendes productos de otras empresas.
        - Explica de forma breve y profesional por qué recomiendas cada producto.
        - Si existen varias alternativas dentro del catálogo, ordénalas desde la más recomendable hasta la menos recomendable.

        ==========================
        FORMATO DE RESPUESTA
        ==========================

        Debes responder EXCLUSIVAMENTE con un objeto JSON válido.

        No escribas texto antes del JSON.

        No escribas texto después del JSON.

        No utilices Markdown.

        No utilices bloques de código.

        La estructura debe ser exactamente esta:

        {
          "analysis": "Breve análisis clínico.",
          "recommendations": [
            {
              "id": "ID exacto del producto",
              "reason": "Motivo por el cual lo recomiendas."
            }
          ]
        }

        ==========================
        IMPORTANTE
        ==========================

        - El campo "id" debe coincidir EXACTAMENTE con el ID del producto del catálogo.
        - No modifiques el ID.
        - No inventes IDs.
        - No inventes características de los productos.
        - Utiliza únicamente la información disponible en el catálogo.

        Si ningún producto del catálogo es adecuado responde exactamente:

        {
          "analysis":"No se encontró un producto adecuado dentro del catálogo proporcionado.",
          "recommendations":[]
        }
        `
          : `
        Tu nombre es Balsas IA.

        Eres el asistente virtual oficial de Balsas Dental.

        Tu personalidad es amable, cercana y profesional.

        Mantienes conversaciones naturales como ChatGPT.

        No repitas constantemente que eres un asistente especializado.

        No respondas como un robot.

        Si el usuario te saluda, salúdalo.

        Si el usuario pregunta cómo estás, responde de manera natural.

        Si el usuario hace conversación casual, conversa normalmente.

        Mantén siempre el contexto utilizando el historial recibido.

        Si durante la conversación el usuario cambia a un tema odontológico, responde únicamente con base en la conversación; el sistema decidirá cuándo enviarte un catálogo.

        Responde SIEMPRE únicamente con JSON.

        {
          "analysis":"respuesta",
          "recommendations":[]
        }
        `;

    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.2,

      messages: [
        {
          role: "system",
          content: systemPrompt,
        },

        ...conversation,

        {
          role: "user",
          content: isClinical
            ? `
          CATÁLOGO

          ${catalog}

          ====================

          CASO CLÍNICO

          ${clinicalCase}
          `
                : clinicalCase,
            },
          ],
        });

    const content = completion.choices[0].message.content ?? "";

    try {

      const json = JSON.parse(content);

      return NextResponse.json({
        success: true,
        data: json,
      });

    } catch {

      return NextResponse.json({
        success: false,
        message: "La IA no devolvió un JSON válido.",
        raw: content,
      });

    }

      } catch (error) {

        console.error(error);

        return NextResponse.json(
          {
            success: false,
            message: "Ocurrió un error.",
          },
          {
            status: 500,
          }
        );
      }
}
