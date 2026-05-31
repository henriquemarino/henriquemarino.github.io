import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { mdxComponents } from '@/components/mdx/mdx-components'

// next-mdx-remote/rsc drops JSX expression attributes (e.g. chart={`...`}),
// so authoring `<Mermaid chart={`...`} />` leaves chart undefined at runtime.
// Instead authors write ```mermaid fenced blocks; this remark plugin rewrites
// them into <Mermaid chart="..." /> with chart as a string attribute (which is
// passed correctly). Runs in the remark phase, before rehype-pretty-code, so
// mermaid blocks are never syntax-highlighted as code.
function remarkMermaid() {
  return (tree: { children?: unknown[] }) => {
    const walk = (node: { children?: unknown[] }) => {
      if (!Array.isArray(node.children)) return

      node.children.forEach((child, index) => {
        const code = child as { type?: string; lang?: string; value?: string }

        if (code.type === 'code' && code.lang === 'mermaid') {
          node.children![index] = {
            type: 'mdxJsxFlowElement',
            name: 'Mermaid',
            attributes: [{ type: 'mdxJsxAttribute', name: 'chart', value: code.value ?? '' }],
            children: [],
          }
        } else {
          walk(child as { children?: unknown[] })
        }
      })
    }

    walk(tree)
  }
}

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMermaid],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: { light: 'github-light', dark: 'github-dark' },
              defaultColor: false,
              keepBackground: false,
            },
          ],
        ],
      },
    },
  })

  return content
}
