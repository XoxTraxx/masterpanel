import React from "react";
import HtmlParser from "react-html-parser";
import { Flex, Button } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

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

export default function App() {
  let location = useLocation();
  let history = useHistory();
  let aray = [];

  React.useEffect(() => {
    let dataCss = location?.dataCss;
    const allClasses = document.getElementsByClassName(dataCss);

    console.log("allClasses", allClasses);

    for (var i = 0, len = allClasses.length; i < len; i++) {
      console.log("iiiiiiiiiiiiiiiiiii", allClasses[i]);
      aray.push(allClasses[i]);
    }
  }, []);

  console.log("IFame()", IFame().__html);
  return (
    <>
      <Flex paddingBottom={2}>
        <SmallCloseIcon onClick={() => history.goBack()} />
      </Flex>
      <html>
        <head>
          <title>Server Rendered App</title>
          <style>{IFame().__css}</style>
        </head>
        <body>
          {/* <div dangerouslySetInnerHTML={IFame()}> */}

          {HtmlParser(IFame().__html)}
          {/* </div> */}
          <script src="/build/client.entry.js" />
        </body>
      </html>
    </>
  );
}
