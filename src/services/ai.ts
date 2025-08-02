// Este arquivo é para uso futuro com OpenAI. Para testes gratuitos, utilize o serviço Groq em ai-groq.ts
import { openai } from "@/lib/openai";
import {
  GENERATE_CV_CONTENT_PROMPT,
  IMPROVE_CV_JSON_PROMPT,
  TRANSLATE_CV_JSON_PROMPT,
} from "@/lib/ai-prompts";

// Gera conteúdo de currículo otimizado para a vaga
export async function generateCVContent(jobTitle: string, jobDescription?: string) {
  const prompt = GENERATE_CV_CONTENT_PROMPT(jobTitle, jobDescription);
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });
  return completion.choices[0]?.message?.content;
}

// Aprimora o texto de um JSON de currículo
export async function improveCVJson(content: object) {
  const prompt = IMPROVE_CV_JSON_PROMPT(content);
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });
  return completion.choices[0]?.message?.content;
}

// Traduz e aprimora o texto de um JSON de currículo
export async function translateCVJson(content: object, language: string) {
  const prompt = TRANSLATE_CV_JSON_PROMPT(content, language);
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });
  return completion.choices[0]?.message?.content;
}
