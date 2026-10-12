"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMobileDrawer } from "./useMobileDrawer";

interface NavItem {
    name: string;
    link: string;
}

interface Props {
    navItems: NavItem[];
}

const SecondNavBar: React.FC<Props> = ({ navItems }) => {
    const { isOpen, setIsOpen, menuRef, toggleRef } = useMobileDrawer();
    const pathname = usePathname();

    return (
        <header className="bg-white text-orange-600 fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center gap-3 px-4 sm:px-6 py-2">
                {/* Logo Section */}
                <div className="flex items-center space-x-3 min-w-0">
                    <Link href="/" passHref className="flex-shrink-0">
                        <Image
                            src="/SBPL.png"
                            alt="SBPL Logo"
                            width={60}
                            height={52}
                            className="rounded-full z-10"
                            priority={true}
                        />
                    </Link>
                    <Link href={'/'} className="py-3 text-sm md:text-sm font-semibold text-orange-600 tracking-wide">
                        Sudhanand Business Solutions
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav aria-label="Main" className="hidden lg:flex space-x-4">
                    {navItems.map((item, index) => {
                        const active = pathname === item.link;
                        return (
                            <Link href={item.link} key={index} passHref aria-current={active ? "page" : undefined} className="px-2 py-3">
                                <p className={`text-sm font-medium hover:text-orange-800 hover:b-order-b-2 hover:border-orange-600 transition-colors duration-300 ${active ? "text-orange-800 border-b-2 border-orange-800" : "text-orange-600"}`}>
                                    {item.name}
                                </p>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex-shrink-0">
                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 -m-2.5 text-orange-600 hover:text-orange-800"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="secondary-mobile-menu"
                    >
                        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (drops down right under the header) */}
            <div
                id="secondary-mobile-menu"
                ref={menuRef}
                className={`absolute top-full left-0 w-full bg-white shadow-md px-6 pb-6 pt-2 transition-all duration-300 ease-in-out z-50 lg:hidden ${isOpen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <nav aria-label="Mobile" className="flex flex-col space-y-1 text-center">
                    {navItems.map((item, index) => {
                        const active = pathname === item.link;
                        return (
                            <Link
                                href={item.link}
                                key={index}
                                aria-current={active ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 text-lg font-medium hover:text-orange-800 transition-colors duration-300 ${active ? "text-orange-800" : "text-orange-600"}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default SecondNavBar;
