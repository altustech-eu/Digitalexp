import React from 'react';
import { Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function DigitalExperienceFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white font-sans selection:bg-[#e2ff00] selection:text-black pt-24 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: Massive Headline & CTA (span 5) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-8 h-8 bg-[#e2ff00] rounded-sm rotate-45 mr-1"></div>
               <span className="text-white font-black tracking-[0.2em] text-sm uppercase">DIGITAL EXPERIENCE</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter max-w-sm">
              Build your <br /> enterprise <br /> engine <br /> with us.
            </h2>
            <div className="pt-6">
              <a 
                href="https://calendly.com/digitaldefence-eu/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#e2ff00] text-black px-10 py-4 rounded-full font-black text-[14px] tracking-widest uppercase inline-flex items-center gap-4 hover:shadow-[0_0_30px_rgba(226,255,0,0.4)] transition-all group cursor-pointer"
              >
                Start Journey
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Menu (span 2) */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[#e2ff00] font-black text-[13px] tracking-[0.2em] uppercase">Ecosystem</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold">
              {['Home', 'Frameworks', 'About the Ecosystem', 'Chennai HQ', 'Coimbatore Hub', 'Enterprise Capabilities', 'Contact Us'].map(link => (
                <li key={link} className="hover:text-white transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (span 3) */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[#e2ff00] font-black text-[13px] tracking-[0.2em] uppercase">Contact Us</h4>
            
            <div className="space-y-4">
              <p className="text-[#e2ff00] font-black text-[13px] uppercase">Architecture Team</p>
              <div className="text-gray-400 text-sm font-bold space-y-2">
                <p>+91 44 8888 2222 (Chennai)</p>
                <p className="hover:text-white transition-colors cursor-pointer">digitalexperience.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#e2ff00] font-black text-[13px] uppercase">Operations Center</p>
              <div className="text-gray-400 text-sm font-bold space-y-2">
                <p>+91 422 999 4444 (Coimbatore)</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Quote (span 2) */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[#e2ff00] font-black text-[13px] tracking-[0.2em] uppercase">Social</h4>
            <div className="space-y-4 text-gray-400 text-sm font-bold">
              <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-[#e2ff00]" /> Facebook
              </div>
              <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-[#e2ff00]" /> LinkedIn
              </div>
              <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Youtube className="w-4 h-4 text-[#e2ff00]" /> Youtube
              </div>
            </div>

            <div className="pt-6">
               <p className="text-white font-black text-[13px] uppercase tracking-widest border-b border-gray-800 pb-2 hover:text-[#e2ff00] cursor-pointer transition-colors w-fit">
                 Get a Blueprint
               </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[11px] font-bold">
            Copyright © Digital Experience {currentYear}. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white font-black text-[11px] uppercase tracking-widest">
            <span className="hover:text-[#e2ff00] cursor-pointer">Strategy Support</span>
            <span className="hover:text-[#e2ff00] cursor-pointer">24/7 Engine Access</span>
            <span className="text-gray-500 hover:text-[#e2ff00] cursor-pointer">Terms & Conditions</span>
            <span className="text-gray-500 hover:text-[#e2ff00] cursor-pointer">Privacy Policy</span>
          </div>

          <div className="text-gray-600 text-[11px] font-bold">
            Ecosystem Operations 2025—{currentYear}.
          </div>
        </div>
      </div>
    </footer>
  );
}