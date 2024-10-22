import BlockBox from "../../../../comunComponents/BlockBox/BlockBox";
import categorias from "../../../../../../consts/Cat";
import SliderBox from "../../../../comunComponents/SliderBox/SliderBox";
import SliderCard from "../../../../comunComponents/SliderBox/SliderCard";

export default function Block1() {
  return (
    <BlockBox>
      <SliderBox leftButtonPositio={"7vw"} rightButtonPosition={"2vw"}>
        {categorias.map((cat) => {
          return <SliderCard title={cat.title} color={cat.color}></SliderCard>;
        })}
      </SliderBox>
    </BlockBox>
  );
}
