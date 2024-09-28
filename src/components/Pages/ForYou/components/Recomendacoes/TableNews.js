import FullBlock from "./FullBlock";
import LeftBlock from "./leftBlock";
import RightBlock from "./RightBlock";

export default function TableNews({ data = [{}], qtdNews }) {
  const allNews = data.slice(0, qtdNews);
  return (
    <>
      {allNews.map((item, index) => {
        if (index % 3 === 0) {
          if (index === allNews.length - 1) return <FullBlock news={item} />;

          return <LeftBlock news={item} />;
        }
        return (
          <>
            <RightBlock news={item} />
            {(index + 1) % 3 === 0 && <hr />}
          </>
        );
      })}
    </>
  );
}
