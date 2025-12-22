const steps = [
    {
        number: '01',
        title: 'Sign up for free',
        description: 'Create your account in seconds and get 100 FlowCoins as a welcome bonus.'
    },
    {
        number: '02',
        title: 'Add your tools',
        description: 'Browse our catalog and add the tools you already use to your personal library.'
    },
    {
        number: '03',
        title: 'Earn rewards',
        description: 'Get FlowCoins for adding tools, writing reviews, and staying active on the platform.'
    }
]

export function HowItWorksSection() {
    return (
        <section className="py-24 lg:py-32 bg-gray-900">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                        HOW IT WORKS
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Get started in just three simple steps and start earning rewards today.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-brand text-white font-bold text-xl">
                                {step.number}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
