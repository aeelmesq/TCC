import { Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function handleErrorMessage(err) {
  const { status } = err;

  var message = "Uncaught Type Error";

  if (status === 400) {
    message = "Bad Request";
  } else if (status === 401) {
    message = "unauthenticated";
  } else if (status === 403) {
    message = "forbidden";
  } else if (status === 404) {
    message = "not fount";
  } else if (status === 407) {
    message = "Proxy Authentication Required";
  } else if (status === 407) {
    message = "not fount";
  } else if (status === 415) {
    message = "Unsupported Media Type";
  } else if (status === 451) {
    message = "Unavailable For Legal Reasons";
  }

  return { message, status };
}

export default function ErrorPage() {
  const err = handleErrorMessage(useRouteError());

  return (
    <>
      <Grid
        w={"100dvw"}
        h={"190px"}
        alignItems={"center"}
        justifyContent={"center"}
        gridTemplateColumns={"100%"}
        gridTemplateRows={"60px"}
        marginTop={"calc(50dvh - 100px)"}
      >
        <Heading
          textAlign={"center"}
          fontSize={"40pt"}
          textDecoration={"underline"}
          bgColor={"red"}
          padding={"90px"}
        >
          <Icon className="bi bi-x-circle-fill" mr={"30px"} />
          Error
        </Heading>
        <Text textAlign={"center"}>
          {err.status} : {err.message}
        </Text>
      </Grid>
    </>
  );
}
