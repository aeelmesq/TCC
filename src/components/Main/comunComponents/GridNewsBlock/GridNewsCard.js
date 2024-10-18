import { Grid } from "@chakra-ui/react";

export default function GridNewsCard({ children }) {
  return (
    <Grid bgColor={"white"} alignItems={"baseline"}>
      {children}
    </Grid>
  );
}
