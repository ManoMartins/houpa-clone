import { 
  Flex, 
  Link, 
  Input, 
  IconButton, 
  InputGroup, 
  InputLeftElement, 
  Stack,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <Box
      p="4"
      mb="10"
      w="100%"
      bg="white"
      shadow="md"
    >
      <Flex 
        m="0 auto"
        maxW="1200px" 
        alignItems="center"
        justifyContent="space-between" 
      >
        <Heading flex="1">HOUPA</Heading>
        <InputGroup w="500px" flex="2">
          <InputLeftElement children={<FiSearch />} />
          <Input placeholder="Buscar por..." />
        </InputGroup>
        <Stack
          flex="1"
          ml="60px"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="#">
            Entrar ou criar conta
          </Link>
          <HStack>
            <IconButton icon={<FiHeart />} aria-label="favorites" variant="ghost" />
            <IconButton icon={<FiShoppingCart />} aria-label="cart" variant="ghost" />
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}