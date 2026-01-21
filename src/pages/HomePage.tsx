
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { NewsSection } from '../components/NewsSection';
import { CourseSection } from '../components/CourseSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text">
            <Header />
            <main>
                <Hero />
                <NewsSection />
                <CourseSection />
                <TestimonialsSection />
                <ComparisonSection />
                <GuaranteeSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
