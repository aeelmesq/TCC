// Importação Grid
import { Box, Button, Grid, GridItem, Progress } from '@chakra-ui/react'
import { getUlrParam } from "./components/utilits.js"

import "./index.css"

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from './components/Main/Home/Main.js';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

const page = getUlrParam("page")

function ProgressBar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScroll(scroll)
    }
    window.addEventListener("scroll", progressBarHandler)
    return () => window.removeEventListener("scroll", progressBarHandler)
  }, [])
  return (
    <div
      className='ProgressBar'
      style={{
        transform: `scale(${scroll}, 1)`,
      }}
    />
  )
}

function BtnToTop() {
  return (
    <Button
      position="fixed"
      bottom="20px"
      right="20px"
      colorScheme='blue'
      zIndex={9999}
      boxShadow="dark-lg"
      borderRadius="50px"
      width="50px"
      height="50px"
      fontSize="25px"
    >
      &#8593;</Button>
  )
}

function FullPage() {
  //  useEffect(() => {
  //    document.body.style.overflow = page === "default" ? "auto" : "hidden"
  //    return () => {
  //      document.body.style.overflow = "auto"
  //    }
  //   }, [page])

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
         return (
          <>
            <Box bg='gray.200' area='main'>
              <BtnToTop />
              <Main />
            </Box>
          </>
   );
  }
}

function App() {
  return (
    <>
      <ProgressBar />
      <FullPage />
    </>
  );
}

export default App;
