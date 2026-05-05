import React, { useState, useEffect } from "react";

// Icons matching the Digital Experience UI style
const Icons = {
  ArrowUpRight: () => (
    <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Diamond: () => <span className="text-[10px]"></span>,
  Social: {
    FB: () => <svg className="w-5 h-5 fill-[#e2ff00]" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    LI: () => <svg className="w-5 h-5 fill-[#e2ff00]" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    YT: () => <svg className="w-5 h-5 fill-[#e2ff00]" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/></svg>
  }
};

export default function DigitalExperienceNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const menuSections = {
    DIGITAL_EXP: [
      { id: 1, label: "HOME" },
      { id: 2, label: "ABOUT THE ECOSYSTEM" },
      { id: 3, label: "CHENNAI HQ" },
      { id: 4, label: "COIMBATORE HUB" },
      { id: 5, label: "FRAMEWORKS" },
      { id: 6, label: "ENTERPRISE CAPABILITIES" },
      { id: 7, label: "CONTACT US" },
    ],
    SERVICES_LEFT: [
      { id: 1, label: "ENTERPRISE OPERATING MODEL" },
      { id: 2, label: "DIGITAL EXPERIENCE OS" },
      { id: 3, label: "STRATEGY ARCHITECTURE" },
      { id: 4, label: "PROCESS DECOMPOSITION" },
      { id: 5, label: "AI WORKFLOW AUTOMATION" },
      { id: 6, label: "ANALYTICS & ATTRIBUTION" },
    ],
    SERVICES_RIGHT: [
      { id: 7, label: "OPERATIONS OPTIMIZATION" },
      { id: 8, label: "RACI MATRIX MAPPING" },
      { id: 9, label: "VALUE STREAM DESIGN" },
      { id: 10, label: "ENTERPRISE ARCHITECTURE" },
      { id: 11, label: "PARTNER INTEGRATION" },
      { id: 12, label: "TEAM CAPACITY TRAINING" },
    ]
  };

  return (
    <>
      {/* --- HEADER BAR --- */}
      <header className="fixed top-0 left-0 w-full z-[100] h-16 md:h-20 flex items-center justify-between px-5 md:px-10 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#e2ff00] rounded-sm rotate-45 mr-1 md:mr-2" /> 
          <span className="text-white font-bold tracking-[0.15em] text-[10px] md:text-sm uppercase whitespace-nowrap">Digital Experience</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-white uppercase text-[11px] font-bold tracking-[0.2em]">
          <Icons.Diamond /> <span>OPERATING SYSTEM</span>
        </div>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="border border-[#e2ff00] rounded-full px-5 md:px-8 py-1.5 md:py-2.5 flex items-center gap-3 md:gap-4 group hover:bg-[#e2ff00] transition-all"
        >
          <span className="text-white group-hover:text-black font-bold text-[10px] md:text-[12px] tracking-[0.15em]">MENU</span>
          <div className="flex flex-col gap-1 md:gap-1.5">
            <div className="w-4 md:w-6 h-[2px] bg-[#e2ff00] group-hover:bg-black" />
            <div className="w-4 md:w-6 h-[2px] bg-[#e2ff00] group-hover:bg-black" />
          </div>
        </button>
      </header>

      {/* --- FULLSCREEN MENU OVERLAY --- */}
      <div className={`fixed inset-0 bg-black z-[200] transition-transform duration-700 ease-in-out px-5 md:px-10 py-8 md:py-10 overflow-y-auto ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        
        {/* Menu Header */}
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 md:w-8 md:h-8 bg-[#e2ff00] rounded-sm rotate-45 mr-1 md:mr-2" />
             <span className="text-white font-bold tracking-[0.15em] text-[10px] md:text-sm uppercase">DIGITAL EXPERIENCE</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="border border-[#e2ff00] rounded-full px-5 md:px-8 py-1.5 md:py-2.5 flex items-center gap-3 md:gap-4 group hover:bg-[#e2ff00] transition-all"
          >
            <span className="text-white group-hover:text-black font-bold text-[10px] md:text-[12px] tracking-[0.15em]">CLOSE</span>
            <div className="w-4 md:w-6 h-[2px] bg-[#e2ff00] group-hover:bg-black" />
          </button>
        </div>

        {/* Menu Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Info */}
          <div className="col-span-1 lg:col-span-3 space-y-8 md:space-y-12 order-2 lg:order-1 border-t lg:border-t-0 border-white/10 pt-10 lg:pt-0">
            <div>
              <h4 className="text-[#e2ff00] font-bold text-[11px] md:text-[13px] tracking-widest mb-4 uppercase">Architecture Team</h4>
              <div className="text-gray-400 text-xs md:text-sm space-y-2 font-medium">
                <p>+91 44 8888 2222</p>
                <p className="break-all">strategy@digitalexperience.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-[#e2ff00] font-bold text-[11px] md:text-[13px] tracking-widest mb-4 uppercase">Support Desk</h4>
              <div className="text-gray-400 text-xs md:text-sm space-y-2 font-medium">
                <p>+91 422 999 4444</p>
                <p className="break-all">support@digitalexperience.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Icons.Social.FB />
              <Icons.Social.LI />
              <Icons.Social.YT />
            </div>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="col-span-1 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 order-1 lg:order-2">
            
            {/* DIGITAL EXPERIENCE section */}
            <div className="space-y-1">
              <h4 className="text-gray-600 font-bold text-[10px] md:text-[11px] tracking-widest mb-4 md:mb-6 border-b border-gray-800 pb-2">ECOSYSTEM</h4>
              {menuSections.DIGITAL_EXP.map(item => <MenuItem key={item.id} {...item} />)}
            </div>

            {/* SERVICES section 1 */}
            <div className="space-y-1">
              <h4 className="text-gray-600 font-bold text-[10px] md:text-[11px] tracking-widest mb-4 md:mb-6 border-b border-gray-800 pb-2 uppercase">OPERATIONS</h4>
              {menuSections.SERVICES_LEFT.map(item => <MenuItem key={item.id} {...item} />)}
            </div>

            {/* SERVICES section 2 */}
            <div className="space-y-1 sm:pt-6 md:pt-10"> 
              {menuSections.SERVICES_RIGHT.map(item => <MenuItem key={item.id} {...item} />)}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function MenuItem({ id, label }) {
  return (
    <div className="group flex items-center justify-between py-2.5 md:py-3 border-b border-gray-900 cursor-pointer hover:border-[#e2ff00] transition-colors">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-gray-600 text-[9px] md:text-[10px] font-bold group-hover:text-[#e2ff00]">{id}</span>
        <span className="text-gray-300 text-[11px] md:text-[13px] font-bold tracking-widest group-hover:text-white transition-colors uppercase">{label}</span>
      </div>
      <div className="scale-75 md:scale-100">
        <Icons.ArrowUpRight />
      </div>
    </div>
  );
}