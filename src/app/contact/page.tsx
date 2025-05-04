'use client';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {NextSeo} from 'next-seo';
import Link from "next/link";
import {Controller, useForm} from "react-hook-form";
import styled from "styled-components";
import {Button, Form, Input} from "antd";


// Схема валидации
const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'The name must be at least 2 characters long'),
    email: yup.string().email('Invalid email format').required('Email required'),
    message: yup.string().required('Message is required').min(10, 'The message must be at least 10 characters long'),
})

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Стили для контейнера формы
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--sectionColor, #f5f5f5);
`;

const StyledForm = styled.form`
    background: white;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
`;

const StyledMain = styled.main`
    margin: 0 auto;
    padding: 32px 16px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
    color: #1a1a1a;
`;

const FormField = styled.div`
    margin-bottom: 24px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #1a1a1a;
`;

const ErrorMessage = styled.span`
    color: #ff4d4f;
    font-size: 0.875rem;
    margin-top: 4px;
    display: block;
`;
export default function ContactPage() {
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<ContactFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: ContactFormData): Promise<void> => {
        try {
            console.log('Form data :', data)
        } catch (e) {

        }
    }
    return (
        <>
            <NextSeo
                title="Contact Us | Test Task Website"
                description="Get in touch with us using our contact form."
                openGraph={{
                    title: 'Contact Us | Test Task Website',
                    description: 'Get in touch with us using our contact form.',
                    url: 'https://yourwebsite.com/submit',
                    type: 'website',
                    images: [{url: 'https://yourwebsite.com/og-image.jpg'}],
                }}
            />
            <StyledMain>
                <FormContainer>
                    <StyledForm onSubmit={handleSubmit(onSubmit)} role="form" aria-labelledby="contact-form-title">
                        <Title id="contact-form-title">Only CTA on the page
                        </Title>
                        <FormField>
                            <Label htmlFor="name">Name</Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => (
                                    <Input
                                        {...field}
                                        id="name"
                                        placeholder="Value"
                                        aria-invalid={!!errors.name}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                            {errors.name && <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>}
                        </FormField>
                        <FormField>
                            <Label htmlFor="email">Email</Label>
                            <Controller
                                name="email"
                                control={control}
                                render={({field}) => (
                                    <Input
                                        {...field}
                                        id="email"
                                        type="email"
                                        placeholder="Value"
                                        aria-invalid={!!errors.email}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                            {errors.email && <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>}
                        </FormField>
                        <FormField>
                            <Label htmlFor="message">Message</Label>
                            <Controller
                                name="message"
                                control={control}
                                render={({field}) => (
                                    <Input.TextArea
                                        {...field}
                                        id="message"
                                        placeholder="Value"
                                        rows={4}
                                        aria-invalid={!!errors.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                            {errors.message && <ErrorMessage role="alert">{errors.message.message}</ErrorMessage>}
                        </FormField>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={isSubmitting}
                            disabled={isSubmitting}
                            aria-label="Отправить форму"
                        >
                            Submit
                        </Button>
                    </StyledForm>
                </FormContainer>
            </StyledMain>
        </>
    );
}