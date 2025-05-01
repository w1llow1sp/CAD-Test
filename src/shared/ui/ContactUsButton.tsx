import Link from "next/link";

export default function ContactUsButton() {
    return (
        <Link href="/contact">
            <button
                className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors text-sm md:px-4 md:py-1.5 md:text-base"
                aria-label="Go to contact form"
            >
                Contact Us
            </button>
        </Link>
    )
}