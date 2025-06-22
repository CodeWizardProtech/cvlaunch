# Resume Builder Dashboard

Um sistema completo de criação e edição de currículos com interface moderna e recursos de inteligência artificial.

## 📋 Sobre o Projeto

Este é um aplicativo web para criação e gerenciamento de currículos profissionais, oferecendo uma interface intuitiva e recursos avançados como geração de conteúdo com IA. O sistema permite aos usuários criar, editar e organizar suas informações profissionais de forma estruturada e eficiente.

## ✨ Funcionalidades

### Dashboard Principal
- **Gerenciamento de Currículos**: Visualização e organização de múltiplos currículos
- **Interface Responsiva**: Design adaptável para diferentes dispositivos
- **Navegação Intuitiva**: Acesso rápido entre seções e funcionalidades

### Editor de Currículo
- **Sidebar de Informações**: Painel lateral organizado com seções específicas:
  - **Informações Básicas**: Dados pessoais e contato
  - **Resumo Profissional**: Descrição e objetivos de carreira
  - **Seções Múltiplas**: Experiências, educação, habilidades, certificações
- **Edição em Tempo Real**: Visualização instantânea das alterações
- **Organização Modular**: Seções independentes para melhor usabilidade

### Recursos de IA
- **Geração Automática**: Dropdown com opções de geração de conteúdo usando IA
- **Sugestões Inteligentes**: Assistência na criação de textos profissionais
- **Otimização de Conteúdo**: Melhorias automáticas no texto do currículo

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js**: Framework React para aplicações web modernas
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **React**: Biblioteca para construção de interfaces de usuário
- **Tailwind CSS**: Framework de estilização utilitária

### Componentes e UI
- **Sistema de Componentes**: Arquitetura modular e reutilizável
- **Separadores**: Elementos visuais para organização da interface
- **Links Dinâmicos**: Navegação otimizada com Next.js Link
- **SVG Assets**: Ícones e logos vetorizados

### Arquitetura
- **Estrutura Modular**: Organização por páginas e funcionalidades
- **Componentes Reutilizáveis**: Sistema de UI consistente
- **Separação de Responsabilidades**: Cada componente com função específica

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── pages/
│   │   └── dashboard/
│   │       └── resume/
│   │           └── infos-sidebar/
│   │               ├── index.tsx
│   │               ├── ai-generation-dropdown.tsx
│   │               └── sections/
│   │                   ├── basic-info.tsx
│   │                   ├── summary.tsx
│   │                   └── multiples.tsx
│   └── ui/
│       └── separator.tsx
└── assets/
    └── logo.svg
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
git clone [url-do-repositorio]
cd resume-builder-dashboard
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
npm start
```

## 🎯 Funcionalidades Detalhadas

### Dashboard de Currículos
- Lista todos os currículos do usuário
- Permite criar novos currículos
- Acesso rápido para edição

### Editor de Currículo
- **Informações Básicas**: Nome, contato, localização
- **Resumo Profissional**: Objetivo de carreira e descrição pessoal
- **Experiências**: Histórico profissional com detalhes
- **Educação**: Formação acadêmica e cursos
- **Habilidades**: Competências técnicas e interpessoais
- **Certificações**: Cursos e certificados relevantes

### Recursos de IA
- Geração automática de resumos profissionais
- Sugestões de melhorias no conteúdo
- Otimização para palavras-chave relevantes
- Adaptação para diferentes áreas profissionais

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=sua_api_url
AI_API_KEY=sua_chave_da_api_de_ia
```

### Personalização
- Modifique os estilos em `tailwind.config.js`
- Adicione novos componentes na pasta `components/ui`
- Configure rotas adicionais em `pages/`

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através de:
- Email: [seu-email@exemplo.com]
- Issues do GitHub: [link-para-issues]

---

Desenvolvido com ❤️ usando Next.js e TypeScript
---
[visualizando o projeto](/gifcurriculo/curriculo.gif)