import React from "react";
import {
  Container,
  BoxContainer,
  Box,
  Heading,
  Paragraph,
  Button,
} from "./TypesStyle";
import regular from "../../pictures/regular.png";
import competition from "../../pictures/competition.jpg";
import { useHistory } from "react-router-dom";

function Types() {
  const history = useHistory();
  return (
    <Container id="types">
      <Heading>We distinguish two types of kettlebells</Heading>
      <BoxContainer>
        <Box>
          <img src={regular} alt={regular} />
          <Paragraph>
            <strong>Regular kettlebells</strong> are of different shapes and
            sizes. They are made of cast iron. They are smaller than competitive
            kettlebells but have a slightly thicker handle. They are used in
            Cross Fit and various strength trainings.
          </Paragraph>
          <Button onClick={() => history.push("/regular")}>View more</Button>
        </Box>
        <Box>
          <img src={competition} alt={competition} />
          <Paragraph>
            <strong>Competitive kettlebells</strong> are all the same size and
            shape, differing in weight and color. They have a slightly thinner
            handle. They are made for Girevoy sport, but they are used in the
            same way as regular ones.
          </Paragraph>
          <Button onClick={() => history.push("/competition")}>
            View more
          </Button>
        </Box>
      </BoxContainer>
    </Container>
  );
}

export default Types;
