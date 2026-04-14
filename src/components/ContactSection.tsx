import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const locations = [
  { label: "Main Office", address: "SIDCO Industrial Estate, Ambattur, Chennai - 600098" },
  { label: "Unit I (Factory)", address: "Vaiyavur Post, Karur Village, Kanchipuram - 631561" },
  { label: "Unit II", address: "SIDCO Industrial Estate, Thirumullaivoyal, Ambattur - 600062" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`);
    window.location.href = `mailto:dbtechengg@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium text-sm tracking-wider uppercase">Get In Touch</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Start Your <span className="text-gradient-gold">Project</span> Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Get a free consultation and quote for your industrial construction project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold text-lg py-6 shadow-gold">
                <Send className="w-5 h-5 mr-2" />
                Send Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="font-heading font-bold text-foreground mb-1">Call Us</div>
                <a href="tel:+919600067611" className="text-muted-foreground hover:text-gold transition-colors text-lg">
                  +91 96000 67611
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="font-heading font-bold text-foreground mb-1">Email Us</div>
                <a href="mailto:dbtechengg@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                  dbtechengg@gmail.com
                </a>
                <br />
                <a href="mailto:infoadmin@deepikabuiltech.in" className="text-muted-foreground hover:text-gold transition-colors">
                  infoadmin@deepikabuiltech.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="font-heading font-bold text-foreground mb-1">Our Locations</div>
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <div key={loc.label}>
                      <span className="text-gold text-sm font-semibold">{loc.label}</span>
                      <p className="text-muted-foreground text-sm">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
