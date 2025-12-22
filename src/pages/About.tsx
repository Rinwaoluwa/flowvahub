import Layout from '../components/layout/Layout'

export function About() {
    return (
        <Layout>
            <div className="py-20 lg:py-28">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1 className="headline-impact text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4">
                            ABOUT FLOWVA
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Your smart space for managing digital tools while earning rewards
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At Flowva, we believe that managing your digital tools shouldn't be a chore.
                                Our mission is to help productivity enthusiasts organize their apps, discover
                                new tools, and get rewarded for their engagement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Flowva is the central hub for all your digital tools and subscriptions. We help you:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    { icon: '📦', label: 'Organize', desc: 'Keep track of all the tools you use in one place' },
                                    { icon: '🔍', label: 'Discover', desc: 'Find new apps that can boost your productivity' },
                                    { icon: '🪙', label: 'Earn', desc: 'Get FlowCoins for using the platform and redeem rewards' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <span className="text-xl">{item.icon}</span>
                                        <span><strong>{item.label}</strong> - {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Flowva was born from a simple frustration: keeping track of dozens of digital
                                tools and subscriptions is hard. We created Flowva to solve this problem while
                                making the experience fun and rewarding.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, we're proud to serve thousands of users across 25+ countries, helping
                                them stay organized and productive.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🎯', title: 'Simplicity', desc: 'We believe in keeping things simple and intuitive' },
                                    { icon: '👥', title: 'Community', desc: 'We grow together with our users and partners' },
                                    { icon: '🚀', title: 'Innovation', desc: 'We constantly evolve to serve you better' }
                                ].map((value, i) => (
                                    <div key={i} className="text-center p-6 bg-gray-50 rounded-3xl">
                                        <span className="text-4xl block mb-3">{value.icon}</span>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
