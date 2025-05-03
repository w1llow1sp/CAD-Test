'use client'

import Link from "next/link";
import styled from "styled-components";


const StyledButton = styled.button`
    background-color:var(--headerColor);
    border: none;
    color:white;
    padding: 5px 17px;
    border-radius: 5px;
    :hover {
        background-color: #2C2C2C;
    }
    font-size:var(--mainTextHeight);
    line-height: var(--letterSpacing);
    @container (width >= 28rem) {
        padding: 3px 12px;
    }
`
export default function ContactUsButton() {
    return (
        <Link href="/contact">
            <StyledButton
                aria-label="Go to contact form">
                Contact Us
            </StyledButton>
        </Link>
    )
}