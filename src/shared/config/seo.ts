import { NextSeoProps } from 'next-seo';

export const contactSeoConfig: NextSeoProps = {
    title: 'Contact Us | Test Task Website',
    description: 'Get in touch with us using our contact form.',
    openGraph: {
        title: 'Contact Us | Test Task Website',
        description: 'Get in touch with us using our contact form.',
        url: 'https://yourwebsite.com/contact',
        type: 'website',
        images: [{ url: 'https://yourwebsite.com/og-image.jpg' }],
    },
    twitter: {
        cardType: 'summary_large_image',
        site: '@yourwebsite',
        handle: '@yourwebsite',
    },
};