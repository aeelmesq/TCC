import Bloco from './bloco';
import RedesSociaisList from './redesSociais';
import { Box, Grid, Image, Separator } from '@chakra-ui/react';
import logo from '../../logo.svg';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" p={6}>
      <Grid
        gap={2}
        gridTemplateColumns='1fr 3fr'
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start"
      >
        <Box id='bfLeft' m="auto">
          <Image src={logo} alt="Logo" id="logo" boxSize="150px" />
        </Box>
        <Box id='bfRight'>
          <Bloco />
        </Box>
        <Box id='bfMiddle' gridRow={2} gridColumn="span 2">
          <RedesSociaisList />
          <Separator borderColor="gray.600" my={4} />
        </Box>
      </Grid>
    </Box>
  );
}
