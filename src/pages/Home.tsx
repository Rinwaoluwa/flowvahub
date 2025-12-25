import { useState } from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import AppIntegrationSection from '../components/landing/AppIntegrationSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import FAQSection from '../components/landing/FAQSection'
import CallToActionSection from '../components/landing/CallToActionSection'

// Brand Components
import { BrandTrustedBy } from '../components/landing/brands/BrandTrustedBy'
import { BrandFeatures } from '../components/landing/brands/BrandFeatures'
import { BrandWhySubscribe } from '../components/landing/brands/BrandWhySubscribe'
import { BrandGrowthPlans } from '../components/landing/brands/BrandGrowthPlans'
import { BrandHowItWorks } from '../components/landing/brands/BrandHowItWorks'
import { BrandSuccessStories } from '../components/landing/brands/BrandSuccessStories'
import { BrandFAQ } from '../components/landing/brands/BrandFAQ'
import { BrandCTA } from '../components/landing/brands/BrandCTA'

export function Home() {
    const [userType, setUserType] = useState<'users' | 'brands'>('users')

    return (
        <Layout>
            <HeroSection userType={userType} setUserType={setUserType} />

            {userType === 'users' ? (
                <>
                    <FeaturesSection />
                    <AppIntegrationSection />
                    <HowItWorksSection />
                    <TestimonialsSection />
                    <FAQSection />
                    <CallToActionSection />
                </>
            ) : (
                <>
                    <BrandTrustedBy />
                    <BrandFeatures />
                    <BrandWhySubscribe />
                    <BrandGrowthPlans />
                    <BrandHowItWorks />
                    <BrandSuccessStories />
                    <BrandFAQ />
                    <BrandCTA />
                </>
            )}
        </Layout>
    )
}

export default Home
