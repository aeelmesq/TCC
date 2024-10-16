// Importação Grid
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import { getUlrParam } from "./components/utilits.js"
import { useEffect, useState } from 'react';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from './components/Main/Home/Main.js';
import Footer from './components/Footer/Footer';


const page = getUlrParam("page")

function FullPage() {
  // Botão que volta ao topo
  function BtnToTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const topFunction = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      isVisible && (
        <Button
          id="btn-top"
          onClick={topFunction}
          position="fixed"
          bottom="20px"
          right="30px"
          zIndex={999}
          bg="blue.500"
          color="white"
          padding="15px"
          borderRadius="10px"
          fontSize="20px"
          _hover={{ bg: "blue.400" }}
        >
          &#8593;
        </Button>
      )
    );
  }  
   switch (page) {
     case "1":
       return (
          <Grid
          templateAreas={{
            base: `"header"
                    "nav"
                    "main"
                    "footer"`,
            md: `"header header"
                "main main"
                "footer footer"`,
          }}
          gridTemplateRows={{ base: 'auto', md: '50px 1fr 30px' }}
          gridTemplateColumns={{ base: '1fr', md: '30px auto' }}
          height="100%"
          color='blackAlpha.700'
          fontWeight='bold'
          scrollSnapType="y mandatory"
        >
          <GridItem bg='gray.800' area='header' display="flex" alignItems="center" justifyContent="center" scrollSnapAlign="start">
            <Header />
          </GridItem>
          {/* <GridItem bg='pink.300' area='nav'>
            <Nav />
          </GridItem> */}
          <GridItem bg='gray.100' area='main' scrollSnapAlign="start">
            <Main />
          </GridItem>
          <GridItem bg='blue.300' area='footer' display='grid' gridTemplateColumns='1fr' alignItems='center' justifyContent='center' scrollSnapAlign="start">
            <Footer />
          </GridItem>
        </Grid>
       );
     case "2":
       return (
          <Grid
          templateAreas={{
            base: `"header"
                    "nav"
                    "main"
                    "footer"`,
            md: `"header header"
                "main main"
                "footer footer"`,
          }}
          gridTemplateRows={{ base: 'auto', md: '50px 1fr 30px' }}
          gridTemplateColumns={{ base: '1fr', md: '30px auto' }}
          height="100%"
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem bg='gray.800' area='header' display="flex" alignItems="center" justifyContent="center">
            <Header />
          </GridItem>
          <GridItem bg='pink.300' area='nav'>
            <Nav />
          </GridItem>
          <GridItem bg='gray.100' area='main'>
            <Main />
          </GridItem>
        </Grid>
       );
     default:
       document.querySelector("body").style.overflow = "hidden";
       return (
        <>
          <BtnToTop />
          <Box
            height="100vh"
            color='blackAlpha.700'
            fontWeight='bold'
            overflowY="hidden"
          >
            <Box bg='gray.200' area='main' scrollSnapAlign="start">
              <Main />
            </Box>
          </Box>
        </>
   );
   }
 }

function App() {
  return (
    <>
      <FullPage />
    </>
  );
}

export default App;
