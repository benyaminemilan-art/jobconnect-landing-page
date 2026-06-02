import type { SectionHeadingProps } from '@/types';

export function SectionHeading({ title, subtitle, isDark = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-4.5xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
