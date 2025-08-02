// Client Groq para uso com a API Groq
// Para usar, defina GROQ_API_KEY no seu .env
// Docs: https://console.groq.com/docs/libraries

import { Groq } from "@ai-sdk/groq";

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });
