import Layout from '../components/layout/Layout'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import AppIntegrationSection from '../components/landing/AppIntegrationSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import FAQSection from '../components/landing/FAQSection'

export function Home() {
    return (
        <Layout>
            <HeroSection />
            <FeaturesSection />
            <AppIntegrationSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <FAQSection />
        </Layout>
    )
}

export default Home
