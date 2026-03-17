import logo from "@/assets/logo.png";
import { Phone, MessageCircle, Wrench, Settings, Package, Home, Shield, Clock, Star, Zap, ThumbsUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: Wrench, title: "Installation", desc: "Professional installation of appliances, fixtures, TV mounts, shelves, and more." },
  { icon: Settings, title: "Repair", desc: "Quick and reliable repairs for household items, plumbing fixes, and electrical work." },
  { icon: Package, title: "Assembly", desc: "Furniture assembly, flat-pack builds, and equipment setup done right." },
  { icon: Home, title: "Home Setup", desc: "Complete home setup for new moves, curtains, lighting, smart devices, and more." },
];

const trustPoints = [
  { icon: Shield, title: "Trusted Professionals", desc: "Verified, experienced technicians you can rely on." },
  { icon: Clock, title: "Fast Response", desc: "Same-day service available. We value your time." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We don't leave until the job is done right." },
  { icon: Award, title: "Fair & Transparent Pricing", desc: "No hidden fees. Know the cost before we start." },
];

const reviews = [
  { name: "Ayşe K.", text: "Kurulumix mounted our TV and assembled all our IKEA furniture in one visit. Incredibly fast and clean work!", rating: 5 },
  { name: "Mehmet D.", text: "I called in the morning and they were at my door by noon. Very professional and friendly team.", rating: 5 },
  { name: "Sarah L.", text: "Just moved into my new apartment and Kurulumix handled everything, curtains, shelves, light fixtures. Lifesaver!", rating: 5 },
  { name: "Emre T.", text: "They fixed a plumbing issue that two other services couldn't figure out. Highly recommend.", rating: 4 },
];

const faqs = [
  { q: "What areas do you serve?", a: "We currently serve Istanbul and surrounding areas. Contact us to check availability in your location." },
  { q: "How quickly can you come?", a: "We offer same-day service for most requests. Call or message us and we'll confirm a time slot right away." },
  { q: "Do I need to provide tools or materials?", a: "No, our technicians come fully equipped. If special parts are needed, we'll let you know in advance." },
  { q: "What if I'm not satisfied with the work?", a: "Your satisfaction is our priority. We'll revisit and fix any issues at no extra charge." },
  { q: "How do I pay?", a: "We accept cash and bank transfer. Payment is made after the job is completed to your satisfaction." },
];

const PHONE = "+90 555 123 4567";
const WHATSAPP_LINK = `https://wa.me/905551234567?text=${encodeURIComponent("Hi, I'd like to get a quote from Kurulumix.")}`;

const ContactButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
    <Button asChild size="lg" className="gold-gradient text-secondary font-semibold rounded-full px-8 hover:opacity-90 transition-opacity">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
      </a>
    </Button>
    <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary text-foreground hover:bg-primary/10">
      <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
        <Phone className="w-5 h-5 mr-2" /> {PHONE}
      </a>
    </Button>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            Kurulum<span className="text-gold-gradient">ix</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <Button asChild size="sm" className="gold-gradient text-secondary font-semibold rounded-full">
            <a href="#contact"><Zap className="w-4 h-4 mr-1" /> Contact</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20">
                <Zap className="w-4 h-4" /> Trusted Home Services
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight">
                Your Home,{" "}
                <span className="text-gold-gradient">Perfectly Set Up.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                From installations and repairs to furniture assembly and full home setup, Kurulumix delivers fast, professional, and reliable service right to your door.
              </p>
              <ContactButtons className="pt-2" />
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md xl:max-w-lg">
                <div className="absolute inset-0 gold-gradient opacity-10 blur-3xl rounded-full pointer-events-none" />
                <img
                  src={logo}
                  alt="Kurulumix logo"
                  className="relative w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full gold-gradient opacity-[0.07] blur-3xl pointer-events-none" />
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Kurulumix</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Built on Trust & Quality</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div key={t.title} className="text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">What Our Customers Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-primary fill-primary" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-semibold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-gradient rounded-3xl p-10 md:p-16 text-center text-secondary">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
            <p className="text-secondary/80 mb-8 max-w-xl mx-auto">Contact us now and let our team handle everything. Fast response, professional work, guaranteed satisfaction.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground font-semibold rounded-full px-8 hover:bg-secondary/90">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-secondary/30 text-secondary hover:bg-secondary/10">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-background">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Kurulumix</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Reach out via WhatsApp or phone. We typically respond within minutes.</p>
          <ContactButtons className="justify-center" />
          <p className="text-sm text-muted-foreground mt-6">Available 7 days a week, 08:00 - 20:00</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xl font-extrabold">Kurulum<span className="text-primary">ix</span></p>
              <p className="text-secondary-foreground/60 text-sm mt-1">Professional home installation & repair services.</p>
            </div>
            <nav className="flex gap-6 text-sm text-secondary-foreground/60">
              <a href="#services" className="hover:text-secondary-foreground transition-colors">Services</a>
              <a href="#why-us" className="hover:text-secondary-foreground transition-colors">Why Us</a>
              <a href="#reviews" className="hover:text-secondary-foreground transition-colors">Reviews</a>
              <a href="#faq" className="hover:text-secondary-foreground transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-secondary-foreground transition-colors">Contact</a>
            </nav>
          </div>
          <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm text-secondary-foreground/40">
            <p>© {new Date().getFullYear()} Kurulumix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;