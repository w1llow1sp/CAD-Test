'use client';

import Link from 'next/link';
import ContactUsButton from "./ContactUsButton";
import styled from "styled-components";

/**     STYLED      **/
const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    padding-block: 10px 20px;
    background-color: white;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    z-index: 10;
 
`

const StyledNav = styled.nav`
    width: 100%;
    margin-inline: auto;

    padding-inline: calc(1px * 4);
    padding-block: 4px;

    display: flex;
    justify-content: space-between;
    justify-items: center;
    @media (width >= 40rem) {
        max-width: 40rem;
    }
    @media (width >= 48rem) {
        max-width: 48rem;
    }
    @media (width >= 64rem) {
        max-width: 64rem;
    }
    @media (width >= 80rem) {
        max-width: 80rem;
    }
    @media (width >= 96rem) {
        max-width: 96rem;
    }
`

const StyledLink = styled(Link)`
    font-size: 24px;
    line-height: calc(2 / 1.5);
    font-weight: bold;
    color: #0a0a0a;
    :hover {
        color: #2C2C2C;
    }
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    text-decoration: none;
`

/**     STYLED      **/


export default function Header() {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLink href="/">
                    Some Company
                </StyledLink>
                <ContactUsButton/>
            </StyledNav>
        </StyledHeader>
    )
}