'use client';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--sectionColor, #f5f5f5);
  padding: 32px 16px;
`;

const MessageContainer = styled.div`
  text-align: center;
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #1a1a1a;
`;

export default function SubmitPage() {

    const name = 'User';

    return (
        <>
            <NextSeo
                title="Thank You | Test Task Website"
                description="Thank you for contacting us!"
                openGraph={{
                    title: 'Thank You | Test Task Website',
                    description: 'Thank you for contacting us!',
                    url: 'https://yourwebsite.com/submit',
                    type: 'website',
                    images: [{ url: 'https://yourwebsite.com/og-image.jpg' }],
                }}
                twitter={{
                    cardType: 'summary_large_image',
                    site: '@yourwebsite',
                    handle: '@yourwebsite',
                }}
            />
            <StyledMain>
                <MessageContainer role="region" aria-live="polite">
                    <Title id="thank-you-title">Thank You</Title>
                    <Message>Thank you for your interest, {name}</Message>
                </MessageContainer>
            </StyledMain>
        </>
    );
}