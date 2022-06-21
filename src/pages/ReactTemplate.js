import React from "react";
import { Helmet } from "react-helmet";
import HtmlParser from "react-html-parser";
export default function ReactTemplate({ html, path, css, meta ,seo}) {
  let aray = [];
  const IFame = () => {
    let dataCss = css;
    let data = html;
    return {
      __html: data,
      __css: dataCss,
    };
  };

  React.useEffect(() => {
    let dataCss = css;
    const allClasses = document.getElementsByClassName(dataCss);
    for (var i = 0, len = allClasses.length; i < len; i++) {
      aray.push(allClasses[i]);
    }
  }, []);
  console.log('jeelo check', IFame().__html);

  return (
    <html>
      <head>
        <title>Server Rendered App</title>
        <style>{IFame().__css}</style>
      </head>
      <body>
        {HtmlParser(IFame().__html)}
        <script src="/build/client.entry.js" />
        <Helmet>
          <meta name={meta?.name} content={meta?.description}></meta>
          <meta name={seo?.name} content={seo?.description}></meta>
        </Helmet>
      </body>
    </html>
  );
}
