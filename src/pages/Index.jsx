import { Box, Flex, Input, InputGroup, InputLeftElement, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Capacitors', image: '/images/capacitors.jpg' },
  { name: 'Resistors', image: '/images/resistors.jpg' },
  { name: 'ICs & Processors', image: '/images/ics.jpg' },
  { name: 'Tools', image: '/images/tools.jpg' }
];

const featuredProducts = [
  { name: 'Soldering Iron', price: '29.99', image: '/images/soldering_iron.jpg', description: 'High-quality soldering iron perfect for all types of electronics work.' },
  { name: 'Multimeter', price: '49.99', image: '/images/multimeter.jpg', description: 'Digital multimeter for accurate electrical measurements.' },
  { name: 'Breadboard', price: '5.99', image: '/images/breadboard.jpg', description: 'Versatile breadboard for prototyping circuits.' },
  { name: 'Oscilloscope', price: '199.99', image: '/images/oscilloscope.jpg', description: 'Compact digital oscilloscope with advanced features.' },
  { name: 'Wire Stripper', price: '15.99', image: '/images/wire_stripper.jpg', description: 'Ergonomic wire stripper for easy insulation removal.' },
  { name: 'Flux Pen', price: '7.99', image: '/images/flux_pen.jpg', description: 'Precision flux pen for improving soldering quality.' }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">Electronics Parts & Tools</Text>
        <InputGroup as="form" onSubmit={(e) => { e.preventDefault(); navigate(`/search/${searchQuery}`); }} w="300px">
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search for parts and tools" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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