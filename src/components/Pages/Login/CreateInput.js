export default function CreateInput({
  title,
  Name,
  ofType,
  setValue,
  initValue,
  icon,
  firstFocus,
}) {
  return (
    <>
      <article className="FormDiv">
        <label htmlFor={Name}>{title}:</label>
        <div className="inputGroup">
          <input
            type={ofType}
            name={Name}
            value={initValue}
            id={Name}
            autoFocus={firstFocus}
            onChange={(e) => setValue(e.target.value)}
          />
          <i className={icon}></i>
        </div>
      </article>
    </>
  );
}
