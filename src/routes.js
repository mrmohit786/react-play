import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Home from "./pages/Home";
import Hooks from "./Examples/Hooks";
import ReduxHomePage from "./Examples/Redux";
import Examples from "./Examples";
import AxiosRequest from "./Examples/AxiosRequest";

// Hooks
const UseEffectExample = lazy(() =>
  import("./Examples/Hooks/UseEffectExample")
);
const UseMemoExample = lazy(() => import("./Examples/Hooks/UseMemoExample"));
const UseReducerExample = lazy(() =>
  import("./Examples/Hooks/UseReducerExample")
);
const UseRefExample = lazy(() => import("./Examples/Hooks/UseRefExample"));
const UseStateExample = lazy(() => import("./Examples/Hooks/UseStateExample"));

const GoogleMaps = lazy(() => import("./Examples/GoogleMapsIntegration"));
const HigherOrderComponent = lazy(() =>
  import("./Examples/HigherOrderComponent")
);

// Context API
const ContextApi = lazy(() => import("./Examples/ContextApi"));

// Redux
const ReduxSetup = lazy(() => import("./Examples/Redux/ReduxSetup"));
const ReduxToolkitSetup = lazy(() =>
  import("./Examples/Redux/ReduxToolkitSetup")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="hooks" element={<Hooks />}>
          <Route path="UseState" element={<UseStateExample />} />
          <Route path="UseEffect" element={<UseEffectExample />} />
          <Route path="UseReducer" element={<UseReducerExample />} />
          <Route path="UseMemo" element={<UseMemoExample />} />
          <Route path="UseRef" element={<UseRefExample />} />
        </Route>
        <Route path="redux" element={<ReduxHomePage />}>
          <Route path="ReduxSetup" element={<ReduxSetup />} />
          <Route path="ReduxToolkitSetup" element={<ReduxToolkitSetup />} />
        </Route>
        <Route path="contextApi" element={<ContextApi />} />
        <Route path="examples" element={<Examples />}>
          <Route
            path="higherOrderComponent"
            element={<HigherOrderComponent />}
          />
          <Route path="googleMaps" element={<GoogleMaps />} />
          <Route path="axiosRequest" element={<AxiosRequest />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
