'use client';
import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
            <NextSeo
                title="Contact Us | Test Task Website"
                description="Get in touch with us using our contact form."
            />
            <main className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Submit</h1>
                <Link href="/submit">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact Us</button>
                </Link>
            </main>
        </>
    );
}