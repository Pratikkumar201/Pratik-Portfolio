'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Expertise', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' }, // New section we will add
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl ${scrolled ? 'glass py-2 shadow-2xl' : 'bg-transparent py-4'
        } text-white`}
    >
      <div className="flex justify-between items-center px-8">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className="text-2xl font-bold tracking-tighter text-gradient">PRATIK.</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-accent-cyan text-black px-5 py-2 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

