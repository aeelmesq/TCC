import { Box, Heading, ListItem, Link } from '@chakra-ui/react';

const linkBlock1 = [
  { name: 'Mercado' },
  { name: 'Investimentos' },
  { name: 'Cotações' },
  { name: 'Banco Central' },
  { name: 'Bolsa de Valores' },
  { name: 'Imposto de Renda' },
  { name: 'Finanças Pessoais' },
];
const linkBlock2 = [
  { name: 'Eleições 2024' },
  { name: 'Governo Atual' },
  { name: 'Câmara dos Deputados' },
  { name: 'Senado Federal' },
  { name: 'Supremo Tribunal Federal' },
  { name: 'Políticas Públicas' },
];
const linkBlock3 = [
  { name: 'Alimentação' },
  { name: 'Exercícios Físicos' },
  { name: 'Vacinação' },
];
const linkBlock4 = [
  { name: 'Inteligência Artificial' },
  { name: 'Ciência' },
  { name: 'Curiosidades' },
];
const linkBlock5 = [
  { name: 'Equipe ALT' },
  { name: 'Sobre Nós' },
  { name: 'Fale Conosco' },
  { name: 'Segurança e Privacidade' },
  { name: 'Termos de Uso' },
  { name: 'Denuncie' },
];

function ListItens({ block }) {
  return (
    <>
      {block.map((link) => (
        <ListItem key={link.name} mb={1}>
          <Link
            href={`/${link.name}`}
            color="black.400"
            _hover={{ textDecoration: 'underline', color: 'black.300' }}
            style={{listStyle: "none"}}
          >
            {link.name}
          </Link>
        </ListItem>
      ))}
    </>
  );
}

function List({ title, nameBlock }) {
  return (
    <Box mb={6} mx={8}>
      <Heading size="md" mb={2} color="white">{title}</Heading>
      <Box spacing={1}>
        <ListItens block={nameBlock} />
      </Box>
    </Box>
  );
}

export default function Bloco() {
  return (
    <Box display="flex">
      <List title="Economia" nameBlock={linkBlock1} />
      <List title="Política" nameBlock={linkBlock2} />
      <List title="Saúde" nameBlock={linkBlock3} />
      <List title="Tecnologia" nameBlock={linkBlock4} />
      <List title="Mais" nameBlock={linkBlock5} />
    </Box>
  );
}
