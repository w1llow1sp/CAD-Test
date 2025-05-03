'use client'
import styled from "styled-components";

const StyledFooter = styled.footer`
    position: sticky;
    bottom: 0;
    -webkit-box-shadow: 0px -9px 20px -1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -9px 20px -1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -9px 20px -1px rgba(34, 60, 80, 0.2);

    padding-block: 10px 20px;

    font-size: 1.125rem;
    line-height: calc(1.75 / 1.125);
    text-align: center;

    background-color: white;
`

export default function Footer() {
    return (
        <StyledFooter>
            Some Company 2024
        </StyledFooter>
    )
}