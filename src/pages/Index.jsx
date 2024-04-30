import { Box, Flex, Input, InputGroup, InputLeftElement, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const categories = [
  { name: 'Capacitors', image: '/images/capacitors.jpg' },
  { name: 'Resistors', image: '/images/resistors.jpg' },
  { name: 'ICs & Processors', image: '/images/ics.jpg' },
  { name: 'Tools', image: '/images/tools.jpg' }
];

const featuredProducts = [
  { name: 'Soldering Iron', price: '29.99', image: '/images/soldering_iron.jpg' },
  { name: 'Multimeter', price: '49.99', image: '/images/multimeter.jpg' },
  { name: 'Breadboard', price: '5.99', image: '/images/breadboard.jpg' }
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">Electronics Parts & Tools</Text>
        <InputGroup w="300px">
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search for parts and tools" />
        </InputGroup>
      </Flex>
      <Box mb={10}>
        <Text fontSize="xl" mb={4}>Categories</Text>
        <SimpleGrid columns={4} spacing={5}>
          {categories.map(category => (
            <Box key={category.name} textAlign="center">
              <Image src={category.image} alt={category.name} boxSize="150px" m="auto" />
              <Text mt={2}>{category.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Text fontSize="xl" mb={4}>Featured Products</Text>
        <SimpleGrid columns={3} spacing={5}>
          {featuredProducts.map(product => (
            <Box key={product.name} textAlign="center">
              <Image src={product.image} alt={product.name} boxSize="150px" m="auto" />
              <Text mt={2}>{product.name}</Text>
              <Text fontWeight="bold">${product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;