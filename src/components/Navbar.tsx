"use client";
import {useState} from "react";
import Link from "next/link";


export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-6 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {/*Small flower logo*/} 
                        <div className="flower-container scale-50 -ml-4">
                            <div className="petal w-8 h-8"></div>
                            <div className="petal w-8 h-8"></div>
                            <div className="petal w-8 h-8"></div>
                            <div className="petal w-8 h-8"></div>
                            <div className="petal w-8 h-8"></div>
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-flower-yellow rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold text-leaf-green"><a href={"/#home"}>Betül Güleç </a></span>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li><a href="/#home" className="text-gray-700 hover:text-leaf-green transition">Ana sayfa</a></li>
                        <li><a href="/#about" className="text-gray-700 hover:text-leaf-green transition">Hakkımda</a></li>
                        <li><a href="/#skills" className="text-gray-700 hover:text-leaf-green transition">Yetenekler</a></li>
                        <li><a href="/#projects" className="text-gray-700 hover:text-leaf-green transition">Projeler</a></li>
                        <li><a href="/#experience" className="text-gray-700 hover:text-leaf-green transition">Tercübeler</a></li>
                        <li><a href="/#services" className="text-gray-700 hover:text-leaf-green transition">Servisler</a></li>
                        <li><a href="/#certificates" className="text-gray-700 hover:text-leaf-green transition">Sertifikalar</a></li>
                        <li><a href="/#blog" className="text-gray-700 hover:text-leaf-green transition">Blog</a></li>
                        <li><a href="/#contact" className="text-gray-700 hover:text-leaf-green transition">İletişim</a></li>
                    </ul>
                    {/* Mobile menu button */}
                    <button className="md:hidden text-gray-700"
                            aria-label="Menüyü aç veya kapat"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                {/* Mobile menu */}
                <div id="mobileMenu" className="hidden md:hidden mt-4">
                    <ul className="space-y-2">
                        <li><a href="/#home" className="block py-2 text-gray-700 hover:text-leaf-green transition">Ana
                            sayfa</a>
                        </li>
                        <li><a href="/#about" className="block py-2 text-gray-700 hover:text-leaf-green transition">Hakkımda</a>
                        </li>
                        <li><a href="/#skills"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Yetenekler</a></li>
                        <li><a href="/#projects"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Projeler</a>
                        </li>
                        <li><a href="/#experience"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Tercübeler</a>
                        </li>
                        <li><a href="/#services"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Servisler</a>
                        </li>
                        <li><a href="/#certificates"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Sertifikalar</a>
                        </li>
                        <li><a href="/#blog"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">Blog</a>
                        </li>
                        <li><a href="/#contact"
                               className="block py-2 text-gray-700 hover:text-leaf-green transition">İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}