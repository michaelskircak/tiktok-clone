import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles.css";
import "../home.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  AspectRatio
} from "@chakra-ui/react";

export default function About({
  title,
  subtitle,
  video,
  ctaLink,
  ctaText,
  staticContext,
  ...rest
}) {
  return (
    <Flex
      className="page-with-header"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="left"
          color="primary.800"
          opacity="0.6"
        >
          Log in to follow creators, like videos, and view comments.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <AspectRatio maxW="560px" ratio={1}>
          <video
            className="video-mask"
            loop
            title="About"
            src={video}
            autoPlay={true}
            muted
          />
        </AspectRatio>
      </Box>
    </Flex>
  );
}

About.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  video: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

About.defaultProps = {
  title: "Tiktok Clone by Michael Skircak",
  subtitle: "Built using React + ChakraUI + Firebase for my React GA class.",
  video: "../video/about.mp4",
  ctaText: "Create your account now",
  ctaLink: "/signup"
};
