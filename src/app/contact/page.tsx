import ContactForm from '@/components/contact-form';
import Navbar from '@/components/navbar';

export default function ContactPage() {
  return (
    <main>
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      <ContactForm />
    </main>
  );
} 