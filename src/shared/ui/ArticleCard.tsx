'use client';

import {Card} from 'antd';
import styled from "styled-components";

interface Article {
    id: number;
    title: string;
    description: string;
}

/**     STYLED      **/
const StyledCard = styled(Card)`
    background-color: var(--background);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /*  */

    transition-property: transform, translate, scale, rotate;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
`

const StyledHeading = styled.h3`
    color: var(--textColor);
    font-size: var(--textSectionHeight);
    font-weight: 600;
    letter-spacing: var(--letterSpacing);
`

const StyledText = styled.p`
    color: var(--articleColor);
    font-size: var(--mainTextHeight);
`

/**     STYLED      **/

export default function ArticleCard({article}: { article: Article }) {
    return (
        <StyledCard
            hoverable>
            <StyledHeading>
                {article.title}
            </StyledHeading>
            <StyledText>{article.description}</StyledText>
        </StyledCard>
    );
}