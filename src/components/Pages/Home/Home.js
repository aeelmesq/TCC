<<<<<<< HEAD
import BlockType1 from '../BlockType1';
import BlocoPrincipal from './BlocoHome/blocoPrincipal';

function Home() {
  return (
    <section>
      <BlocoPrincipal />
      <BlockType1 />
      <BlockType1 />
    </section>
=======
import BlockType1 from "../BlockType1";
import BlockTypeSlider from "../BlockTypeSlider";

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <section id="Home">
        <BlockType1 />
        <BlockTypeSlider />
      </section>
    </>
>>>>>>> cd0bb7258a918271ebfd83cf8a2cbf0d0bb38ce6
  );
}

export default Home;
