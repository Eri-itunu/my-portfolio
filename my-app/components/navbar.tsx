'use client'

import { useRouter } from 'next/router';
import Link from "next/link"
import { useEffect, useState } from "react";
import '../app/globals.css'

export default function Navbar (){


    const [isVisible, setIsVisible] = useState(true); // Track visibility
    const [isAtTop, setIsAtTop] = useState(true); // Track if at top
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsAtTop(scrollY === 0);
        if (scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleMouseEnter = () => {
      setIsVisible(true); // Show navbar on hover
    };
  
    const handleMouseLeave = () => {
      if (!isAtTop) {
        setIsVisible(false); // Hide navbar when not at the top and no hover
      }
    };

  
    return(
        <div className=" p-4 sticky items-center z-50  top-0  ">
            <div 
                className={`container bg-neutral-800/60 rounded-lg px-4 mx-auto items-center flex gap-5 py-3 justify-between max-w-fit navbar ${isVisible ? "opacity-1" : "opacity-0"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link 
                  href="/"   
                  className={`text-white }`}>
                  Home
                </Link>
                
                <Link href="/blog" className="text-white">Blog</Link>
                <div className="h-[20px] border-l border-white"></div>
                <Link href="/about" className="text-white">About </Link>
               
            </div>
        </div>
    )
}