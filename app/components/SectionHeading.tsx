interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="border-l-4 border-amber-500 pl-5">
        <h2 className="text-3xl uppercase tracking-[0.05em] text-white sm:text-4xl">{title}</h2>
      </div>
      {description ? <p className="max-w-2xl text-base text-graphite-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;