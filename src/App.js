// import "./style.css";
// import Header from "./components/Header/Header.js";
// import SearchBar from "./components/Header/SearchBar/SearchBar.js";
// import FooterTemplate from "./components/Footer/footerTemplate.js";
// import RenderPage from "./components/Pages/RenderPage.js";
// import { getUlrParam } from "./components/utilits.js";

// function FullPage() {
//   const page = getUlrParam("page");

//   switch (page) {
//     case "1":
//       return (
//         <>
//           <Header />
//           <SearchBar />
//           <RenderPage />
//           <div>
//             <FooterTemplate />
//           </div>
//         </>
//       );
//     case "2":
//       return (
//         <>
//           <RenderPage />
//         </>
//       );
//     default:
//       return (
//         <>
//           <Header />
//           <SearchBar />
//           <RenderPage />
//           <div>
//             <FooterTemplate />
//           </div>
//         </>
//       );
//   }
// }

// Importação Grid
import { Grid, GridItem } from '@chakra-ui/react'

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function FullPage() {
  return (
    <Grid
      templateAreas={{
        base: `"header"
                "nav"
                "main"
                "footer"`,
        md: `"header header"
             "nav main"
             "footer footer"`,
      }}
      gridTemplateRows={{ base: 'auto', md: '50px 1fr 30px' }}
      gridTemplateColumns={{ base: '1fr', md: '150px 1fr' }}
      height="100vh"
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl={2} bg='gray.800' area='header' display="flex" alignItems="center" justifyContent="center">
        <Header />
      </GridItem>
      <GridItem pl={2} bg='pink.300' area='nav'>
        <Nav />
      </GridItem>
      <GridItem pl={2} bg='green.300' area='main'>
        <Main />
      </GridItem>
      <GridItem bg='blue.300' area='footer' display='grid' gridTemplateColumns='1fr' alignItems='center' justifyContent='center'>
        <Footer />
      </GridItem>
    </Grid>
  );
}
function App() {
  return (
    <>
      <FullPage />
    </>
  );
}

export default App;
