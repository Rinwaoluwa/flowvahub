import Accordion from '../ui/Accordion'

const faqItems = [
    {
        question: 'What is Flowva?',
        answer: 'Flowva is your smart space for managing digital tools, apps, and subscriptions. It helps you organize everything in one place while earning rewards for your productivity through our FlowCoins system.'
    },
    {
        question: 'How do FlowCoins work?',
        answer: 'FlowCoins are our reward currency. You earn them by adding tools to your library, writing reviews, referring friends, and staying active on the platform. You can redeem FlowCoins for discounts, exclusive perks, and partner offers.'
    },
    {
        question: 'Is Flowva free to use?',
        answer: 'Yes! Flowva is completely free to use. You can create an account, organize your tools, discover new apps, and earn FlowCoins without paying anything.'
    },
    {
        question: 'How do I add tools to my library?',
        answer: 'Simply browse our Discover page to find tools, or search for specific apps. Click "Add to Library" to save them to your personal collection. You can also add notes and mark favorites.'
    },
    {
        question: 'Can I use Flowva on mobile?',
        answer: "Yes! Flowva is fully responsive and works great on mobile browsers. We also have native apps available on the App Store and Google Play for an optimized mobile experience."
    }
]

export function FAQSection() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                        GOT QUESTIONS?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to commonly asked questions about Flowva.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion items={faqItems} />
                </div>
            </div>
        </section>
    )
}

export default FAQSection
