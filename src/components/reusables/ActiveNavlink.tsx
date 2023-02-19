import React from "react";
import { useRouter } from "next/router";

type ActiveNavLinkProps = {
  to: string;
  text: string;
};

const ActiveNavLink: React.FC<ActiveNavLinkProps> = ({ to, text }) => {
  const router = useRouter();
  const [stateText, setText] = React.useState("");
  const [loc, setLoc] = React.useState("")
  //location useeffect
  React.useEffect(() => {
    setLoc(window.location.pathname[1] + window.location.pathname[2])

  },[]);
  // const location = window.location.pathname[1] + window.location.pathname[2]

  React.useState(() => {
    text && setText(text);
  });
  const exactPath = router.asPath.length > 1? router.asPath.slice(1 - router.asPath.length) : loc;
  const exactTo = to.length > 4 ? to.slice(3 - to.length) : to.slice(-2);
  // console.log("exact: ", exactPath, "to: ", to);
  console.log("exact: ",exactPath, "to: ",exactTo,"loc: ",loc)
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
    <a href={to} onClick={handleClick} className={exactPath === exactTo ? "navbar__link--active" : "navbar__link"} style={style}>
      {stateText}
    </a>
  );
};

export default ActiveNavLink;
