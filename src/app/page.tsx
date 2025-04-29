'use client';
import {NextSeo} from "next-seo";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <NextSeo
            title="Home | Test Task Website"
            description="Welcome to our website with a contact form and YouTube video."
        />
        <main className="container mx-auto py-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="mb-4">This is a test task website with a YouTube video and contact form.</p>
                    <Link href="/contact">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact Us</button>
                    </Link>
                </div>
                <div>
                </div>
            </section>
        </main>
    </>
  );
}
