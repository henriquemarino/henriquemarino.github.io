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
  // Wrap the client component in a server component so next-mdx-remote/rsc
  // serializes the `chart` prop across the RSC boundary. Mapping the client
  // component directly drops the prop, leaving chart undefined at runtime.
  Mermaid: ({ chart }: { chart: string }) => <MermaidDiagram chart={chart} />,
}
