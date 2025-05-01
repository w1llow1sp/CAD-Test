'use client';

import Link from 'next/link';
import ContactUsButton from "./ContactUsButton";

export default function Header () {
    return (
        <header className="sticky top-0 bg-white shadow-md z-10">
            <nav className="container mx-auto  px-4 py-4 flex justify-between items-center">

                <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                    Some Company
                </Link>
                <ContactUsButton/>
            </nav>
        </header>
    )
}