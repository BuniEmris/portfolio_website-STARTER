import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello , Dude <br />
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText>Progressive React and React Native developer</SectionText>
      <Button onClick={() => (window.location = "https://t.me/Buniemris")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
