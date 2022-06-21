import React, { useEffect } from "react";
import allActions from "../actions/allActions";
import { useLocation } from "react-router-dom";
import LangContext from "../context/languageContext";
import ApiManager from "../../src/config/apiManager";
import ClientsInfo from "../components/Clients/ClientsInfo";
import { useSelector,useDispatch } from "react-redux";
function ClientInfo() {
  const dispatch = useDispatch();
  const history = useLocation();
  const apimanager = ApiManager.getInstance();
  const { currentLangData } = React.useContext(LangContext);
  const getDepartment = (_id) => {
    let _merchatnId = {
      merchantId: _id
    };
    apimanager
      .post(currentLangData.apis.getDepartment, _merchatnId)
      .then((response) => {
        if (response.message === 6424) {
          dispatch(allActions.phaseAction.setPhases(response.result));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAdminNotifications = (_id) => {
    let _merchatnId = {
      merchantId: _id
    };
    apimanager
      .get(currentLangData.apis.getAdminNotifications)
      .then((response) => {
        console.log('getAdminNotifications',response)
        dispatch(allActions.notificationAction.setNotification(response.result))
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getClient = (_id) => {
    let _merchatnId = {
      merchantId: _id
    };
    apimanager
      .post(currentLangData.apis.getClient, _merchatnId)
      .then((response) => {
        dispatch(allActions.clientAction.getClient(response.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getManufacturedIn = (_id) => {
    let _merchatnId = {
      merchantId: _id,
    };
    apimanager
      .post(currentLangData.apis.getManufacturedIn, _merchatnId)
      .then((response) => {
        if (response.message === 6428) {
          dispatch(
            allActions.manufacturedaction.setManufacturedIn(response.result)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getIndustry = () => {
    apimanager
      .get(currentLangData.apis.getIndustry, {})
      .then((response) => {
        if (response.message === 6472) {
          dispatch(allActions.IndustryAction.setIndustry(response.result));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getPackedIn = (_id) => {
    let _merchatnId = {
      merchantId: _id
    };
    apimanager
      .post(currentLangData.apis.getPackedIn, _merchatnId)
      .then((response) => {
        if (response.message === 6432) {
          dispatch(allActions.packedIndAction.setPackedIn(response.result));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllProducts = (_id) => {
    let _merchatnId = {
      merchantId: _id
    };
    apimanager
      .post(currentLangData.apis.getAllProducts, _merchatnId)
      .then((response) => {
        console.log("_merchatnId", _merchatnId);
        if (response.message === 6222) {
          dispatch(
            allActions.productsAction.setProducts(response.products.docs)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMerchantDetail = () => {
    let _merchatnId = {
      _id: history?.state?._id,
    };
    apimanager
      .post(currentLangData.apis.getMerchantDetail, _merchatnId)
      .then((response) => {
        console.log("getMerchantDetail", response.user.merchantId);
        if (response.message === 6502) {
          getClient(response.user.merchantId);
          getIndustry(response.user.merchantId);
          getPackedIn(response.user.merchantId);
          getDepartment(response.user.merchantId);
          getAllProducts(response.user.merchantId);
          getManufacturedIn(response.user.merchantId);
          getAllSubscription(response.user.merchantId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllSubscription = (_id) => {
    let _merchatnId = {
      merchantId: _id,
    };
    apimanager
      .get(currentLangData.apis.getAllSubscription, _merchatnId)
      .then((response) => {
        console.log("getAllSubscription", response);
        if (response.message === 6512) {
          dispatch(
            allActions.subscriptionaction.getSubscription(response.result)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // getMerchantDetail();
    // getAdminNotifications()
  },[]);
  useEffect(()=>{
   getMerchantDetail();
    getAdminNotifications()
  },[])
  return (
    <React.Fragment>
      <ClientsInfo />
    </React.Fragment>
  );
}

export default  ClientInfo;
