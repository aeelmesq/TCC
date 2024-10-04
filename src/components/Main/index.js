import Container from "../Others/Container/DefaultBlock";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
