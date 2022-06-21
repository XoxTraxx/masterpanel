import React, { Suspense } from "react";
// import ClientForm from '../pages/ClientForm'
import Help from '../pages/Help'
import HomeScreen  from '../pages/Home'
import FormList from '../pages/FormList'
import  Preview from  "../pages/Preview";
import  PageList from  "../pages/PageList";
import ClientList from '../pages/ClientList'
import ClientsScreen from '../pages/Clients'
import FormMaker from "../pages/FormBuilder";
import ApiManager from "../config/apiManager";
import allActions from "../actions/allActions";
import { Spinner } from "../components/Spinner";
import pageInfo from '../pages/AddPageInformation'
import ClientInfoScreen from '../pages/ClientInfo'
import SlideBar from "../components/common/sidebar";
import { useDispatch, useSelector } from "react-redux";
import HbsPage from "../pages/viewPage/CheckingHtml.js";
import { usePastDelay, lazy } from "react-lazy-no-flicker";
import AllIndustriesCompareScreen from '../pages/AllIndustriesCompare'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductivityBasedIndustriesScreen from '../pages/ProductivityBasedIndustries'

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const apiManager = ApiManager.getInstance();
  // const HomeScreen = lazy(() => import("../pages/Home"));
  // const ClientsScreen = lazy(() => import("../pages/Clients"));
  // const ClientInfoScreen = lazy(() => import("../pages/ClientInfo"));
  // const FormList = lazy(() => import("../pages/FormList"));
  // const ClientList = lazy(() => import("../pages/ClientList"));
  const RenderHtmlCss = lazy(() => import("../pages/viewPage/RenderHtmlCss"));
  const viewPage = lazy(() => import("../pages/viewPage/ViewPage"));
  const CompanySalesDetailsScreen = lazy(() =>
    import("../pages/CompanySalesDetails")
  );
  const FormEditor = lazy(() => import("../pages/FormEditor"));
  const ClientForm = lazy(() => import("../pages/ClientForm"));
  const ClientForm2 = lazy(() => import("../pages/ClientForm2"));
  const FormGenerator = lazy(() => import("../pages/FormGenerator"));
  const UpdateProfileScreen = lazy(() => import("../pages/UpdateProfile"));
  const NotificationDetail = lazy(() => import("../components/Notification/NotificationDetail")
);
  const Component = () => {
    const past_delay = usePastDelay();
    if (!past_delay) return null;
    return <Spinner />;
  };

  const getPages = () => {
    apiManager
      .get("getPages")
      .then((response) => {
        console.log("getPages", state?.pageReducer.pages);
        if (response.message === 6575) {
          dispatch(allActions.pageAction.setPages(response.result));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getforms = () => {
    apiManager
      .get("getForms")
      .then((response) => {
        console.log("getforms", response);
        if (response.message === 6579) {
          dispatch(allActions.pageAction.setFroms(response.result));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
      <Suspense fallback={<Component />}>
        <SlideBar>
          <div>
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/Home" component={HomeScreen} exact />
              <Route path="/Clients" component={ClientsScreen} exact />
              <Route
                path="/UpdateProfile"
                component={UpdateProfileScreen}
                exact
              />
              <Route
                path="/AllIndustriesCompare"
                component={AllIndustriesCompareScreen}
                exact
              />
               <Route
                path="/FormBuilder"
                component={FormMaker}
                exact
              />
              <Route
                path="/ProductivityBasedIndustries"
                component={ProductivityBasedIndustriesScreen}
                exact
              />
              <Route path="/ClientInfo" component={ClientInfoScreen} exact />

              <Route
                path="/CompanySalesDetails"
                component={CompanySalesDetailsScreen}
                exact
              />

              <Route path="/ClientFormPdf" component={ClientForm} exact />
              <Route path="/ClientForm2" component={ClientForm2} exact />
              <Route path="/FormList" component={FormList} exact />
              <Route path="/FormEditor" component={FormEditor} exact />
              <Route path="/ClientList" component={ClientList} exact />
              <Route
                path="/NotificationDetail"
                component={NotificationDetail}
                exact
              />
              <Route
                path="/AddPageInformation"
                component={pageInfo}
                exact />

              <Route path="/PageList" component={PageList} exact />
              <Route path="/FormGenerator" component={FormGenerator} exact />
              <Route path="/ViewPage" component={viewPage} exact />
              <Route path="/RenderHtmlCss" component={RenderHtmlCss} exact />
              <Route path="/CheckingHtml" component={HbsPage} exact />
              <Route path="/Preview" component={Preview} exact />
              <Route path="/Help" component={Help} exact />

              {/* {state?.pageReducer?.pages
                ? state?.pageReducer?.pages.map((item, index) => {
                  console.log('state?.pageReducer.pages',item)
                    return (
                      <Route key={index}>
                        <ReactTemplate path={item.path} html={item.html} />
                      </Route>
                    );
                  })
                : null} */}
            </Switch>
          </div>
        </SlideBar>
      </Suspense>
    </Router>
  );
};

export default App;
