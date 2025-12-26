
import { useState } from 'react'
import { Accordion } from '../ui/Accordion'

const faqItems = [
    {
        question: 'What is Flowvahub?',
        answer: 'Flowvahub is your smart space for managing digital tools, apps, and subscriptions. It helps you organize everything in one place while earning rewards for your productivity.'
    },
    {
        question: 'Is my data secure with Flowva?',
        answer: 'Yes, we prioritize your data security with industry-standard encryption and privacy practices.'
    },
    {
        question: 'How does team collaboration work?',
        answer: 'Flowvahub allows you to create team spaces where you can share tools, manage subscriptions together, and track usage.'
    },
    {
        question: 'How do Smart Tool Recommendations work?',
        answer: 'We analyze your workflow and existing stack to suggest compatible and efficient tools that can improve your productivity.'
    },
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you have full control over your subscriptions and can cancel or modify your plan at any time.'
    },
    {
        question: 'Can I manage all my subscriptions in one place?',
        answer: 'Absolutely! Our dashboard gives you a centralized view of all your software subscriptions and renewal dates.'
    },
    {
        question: 'Do you offer mobile apps?',
        answer: 'Yes, Flowvahub is available on both iOS and Android, allowing you to manage your stack on the go.'
    },
    {
        question: 'What if I need help getting started?',
        answer: 'Our support team is available 24/7, and we offer comprehensive guides and onboarding resources.'
    },
    {
        question: 'Can I connect with other tech professionals on Flowva?',
        answer: 'Yes, join our community to share stacks, get advice, and connect with like-minded professionals.'
    },
    {
        question: 'What rewards can I earn with Flowva?',
        answer: 'You can earn points for daily logins, adding tools, and community participation, which can be redeemed for gift cards and discounts.'
    }
]

export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="flex justify-center my-20 px-[14px]">
            <div className="w-full md:max-w-[80%]">
                <h2 className="text-[56px] md:text-[64px] font-impact mb-10 text-center">
                    NEED ANSWERS?
                </h2>
                <div className="grid items-start grid-cols-1 gap-4 md:grid-cols-2 font-manrope">
                    <div className="flex flex-col gap-2">
                        {faqItems.slice(0, 5).map((item, i) => (
                            <Accordion key={i} item={item} index={i} activeIndex={activeIndex as number} toggleAccordion={toggleAccordion} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {faqItems.slice(5).map((item, i) => (
                            <Accordion key={i + 5} item={item} index={i + 5} activeIndex={activeIndex as number} toggleAccordion={toggleAccordion} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
