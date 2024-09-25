import LeftBlock from "./leftBlock";

export default function TableNews({ data = [{}] }) {
  const leftBlockData = [];
  const rightBlockData = [];

  data.forEach((item, index) => {
    if (index < 6) {
      if (index % 3 === 0) leftBlockData.push(item);

      rightBlockData.push(item);
    }
  });

  return (
    <>
      {leftBlockData.map((news) => (
        <>
          <LeftBlock news={news} />
        </>
      ))}
    </>
  );
}
