import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react'; // Using lucide icons for a modern touch

const Contact = () => {
  // Our bulletproof path fixer for GitHub Pages deployment
  const getAsset = (path) => {
    if (!path) return '';
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\.\/|^\//g, '')}`;
  };

  return (
    <div className="flex flex-col h-full bg-[#fcfcfc]">
      <div id='window-header' className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-10">
        <WindowControls target="contact"/>
        <h2 className="text-gray-600 font-medium text-sm">Contact Card</h2>
      </div>

      <div className='flex-1 p-8 overflow-y-auto flex flex-col items-center justify-center min-h-[500px]'>
        
        <div className='max-w-sm w-full space-y-8 pb-10'>
          
          {/* Profile Section */}
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='relative'>
              <img 
                src={getAsset("images/ash1.jfif")} 
                alt="Ashish"
                className='w-28 h-28 rounded-full object-cover shadow-sm border-2 border-white ring-1 ring-gray-100'
              />
              {/* Modern subtle online indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
            </div>
            
            <div className="space-y-1">
              <h3 className='text-2xl font-semibold text-gray-900 tracking-tight'>Ashish</h3>
              <p className='text-gray-500 text-sm font-medium'>Visual Designer & UI/UX Expert</p>
            </div>
            
            <p className='text-gray-600 text-sm leading-relaxed px-4 pt-2'>
              Got an idea? A design gig or brand project? Or just want to talk design? I'm always open to new opportunities.
            </p>
          </div>

          {/* Primary Action - Email Button */}
          <a 
            href="mailto:hello@ashish.design"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3.5 px-4 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all shadow-sm"
          >
            <Mail size={18} />
            <span className="font-medium text-sm">hello@ashish.design</span>
          </a>

          {/* Minimal Divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Connect</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Social Links - Clean Grid Style */}
          <div className='grid grid-cols-2 gap-3'>
            {socials.map(({ id, link, icon, text }) => (
              <a 
                key={id} 
                href={link} 
                target='_blank' 
                rel="noopener noreferrer" 
                className='flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm active:scale-[0.98] transition-all group'
              >
                <div className='bg-gray-50 p-1.5 rounded-lg group-hover:bg-white transition-colors'>
                    <img 
                      src={getAsset(icon)} 
                      alt={text} 
                      className='w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity' 
                    />
                </div>
                <span className='text-gray-700 font-medium text-xs flex-1'>{text}</span>
                <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;