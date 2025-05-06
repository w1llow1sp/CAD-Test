'use client';

import {motion} from 'framer-motion';
import {Spin} from 'antd';
import {useInfiniteScroll} from '@/features/infinite-scroll/lib/useInfiniteScroll';
import {ArticleCard, ContactUsButton} from "@/shared/ui";
import styled from "styled-components";

interface Article {
    id: number;
    title: string;
    description: string;
}

/**     STYLED      **/

const StyledSection = styled.section`
    padding-block: 12px;
    background-color: var(--background);
    @media (width >= 48rem) {
        padding-block: 20px;
    }
`

const StyledContainer = styled.div`
    margin-inline: auto;
    padding-block: 4px;
`

const StyledSectionHeader = styled.h2`
    font-size: var(--mainHeaderHeight);
    font-weight: 600;
    color: var(--headerColor);
    margin-bottom: 8px;
    text-align: center;
`

const StyledMotionDiv = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (width >= 40rem) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (width >= 64rem) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    gap: 20px;
`

const StyledSpinSection = styled.div`
    display: flex;
    height: 10px;
    justify-content: center;
    justify-items: center;
    margin-top: 8px;
`
const StyledButtonSection = styled.div`
    display: flex;
    justify-content: center;
    padding-block: 50px;
`

/**     STYLED      **/

export default function ArticlesSection() {
    const fetchArticles = async (page: number) => {
        const response = await fetch(`api/articles?page=${page}`)
        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }
        return response.json()
    }
    const {items: articles, hasMore, isLoading, observerRef} = useInfiniteScroll<Article>({
        fetchData: fetchArticles,
        maxItems: 36,
    });

    return (
        <StyledSection>
            <StyledContainer>
                <StyledSectionHeader id="articles-heading">
                    Also very important title
                </StyledSectionHeader>
                <StyledMotionDiv role="list" aria-labelledby="articles-heading">
                    {articles.map((article) => (
                        <motion.div
                            key={article.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            role="listitem"
                        >
                            <ArticleCard article={article}/>
                        </motion.div>
                    ))}
                </StyledMotionDiv>
                {hasMore ? (
                        <StyledSpinSection ref={observerRef}>
                            <Spin size="large" spinning={isLoading}/>
                        </StyledSpinSection>
                    )
                    : (
                        <StyledButtonSection>
                            <ContactUsButton/>
                        </StyledButtonSection>
                    )}
            </StyledContainer>
        </StyledSection>
    );
}