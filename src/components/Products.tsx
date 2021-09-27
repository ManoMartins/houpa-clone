import { Stack, Heading, Box } from "@chakra-ui/react";
import Product, { Props as ProductProps } from "./Product";

interface Props {
  title: string;
  products: ProductProps[];
}

export default function Products({ title, products }: Props) {
  return (
    <Box maxW="1200px" m="0 auto" textAlign="center" mt="20">
      <Heading 
        mb="4"
        as="h1" 
        size="lg" 
        color="gray.700" 
        fontWeight="semibold" 
      >
        {title}
      </Heading>
      <Stack direction="row" spacing="4">
        {products.map((product) => (
          <Product 
            key={product.name}
            name={product.name} 
            price={product.price} 
            image={product.image}
          />
        ))}
      </Stack>
    </Box>
  );
}