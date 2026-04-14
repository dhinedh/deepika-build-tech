import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">D</span>
            </div>
            <div>
              <span className={`font-heading font-bold text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Deepika
              </span>
              <span className={`font-heading font-bold text-xl text-gold ml-1`}>
                Builtech
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+919600067611">
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card rounded-xl shadow-card-hover p-6 mb-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground font-medium hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+919600067611" className="block mt-4">
              <Button className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
