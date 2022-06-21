import React from "react";
import { FormBuilder } from "cb-react-forms";
import ApiManager from "../config/apiManager";
import { useHistory } from "react-router-dom";
// import { ReactFormBuilder } from 'react-form-builder2';
// import 'react-form-builder2/dist/app.css';
const FormMaker = () => {
  const history = useHistory();
  const [message, setMessage] = React.useState("");
  console.log("history", history);
  const addForm = () => {
    let body = {
      publish: "global",
      parent: history.location?.data?.parent,
      status: 1,
      javascript: "null",
      path: history.location?.data.name,
      // path:`{/${history.location?.data.pageName}}`,
      formName: history.location?.data.name,
    };
    apiManager
      .post("addForm", body)
      .then((response) => {
        if (response.message === 6577) {
          setMessage("Form Successfully Added");
        } else {
          setMessage("Some Thing Went Wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const apiManager = ApiManager.getInstance();
  var items = [{
    key: 'Header',
    name: 'Header Text',
    icon: 'fa fa-header',
    static: true,
    content: 'Placeholder Text...'
  },
  {
    key: 'Paragraph',
    name: 'Paragraph',
    static: true,
    icon: 'fa fa-paragraph',
    content: 'Placeholder Text...'
  }];
  return (
//  <ReactFormBuilder
//   url='path/to/GET/initial.json'
//   toolbarItems={items}
//   saveUrl='path/to/POST/built/form.json' />  
  <div></div>
  
  );
};

export default FormMaker;
