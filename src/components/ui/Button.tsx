import type { ButtonProps } from '@/types';

const baseStyle =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 text-base shadow-sm';

const variants = {
  primary: 'bg-sky-600 text-white hover:bg-sky-700 shadow-md shadow-sky-100',
  secondary:
    'bg-white text-sky-600 border border-slate-200 hover:border-sky-600 hover:bg-sky-50/50',
  dark: 'bg-slate-900 text-white hover:bg-black',
} as const;

export function Button({
  children,
  variant = 'primary',
  className = '',
  icon,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
