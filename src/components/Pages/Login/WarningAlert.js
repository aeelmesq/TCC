import { memo } from "react";

function WarningAlert({ alert }) {
  return (
    <>
      <article className="FormDiv warning">
        <p>{alert}</p>
      </article>
    </>
  );
}

export default memo(WarningAlert);
