'use client'
import {motion} from "framer-motion";
import {YouTubeEmbed} from "@/entities/youtube-video/ui/YouTubeEmbed";
import styled from "styled-components";

/**     STYLED      **/
const StyledSection = styled.section`
    background-color: var(--sectionColor);
    padding: 20px 15px;
    @media (width >= 48rem) {
        padding-block: 20px;
    }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (width >= 48rem) {
        flex-direction: row;
    }
    justify-items: center;
    justify-content: space-between;
    gap: 50px;
`

// className="space-y-4 max-w-prose flex-1 md:mr-10 md:pr-0"
const StyledMotionText = styled(motion.div)`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 380px;
`

const StyledHeader = styled.h1`
    font-size: var(--mainHeaderHeight);
    line-height: var(--letterSpacing);
    color: var(--headerColor);
    font-weight: bold;
    
`

//text  xml:space="preserve" style="white-space: pre"><tspan x="46" y="278.818"
const StyledText = styled.p`
    font-size: var(--mainTextHeight);
    color: var(--textColor);
    
`


//   className="relative w-full max-w-lg md:max-w-none md:w-1/2"
const StyledYoutubeEmbed = styled(motion.div)`
    max-width: 530px;
    width: 100%;
    align-content: center;
`


/**     STYLED      **/

export default function HeroSection() {
    return (
        <StyledSection>
            <StyledWrapper>
                {/* Текстовая часть */}
                <StyledMotionText
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}>
                    <StyledHeader>
                        Most important title on the page
                    </StyledHeader>
                    <StyledText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
                        ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                    </StyledText>
                </StyledMotionText>
                {/* YouTube-видео */}
                <StyledYoutubeEmbed
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    <YouTubeEmbed videoId={'dQw4w9WgXcQ'} title={'Test Task Video'}/>
                </StyledYoutubeEmbed>
            </StyledWrapper>
        </StyledSection>
    )
}