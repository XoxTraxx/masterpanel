import React, { useEffect, useRef, useState } from "react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Spinner } from "../src/components/Spinner";
import { Provider } from "react-redux";
import "firebase/messaging";
import "react-form-builder2/dist/app.css";
import firebaseApp from "./firebase";
import firebase from 'firebase/app';
import { ToastContainer, toast } from "react-toastify";
import { useToast } from "@chakra-ui/toast";
import NotificationSystem from "react-notification-system";
import ApiManager from "../src/config/apiManager";
// import messaging from "../../trax_master_panel/public/firebase-messaging-sw";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import {
  Center,
  ChakraProvider,
  CircularProgress,
  extendTheme,
  CircularProgressLabel,
} from "@chakra-ui/react";

import store from "./store/store";
// import firebaseApp  from './firebase'
import SubAdminApp from "../src/Navigation/subAdmin";
import { LangProvider } from "./context/languageContext";
import {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
} from "./context/authContext";
import MainApp from "./Navigation/App";
import AuthApp from "./Navigation/Auth";
import { Fonts } from "./components/fonts";
import reactDom from "react-dom";
//import backgroundNotification from __dirname +'public/firebase-messaging-sw';
console.log("__dirname ", window.location);
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  breakpoints,
});
const notificationSystem = React.createRef();

const addNotification = (data) => {
  const notification = notificationSystem.current;
  notification.addNotification({
    message: data.notification.body,
    level: "success",
    title: data.notification.title,
  });
};

const AppContainer = () => {
  const isInitialMount = useRef(true);
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  const reloadAppState = async () => {
    let savedUser = await localStorage.getItem("user");
    let session = await localStorage.getItem("mdgSession");
  };

  useEffect(async () => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      reloadAppState();
    }
  }, [authState, dispatch]);

  if (authState.loading) {
    console.log("loading", authState.loading);
    return (
      <Center marginTop={40}>
        <Spinner />
      </Center>
    );
  } else {
    if (authState?.authenticated && authState?.user?.role === 4) {
      return <MainApp />;
    } else if (authState?.authenticated && authState?.user?.role === 3) {
      return <SubAdminApp />;
    } else if (authState?.user === null) {
      return <AuthApp />;
    }
  }
  return <AuthApp />;
};

export default function App() {
  const apiManager = ApiManager.getInstance();
  var style = {
    NotificationItem: {
      // Override the notification item
      DefaultStyle: {
        // Applied to every notification, regardless of the notification level
        margin: "10px 5px 2px 1px",
        // backgroundColor:'#60c9ca'
      },

      success: {
        // Applied only to the success notification item
        // color: 'white',
      },
    },
  };

  useEffect(() => {
    let msg = null;
    if (firebase.messaging.isSupported()){
      msg = firebaseApp.messaging()
  } 
  if(msg)   
  {
   msg
      .getToken({
        vapidKey:
          "BCuBqEFv_CPV7UNxK1VCFfR2Xe4nnxHOv3TNJV3_y-b0UrJUCDwWeMBtwD9NrACe0RZocbHaYizJWeSOyk8pdjo",
      })
      .then((token) => {
         console.log("a gyaa", token);
      })
      .catch((error) => console.log("firebaseError", error));
    msg.onMessage((response) => {
      console.log("firebase msg token", response);
      addNotification(response);
    });
    // msg.onBackgroundMessage((res) =>{
    //  console.log('JALEEL')
    // })

    global.onBackgroundMessage = (payload) => {
      console.log("message from global");

      addNotification(payload);
    };
    console.log("window", window);
  }});
  global.foo = () => {
    alert("hello");
  };
  const authState = useAuthState();

  console.log("authState", authState);
  return (
    <AuthProvider>
      <LangProvider>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Fonts />
            <AppContainer />
            <ToastContainer />
          </ChakraProvider>
          <NotificationSystem style={style} ref={notificationSystem} />
        </Provider>
      </LangProvider>
    </AuthProvider>
  );
}
