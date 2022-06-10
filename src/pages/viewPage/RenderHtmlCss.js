import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
// import "./styles.css";

let aray = [];
export default function RenderHtmlCss() {
  let location = useLocation();
  const containerRef = React.useRef();

  React.useEffect(() => {
    let dataCss = location?.dataCss;
    const allClasses = document.getElementsByClassName(dataCss);
    console.log("allClasses", allClasses);
    for (var i = 0, len = allClasses.length; i < len; i++) {
      console.log("iiiiiiiiiiiiiiiiiii", allClasses[i]);
      aray.push(allClasses[i]);
    }
  }, []);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.firstElementChild?.classList?.add("className");
    }
  });

  console.log(ICss().__css, "containerRef=>", containerRef);
  console.log("arayaray=>", aray);

  return (
    <div __css={ICss().__css}>
      <div>{ReactHtmlParser(IFame().__html)}</div>
      {aray}
    </div>
  );
}
function ICss() {
  let location = useLocation();
  let dataCss = location?.dataCss;

  // console.log("location Css=>", dataCss);
  return {
    __css: dataCss,
  };
}

function IFame() {
  let location = useLocation();
  let dataCss = location?.dataCss;
  let data = location?.data;
  // console.log("location data=>", data);
  return {
    __html: data,
    __css: dataCss,
  };
}
