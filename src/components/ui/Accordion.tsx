import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
    className?: string
}

export function Accordion({ items, className = '' }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`
            bg-white border rounded-2xl overflow-hidden transition-all duration-300
            ${openIndex === index
                            ? 'border-brand-purple/20 shadow-soft'
                            : 'border-gray-200 hover:border-gray-300'
                        }
          `}
                >
                    <button
                        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                        onClick={() => toggle(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-lg text-gray-900 pr-4">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={`
                flex-shrink-0 text-gray-400 transition-transform duration-300
                ${openIndex === index ? 'rotate-180 text-brand-purple' : ''}
              `}
                            size={20}
                        />
                    </button>
                    <div
                        className={`
              overflow-hidden transition-all duration-300
              ${openIndex === index ? 'max-h-96' : 'max-h-0'}
            `}
                    >
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion
