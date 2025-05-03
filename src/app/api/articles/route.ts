import {NextResponse} from "next/server";
import {generateUUID} from "@/entities/lib/uid";

export async function GET (request:Request) {
    const {searchParams} = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const perPage = 6;
    const maxItems = 36;

    // Имитация задержки API
    await new Promise((resolve) => setTimeout(resolve, 3000));

// Рассчитываем индексы
    const startIndex = (page - 1) * perPage;
    const remainingItems = maxItems - startIndex;
    const itemsToReturn = Math.min(perPage, remainingItems);

    const articles = Array.from({ length: itemsToReturn }, (_, index) => ({
        id: generateUUID(),
        title:`Title `,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.',
    }));

    return NextResponse.json(articles);

}