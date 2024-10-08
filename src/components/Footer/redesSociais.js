import { Box } from "@chakra-ui/react";

function SocialMediaItem({ name }) {
  let link = 'https://' + name.toLowerCase() + '.com';
  return (
    <a href={link}>
      <i className={'bi bi-' + name.toLowerCase()}></i>
    </a>
  );
}

export default function RedesSociaisList() {
  return (
    <Box display="flex" justifyContent="center" w="26vw">
      <Box me="30px"><SocialMediaItem name="Twitter-X" /></Box>
      <Box me="30px"><SocialMediaItem name="Instagram" /></Box>
      <Box me="30px"><SocialMediaItem name="Youtube" /></Box>
      <Box me="30px"><SocialMediaItem name="LinkedIn" /></Box>
    </Box>
  );
}
