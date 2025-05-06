'use client';
import {NextSeo} from 'next-seo';
import {contactSeoConfig} from "@/shared/config/seo";
import {StyledMain} from "@/shared/ui/contact/ui/Styled";
import {ContactForm} from "@/features/contact/ui/Form";


export default function ContactPage() {
    return (
        <>
            <NextSeo {...contactSeoConfig} />
            <StyledMain>
                <ContactForm title="Only CTA on the page" useRedirect={true}/>
            </StyledMain>
        </>
    )
}