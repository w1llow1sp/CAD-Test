'use client';
import {NextSeo} from "next-seo";
import Link from "next/link";
import HeroSection from "@/app/mainPage/ui/HeroSection";

export default function Home() {
  return (
    <>
        <NextSeo
            title="Home | Test Task Website"
            description="Welcome to our website with a contact form and YouTube video."
            openGraph={{
                title: 'Test Task Website',
                description: 'Welcome to our website with a contact form and YouTube video',
                url: 'https://your-site.com',
                images: [{ url: '/og-image.jpg' }],
            }}
        />
        <main className="container mx-auto py-8 shadow-lg">
            <HeroSection/>
        </main>
    </>
  );
}
