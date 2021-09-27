import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FiHeart } from "react-icons/fi";

export interface Props {
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image }: Props) {
  const [isHover, setIsHover] = useState(false);

  const priceFormatted = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }, [price]);

  const priceInstallments = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 2);
  }, [price]);

  return (
    <Flex
      minW="256px"
      alignItems="center"
      position="relative"
      flexDirection="column"
      _hover={{
        filter: "brightness(90%)",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <IconButton 
        icon={<FiHeart size="16px" color="#E01F26" />} 
        transition="all 0.4s"
        aria-label="favorite" 
        position="absolute"
        borderRadius="50%" 
        right="10px"
        top="10px"
        size="sm"
        _hover={{ 
          bg: '#E01F26',
          svg: {
            stroke: '#FFFFFF',
          },
        }} 
      />
      
      <Image 
        alt={name}
        borderRadius="4"
        src={image} 
      />
      {isHover && (
        <Flex
          position="absolute"
          bottom="120px"
          flexDirection="column"
        >
          <Button
            as="a" 
            href="#"
            size="sm"
            w="150px" 
            color="white" 
            variant="outline" 
            borderColor="white" 
            _hover={{
              filter: "brightness(90%)",
            }}
          >
            Ver produto
          </Button>
          <Button 
            as="a" 
            href="#"
            size="sm"
            w="150px" 
            color="white" 
            variant="outline" 
            borderColor="white" 
            _hover={{
              filter: "brightness(90%)",
            }}
            mt="2"
          >
            Adicionar ao carrinho
          </Button>
        </Flex>
      )}
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize="lg"
        >
          {name}
        </Text>
        <Text
          fontWeight="bold"
          fontSize="xl"
          color="gray.700"
        >
          {priceFormatted}
        </Text>
        <Text
          fontSize="md"
        >
          2x de {priceInstallments}
        </Text>
      </Flex>
    </Flex>
  );
}