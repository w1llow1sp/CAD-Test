import * as yup from 'yup';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'The name must be at least 2 characters long'),
    email: yup.string().email('Invalid email format').required('Email required'),
    message: yup.string().required('Message is required').min(10, 'The message must be at least 10 characters long'),
});
