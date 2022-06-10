import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { Editor } from "../components/TextEditor";
import ApiManager from "../../src/config/apiManager";
import LangContext from "../context/languageContext";
import allActions from "../actions/allActions";
import grapesjs from 'grapesjs'
import  'grapesjs/dist/css/grapes.min.css'
import  'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
const Home = () => {
  const dispatch = useDispatch();
  const apimanager = ApiManager.getInstance();
  const { currentLangData } = React.useContext(LangContext);

 const  getAllMerchant = () => {
  apimanager
  .post(currentLangData.apis.getAllMerchants, {})
  .then((response) => {
    if(response.message === 6227){
      dispatch(allActions.merchantsAction.setMerchants(response.data.data))
    }
    console.log("getAllMerchant", response);
  })
  .catch((error) => {
    console.log(error);
  });

  };
  
  // const editor= grapesjs.init({
  //   container:'#gjs',
  //   plugins:['gjs-preset-webpage']
  // })
     
  React.useEffect(()=>{
    getAllMerchant()
  //   grapesjs.init({
  //     container:'#gjs',
  //     plugins:['gjs-preset-webpage']
  //   })
   })
  // console.log('hello',editor.Commands.get('cmdInlineHtml'))

  return (
    <>
    {/* <div id={'gjs'}>
      <div></div>
    </div> */}
    <Editor />
    </>
  );
};
export default Home;
