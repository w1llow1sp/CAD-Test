'use client'
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ContactFormData, contactSchema} from '../model/schema';
import {useState} from "react";
import {useSubmitContactForm} from "../model/submit";
import {
    ErrorMessage,
    FormContainer,
    FormField,
    Label,
    StyledForm,
    StyledInput, StyledSubmitButton, StyledTextArea,
    SuccessMessage,
    Title
} from "@/shared/ui/contact/ui/Styled";

interface ContactFormProps {
    title: string;
    useRedirect?: boolean;
}

export const ContactForm = ({ title, useRedirect = true }: ContactFormProps) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });
    const submitForm = useSubmitContactForm();

    const onSubmit = (data: ContactFormData) => {
        submitForm(data, useRedirect, setSuccessMessage);
    };

    return (
        <FormContainer>
            {successMessage ? (
                <StyledForm role="region" aria-live="polite">
                    <Title id="contact-form-title">Thank You</Title>
                    <SuccessMessage>{successMessage}</SuccessMessage>
                </StyledForm>
            ) : (
                <>
                    <Title id="contact-form-title">{title}</Title>
                    <StyledForm onSubmit={handleSubmit(onSubmit)} role="form" aria-labelledby="contact-form-title">
                        <FormField>
                            <Label htmlFor="name">Name</Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <StyledInput
                                        {...field}
                                        id="name"
                                        placeholder="Enter your name"
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
                                render={({ field }) => (
                                    <StyledInput
                                        {...field}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
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
                                render={({ field }) => (
                                    <StyledTextArea
                                        {...field}
                                        id="message"
                                        placeholder="Enter your message"
                                        rows={4}
                                        aria-invalid={!!errors.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                            {errors.message && <ErrorMessage role="alert">{errors.message.message}</ErrorMessage>}
                        </FormField>
                        <StyledSubmitButton
                            htmlType="submit"
                            block
                            loading={isSubmitting}
                            disabled={isSubmitting}
                            aria-label="Submit form"
                        >
                            Submit
                        </StyledSubmitButton>
                    </StyledForm>
                </>
            )}
        </FormContainer>
    );
}