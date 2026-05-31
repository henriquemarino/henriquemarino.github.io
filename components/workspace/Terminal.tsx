'use client'

import { FormEvent, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { terminalCommands } from '@/lib/data/terminal'
import { profile } from '@/lib/data/profile'
import { siteConfig } from '@/lib/site'
import { useTheme } from '@/components/theme/ThemeProvider'

type Line =
  | { kind: 'command'; value: string }
  | { kind: 'output'; value: string }
  | { kind: 'hint'; value: string }

type TerminalProps = {
  projectCount?: number
  postCount?: number
  compact?: boolean
}

const routeAliases: Record<string, string> = {
  '/': '/',
  home: '/',
  about: '/about',
  '/about': '/about',
  resume: '/about#resume',
  '/resume': '/about#resume',
  skills: '/#skills',
  '/skills': '/#skills',
  projects: '/projects',
  '/projects': '/projects',
  blog: '/blog',
  '/blog': '/blog',
  contact: '/contact',
  '/contact': '/contact',
}

export function Terminal({ projectCount = 0, postCount = 0, compact = false }: TerminalProps) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<Line[]>([
    { kind: 'command', value: 'whoami' },
    { kind: 'output', value: `${profile.name} - ${profile.role}` },
    { kind: 'command', value: 'skills --show' },
    { kind: 'output', value: 'Java, Spring Boot, Node.js, PostgreSQL, Redis, Docker, Microsserviços' },
    { kind: 'command', value: 'help' },
    { kind: 'hint', value: 'Digite help, projects, blog, about, resume, contact, theme light ou clear.' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const helpText = useMemo(
    () => terminalCommands.map((item) => `${item.command.padEnd(12)} ${item.description}`).join('\n'),
    [],
  )

  function navigateTo(path: string) {
    router.push(path)
  }

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim()
    const normalized = command.toLowerCase()
    const nextLines: Line[] = [{ kind: 'command', value: command }]

    if (!command) return

    if (normalized === 'clear') {
      setLines([])
      return
    }

    if (normalized === 'help' || normalized === 'ls') {
      nextLines.push({ kind: 'output', value: helpText })
    } else if (normalized === 'whoami') {
      nextLines.push({
        kind: 'output',
        value: `${profile.name}\n${profile.headline}\n${siteConfig.location}`,
      })
    } else if (normalized === 'skills' || normalized === 'skills --show') {
      nextLines.push({ kind: 'output', value: 'Abrindo /skills no workspace da Home...' })
      navigateTo('/#skills')
    } else if (normalized === 'projects') {
      nextLines.push({ kind: 'output', value: `${projectCount} projetos encontrados. Abrindo /projects...` })
      navigateTo('/projects')
    } else if (normalized === 'blog' || normalized === 'articles') {
      nextLines.push({ kind: 'output', value: `${postCount} artigos indexados. Abrindo /blog...` })
      navigateTo('/blog')
    } else if (normalized === 'about') {
      nextLines.push({ kind: 'output', value: 'Abrindo About com currículo incorporado...' })
      navigateTo('/about')
    } else if (normalized === 'resume') {
      nextLines.push({ kind: 'output', value: 'Currículo está em /about#resume, sem página separada.' })
      navigateTo('/about#resume')
    } else if (normalized === 'contact') {
      nextLines.push({ kind: 'output', value: `${siteConfig.email}\n${siteConfig.linkedin}` })
      navigateTo('/contact')
    } else if (normalized === 'theme dark') {
      setTheme('dark')
      nextLines.push({ kind: 'output', value: 'Dark mode ativado.' })
    } else if (normalized === 'theme light') {
      setTheme('light')
      nextLines.push({ kind: 'output', value: 'Light mode ativado.' })
    } else if (normalized.startsWith('open ') || normalized.startsWith('cd ')) {
      const target = normalized.replace(/^(open|cd)\s+/, '')
      const route = routeAliases[target]

      if (route) {
        nextLines.push({ kind: 'output', value: `Navegando para ${route}...` })
        navigateTo(route)
      } else {
        nextLines.push({ kind: 'output', value: `Path não encontrado: ${target}. Tente help.` })
      }
    } else {
      nextLines.push({ kind: 'output', value: `Comando não reconhecido: ${command}. Digite help.` })
    }

    setLines((current) => [...current, ...nextLines].slice(-18))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    runCommand(input)
    setInput('')
  }

  return (
    <section
      className="terminal-window mx-auto w-full max-w-3xl"
      onClick={() => inputRef.current?.focus()}
      aria-label="Terminal de navegação do portfólio"
    >
      <div className="terminal-header">
        <div className="terminal-buttons" aria-hidden="true">
          <span className="terminal-button close" />
          <span className="terminal-button minimize" />
          <span className="terminal-button maximize" />
        </div>
        <div className="terminal-title">henrique@portfolio:~</div>
      </div>

      <div className={compact ? 'terminal-body max-h-[340px] overflow-y-auto' : 'terminal-body min-h-[310px]'}>
        {lines.map((line, index) => {
          if (line.kind === 'command') {
            return (
              <div key={`${line.kind}-${index}`} className="mb-1">
                <span className="terminal-prompt">henrique@portfolio:~$</span>
                <span className="terminal-command ml-2">{line.value}</span>
              </div>
            )
          }

          return (
            <pre key={`${line.kind}-${index}`} className="terminal-output font-mono">
              {line.value}
            </pre>
          )
        })}

        <form onSubmit={handleSubmit} className="relative mt-2 flex items-center">
          <span className="terminal-prompt">henrique@portfolio:~$</span>
          <span className="ml-2 whitespace-pre font-mono text-text">{input}</span>
          <span className="typing-cursor" aria-hidden="true" />
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="absolute inset-0 h-full w-full cursor-text bg-transparent font-mono text-transparent caret-transparent outline-none"
            aria-label="Digite um comando de navegação"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </section>
  )
}
