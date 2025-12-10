# Portfolio - Henrique Marino

> Portfólio profissional desenvolvido com Nuxt 3, Tailwind CSS e TypeScript seguindo as melhores práticas de desenvolvimento.

![Nuxt 3](https://img.shields.io/badge/Nuxt-3.15-00DC82?style=flat&logo=nuxt.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-6.12-38B2AC?style=flat&logo=tailwind-css)

---

## 🚀 Tecnologias

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js com SSR, SSG e auto-imports
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Font Awesome](https://fontawesome.com/)** - Biblioteca de ícones
- **[Google Fonts](https://fonts.google.com/)** - JetBrains Mono para código

---

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ ou superior
- npm, yarn, pnpm ou bun

### Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:3000)
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Gerar site estático
npm run generate
```

---

## 🎨 Características

### Design e UX
- ✨ Design moderno e profissional com paleta de cores verde/escura
- 📱 Totalmente responsivo (mobile-first)
- 🎭 Animações suaves e transições elegantes
- 🌓 Efeitos visuais (blur, gradientes, glow)
- 🖱️ Interações intuitivas com hover effects

### Funcionalidades
- 🖥️ **Terminal Linux Interativo** - Simulação autêntica de terminal
- 📂 **Explorador de Arquivos** - Navegação entre habilidades técnicas
- 🌐 **Internacionalização (i18n)** - Suporte PT/EN com persistência
- 📝 **Formulário de Contato** - Validação e estado de loading
- 🔝 **Scroll Suave** - Navegação fluida entre seções
- 📱 **Menu Mobile** - Full-screen com backdrop blur

### Desenvolvimento
- 🧩 **16 Componentes Vue** - Totalmente reutilizáveis
- 🔧 **6 Composables TypeScript** - Lógica compartilhada
- 📐 **TypeScript** - 100% tipado
- 🎯 **Auto-imports** - Componentes e composables
- ⚡ **SSR/SSG** - Renderização otimizada
- 🔍 **SEO Otimizado** - Meta tags e structured data

---

## 📁 Estrutura do Projeto

```
portfolio/
├── assets/
│   └── css/
│       └── main.css              # Estilos globais e utilitários
├── components/                    # 16 componentes Vue
│   ├── AboutSection.vue          # Seção sobre
│   ├── BackToTop.vue             # Botão voltar ao topo
│   ├── ContactForm.vue           # Formulário de contato
│   ├── ContactInfo.vue           # Informações de contato
│   ├── ContactSection.vue        # Seção de contato
│   ├── FileExplorer.vue          # Explorador de arquivos
│   ├── Footer.vue                # Rodapé
│   ├── Header.vue                # Cabeçalho fixo
│   ├── HeroSection.vue           # Seção hero
│   ├── LanguageSelector.vue      # Seletor PT/EN
│   ├── MobileMenu.vue            # Menu mobile
│   ├── Navigation.vue            # Navegação desktop
│   ├── ProjectCard.vue           # Card de projeto
│   ├── ProjectsSection.vue       # Seção de projetos
│   ├── SkillsSection.vue         # Seção de habilidades
│   └── Terminal.vue              # Terminal Linux
├── composables/                   # 6 composables TypeScript
│   ├── useContactForm.ts         # Lógica do formulário
│   ├── useFileExplorer.ts        # Lógica do explorador
│   ├── useLanguage.ts            # Sistema de i18n
│   ├── useMobileMenu.ts          # Controle menu mobile
│   ├── useProjects.ts            # Dados dos projetos
│   └── useScroll.ts              # Gerenciamento de scroll
├── layouts/
│   └── default.vue               # Layout padrão
├── pages/
│   └── index.vue                 # Página principal
├── public/                        # Arquivos estáticos
├── app.vue                        # Arquivo raiz
├── nuxt.config.ts                # Configuração Nuxt
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
├── COMPONENTS.md                 # Documentação de componentes
└── package.json                  # Dependências
```

---

## 🎯 Seções do Portfolio

1. **Hero** - Apresentação com terminal interativo
2. **Sobre** - Biografia e estatísticas (experiência, projetos)
3. **Habilidades** - Explorador de arquivos com tecnologias
4. **Projetos** - Cards de projetos destacados
5. **Contato** - Formulário e informações de contato
6. **Footer** - Copyright e links

---

## 🎨 Customização

### Alterar Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0a1f1a',    // Cor principal
  secondary: '#1a4d3e',  // Cor secundária
  accent: '#2d8c65',     // Cor de destaque
  highlight: '#4cda9a',  // Cor de realce
  // ...
}
```

### Adicionar Projetos
Edite `composables/useProjects.ts`:
```typescript
{
  id: 'novo-projeto',
  titleKey: 'projects.project4.title',
  nameKey: 'projects.project4.name',
  descriptionKey: 'projects.project4.description',
  technologies: ['React', 'Next.js']
}
```

### Adicionar Traduções
Edite `composables/useLanguage.ts` nos objetos `translations.pt` e `translations.en`.

### Integrar Formulário de Contato
Edite `composables/useContactForm.ts` e integre com:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- API personalizada

---

## 🌐 Deploy

### GitHub Pages (Recomendado) ⭐
```bash
# 1. Criar repositório no GitHub
# 2. Seguir o guia completo em DEPLOY_GITHUB_PAGES.md

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-username/portfolio.git
git push -u origin main

# Deploy automático via GitHub Actions!
```

📖 **[Guia Completo de Deploy no GitHub Pages](DEPLOY_GITHUB_PAGES.md)**

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run generate
# Arraste a pasta .output/public para Netlify
```

### Cloudflare Pages
```bash
npm run build
# Configure build command: npm run build
# Configure publish directory: .output/public
```

### Deploy Manual (SSG)
```bash
npm run generate
# A pasta .output/public contém o site estático
```

---

## 📚 Documentação

- 📖 [Guia de Componentes](COMPONENTS.md) - Documentação completa de todos os componentes
- 🚀 [Deploy no GitHub Pages](DEPLOY_GITHUB_PAGES.md) - Guia passo a passo
- 🔧 [Nuxt 3 Docs](https://nuxt.com/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🐛 Troubleshooting

### Port já em uso
```bash
PORT=3001 npm run dev
```

### Limpar cache
```bash
rm -rf .nuxt node_modules package-lock.json
npm install
```

---

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📄 Licença

© 2025 Henrique Marino - Software Engineer. Todos os direitos reservados.

---

## 📧 Contato

- **Email**: henriquedotcpp@gmail.com
- **Telefone**: +55 (11) 91306-4646
- **Localização**: São Paulo, Brasil

---

⭐ **Desenvolvido com Nuxt 3 + TypeScript + Tailwind CSS**