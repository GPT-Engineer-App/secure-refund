import { Container, Text, VStack, Box, Heading, Button, Flex, Icon } from "@chakra-ui/react";
import { FaShieldAlt, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="gray.800">
          SecureGuard Insurance
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Protecting your digital world with instant refunds and human client service.
        </Text>
        <Flex direction={{ base: "column", md: "row" }} spacing={10} justify="center" align="center">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" m={2}>
            <Icon as={FaShieldAlt} w={10} h={10} color="blue.500" />
            <Heading fontSize="xl" mt={4}>Comprehensive Security</Heading>
            <Text mt={4}>We cover all types of security breaches and hacks.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" m={2}>
            <Icon as={FaMoneyBillWave} w={10} h={10} color="green.500" />
            <Heading fontSize="xl" mt={4}>Instant Refunds</Heading>
            <Text mt={4}>Get your money back instantly in case of a breach.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" m={2}>
            <Icon as={FaHeadset} w={10} h={10} color="purple.500" />
            <Heading fontSize="xl" mt={4}>Human Client Service</Heading>
            <Text mt={4}>Talk to real people to resolve your issues quickly.</Text>
          </Box>
        </Flex>
        <Button colorScheme="blue" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;