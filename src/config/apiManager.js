import Config from "./config";
import CryptoJS from "crypto-js";

export const Api_name = {
  login: "login",
  getUser: "getUser",
  getLuckyDraw: "getLuckyDraw",
  addLuckyDraw: "addLuckyDraw",
  createSession: "createSession",
  updateSession: "updateSession",
  updateMerchant: "updateMerchant",
  getAllMerchants: "getAllMerchants",
  DeleteLuckyDraw: "deleteLuckyDraw",
  UpdateLuckyDraw: "updateLuckyDraw",
  registerMerchant: "registerMerchant",
};

const MDG = "mdg";
export default class ApiManager {
  static POST = "POST";
  static GET = "GET";
  static DELETE = "DELETE";
  static PUT = "PUT";
  static singleton = null;

  trax_session_id = null;
  token = null;

  //returns instance of this class
  static getInstance() {
    if (ApiManager.singleton == null) {
      ApiManager.singleton = new ApiManager();
    }
    return ApiManager.singleton;
  }

  //this will create a session in ApiManager
  createSession(fcmKey, callback = this.defaultCallback) {
    //call createSession api here to set the mdg sessionid
    this.put("createSession", { fcmKey })
      .then((response) => {
        this._setSessionID(response.session.sessionId);
        callback(true);
      })
      .catch((error) => {
        console.log(error);
        callback(false);
      });
  }

  //this will update session in ApiManager
  updateSession(fcmSessionBody, callback = this.defaultCallback) {
    console.log("update session params => ", fcmSessionBody);
    //call updateSession api here to uodate the mdg sessionid
    this.post("updateSession", fcmSessionBody)
      .then((response) => {
        console.log("update session response => ", response);
        this._setSessionID(response.session.sessionId);
        callback(response);
      })
      .catch((error) => {
        console.log("error while updating session => ", error);
        callback(false);
      });
  }

  //this will get notification count
  getNotificationCount(callback = this.defaultCallback) {
    this.get("getNotificationsCount", {})
      .then((response) => {
        callback(response);
      })
      .catch((_error) => {
        callback(false);
      });
  }

  //this is a default callback. no need to add anything in this. can be used for testing purpose
  defaultCallback = (response) => {};

  API_WO_LOGIN = [
    "getAllPosts",
    "getDrops",
    "getEcommercePosts",
    "getChannelPosts",
    "getPostComments",
    "getCommentReplies",
    "get_product_detail",
    "get_trending_products",
    "get_latest_products",
    "get__merchant_products",
    "getHashTagPosts",
    "getPersonFollowers",
    "getPersonFollowing",
    "getPostDetails",
    "getPersonChannel",
    "getTaggedPosts",
    "getLikedPosts",
  ];

  CORRESPONDING_API_W_LOGIN = [
    "getUserAllPosts",
    "getUserDrops",
    "getUserEcommercePosts",
    "getUserChannelPosts",
    "getUserPostComments",
    "getUserCommentReplies",
    "get_user_product",
    "get_user_trending_products",
    "get_user_latest_products",
    "get_user_merchant_products",
    "getUserHashTagPosts",
    "getUserPersonFollowers",
    "getUserPersonFollowing",
    "getUserPostDetails",
    "getUserPersonChannel",
    "getUserTaggedPosts",
    "getUserLikedPosts",
  ];

  BEFORE_LOGIN = [
    "login",
    "facebookLogin",
    "googleLogin",
    "updateSession",
    "getReportReasons",
    "createSession",
  ];

  //Use this function to make post calls to the server
  post = (endpoint, body, type = MDG) => {
    return new Promise((resolve, reject) => {
      let endpointUrl = this.generateEndpointUrl(endpoint, type);
      this._callServer(endpointUrl, body, ApiManager.POST)
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Use this function to make get calls to the server
  get = (endpoint, params, type = MDG) => {
    return new Promise((resolve, reject) => {
      let endpointUrl =
        this.generateEndpointUrl(endpoint, type) +
        this.convertToGetParams(params);
      this._callServer(endpointUrl, null, ApiManager.GET)
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Use this function to make get calls to the server
  getDrops = (endpoint, params, type = MDG) => {
    return new Promise((resolve, reject) => {
      let endpointUrl = this.generateEndpointUrl(endpoint, type);
      this._callServer(endpointUrl, null, ApiManager.GET)
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Use this function to make put calls to the server
  put = (endpoint, body, type = MDG) => {
    return new Promise((resolve, reject) => {
      let endpointUrl = this.generateEndpointUrl(endpoint, type);
      this._callServer(endpointUrl, body, ApiManager.PUT)
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Use this function to make delete calls to the server
  delete = (endpoint, body, type = MDG) => {
    return new Promise((resolve, reject) => {
      let endpointUrl = this.generateEndpointUrl(endpoint, type);
      this._callServer(endpointUrl, body, ApiManager.DELETE)
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //generate the url for the specific endpoint
  generateEndpointUrl = (endpoint, type) => {
    //Check if user logged in
    // this logic is for when endpoint is getHastTag/hashTag
    let words = endpoint.split("/");
    endpoint = words[0];
    if (
      this.BEFORE_LOGIN.includes(endpoint) === false &&
      this.API_WO_LOGIN.includes(endpoint) === true
    ) {
      endpoint = this._checkLoginStatus(endpoint);
      if (words.length >= 2) {
        let after = endpoint.split("?");
        let params = "";
        words.forEach((w, i) => {
          if (i === 0) params = endpoint + "/";
          else params += w + "/";
        });
        endpoint =
          params.substr(0, params.length - 1) +
          (after[1] ? "?" + after[1] : "");
      }
    } else if (words.length >= 2) {
      let params = "";
      words.forEach((w, i) => {
        if (i === 0) params = endpoint + "/";
        else params += w + "/";
      });
      endpoint = params.substr(0, params.length - 1);
    }
    switch (type) {
      case MDG:
        return Config.mdg_api_url + endpoint;
        default:
        return Config.mdg_api_url + endpoint;
      // case CHAT:
      // return Config.chat_api_url + endpoint;
    }
  };

  //convert object to GET params
  convertToGetParams = (params) => {
    let getParams = "";
    for (var key in params) {
      if (getParams !== "") {
        getParams += "&";
      }
      getParams += key + "=" + params[key];
    }
    return "?" + getParams;
  };

  //Make the actual call to server here. this should not be called from outside this class
  _callServer = async (endpoint, body = null, method = ApiManager.GET) => {
    let parseSavedUser = await localStorage.getItem("user");
    parseSavedUser = JSON.parse(parseSavedUser);
    let rawStr = parseSavedUser?.email + ":" + parseSavedUser?.token;
    let wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    let base64 = CryptoJS.enc.Base64.stringify(wordArray);
    console.log("Endpoint: ", endpoint);
    //check if this api is called before login and is one of api with/without login

    return new Promise((resolve, reject) => {
      let headers = {};

      //if token is present then mdg_session_id will be there already
      if (base64) {
        headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Basic " + base64,
          "x-access-token": "" + base64,
          "trax-session-id": "" + this.trax_session_id,
        };
        //if token is not present but mdg_session_id is present
      } else if (this.trax_session_id) {
        headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Basic " + this.token,
          "trax-session-id": "" + this.trax_session_id,
        };
        //if there is no token and no mdg_session_id
      } else {
        headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
      }

      fetch(endpoint, {
        credentials: "include",
        method: method,
        headers: headers,
        body: body !== null ? JSON.stringify(body) : null,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("json in fetch: ", endpoint, json);
          if (
            json.message === "1003" ||
            json.message === "1004" ||
            json.message === 5014 ||
            json.message === 5067
          ) {
            reject(json.message);
          } else resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //sets the session id in the session
  _setSessionID = (sessionID) => {
    if (window !== undefined) {
      localStorage.setItem("mdgSession", sessionID);
      console.log("sessionID", sessionID);
      this.trax_session_id = sessionID;
    }
  };

  //gets the session id in the session
  _getSessionID = () => {
    return this.trax_session_id;
  };

  //sets the token in the session
  _setToken = (email, token) => {
    console.log("token", token);
    let rawStr = email + ":" + token;
    let wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    let base64 = CryptoJS.enc.Base64.stringify(wordArray);
    this.token = base64;
  };

  // setting token without encoded
  _setActualToken = (token) => (this.token = token);

  //return the token in the session
  _getToken = () => {
    return this.token;
  };

  //checks if user is loggedin and returns corresponding API
  _checkLoginStatus = (apiName) => {
    var params = "";
    var api = apiName.split("?")[0];

    if (apiName.split("?")[1]) params = "?" + apiName.split("?")[1];

    if (this.token) {
      if (this.API_WO_LOGIN.indexOf(api) === -1) {
        return api + params;
      } else {
        return (
          this.CORRESPONDING_API_W_LOGIN[this.API_WO_LOGIN.indexOf(api)] +
          params
        );
      }
    } else {
      return api + params;
    }
  };
}

