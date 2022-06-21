import { tokenToCSSVar } from "@chakra-ui/styled-system";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react"; 
import firebase from 'firebase/app';
import ApiManager from "../config/apiManager";
import config from "../config/config";
import firebaseApp from '../firebase'
const StateContext = createContext({
  authenticated: false,
  user: null,
  merchant: null,
  loading: true,
  fcmToken:'',
  pages:''
});

let apiManager = ApiManager.getInstance();

const DispatchContext = createContext(null);
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "AUTHENTICATED":
      return {
        ...state,
        authenticated: true,
        user: payload,
        
      };
    case "SET_MERCHANT":
      return {
        ...state,
        merchant: payload,
      };
    case "LOGOUT":
      return { ...state, authenticated: false, user: null };
    case "STOP_LOADING":
      return { ...state, loading: false };
      case "SET_PAGES":
        return { ...state, pages: payload };
    default:
      throw new Error(`Unknow action type: ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  //const isInitialMount = useRef(true);
  const [state, defaultDispatch] = useReducer(reducer, {
    user: null,
    authenticated: false,
    loading: true,
    merchant: null,
    pages:''
  });

  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  const sendSessionToServer = async (fcmToken,token) => {
    console.log('ajaa',token)
    let session = await localStorage.getItem("mdgSession");
    let savedUser = await localStorage.getItem("user");
    // let parseSavedUser = JSON.parse(savedUser);
    let currentUser = await localStorage.getItem("currentUser");
    let currentMerchant = await localStorage.getItem("currentMerchant");
    let parsedCurrentMerchant = "";
    try {
      parsedCurrentMerchant =
        currentMerchant !== undefined || currentMerchant !== "undefined"
          ? JSON.parse(currentMerchant)
          : "";
    } catch (e) {}
    console.log("currentMerchant", currentMerchant);
    let parsedCurrentUser = JSON.parse(currentUser);

    if (session) {
      let body = {
        fcmKey: token,
        sessionId: session && session,
      };
      apiManager.updateSession(body, (responce) => {

        if (responce === false) {
          apiManager.createSession(body.fcmKey, (response) => {
            if (response) {
              dispatch("STOP_LOADING");
              // user ? apiManager._setToken(users.email, users.token) : null;
            }
          });
        }
        console.log("body", body);

        let { user, authenticated } = state;
        if (!authenticated && user === null) {
          dispatch("AUTHENTICATED", parsedCurrentUser);
          dispatch("SET_MERCHANT", parsedCurrentMerchant);
          dispatch("STOP_LOADING");
          // apiManager._setToken(parseSavedUser.email, parseSavedUser.token);
        }
      });
    } else {
      let body = {
        fcmKey:token,
        // fcmToken:token
      };
      apiManager.createSession(body.fcmKey, (response) => {
        console.log("response.message", body.fcmKey);
        if (response) {
          // user ? apiManager._setToken(users.email, users.token) : null;
          dispatch("STOP_LOADING"); 
        }
      });
    }
  };

  // const reloadAppState = async () => {
  //   let savedUser = await localStorage.getItem("user");
  //   let parsedUser = JSON.parse(savedUser);
  //   console.log("parsedUser", parsedUser);
  //   console.log("app state", state);
  //   dispatch("AUTHENTICATED", state.user);
  // };

  useEffect(async () => {
    let msg = null
    if (firebase.messaging.isSupported()){
      msg = firebaseApp.messaging();
  }
    let messaging = null;

    let fcToken=''
    if(msg){
   msg.getToken({ vapidKey: 'BCuBqEFv_CPV7UNxK1VCFfR2Xe4nnxHOv3TNJV3_y-b0UrJUCDwWeMBtwD9NrACe0RZocbHaYizJWeSOyk8pdjo' }).then((token)=>{
      fcToken=token
      sendSessionToServer( config.fcmKey,token);

   }).catch(error=>{console.log('firebaseError',error)
   ;
   sendSessionToServer( config.fcmKey,'222430');

  })
   msg.onMessage(response=>{
     console.log('response is',response)
   })
  } else{
    sendSessionToServer( config.fcmKey,'222430');
  } }, []);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     reloadAppState();
  //     console.log("reloadAppState called");
  //   }
  // }, [state, dispatch]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);

////////////////////////////////////////////////////////////////

// import { createContext, useContext, useEffect, useReducer } from "react";
// import ApiManager from "../config/apiManager";
// import config from "../config/config";

// const StateContext = createContext({
//   authenticated: false,
//   user: null,
//   merchant: null,
//   loading: true,
// });

// let apiManager = ApiManager.getInstance();

// const DispatchContext = createContext(null);

// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case "AUTHENTICATED":
//       return {
//         ...state,
//         authenticated: true,
//         user: payload,
//       };
//     case "SET_MERCHANT":
//       return {
//         ...state,
//         merchant: payload,
//       };
//     case "LOGOUT":
//       return { ...state, authenticated: false, user: null };
//     case "STOP_LOADING":
//       return { ...state, loading: false };
//     default:
//       throw new Error(`Unknow action type: ${type}`);
//   }
// };

// export const AuthProvider = ({ children }) => {
//   //const isInitialMount = useRef(true);
//   const [state, defaultDispatch] = useReducer(reducer, {
//     user: null,
//     authenticated: false,
//     loading: true,
//     merchant: null,
//   });

//   const dispatch = (type, payload) => defaultDispatch({ type, payload });

//   const sendSessionToServer = async (fcmToken = config.fcmKey) => {
//     let session = await localStorage.getItem("mdgSession");
//     // let savedUser = await localStorage.getItem("user");
//     // let parseSavedUser = JSON.parse(savedUser);
//     let currentUser = localStorage.getItem("currentUser");
//     let currentMerchant = localStorage.getItem("currentMerchant");
//     let parsedCurrentMerchant = "";
//     try {
//       parsedCurrentMerchant =
//         currentMerchant !== undefined || currentMerchant !== "undefined"
//           ? JSON.parse(currentMerchant)
//           : "";
//     } catch (e) {}
//     console.log("currentMerchant", currentMerchant);
//     let parsedCurrentUser = JSON.parse(currentUser);

//     console.log("authContent=session", session);
//     if (session) {
//       let body = {
//         fcmKey: fcmToken,
//         sessionId: session && session,
//       };

//       apiManager.updateSession(body, (response) => {
//         console.log("response", response, "body", body);
//         if (response === false) {
//           console.log("response", response);
//           apiManager.createSession(fcmToken, (response) => {
//             if (response) {
//               dispatch("STOP_LOADING");
//               // user ? apiManager._setToken(users.email, users.token) : null;
//             }
//           });
//         }

//         let { user, authenticated } = state;
//         if (!authenticated && user === null) {
//           dispatch("AUTHENTICATED", parsedCurrentUser);
//           dispatch("SET_MERCHANT", parsedCurrentMerchant);
//           dispatch("STOP_LOADING");
//           // apiManager._setToken(parseSavedUser.email, parseSavedUser.token);
//         }
//       });
//     } else {
//       apiManager.createSession(fcmToken, (response) => {
//         console.log("response.message", response);
//         if (response) {
//           // user ? apiManager._setToken(users.email, users.token) : null;
//           dispatch("STOP_LOADING");
//         }
//       });
//     }
//   };

//   // const reloadAppState = async () => {
//   //   let savedUser = await localStorage.getItem("user");
//   //   let parsedUser = JSON.parse(savedUser);
//   //   console.log("parsedUser", parsedUser);
//   //   console.log("app state", state);
//   //   dispatch("AUTHENTICATED", state.user);
//   // };

//   useEffect(async () => {
//     sendSessionToServer();
//   }, []);

//   // useEffect(() => {
//   //   if (isInitialMount.current) {
//   //     isInitialMount.current = false;
//   //   } else {
//   //     reloadAppState();
//   //     console.log("reloadAppState called");
//   //   }
//   // }, [state, dispatch]);

//   return (
//     <DispatchContext.Provider value={dispatch}>
//       <StateContext.Provider value={state}>{children}</StateContext.Provider>
//     </DispatchContext.Provider>
//   );
// };

// export const useAuthState = () => useContext(StateContext);
// export const useAuthDispatch = () => useContext(DispatchContext);
