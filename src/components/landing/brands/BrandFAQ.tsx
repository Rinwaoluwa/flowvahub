import { useState } from 'react';

const faqItems = [
    { question: "What is Flowva and who are your users?", answer: "Flowva is a space to manage your digital life..." },
    { question: "How does the subscription work?", answer: "We offer..." },
    { question: "Can I run multiple features at once?", answer: "Yes, you can..." },
    { question: "How are users rewarded?", answer: "Users earn rewards by..." },
    { question: "Can I target specific types of users?", answer: "Currently..." },
    { question: "What is optional premium support?", answer: "Our team can manage..." },
    { question: "What happens when Early-Bird pricing ends?", answer: "Pricing will..." },
    { question: "Can I switch plans anytime?", answer: "Yes, you can upgrade..." },
    { question: "Can I try before I buy?", answer: "We offer a 3-day free trial..." },
    { question: "What counts as a “featured campaign”?", answer: "Featured campaigns are..." },
];

export function BrandFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="flex justify-center my-20 px-[14px]">
            <div className="w-full md:max-w-[80%]">
                <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">NEED ANSWERS?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start font-manrope">
                    {faqItems.map((item, index) => (
                        <div key={index} className="ant-collapse ant-collapse-icon-position-start ant-collapse-borderless css-1d4w9r2">
                            <div className="ant-collapse-item" style={{ marginBottom: 8, background: 'rgb(249, 249, 249)', borderRadius: 12, border: 'none', padding: '4px 8px' }}>
                                <div
                                    className="ant-collapse-header flex items-center p-3 cursor-pointer select-none"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="ant-collapse-expand-icon mr-2">
                                        <span role="img" aria-label="caret-right" className={`anticon anticon-caret-right ant-collapse-arrow transition-transform duration-200 ${activeIndex === index ? 'rotate-90' : ''}`}>
                                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="ant-collapse-header-text">
                                        <span className="font-semibold text-[20px] md:text-[24px]">{item.question}</span>
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="ant-collapse-content ant-collapse-content-active">
                                        <div className="ant-collapse-content-box p-3">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
