import { useRouter } from 'next/navigation';
import {ContactFormData} from "./schema";


export const useSubmitContactForm = () => {
    const router = useRouter()

    const submitForm = async (
        data: ContactFormData,
        useRedirect:boolean,
        setSuccessMessage:(message:string | null) => void) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            console.log('Response status:', response.status);
            const result = await response.json(); // Читаем тело только один раз
            console.log('Response body:', result); // Логируем результат
            if (!response.ok) throw new Error('Failed to submit form');
            if (useRedirect) {
                console.log('Redirecting to /submit');
                router.push('/submit');
            } else {
                setSuccessMessage(result.message);
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    }

    return submitForm;
}