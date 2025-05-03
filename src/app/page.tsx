'use client';
import {NextSeo} from "next-seo";
import styled from "styled-components";
import HeroSection from "@/app/mainPage/ui/HeroSection";
import ArticlesSection from "@/app/mainPage/ui/ArticlesSection";
import ContactSection from "@/app/mainPage/ui/ContactSection";


// StyledComponents
const MainContainer = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-height: calc(100vh - 120px);
    animation: subtleShift 10s ease-in-out infinite alternate;

    @keyframes subtleShift {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

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
        <MainContainer>
            <HeroSection/>
            <ArticlesSection/>
            <ContactSection/>
        </MainContainer>
    </>
  );
}
