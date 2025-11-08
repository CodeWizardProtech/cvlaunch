import { decrementUserCredits } from "@/db/actions";
import { getUserCredits } from "@/db/queries";
<<<<<<< HEAD
import { openai } from "@/lib/openai";
=======
import { generateContent } from "@/lib/gemini";
>>>>>>> 72f1b14 (atualizado)
import { isValidJSON } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  content: z.object({}).passthrough(),
  language: z.string(),
});

export const POST = async (request: Request) => {
  try {
    const credits = await getUserCredits();
<<<<<<< HEAD

=======
>>>>>>> 72f1b14 (atualizado)
    if (credits <= 0) {
      return Response.json({ message: "Créditos insuficientes." }, { status: 403 });
    }

    const body = await request.json();
<<<<<<< HEAD

    const { content, language } = schema.parse(body);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `
          Baseado no JSON abaixo, traduza todos os valores dos campos para a linguagem ${language}, não importa qual linguagem o valor está escrito originalmente. Também aprimore o texto para parecer mais claro e profissional, pois será usado em currículos.
          Também corrija erros gramaticais e de concordância, se necessário.
          Mantenha dados específicos pessoais, links, emails, telefones, etc. como estão, apenas altere o texto dos campos.

          **Lembre-se de retornar um JSON válido e bem formatado.**

          **Não traduza o nome dos campos (as keys do objeto) original, mantenha isso de forma original e traduza o conteúdo dos campos.**

          **JSON:**

          ${JSON.stringify(content, null, 2)}
        `,
        },
      ],
    });

    const json = completion.choices[0].message.content ?? "";
=======
    const { content, language } = schema.parse(body);

    const prompt = `
      Baseado no JSON abaixo, traduza todos os valores dos campos para a linguagem ${language}, não importa qual linguagem o valor está escrito originalmente. Também aprimore o texto para parecer mais claro e profissional, pois será usado em currículos.
      Também corrija erros gramaticais e de concordância, se necessário.
      Mantenha dados específicos pessoais, links, emails, telefones, etc. como estão, apenas altere o texto dos campos.

      **Lembre-se de retornar um JSON válido e bem formatado.**

      **Não traduza o nome dos campos (as keys do objeto) original, mantenha isso de forma original e traduza o conteúdo dos campos.**

      **JSON:**

      ${JSON.stringify(content, null, 2)}
    `;

    const json = await generateContent(prompt);
>>>>>>> 72f1b14 (atualizado)

    if (!isValidJSON(json)) throw new Error("JSON inválido.");

    await decrementUserCredits(1);

<<<<<<< HEAD
    return Response.json({ data: json });
  } catch (error) {
    return Response.json(
      { message: "Ocorreu um erro inesperado.", error },
=======
    return Response.json({ data: JSON.parse(json) });
  } catch (error) {
    return Response.json(
      {
        message: "Ocorreu um erro inesperado.",
        error: error instanceof Error ? error.message : String(error),
      },
>>>>>>> 72f1b14 (atualizado)
      { status: 500 }
    );
  }
};
