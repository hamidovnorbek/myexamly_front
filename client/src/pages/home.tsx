import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Navbar } from "@/components/navbar";
import { HeroCarousel } from "@/components/hero-carousel";
import { ContactModal } from "@/components/contact-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Rocket, 
  Users, 
  Shield, 
  Lightbulb, 
  Target, 
  Flag, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  Settings,
  CalendarCheck,
  ShieldQuestion,
  Edit,
  BarChart3,
  UserCog,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  const [contactModal, setContactModal] = useState<{ isOpen: boolean; type: 'demo' | 'started' }>({
    isOpen: false,
    type: 'demo'
  });

  const openContactModal = (type: 'demo' | 'started') => {
    setContactModal({ isOpen: true, type });
  };

  const closeContactModal = () => {
    setContactModal({ isOpen: false, type: 'demo' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section id="home" className="pt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent !leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => openContactModal('demo')}
                  className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 dark:text-white transition-colors font-semibold text-lg"
                  data-testid="button-request-demo"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t.hero.requestDemo}
                </Button>
                <Button
                  onClick={() => openContactModal('started')}
                  variant="outline"
                  className="px-8 py-4 border-border hover:bg-opacity-80 transition-colors font-semibold text-lg"
                  data-testid="button-get-started"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {t.hero.getStarted}
                </Button>
              </div>
            </div>

            <div className="animate-in slide-in-from-right duration-1000 delay-300">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <h2 className="text-3xl lg:text-4xl font-bold">{t.about.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.about.expertTeam}</h4>
                    <p className="text-sm text-muted-foreground">{t.about.expertTeamDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.about.securityFirst}</h4>
                    <p className="text-sm text-muted-foreground">{t.about.securityFirstDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.about.innovation}</h4>
                    <p className="text-sm text-muted-foreground">{t.about.innovationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-1000 delay-300">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Educational team collaboration" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Aim & Goals Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.mission.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.mission.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left duration-1000 delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.mission.aimTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.mission.aimDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right duration-1000 delay-400">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Flag className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.mission.goalsTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t.mission.goal1}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t.mission.goal2}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t.mission.goal3}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t.mission.goal4}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Exam Types */}
      <section id="exam-types" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.examTypes.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.examTypes.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.examTypes.bsbTitle}</h3>
                <p className="text-sm text-muted-foreground mb-4">Bob Summativ Baholash</p>
                <p className="text-muted-foreground">
                  {t.examTypes.bsbDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-400">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <CalendarCheck className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.examTypes.chsbTitle}</h3>
                <p className="text-sm text-muted-foreground mb-4">Chorak Summativ Baholash</p>
                <p className="text-muted-foreground">
                  {t.examTypes.chsbDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-600 relative overflow-hidden">
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4  ">
                <div className="absolute top-1/3 -left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse text-white px-3 py-1 rounded-full  text-xs font-semibold shadow-lg">{t.examTypes.soonStatus}</span>
              </div>
              
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 relative">
                  <Settings className="text-accent w-8 h-8 opacity-60" />
                  {/* Optional: Add a small coming soon indicator on the icon */}
                  
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-muted-foreground/80">
                  Moslashtirilgan shakllar
                </h3>
                
                <p className="text-sm text-muted-foreground/70 mb-4">Qulay baholash turlari</p>
                
                <p className="text-muted-foreground/60">
                  Muassasangizning o'ziga xos talablari, fanlari va baholash mezonlariga moslashuvchi individual imtihon formatlari.
                </p>
                
                {/* Optional: Add a subtle overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-orange-50/20 pointer-events-none"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.scheduling}</h4>
                <p className="text-sm text-muted-foreground">{t.features.schedulingDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <ShieldQuestion className="text-secondary w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.roleAccess}</h4>
                <p className="text-sm text-muted-foreground">{t.features.roleAccessDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Edit className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.examCreation}</h4>
                <p className="text-sm text-muted-foreground">{t.features.examCreationDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-400">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.taskManagement}</h4>
                <p className="text-sm text-muted-foreground">{t.features.taskManagementDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-500">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="text-secondary w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.analytics}</h4>
                <p className="text-sm text-muted-foreground">{t.features.analyticsDesc}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-600">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <UserCog className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t.features.userManagement}</h4>
                <p className="text-sm text-muted-foreground">{t.features.userManagementDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.testimonials.title}</h2>
            <p className="text-xl text-muted-foreground">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold">Farid Raxmonov</h5>
                    <p className="text-sm text-muted-foreground">Muhammad Al-Xorazmiy nomidagi tayanch IM OʻIBDOʻ</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">MyExamly bizning baholash jarayonimizni tubdan o‘zgartirdi. BSB va CHSB imtihonlarini boshqarish jarayoni endi juda qulay va xavfsiz tarzda amalga oshmoqda.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-400">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold">Prof. Michael Chen</h5>
                    <p className="text-sm text-muted-foreground">Department Head</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"The analytics and reporting features provide invaluable insights into student performance and learning outcomes."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold">Lisa Martinez</h5>
                    <p className="text-sm text-muted-foreground">IT Administrator</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"Implementation was smooth, and the security features give us complete confidence in our exam integrity."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6 animate-in slide-in-from-left duration-1000">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">{t.contact.email}</h5>
                  <p className="text-muted-foreground">admin@myexamly.uz</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">{t.contact.phone}</h5>
                  <p className="text-muted-foreground">+998 94 760 28 25</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">{t.contact.office}</h5>
                  <p className="text-muted-foreground">70 Uy, Labzak, Shayxontoxur, Toshkent shahri </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-in slide-in-from-right duration-1000 delay-300">
              <Button
                onClick={() => openContactModal('demo')}
                className="w-full px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-lg dark:text-white"
                data-testid="contact-request-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                {t.contact.requestDemo}
              </Button>
              <Button
                onClick={() => openContactModal('started')}
                variant="outline"
                className="w-full px-8 py-4 border-border hover:bg-opacity-80 transition-colors font-semibold text-lg"
                data-testid="contact-get-started"
              >
                <Rocket className="w-5 h-5 mr-2" />
                {t.contact.getStarted}
              </Button>
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">{t.contact.noCard}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-in fade-in duration-1000">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-primary">MyExamly</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {t.footer.description}
              </p>
            </div>
            
            <div className="animate-in fade-in duration-1000 delay-200">
              <h6 className="font-semibold mb-4">{t.footer.platform}</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">{t.footer.features}</a></li>
                <li><a href="#exam-types" className="hover:text-primary transition-colors">{t.examTypes.title}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.security}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.integrations}</a></li>
              </ul>
            </div>
            
            <div className="animate-in fade-in duration-1000 delay-400">
              <h6 className="font-semibold mb-4">{t.footer.support}</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.documentation}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.helpCenter}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.training}</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>
            
            <div className="animate-in fade-in duration-1000 delay-600">
              <h6 className="font-semibold mb-4">{t.footer.company}</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">{t.footer.about}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.blog}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.careers}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center animate-in fade-in duration-1000 delay-800">
            <p className="text-muted-foreground text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeContactModal}
        type={contactModal.type}
      />
    </div>
  );
}
