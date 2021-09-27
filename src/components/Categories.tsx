import { Button, Stack } from "@chakra-ui/react";

export default function Categories() {
  return (
    <Stack as="nav" direction="row" maxW="1200px" m="0 auto" w="100%" mt="10">
      <Button variant="outline" w="100%" as="a" href="#">
        Blusa
      </Button>
      <Button variant="outline" w="100%" as="a" href="#">
        Calça
      </Button>
      <Button variant="outline" w="100%" as="a" href="#">
        Camisa
      </Button>
      <Button variant="outline" w="100%" as="a" href="#">
        Short
      </Button>
      <Button variant="outline" w="100%" as="a" href="#">
        Vestido
      </Button>
    </Stack>
  );
}