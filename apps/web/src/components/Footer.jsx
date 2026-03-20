import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">SE</span>
              </div>
              <span className="text-lg font-bold">Sistem ERP Terintegrasi</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solusi manajemen bisnis modern berbasis cloud untuk meningkatkan efisiensi operasional perusahaan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigasi</span>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fitur" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Fitur
                </Link>
              </li>
              <li>
                <Link to="/harga" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Harga
                </Link>
              </li>
              <li>
                <Link to="/demo-kontak" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Demo & Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Kontak</span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a 
                  href="mailto:vespahitam65@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  vespahitam65@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a 
                  href="tel:+6281239761063"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  +62 812-3976-1063
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Bandung, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</span>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Sistem ERP Terintegrasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;