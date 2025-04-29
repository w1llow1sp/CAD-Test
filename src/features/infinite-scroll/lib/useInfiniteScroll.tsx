import { useState, useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions<T> {
    fetchData: (page: number) => Promise<T[]>;
    maxItems: number;
}

export function useInfiniteScroll<T>({ fetchData, maxItems }: UseInfiniteScrollOptions<T>) {
    const [items, setItems] = useState<T[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    // Загрузка данных
    useEffect(() => {
        const loadItems = async () => {
            if (!hasMore || isLoading) return;
            setIsLoading(true);
            try {
                const newItems = await fetchData(page);
                setItems((prev) => {
                    const updatedItems = [...prev, ...newItems];
                    if (updatedItems.length >= maxItems) {
                        setHasMore(false);
                        return updatedItems.slice(0, maxItems);
                    }
                    return updatedItems;
                });
                if (newItems.length < 6) setHasMore(false);
            } catch (error) {
                console.error('Error loading items:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadItems();
    }, [page, fetchData, maxItems, isLoading, hasMore]);

    // IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1.0 } // Срабатывает, когда лоадер полностью виден
        );

        if (observerRef.current) observer.observe(observerRef.current);
        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [hasMore, isLoading]);

    return { items, hasMore, isLoading, observerRef };
}