# ClipDrop

ClipDrop é um moderno aplicativo para download de vídeos e áudios do YouTube construído com Next.js. Esta aplicação permite aos usuários baixar facilmente conteúdo do YouTube em vários formatos e qualidades.

## Funcionalidades

- Download de vídeos do YouTube, YouTube Music e YouTube Shorts
- Suporte para múltiplos formatos (MP4, MP3, etc.)
- Várias opções de qualidade (1080p, 720p, etc.)
- Interface de usuário limpa e responsiva com animações
- Suporte para modo escuro

## Como Iniciar

Primeiro, instale as dependências:

```bash
yarn install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Stack Tecnológica

- **Framework**: [Next.js 15](https://nextjs.org/) com App Router
- **Componentes UI**: Componentes personalizados com [Radix UI](https://www.radix-ui.com/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Player de YouTube**: [React YouTube](https://github.com/tjallingt/react-youtube)
- **Ícones**: [Lucide React](https://lucide.dev/)

## Estrutura do Projeto

- `src/app`: Arquivos do App Router do Next.js
- `src/components`: Componentes React, incluindo o componente principal YouTubeDownloader
- `src/components/ui`: Componentes UI reutilizáveis
- `src/lib`: Funções utilitárias e código compartilhado

## Desenvolvimento

Este projeto usa Next.js com Turbopack para atualização rápida e TypeScript para segurança de tipos. **Por favor, utilize apenas o Yarn como gerenciador de pacotes para este projeto.**

```bash
# Executar servidor de desenvolvimento com Turbopack
yarn dev

# Construir para produção
yarn build

# Iniciar servidor de produção
yarn start

# Executar verificação de linting
yarn lint
```

## Licença

Este projeto é público e de código aberto.
