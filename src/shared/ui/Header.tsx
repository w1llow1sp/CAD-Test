'use client';

import Link from 'next/link';

export default function Header () {
    return (
        <header className="sticky top-0 bg-white shadow-md z-10">
            <nav className="container mx-auto  px-4 py-4 flex justify-between items-center">

                <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                    Some Company
                </Link>


                <Link href="/contact">
                    <button
                        className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors text-sm md:px-4 md:py-1.5 md:text-base"
                        aria-label="Go to contact form"
                    >
                        Contact Us
                    </button>
                </Link>
            </nav>
        </header>
    )
}