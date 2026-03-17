import logo from "@/assets/logo.png";
import { Phone, Truck, Settings, Package, Home, Shield, Clock, Star, Zap, ThumbsUp, Award, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const truckPhotos = [
  "/trucks/truck-1.jpeg",
  "/trucks/truck-2.jpeg",
];

const services = [
  { icon: Truck, title: "Evden Eve Nakliyat", desc: "Eşyalarınızı güvenle yeni evinize taşıyoruz. Profesyonel ekip ve ekipmanlarla hasarsız taşımacılık." },
  { icon: Package, title: "Lojistik", desc: "Her türlü lojistik ihtiyacınız için güvenilir ve hızlı çözümler sunuyoruz." },
  { icon: Home, title: "Mobilya", desc: "Mobilya taşıma, kurulum ve demontaj hizmetleri. Özenli ve profesyonel iş garantisi." },
  { icon: Settings, title: "Montaj", desc: "Her türlü montaj ve kurulum işlerinizi uzman ekibimizle gerçekleştiriyoruz." },
];

const trustPoints = [
  { icon: Shield, title: "Güvenilir Ekip", desc: "Deneyimli ve güvenilir profesyonel ekibimizle hizmetinizdeyiz." },
  { icon: Clock, title: "Hızlı Hizmet", desc: "Aynı gün hizmet imkanı. Zamanınıza değer veriyoruz." },
  { icon: ThumbsUp, title: "Müşteri Memnuniyeti", desc: "İş tamamlanana kadar yanınızdayız. Memnuniyetiniz garantimizdir." },
  { icon: Award, title: "Şeffaf Fiyatlandırma", desc: "Gizli ücret yok. İşe başlamadan önce fiyatı bilirsiniz." },
];

const reviews = [
  { name: "Ayşe K.", text: "Kurulumix evden eve nakliyatımızı çok profesyonel ve hızlı bir şekilde gerçekleştirdi. Hiçbir eşyamıza zarar gelmedi!", rating: 5 },
  { name: "Mehmet D.", text: "Sabah aradım, öğlene kadar kapımdaydılar. Çok profesyonel ve güler yüzlü bir ekip.", rating: 5 },
  { name: "Fatma Y.", text: "Yeni evime taşınırken tüm mobilyaları söküp yeniden kurdular. Hayat kurtarıcı!", rating: 5 },
  { name: "Emre T.", text: "İki farklı firmayı denedim, hiçbiri yapamadı. Kurulumix ilk seferde çözdü. Kesinlikle tavsiye ederim.", rating: 4 },
];

const faqs = [
  { q: "Hangi bölgelere hizmet veriyorsunuz?", a: "Şu anda Sakarya ve çevresine hizmet veriyoruz. Bulunduğunuz bölge için bizi arayarak bilgi alabilirsiniz." },
  { q: "Ne kadar hızlı gelebilirsiniz?", a: "Çoğu talep için aynı gün hizmet sunuyoruz. Bizi arayın veya mesaj gönderin, hemen randevu oluşturalım." },
  { q: "Malzeme veya ekipman getirmem gerekiyor mu?", a: "Hayır, ekibimiz gerekli tüm ekipmanlarla gelir. Özel parça gerekirse önceden bilgi veririz." },
  { q: "İşten memnun kalmazsam ne olur?", a: "Memnuniyetiniz bizim önceliğimizdir. Herhangi bir sorunu ücretsiz olarak tekrar gelip çözeriz." },
];

const PHONE_SERKAN = "0549 474 54 54";
const PHONE_YASIN = "0539 485 37 26";
const WHATSAPP_SERKAN = `https://wa.me/905494745454?text=${encodeURIComponent("Merhaba, Kurulumix'ten fiyat bilgisi almak istiyorum.")}`;
const WHATSAPP_YASIN = `https://wa.me/905394853726?text=${encodeURIComponent("Merhaba, Kurulumix'ten fiyat bilgisi almak istiyorum.")}`;
const INSTAGRAM_URL = "https://www.instagram.com/kurulumix";

const ContactButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    <div className="flex flex-col sm:flex-row gap-3">
      <Button asChild size="lg" className="gold-gradient text-secondary font-semibold rounded-full px-6 hover:opacity-90 transition-opacity">
        <a href={WHATSAPP_SERKAN} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="w-5 h-5 mr-2" /> Serkan Pur
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-primary text-foreground hover:bg-primary/10">
        <a href={`tel:${PHONE_SERKAN.replace(/\s/g, "")}`}>
          <Phone className="w-5 h-5 mr-2" /> {PHONE_SERKAN}
        </a>
      </Button>
    </div>
    <div className="flex flex-col sm:flex-row gap-3">
      <Button asChild size="lg" className="gold-gradient text-secondary font-semibold rounded-full px-6 hover:opacity-90 transition-opacity">
        <a href={WHATSAPP_YASIN} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="w-5 h-5 mr-2" /> Yasin Bayram
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-primary text-foreground hover:bg-primary/10">
        <a href={`tel:${PHONE_YASIN.replace(/\s/g, "")}`}>
          <Phone className="w-5 h-5 mr-2" /> {PHONE_YASIN}
        </a>
      </Button>
    </div>
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
            <a href="#hizmetler" className="hover:text-foreground transition-colors">Hizmetler</a>
            <a href="#neden-biz" className="hover:text-foreground transition-colors">Neden Biz</a>
            <a href="#yorumlar" className="hover:text-foreground transition-colors">Yorumlar</a>
            <a href="#sss" className="hover:text-foreground transition-colors">SSS</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <Button asChild size="sm" className="gold-gradient text-secondary font-semibold rounded-full">
              <a href="#iletisim"><Zap className="w-4 h-4 mr-1" /> İletişim</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20">
                <Zap className="w-4 h-4" /> Güvenilir Nakliyat Hizmeti
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Eviniz,{" "}
                <span className="text-gold-gradient">Güvenle Taşınsın.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Evden eve nakliyat, lojistik, mobilya taşıma ve montaj hizmetlerinde Kurulumix ile hızlı, profesyonel ve güvenilir çözümler kapınızda.
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

      {/* Truck Gallery */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Araç Filomuz</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Güvenli Taşımacılık Araçlarımız</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {truckPhotos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border aspect-[10/7]">
                <img src={src} alt={`Kurulumix nakliyat aracı ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-8 md:py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Ne Yapıyoruz</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Hizmetlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section id="neden-biz" className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Neden Kurulumix</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Güven ve Kalite Üzerine Kurulu</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section id="yorumlar" className="py-8 md:py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Müşteri Yorumları</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Müşterilerimiz Ne Diyor?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background rounded-2xl p-5 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-primary fill-primary" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{r.text}"</p>
                <p className="font-semibold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-gradient rounded-3xl p-8 md:p-12 text-center text-secondary">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3">Hemen Başlayalım!</h2>
            <p className="text-secondary/80 mb-6 max-w-xl mx-auto">Şimdi bize ulaşın, ekibimiz her şeyi halletsin. Hızlı dönüş, profesyonel iş, garantili memnuniyet.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground font-semibold rounded-full px-8 hover:bg-secondary/90">
                <a href={WHATSAPP_SERKAN} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Serkan'a Yazın
                </a>
              </Button>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground font-semibold rounded-full px-8 hover:bg-secondary/90">
                <a href={WHATSAPP_YASIN} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Yasin'e Yazın
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-8 md:py-12 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">SSS</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Sık Sorulan Sorular</h2>
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

      {/* İletişim */}
      <section id="iletisim" className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Bize Ulaşın</p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">Kurulumix İletişim</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp veya telefon ile bize ulaşın. Genellikle dakikalar içinde dönüş yapıyoruz.</p>
          <ContactButtons className="justify-center items-center" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <Instagram className="w-5 h-5" /> @kurulumix
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Haftanın 7 günü, 08:00 - 20:00</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xl font-extrabold">Kurulum<span className="text-primary">ix</span></p>
              <p className="text-secondary-foreground/60 text-sm mt-1">Lojistik • Mobilya • Montaj • Evden Eve Nakliyat</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-secondary-foreground/60">
              <a href="#hizmetler" className="hover:text-secondary-foreground transition-colors">Hizmetler</a>
              <a href="#neden-biz" className="hover:text-secondary-foreground transition-colors">Neden Biz</a>
              <a href="#yorumlar" className="hover:text-secondary-foreground transition-colors">Yorumlar</a>
              <a href="#sss" className="hover:text-secondary-foreground transition-colors">SSS</a>
              <a href="#iletisim" className="hover:text-secondary-foreground transition-colors">İletişim</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors inline-flex items-center gap-1">
                <Instagram className="w-4 h-4" /> @kurulumix
              </a>
            </nav>
          </div>
          <div className="border-t border-secondary-foreground/10 mt-6 pt-6 text-center text-sm text-secondary-foreground/40">
            <p>© {new Date().getFullYear()} Kurulumix. Tüm hakları saklıdır.</p>
            <p className="mt-1">Serkan Pur: {PHONE_SERKAN} | Yasin Bayram: {PHONE_YASIN}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;