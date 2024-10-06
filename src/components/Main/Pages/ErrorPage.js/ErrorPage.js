import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function handleErrorMessage(err) {
  const { status } = err;

  var message = "Uncaught Type Error";

  if (status === 404) {
    message = "not fount";
  }

  return { message, status };
}

export default function ErrorPage() {
  const err = handleErrorMessage(useRouteError());

  return (
    <>
      <Grid
        w={"100dvw"}
        h={"100dvh"}
        alignItems={"center"}
        justifyContent={"center"}
        gridTemplateColumns={"100%"}
        gridTemplateRows={"60px"}
      >
        <Heading
          textAlign={"center"}
          fontSize={"40pt"}
          color={"darkgray"}
          textDecoration={"underline"}
        >
          Error
        </Heading>
        <Text textAlign={"center"}>
          {err.message}: {err.status}
        </Text>
      </Grid>
    </>
  );
}
