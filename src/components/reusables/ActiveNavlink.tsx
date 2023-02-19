import React from "react";
import { useRouter } from "next/router";

type ActiveNavLinkProps = {
  to: string;
  text: string;
};

const ActiveNavLink: React.FC<ActiveNavLinkProps> = ({ to, text }) => {
  const router = useRouter();
  const [stateText, setText] = React.useState('')

React.useState(() => {
text && setText(text);
})
  const exactPath = router.asPath.slice(1 - router.asPath.length)
  // console.log("exact: ",exactPath)
  // const exactPath = router.asPath.slice(router.asPath.length - 3)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(to);
  };

  const style = {
    // marginRight: 10,
    color: exactPath === to ? "red" : "black",
  };

  return (
    <a href={to} onClick={handleClick}
    //  className={exactPath === to ? "navbar__link--active" : "navbar__link"}
      style={style}>
      {stateText}
    </a>
  );
};

export default ActiveNavLink;
