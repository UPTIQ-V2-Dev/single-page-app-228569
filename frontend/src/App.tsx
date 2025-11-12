import { Header } from '@/components/layout/Header';
import { MainContent } from '@/components/layout/MainContent';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const App = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <MainContent>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ContactSection />
            </MainContent>
            <Footer />
        </div>
    );
};
