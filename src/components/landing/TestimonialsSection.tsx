import { Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'Product Designer',
        avatar: '👨‍💻',
        rating: 5,
        text: 'Flowva has completely transformed how I manage my design tools. The FlowCoins system is such a fun way to stay engaged!'
    },
    {
        name: 'Sarah Chen',
        role: 'Startup Founder',
        avatar: '👩‍💼',
        rating: 5,
        text: "Finally, a place to keep track of all my subscriptions! I've discovered so many useful tools I didn't know existed."
    },
    {
        name: 'Mike Williams',
        role: 'Freelance Developer',
        avatar: '👨‍🔧',
        rating: 5,
        text: 'The rewards system is genius. I actually earned enough FlowCoins to get a discount on one of my favorite tools!'
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                        WHAT PEOPLE SAY
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of productivity enthusiasts who love using Flowva.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl border border-gray-100 p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
