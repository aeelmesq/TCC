import Container from "../Others/Container/DefaultBlock";
import APIsProvider from "../../Providers/APIsProvider";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <APIsProvider>
        <Container>
          <Outlet />
        </Container>
      </APIsProvider>
    </>
  );
}
