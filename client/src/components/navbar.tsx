import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/components/theme-provider";
import { getLanguageOptions, Language } from "@/lib/i18n";
import { Globe, Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  const languageOptions = getLanguageOptions();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const currentLangLabel = languageOptions.find(opt => opt.code === language)?.label || 'ENG';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-45">
          <div className="flex items-center space-x-2">
            <div className="w-40 h-20 rounded-lg flex items-center justify-center">
              <img 
                src={theme === 'dark' ? "/darkmodelogo.png?v=1" : "/logo1.png?v=1"}
                alt="Logo"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  console.error('Logo failed to load:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Logo loaded successfully:', theme === 'dark' ? 'dark logo' : 'light logo')}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              {t.nav.features}
            </button>
            <button 
              onClick={() => scrollToSection('exam-types')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-exam-types"
            >
              {t.nav.examTypes}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="language-toggle"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLangLabel}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[80px] animate-in slide-in-from-top-2 duration-200">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setLanguage(option.code);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                      data-testid={`language-option-${option.code}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="theme-toggle"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left text-foreground hover:text-primary transition-colors">
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection('exam-types')} className="text-left text-foreground hover:text-primary transition-colors">
                {t.nav.examTypes}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
