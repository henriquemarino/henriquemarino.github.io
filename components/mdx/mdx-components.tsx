import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Callout } from './Callout'
import { MermaidDiagram } from './MermaidDiagram'

export const mdxComponents: MDXComponents = {
  a: ({ href = '', children, ...props }) => {
    const isInternal = href.startsWith('/')

    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  },
  Callout,
  Mermaid: MermaidDiagram,
}
