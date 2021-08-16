import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    title: "Personal Calendar",
    text: "own calendar which user can select day, month and year period with JS ",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievment</SectionTitle>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.title}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Section>
);

export default Acomplishments;
