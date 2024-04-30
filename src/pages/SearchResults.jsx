import { Box, Flex, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client } from 'lib/crud';

const SearchResults = () => {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.getWithPrefix(`product:${keyword}`);
      if (data) {
        setResults(data.map(item => item.value));
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Search Results for "{keyword}"</Text>
      <SimpleGrid columns={3} spacing={5}>
        {results.length > 0 ? (
          results.map(product => (
            <Box key={product.id} textAlign="center">
              <Image src={product.image} alt={product.name} boxSize="150px" m="auto" />
              <Text mt={2}>{product.name}</Text>
              <Text fontWeight="bold">${product.price}</Text>
            </Box>
          ))
        ) : (
          <Text>No results found.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default SearchResults;