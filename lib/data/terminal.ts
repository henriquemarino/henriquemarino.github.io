export type TerminalCommand = {
  command: string
  description: string
  route?: string
}

export const terminalCommands: TerminalCommand[] = [
  { command: 'help', description: 'Lista comandos disponíveis' },
  { command: 'whoami', description: 'Mostra o perfil técnico resumido' },
  { command: 'skills', description: 'Abre a área de habilidades', route: '/#skills' },
  { command: 'projects', description: 'Navega para projetos', route: '/projects' },
  { command: 'blog', description: 'Navega para artigos técnicos', route: '/blog' },
  { command: 'about', description: 'Navega para About + currículo', route: '/about' },
  { command: 'resume', description: 'Abre a seção de currículo dentro de About', route: '/about#resume' },
  { command: 'contact', description: 'Navega para contato', route: '/contact' },
  { command: 'theme dark', description: 'Ativa dark mode' },
  { command: 'theme light', description: 'Ativa light mode' },
  { command: 'clear', description: 'Limpa o terminal' },
]
