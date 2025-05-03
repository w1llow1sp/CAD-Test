import {ContactUsButton} from "@/shared/ui";
import styled from "styled-components";

/**     STYLED      **/
//className='section container  p-18 justify-center '
const StyledSection = styled.section`
    margin: auto;
    padding-block: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: var(--sectionColor);
`
/**     STYLED      **/


export default function ContactSection () {
    return (
        <StyledSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Less important title
            </h2>
            <ContactUsButton/>
        </StyledSection>
    )
}