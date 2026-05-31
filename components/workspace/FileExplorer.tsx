'use client'

import { useMemo, useState } from 'react'
import { Folder, FolderOpen } from 'lucide-react'
import { levelLabels, skillFolders } from '@/lib/data/skills'
import { cn } from '@/lib/utils'

export function FileExplorer() {
  const [activeFolderId, setActiveFolderId] = useState(skillFolders[0].id)
  const [activeFileName, setActiveFileName] = useState(skillFolders[0].files[0].name)

  const activeFolder = useMemo(
    () => skillFolders.find((folder) => folder.id === activeFolderId) ?? skillFolders[0],
    [activeFolderId],
  )

  const activeFile = activeFolder.files.find((file) => file.name === activeFileName) ?? activeFolder.files[0]

  function selectFolder(folderId: string) {
    const nextFolder = skillFolders.find((folder) => folder.id === folderId) ?? skillFolders[0]
    setActiveFolderId(nextFolder.id)
    setActiveFileName(nextFolder.files[0].name)
  }

  return (
    <div className="explorer-window mx-auto max-w-5xl">
      <div className="explorer-header">
        <div className="mb-1.5 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-text sm:text-base">Skill Explorer</span>
          <span className="rounded bg-dark px-2 py-1 text-[11px] text-text-light">read-only workspace</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-light sm:text-sm">
          <Folder className="h-4 w-4 text-highlight" aria-hidden="true" />
          <span>/habilidades-tecnicas/{activeFolder.id}</span>
        </div>
      </div>

      <div className="explorer-body">
        <aside className="explorer-sidebar" aria-label="Pastas de habilidades">
          {skillFolders.map((folder) => {
            const Icon = activeFolderId === folder.id ? FolderOpen : folder.icon

            return (
              <button
                key={folder.id}
                type="button"
                className="folder-row"
                data-active={activeFolderId === folder.id}
                onClick={() => selectFolder(folder.id)}
              >
                <Icon className="mr-2 h-4 w-4 flex-shrink-0 text-highlight" aria-hidden="true" />
                <span className="truncate">{folder.label}</span>
              </button>
            )
          })}
        </aside>

        <div className="grid flex-1 gap-0 bg-dark md:grid-cols-[1fr_280px]">
          <section className="p-3 sm:p-4 md:p-5">
            <div className="mb-4 font-mono text-xs font-medium text-highlight sm:text-sm">{activeFolder.path}</div>
            <div className="grid grid-cols-2 gap-2 min-[480px]:grid-cols-3 sm:gap-3 lg:grid-cols-4">
              {activeFolder.files.map((file) => {
                const Icon = file.icon

                return (
                  <button
                    key={file.name}
                    type="button"
                    className="file-tile"
                    data-active={file.name === activeFile.name}
                    onClick={() => setActiveFileName(file.name)}
                  >
                    <Icon className="mb-2 h-7 w-7 text-highlight sm:h-8 sm:w-8" aria-hidden="true" />
                    <span className="text-xs leading-tight">{file.name}</span>
                    <span className="mt-1 font-mono text-[10px] text-text-light">{file.extension}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <aside className="border-t border-border bg-light p-4 md:border-l md:border-t-0" aria-label="Detalhe da habilidade">
            <div className="mb-4 flex items-center gap-3">
              <activeFile.icon className="h-8 w-8 text-highlight" aria-hidden="true" />
              <div>
                <h3 className="text-base font-semibold text-text">{activeFile.name}</h3>
                <p className="font-mono text-xs text-text-light">{activeFile.extension}</p>
              </div>
            </div>

            <span
              className={cn(
                'mb-4 inline-flex rounded border px-2 py-1 font-mono text-[11px]',
                activeFile.level === 'core' && 'border-highlight/60 text-highlight',
                activeFile.level === 'strong' && 'border-accent/60 text-accent',
                activeFile.level === 'working' && 'border-secondary/80 text-text-light',
              )}
            >
              {levelLabels[activeFile.level]}
            </span>

            <p className="mb-4 text-sm leading-relaxed text-text-light">{activeFile.description}</p>

            <div>
              <p className="mb-2 font-mono text-xs uppercase text-text">Uso prático</p>
              <ul className="space-y-2">
                {activeFile.usage.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-highlight" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
