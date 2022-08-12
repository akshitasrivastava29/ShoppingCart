import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: "12",
      md: "16",
    }}
  >
    <Stack
      direction="row"
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Stack direction="row" align="center">
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://github.com/akshitasrivastava29"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/akshita-srivastava-2a2808217/"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        Made with Next.js, Redux Toolkit, Chakra UI, and ❤️
      </Text>
    </Stack>
  </Container>
);
