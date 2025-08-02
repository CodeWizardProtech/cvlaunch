// Prompts para geração de currículo com IA

export const GENERATE_CV_CONTENT_PROMPT = (jobTitle: string, jobDescription?: string) => `
Crie um conteúdo JSON que será utilizado para popular um currículo, alinhado com o título da vaga: ${jobTitle}${jobDescription ? ` e com a seguinte descrição da vaga: ${jobDescription}` : ""}. O conteúdo deve ser otimizado para aumentar as chances de match com a vaga, focando nas habilidades mais relevantes.

**Importante**: Não mencione o título da vaga ou dados da empresa no JSON. O conteúdo deve ser escrito de forma profissional e direta, utilizando a metodologia STAR para o campo de \"sobre mim\" e adotando um tom que destaque as qualificações do candidato.

Estrutura (Gere um JSON válido e bem formatado):
{
  summary: "Campo usado para sobre mim, usando metodologia tipo STAR, focando em conquistas relevantes para a vaga.",
  headline: "Headline curto em poucas palavras para ficar abaixo do nome do candidato. Normalmente é o nome do cargo",
  skills: [
    {
      name: "Nome da habilidade mais relevante para a vaga.",
      keywords: "Palavras-chave relacionadas a essa habilidade, separadas por vírgula, que ajudem a destacar a competência.",
      level: 0-5 (0 para básico, 5 para avançado)
    },
    ...
  ]
}
`;

export const IMPROVE_CV_JSON_PROMPT = (content: object) => `
Baseado no JSON abaixo, avalie todos os campos alterando o conteúdo de todos eles, aprimorando o texto para parecer mais claro e profissional, pois será usado em currículos.
Também corrija erros gramaticais e de concordância, se necessário.
Mantenha dados pessoais, links, emails, etc. como estão, apenas altere o texto dos campos.

**Lembre-se de retornar um JSON válido e bem formatado.**

**JSON:**

${JSON.stringify(content, null, 2)}
`;

export const TRANSLATE_CV_JSON_PROMPT = (content: object, language: string) => `
Baseado no JSON abaixo, traduza todos os valores dos campos para a linguagem ${language}, não importa qual linguagem o valor está escrito originalmente. Também aprimore o texto para parecer mais claro e profissional, pois será usado em currículos.
Também corrija erros gramaticais e de concordância, se necessário.
Mantenha dados específicos pessoais, links, emails, telefones, etc. como estão, apenas altere o texto dos campos.

**Lembre-se de retornar um JSON válido e bem formatado.**

**Não traduza o nome dos campos (as keys do objeto) original, mantenha isso de forma original e traduza o conteúdo dos campos.**

**JSON:**

${JSON.stringify(content, null, 2)}
`;
