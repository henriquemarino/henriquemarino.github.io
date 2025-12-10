export const useLanguage = () => {
  const currentLanguage = useState<'pt' | 'en'>('language', () => 'pt')

  const translations = {
    pt: {
      'nav.about': 'Sobre',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',

      'hero.available': 'Disponível para novos projetos',
      'hero.subtitle': 'Especializado em criar soluções robustas, arquiteturas escaláveis e de alto impacto.',
      'hero.viewProjects': 'Ver Projetos',
      'hero.contact': 'Entrar em Contato',

      'about.title': 'Sobre Mim',
      'about.greeting': 'Olá, sou Henrique Marino',
      'about.paragraph1': 'Engenheiro de Software com mais de 3 anos de experiência na criação de sistemas robustos e escaláveis.',
      'about.paragraph2': 'Minha especialidade está em arquitetura de software, desenvolvimento de microservices, otimização de bancos de dados e implementação de soluções em cloud.',
      'about.experience': 'Experiência',
      'about.completed': 'Concluídos',

      'skills.title': 'Habilidades Técnicas',
      'skills.subtitle': 'Navegue pelo explorador de arquivos para conhecer minhas habilidades e tecnologias.',
      'skills.explorerTitle': 'Explorador de Habilidades',
      'skills.categories.languages': 'Linguagens',
      'skills.categories.database': 'Banco de Dados',
      'skills.categories.frameworks': 'Frameworks',
      'skills.categories.cloud': 'Cloud & DevOps',
      'skills.categories.tools': 'Ferramentas',

      'projects.title': 'Projetos Destacados',
      'projects.subtitle': 'Alguns dos projetos onde pude aplicar minhas habilidades em backend e arquitetura de software.',
      'projects.project1.title': 'API E-commerce',
      'projects.project1.name': 'Sistema de E-commerce',
      'projects.project1.description': 'API RESTful para plataforma de e-commerce com microsserviços, processamento de pagamentos e sistema de recomendação.',
      'projects.project2.title': 'Analytics Platform',
      'projects.project2.name': 'Plataforma de Analytics',
      'projects.project2.description': 'Sistema para coleta, processamento e visualização de dados em tempo real com alta escalabilidade.',
      'projects.project3.title': 'Authentication Service',
      'projects.project3.name': 'Serviço de Autenticação',
      'projects.project3.description': 'Microsserviço de autenticação e autorização com OAuth2, JWT e suporte a múltiplos provedores de identidade.',

      'contact.title': 'Entre em Contato',
      'contact.subtitle': 'Estou sempre aberto a discutir novos projetos, oportunidades de colaboração ou trocar ideias sobre tecnologia.',
      'contact.letsTalk': 'Vamos conversar!',
      'contact.description': 'Entre em contato através de um dos canais abaixo ou preencha o formulário. Respondo o mais rápido possível.',
      'contact.email': 'E-mail',
      'contact.phone': 'Telefone',
      'contact.location': 'Localização',
      'contact.form.name': 'Nome',
      'contact.form.namePlaceholder': 'Seu nome',
      'contact.form.email': 'E-mail',
      'contact.form.emailPlaceholder': 'Seu e-mail',
      'contact.form.message': 'Mensagem',
      'contact.form.messagePlaceholder': 'Sua mensagem',
      'contact.form.button': 'Enviar Mensagem',

      'footer.copyright': '© 2025 Henrique Marino - Software Engineer. Todos os direitos reservados.',
      'footer.privacy': 'Política de Privacidade',
      'footer.terms': 'Termos de Uso'
    },
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',

      'hero.available': 'Available for new projects',
      'hero.subtitle': 'Specialized in creating robust solutions, scalable architectures and high impact.',
      'hero.viewProjects': 'View Projects',
      'hero.contact': 'Get in Touch',

      'about.title': 'About Me',
      'about.greeting': 'Hello, I\'m Henrique Marino',
      'about.paragraph1': 'Software Engineer with over 3 years of experience in creating robust and scalable systems.',
      'about.paragraph2': 'My specialty lies in software architecture, microservices development, database optimization and cloud solutions implementation.',
      'about.experience': 'Experience',
      'about.completed': 'Completed',

      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Browse the file explorer to learn about my skills and technologies.',
      'skills.explorerTitle': 'Skills Explorer',
      'skills.categories.languages': 'Languages',
      'skills.categories.database': 'Database',
      'skills.categories.frameworks': 'Frameworks',
      'skills.categories.cloud': 'Cloud & DevOps',
      'skills.categories.tools': 'Tools',

      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of the projects where I could apply my backend and software architecture skills.',
      'projects.project1.title': 'E-commerce API',
      'projects.project1.name': 'E-commerce System',
      'projects.project1.description': 'RESTful API for e-commerce platform with microservices, payment processing and recommendation system.',
      'projects.project2.title': 'Analytics Platform',
      'projects.project2.name': 'Analytics Platform',
      'projects.project2.description': 'System for real-time data collection, processing and visualization with high scalability.',
      'projects.project3.title': 'Authentication Service',
      'projects.project3.name': 'Authentication Service',
      'projects.project3.description': 'Authentication and authorization microservice with OAuth2, JWT and support for multiple identity providers.',

      'contact.title': 'Get in Touch',
      'contact.subtitle': 'I\'m always open to discussing new projects, collaboration opportunities or exchanging ideas about technology.',
      'contact.letsTalk': 'Let\'s talk!',
      'contact.description': 'Get in touch through one of the channels below or fill out the form. I respond as quickly as possible.',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.form.name': 'Name',
      'contact.form.namePlaceholder': 'Your name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'Your email',
      'contact.form.message': 'Message',
      'contact.form.messagePlaceholder': 'Your message',
      'contact.form.button': 'Send Message',

      'footer.copyright': '© 2025 Henrique Marino - Software Engineer. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use'
    }
  }

  const t = (key: string): string => {
    return translations[currentLanguage.value][key] || key
  }

  const setLanguage = (lang: 'pt' | 'en') => {
    currentLanguage.value = lang
    if (process.client) {
      localStorage.setItem('preferred-language', lang)
      document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br'
    }
  }

  // Inicializar idioma do localStorage
  if (process.client) {
    const savedLanguage = localStorage.getItem('preferred-language') as 'pt' | 'en' | null
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      currentLanguage.value = savedLanguage
    }
  }

  return {
    currentLanguage,
    t,
    setLanguage
  }
}