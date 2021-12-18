import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>

      <SectionText>
        This page is still a work in progress but feel free to look around
      </SectionText>
      <Button onClick = {() => window.location = 'mailto:kwadwoasamoa7@gmail.com'}>Let's Talk</Button>
    </LeftSection>
  </Section>
);

export default Hero;