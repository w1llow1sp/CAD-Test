'use client';

import { motion } from 'framer-motion';
import { Spin } from 'antd';
import { useInfiniteScroll } from '@/features/infinite-scroll/lib/useInfiniteScroll';
import {ArticleCard} from "@/shared/ui";


interface Article {
    id: number;
    title: string;
    description: string;
}

export default function ArticlesSection() {
    // Имитация загрузки данных
    const fetchArticles = async (page: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Задержка для имитации API
        const newArticles: Article[] = Array.from({ length: 6 }, (_, index) => ({
            id: (page - 1) * 6 + index + 1,
            title: 'Title',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.',
        }));
        return newArticles;
    };

    const { items: articles, hasMore, isLoading, observerRef } = useInfiniteScroll<Article>({
        fetchData: fetchArticles,
        maxItems: 35,
    });

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Also very important title
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group"
                        >
                            <ArticleCard article={article} />
                        </motion.div>
                    ))}
                </div>
                {hasMore && (
                    <div ref={observerRef} className="h-10 flex justify-center items-center mt-8">
                        <Spin size="large" spinning={isLoading} />
                    </div>
                )}
            </div>
        </section>
    );
}