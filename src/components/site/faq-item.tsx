import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export function FAQItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-300/70 py-5">
      <button onClick={onClick} className="flex w-full items-center justify-between text-left">
        <span className="text-body font-medium text-slate-900">{question}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-slate-500 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && <p className="text-body mt-3 text-slate-700">{answer}</p>}
    </div>
  );
}
