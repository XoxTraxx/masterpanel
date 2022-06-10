import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// import "./styles.css";

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

function ICss() {
  let location = useLocation();
  let dataCss = location?.dataCss;

  // console.log("location Css=>", dataCss);
  return {
    __css: dataCss,
  };
}
let aray = [];

export default function NativeHtmlView() {
  let location = useLocation();
  const containerRef = React.useRef();

  React.useEffect(() => {
    let dataCss = location?.dataCss;
    console.log("location Css=>", dataCss);
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

  // let classname = "App";
  // if (this.props.isActive) {
  //   classname += "menu-active";
  // }

  return (
    <div className={aray}>
      {aray}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={IFame()}
        className={aray}
      />
    </div>
  );
}
