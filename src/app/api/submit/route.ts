import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();
        console.log('Form data:', { name, email, message });

        // Имитация задержки API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ message: `Thank you for your interest, ${name}` });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ error: 'Failed to process form' }, { status: 500 });
    }
}