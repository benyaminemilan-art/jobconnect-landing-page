import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItemData } from '@/types';

export function FaqItem({ question, answer }: FaqItemData) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border border-slate-200/80 rounded-2xl overflow-hidden mb-4 bg-white transition-all duration-300 hover:shadow-sm">
      <button
        id={buttonId}
        type="button"
        className="w-full px-6 py-5 flex justify-between items-center text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-bold text-lg text-slate-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-sky-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-52 py-5 border-t border-slate-100 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        hidden={!isOpen}
      >
        <p className="text-slate-600 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}
