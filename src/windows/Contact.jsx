// import { WindowControls } from '#components';
// import { socials } from '#constants';
// import WindowWrapper from '#hoc/WindowWrapper'
// import React from 'react'

// const Contact = () => {
//   return (
//     <>
//     <div id='window-header'>
//         <WindowControls target="contacts"/>
//         <h2>Contact Me</h2>
//     </div>

//     <div className='bg-amber-100 p-8 space-y-5'>

//          <h3>Let's connect</h3>
//         <img 
//         src="/images/ash1.jfif" 
//         alt="Ashish"
//         className='w-30 rounded-full'
//          />
//          <p className="font-semibold">Got an idea? A design Gig or Brand? Or just wanna talk Design? I'm in</p>

//          <ul>
//             {socials.map(({ id, bg, link, icon, text }) => (
//                 <li key={id} style={{ backgroundColor : bg }}>
//                    <a 
//                    href={link}
//                    target='_blank'
//                    rel="noopener noreferrer"
//                    title={text}
//                    >
//                     <img src={icon} alt={text} className='size-5' />
//                     <p>{text}</p> 
//                    </a> 
//                 </li>
//             ))}
//          </ul>
//     </div>
//     </>
//   )
// }

// const ContactWindow = WindowWrapper(Contact, "contact");
// export default ContactWindow;

import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact"/>
        <h2>Contact</h2>
      </div>

      <div className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-10 overflow-hidden min-h-[500px]'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 -translate-y-20 translate-x-20'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30 translate-y-20 -translate-x-20'></div>
        
        <div className='relative z-10 max-w-md mx-auto space-y-6'>
          <div className='text-center space-y-4'>
            <div className='relative inline-block group'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md group-hover:blur-lg transition-all'></div>
              <img 
                src="/images/ash1.jfif" 
                alt="Ashish"
                className='relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            
            <div className='space-y-2'>
              <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Let's Connect
              </h3>
              <p className='text-gray-700 font-medium leading-relaxed px-4'>
                Got an idea? A design gig or brand project? Or just wanna talk design? 
                <span className='text-purple-600 font-semibold'> I'm all in! ✨</span>
              </p>
            </div>
          </div>

          <div className='space-y-3 pt-4'>
            {socials.map(({ id, bg, link, icon, text }) => (
              <a key={id} href={link} target='_blank' rel="noopener noreferrer" className='group block'>
                <div style={{ backgroundColor: bg }} className='flex items-center gap-4 p-4 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                  <div className='bg-white/30 backdrop-blur-sm p-2.5 rounded-xl group-hover:scale-110 transition-transform'>
                    <img src={icon} alt={text} className='w-6 h-6 object-contain' />
                  </div>
                  <span className='text-white font-semibold text-lg flex-1'>{text}</span>
                  <svg className='w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className='pt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Or drop me an email at{' '}
              <a href='mailto:hello@ashish.design' className='text-purple-600 font-semibold hover:underline'>
                hello@ashish.design
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;