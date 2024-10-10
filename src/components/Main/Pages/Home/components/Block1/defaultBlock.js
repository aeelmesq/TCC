import { Flex, Grid, Heading, Image } from "@chakra-ui/react";
import img1 from "../../../../../../img/foto-noticia.jpg";
import img2 from "../../../../../../img/foto-Penapolis.jpg";
import { useRef, useState, useEffect } from "react";

const Data = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img1,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img2,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img1,
    fonte: "G1",
    Link: "g1.globo",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: img2,
    fonte: "G1",
    Link: "g1.globo",
  },
];

export default function Block1() {
  const imagesRef = useRef(null);

  const titleRef = useRef(null);

  const [scrollMult, setScrollMult] = useState(0);

  function setNextItem() {
    let slideItems = document.querySelectorAll(".imageSlider");
    setScrollMult((prevScrollMult) => {
      if (prevScrollMult === slideItems.length - 1) {
        return 0;
      } else {
        return prevScrollMult + 1;
      }
    });
  }

  useEffect(() => {
    imagesRef.current.scrollLeft = imagesRef.current.offsetWidth * scrollMult;
    setTimeout(() => {
      titleRef.current.scrollLeft = titleRef.current.offsetWidth * scrollMult;
    }, 300);
  }, [scrollMult]);

  useEffect(() => {
    let intervalid = setInterval(setNextItem, 7000);

    return () => clearInterval(intervalid);
  }, []);

  return (
    <>
      <Heading fontSize={"25pt"} textAlign={"center"} color={"#000053"}>
        SUAS NOTÍCIAS
      </Heading>
      <Grid
        gridAutoColumns={"calc(100% - 10px)"}
        columnGap={"10px"}
        justifyContent={"center"}
        w={"100%"}
      >
        <Flex
          h={"500px"}
          bgColor={"black"}
          overflowX={"scroll"}
          overflowY={"hidden"}
          borderRadius={"5px"}
          ref={imagesRef}
        >
          {Data.map((item, index) => {
            return (
              <>
                <Image
                  src={item.img}
                  w={"100%"}
                  objectFit={"cover"}
                  flex={"none"}
                  key={index + "img"}
                  className="imageSlider"
                />
              </>
            );
          })}
        </Flex>
        <Flex
          h={"75px"}
          bgColor={"#4525D2"}
          boxShadow={"1px 0px 4px black"}
          w={"92%"}
          borderTop={"1px solid black"}
          m={"auto"}
          position={"relative"}
          bottom={"50px"}
          p={"12px"}
          alignItems={"center"}
        >
          <Heading color={"white"}>Titúlo:</Heading>
          <Flex
            w={"94%"}
            h={"60px"}
            overflowX={"scroll"}
            overflowY={"hidden"}
            alignItems={"center"}
            ref={titleRef}
          >
            {Data.map((item, index) => {
              return (
                <>
                  <Heading w={"100%"} color={"white"} flex={"none"}>
                    {item.title}
                  </Heading>
                </>
              );
            })}
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
