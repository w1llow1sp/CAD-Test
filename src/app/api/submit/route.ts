import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Form submission:', data);
        const responseMessage = `Thank you for your interest, ${data.name}`;
        return NextResponse.json({ message: responseMessage }, { status: 200 });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ error: 'Failed to process form' }, { status: 500 });
    }
}