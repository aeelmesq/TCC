export default function Lide({ title, img, fonte, link, style }) {
  return (
    <>
      <div
        className="slide"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}
