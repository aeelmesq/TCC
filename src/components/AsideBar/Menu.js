import { memo } from "react";

function Menu({ style, ...components }) {
  return (
    <aside className={style}>
      <ul>{components.children}</ul>
    </aside>
  );
}

export default memo(Menu);
