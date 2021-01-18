import React, {useState} from 'react'
import { Button } from '../ButtonElement'
// import Video from '../../videos/video.mp4'
import background from '../../videos/background2.jpg'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => setHover(!hover)

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={background} type='image/jpg' />
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Business Branding Made Easy</HeroH1>
                <HeroP>
                     Let us help you reach your Goals, stand out and recognized in your local market.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'

                        smooth={true}
                        duration={500} spy={true}
                        exact='true' offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
