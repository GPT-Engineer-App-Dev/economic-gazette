import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">Financial Times</Heading>
      
      <Flex direction={{ base: "column", md: "row" }} mb={6}>
        <Box flex="3" mr={{ md: 4 }}>
          <Image src="/images/headline.jpg" alt="Headline Image" mb={4} />
          <Heading as="h2" size="lg" mb={2}>Main Headline</Heading>
          <Text fontSize="md" mb={4}>This is the main headline of the day. It covers the most important news and events happening around the world.</Text>
          <Link color="teal.500" href="#">Read more</Link>
        </Box>
        
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={2}>Sidebar</Heading>
          <VStack align="start" spacing={2}>
            <Link color="teal.500" href="#">Sidebar Link 1</Link>
            <Link color="teal.500" href="#">Sidebar Link 2</Link>
            <Link color="teal.500" href="#">Sidebar Link 3</Link>
            <Link color="teal.500" href="#">Sidebar Link 4</Link>
          </VStack>
        </Box>
      </Flex>
      
      <Box>
        <Heading as="h3" size="lg" mb={4}>More Articles</Heading>
        <VStack spacing={4} align="start">
          <Box>
            <Heading as="h4" size="md" mb={2}>Article 1</Heading>
            <Text fontSize="sm">Summary of article 1. This is a brief description of what the article is about.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>Article 2</Heading>
            <Text fontSize="sm">Summary of article 2. This is a brief description of what the article is about.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>Article 3</Heading>
            <Text fontSize="sm">Summary of article 3. This is a brief description of what the article is about.</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;