import Layout from '../components/layout/Layout'
import Accordion from '../components/ui/Accordion'

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
        answer: 'Yes! Flowva is completely free to use. You can create an account, organize your tools, discover new apps, and earn FlowCoins without paying anything. We may offer premium features in the future.'
    },
    {
        question: 'How do I add tools to my library?',
        answer: 'Simply browse our Discover page to find tools, or search for specific apps. Click "Add to Library" to save them to your personal collection. You can also add notes and mark favorites.'
    },
    {
        question: 'Can I use Flowva on mobile?',
        answer: 'Yes! Flowva is fully responsive and works great on mobile browsers. We also have native apps available on the App Store and Google Play for an optimized mobile experience.'
    },
    {
        question: 'How do I become a partner or affiliate?',
        answer: 'We welcome partnerships! Visit our Community section to learn about our affiliate and influencer programs. You can earn additional rewards by promoting Flowva to your audience.'
    },
    {
        question: 'How do I redeem my FlowCoins?',
        answer: 'Once you have accumulated enough FlowCoins, visit the Rewards section in your dashboard. There you will find available redemption options including discounts on partner tools, exclusive perks, and more.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Absolutely. We use industry-standard encryption and security practices to protect your data. We never share your personal information with third parties without your consent.'
    }
]

export function FAQ() {
    return (
        <Layout>
            <div className="py-20 lg:py-28">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                            FREQUENTLY ASKED QUESTIONS
                        </h1>
                        <p className="text-lg text-gray-600">
                            Find answers to common questions about Flowva
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion items={faqItems} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FAQ
