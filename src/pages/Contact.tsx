import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate form submission
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (submitted) {
        return (
            <Layout>
                <div className="py-20 lg:py-28">
                    <div className="container">
                        <div className="max-w-md mx-auto text-center">
                            <div className="text-6xl mb-6">✉️</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                            <p className="text-gray-600 mb-8">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                            <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div className="py-20 lg:py-28">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                            CONTACT US
                        </h1>
                        <p className="text-lg text-gray-600">
                            Have a question or feedback? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form and our team will get back to you within 24-48 hours.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Mail, title: 'Email', value: 'support@flowva.com' },
                                    { icon: MapPin, title: 'Location', value: 'San Francisco, CA' },
                                    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567' }
                                ].map((item, i) => (
                                    <Card key={i} padding="md" className="flex items-center gap-4">
                                        <item.icon className="text-brand-purple" size={24} />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                                            <p className="text-sm text-gray-600">{item.value}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Card padding="lg">
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <Input
                                    label="Name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us more..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 transition-all resize-vertical"
                                        required
                                    />
                                </div>
                                <Button type="submit" fullWidth loading={loading}>
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
