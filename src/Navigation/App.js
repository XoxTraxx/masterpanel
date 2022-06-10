import React, { Suspense } from "react";
import SlideBar from "../components/common/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import ApiManager from "../config/apiManager";
import { useDispatch, useSelector } from "react-redux";
import NotificationDetail from "../components/Notification/NotificationDetail";
// import ClientForm from '../pages/ClientForm'
import ReactTemplate from "../pages/ReactTemplate";
import allActions from "../actions/allActions";
import { usePastDelay, lazy } from "react-lazy-no-flicker";
import HbsPage from "../pages/viewPage/CheckingHtml.js";
import AddPageInformation from "../pages/AddPageInformation";

const App = () => {
  const state = useSelector((state) => state);
  console.log("state", state?.pageReducer);
  const dispatch = useDispatch();
  const apiManager = ApiManager.getInstance();
  const HomeScreen = lazy(() => import("../pages/Home"));
  const ClientsScreen = lazy(() => import("../pages/Clients"));
  const ClientInfoScreen = lazy(() => import("../pages/ClientInfo"));
  const FormList = lazy(() => import("../pages/FormList"));
  const ClientList = lazy(() => import("../pages/ClientList"));
  const RenderHtmlCss = lazy(() => import("../pages/viewPage/RenderHtmlCss"));
  const viewPage = lazy(() => import("../pages/viewPage/ViewPage"));
  const CompanySalesDetailsScreen = lazy(() =>
    import("../pages/CompanySalesDetails")
  );
  const pageInfo = lazy(() => import("../pages/AddPageInformation"));

  const PageList = lazy(() => import("../pages/PageList"));

  const UpdateProfileScreen = lazy(() => import("../pages/UpdateProfile"));
  const AllIndustriesCompareScreen = lazy(() =>
    import("../pages/AllIndustriesCompare")
  );
  const ProductivityBasedIndustriesScreen = lazy(() =>
    import("../pages/ProductivityBasedIndustries")
  );
  const ClientForm = lazy(() => import("../pages/ClientForm"));

  const ClientForm2 = lazy(() => import("../pages/ClientForm2"));
  const FormEditor = lazy(() => import("../pages/FormEditor"));
  const FormGenerator = lazy(() => import("../pages/FormGenerator"));
  const Component = () => {
    const past_delay = usePastDelay();
    if (!past_delay) return null;
    return <Spinner />;
  };

  const getPages = () => {
    apiManager
      .get("getPages")
      .then((response) => {
        console.log("getPages", response);
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
      .post("getForms")
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
  React.useEffect(() => {
    getPages();
    getforms();
  }, []);
  const NotificationDetail = lazy(() =>
    import("../components/Notification/NotificationDetail")
  );

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
              {state?.pageReducer?.pages.lenght
                ? state?.pageReducer?.pages.map((item, index) => {
                    return (
                      <Route key={index}>
                        <ReactTemplate path={item.path} html={item.html} />
                      </Route>
                    );
                  })
                : null}
              <Route path="/FormGenerator" component={FormGenerator} exact />
              <Route path="/ViewPage" component={viewPage} exact />
              <Route path="/RenderHtmlCss" component={RenderHtmlCss} exact />
              <Route path="/CheckingHtml" component={HbsPage} exact />
            </Switch>
          </div>
        </SlideBar>
      </Suspense>
    </Router>
  );
};

export default App;
