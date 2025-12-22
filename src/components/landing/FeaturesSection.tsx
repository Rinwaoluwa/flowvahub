import { Layers, Compass, Gift } from 'lucide-react'

const features = [
    {
        icon: Layers,
        title: 'Organize Your Stack',
        description: 'Keep all your favorite tools in one place. Create collections, add notes, and never lose track again.',
        bgColor: 'bg-mint-green'
    },
    {
        icon: Compass,
        title: 'Discover New Tools',
        description: 'Explore curated tools recommended just for you. Find the perfect apps to boost your workflow.',
        bgColor: 'bg-soft-lavender'
    },
    {
        icon: Gift,
        title: 'Earn Rewards',
        description: 'Get FlowCoins for using the platform. Redeem them for discounts, perks, and exclusive offers.',
        bgColor: 'bg-soft-pink'
    }
]

export function FeaturesSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                        EVERYTHING YOU NEED
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A complete platform to organize, discover, and get rewarded for your digital productivity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`${feature.bgColor} rounded-4xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-6">
                                <feature.icon size={28} className="text-brand-purple" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
