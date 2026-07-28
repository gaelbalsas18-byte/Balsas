import { NextResponse } from "next/server";

import { openai } from "@/lib/openai";
import { buildCatalogPrompt } from "@/lib/catalog";
import { searchProducts } from "@/lib/searchProducts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const clinicalCase = body.case;

      const relatedProducts = searchProducts(clinicalCase, 20);

      console.log("Productos encontrados:");
      console.table(
        relatedProducts.map((p) => ({
          id: p.id,
          nombre: p.name,
          categoria: p.category,
        }))
      );

      const catalog = buildCatalogPrompt(relatedProducts);

    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.2,

      messages: [
        {
          role: "system",
          content: `
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
  "analysis": "No se encontró un producto adecuado dentro del catálogo proporcionado.",
  "recommendations": []
}
`,
        },

        {
          role: "user",
          content: `
CATÁLOGO

${catalog}

===============================

CASO CLÍNICO

${clinicalCase}
`,
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