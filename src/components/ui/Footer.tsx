"use client";

import { Logo } from "./Logo";
import { Globe, Share2, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-section-bg border-t border-border-custom pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-text-muted mb-8 leading-relaxed max-w-xs">
              An AI Operating System for Indian Schools and Colleges. Simplifying 
              institution management one module at a time.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageSquare].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border-custom flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-secondary mb-6">Product</h4>
            <ul className="space-y-4">
              {["Features", "Why AspireEdu", "Modules", "Beta Program"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6">Support</h4>
            <ul className="space-y-4">
              {["FAQ", "Contact Us", "Training", "Security"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-secondary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-muted">
                <Mail size={18} className="mt-1 shrink-0 text-primary" />
                <span>aspirecodeai@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <Phone size={18} className="mt-1 shrink-0 text-primary" />
                <span>+91 73396 07488</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin size={18} className="mt-1 shrink-0 text-primary" />
                <span>Rajapalayam, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Aspire Code AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
