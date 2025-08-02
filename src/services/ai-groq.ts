// Serviço Groq para geração de IA
// Use este arquivo para testar a Groq sem alterar o serviço original do OpenAI

import { groq } from "@/lib/groq";
import {
  GENERATE_CV_CONTENT_PROMPT,
  IMPROVE_CV_JSON_PROMPT,
  TRANSLATE_CV_JSON_PROMPT,
} from "@/lib/ai-prompts";

// Função exemplo: gerar conteúdo de currículo
export async function generateCVContentGroq(data: any) {
  const prompt = GENERATE_CV_CONTENT_PROMPT(data);
  const response = await groq.chat.completions.create({
    model: "llama-3-70b-8192",
    messages: [
      { role: "system", content: prompt },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}

// Função exemplo: melhorar JSON do currículo
export async function improveCVJsonGroq(data: any) {
  const prompt = IMPROVE_CV_JSON_PROMPT(data);
  const response = await groq.chat.completions.create({
    model: "llama-3-70b-8192",
    messages: [
      { role: "system", content: prompt },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}

// Função exemplo: traduzir JSON do currículo
export async function translateCVJsonGroq(data: any, language: string) {
  const prompt = TRANSLATE_CV_JSON_PROMPT(data, language);
  const response = await groq.chat.completions.create({
    model: "llama-3-70b-8192",
    messages: [
      { role: "system", content: prompt },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}
