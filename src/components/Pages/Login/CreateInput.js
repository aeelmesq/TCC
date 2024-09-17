export default function CreateInput({
  title,
  Name,
  ofType,
  setValue = () => {},
  initValue,
  icon,
  firstFocus,
  clickIcon = () => {},
  addClass,
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
            onChange={setValue}
            className={addClass}
          />
          <i className={icon} onClick={clickIcon}></i>
        </div>
      </article>
    </>
  );
}
