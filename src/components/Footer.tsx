import { Link } from 'wouter';
import { Mail } from 'lucide-react';
import { SiInstagram, SiPinterest, SiTiktok } from 'react-icons/si';
import { FOOTER_DATA, SITE_NAME } from '../../shared/data';

export default function Footer() {
  const socialIcons = {
    instagram: SiInstagram,
    pinterest: SiPinterest,
    tiktok: SiTiktok
  };

  return (
    <footer className="bg-[#2D2520] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">{SITE_NAME}</h3>
            <h4 className="font-semibold mb-3">{FOOTER_DATA.about.title}</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              {FOOTER_DATA.about.content}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{FOOTER_DATA.contact.title}</h4>
            <div className="flex items-center gap-2 text-white/80 mb-6">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${FOOTER_DATA.contact.email}`}
                className="hover:text-primary transition-colors"
                data-testid="link-email"
              >
                {FOOTER_DATA.contact.email}
              </a>
            </div>
            <div className="flex gap-4">
              {FOOTER_DATA.contact.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid={`link-social-${social.icon}`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              {FOOTER_DATA.links.map((link) => (
                <div key={link.name}>
                  <Link href={link.url} data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <a className="text-white/80 hover:text-white transition-colors block text-sm">
                      {link.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
