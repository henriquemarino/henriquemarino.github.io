import type { ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, Info, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

type CalloutType = 'info' | 'warning' | 'success' | 'note'

const calloutIcons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
  note: Lightbulb,
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType
  title?: string
  children: ReactNode
}) {
  const Icon = calloutIcons[type]

  return (
    <aside
      className={cn(
        'not-prose my-6 rounded-lg border bg-light/70 p-4 text-sm text-text',
        type === 'warning' && 'border-yellow-500/40',
        type === 'success' && 'border-highlight/50',
        type === 'info' && 'border-secondary/60',
        type === 'note' && 'border-accent/50',
      )}
    >
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4 text-highlight" aria-hidden="true" />
        <span>{title ?? type}</span>
      </div>
      <div className="text-text-light">{children}</div>
    </aside>
  )
}
