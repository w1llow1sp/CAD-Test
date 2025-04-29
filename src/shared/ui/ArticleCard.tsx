'use client';

import { Card } from 'antd';

interface Article {
    id: number;
    title: string;
    description: string;
}

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <Card
            hoverable
            className="bg-white/80 backdrop-blur-md rounded-lg shadow-md transition-transform group-hover:scale-105"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors">
                {article.title}
            </h3>
            <p className="text-gray-600">{article.description}</p>
        </Card>
    );
}