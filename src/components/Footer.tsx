const Footer = () => {
  return (
    <footer className="bg-navy-gradient py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">D</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-primary-foreground">Deepika</span>
                <span className="font-heading font-bold text-xl text-gold ml-1">Builtech</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              South India's trusted partner for Pre-Engineered Buildings and industrial infrastructure solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Process", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Services</h4>
            <div className="space-y-2">
              {["PEB Buildings", "Warehousing", "Cold Storage", "Mezzanine Floors", "EOT Cranes"].map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="block text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Deepika Builtech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
