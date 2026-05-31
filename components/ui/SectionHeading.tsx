export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      {eyebrow ? <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-highlight">{eyebrow}</p> : null}
      <h2 className="section-title text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
      {description ? <p className="mx-auto mt-6 max-w-2xl text-sm text-text-light sm:text-base">{description}</p> : null}
    </div>
  )
}
