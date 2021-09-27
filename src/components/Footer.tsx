import { Box, Flex, Input, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" >
      <Box bg="#7F1CEF">
        <Flex 
          p="6" 
          m="20px auto" 
          maxW="1200px" 
          color="white" 
          alignItems="center"
          fontWeight="semibold"
        >
          <Box w="800px">
            <Text>
              Assine nossa newsletter!
            </Text>
            <Text>
              Fique por dentro de ofertas e novidades exclusivas!
            </Text>
          </Box>
          <Input 
            placeholder="E-mail" 
            variant="filled" 
            color="gray.700"
            _focus={{ bg: "white" }} 
          />
        </Flex>
      </Box>

      <Text fontWeight="bold" textAlign="center" my="5">
        Made with ❤️ by Manoel
      </Text>
    </Box>
  );
}