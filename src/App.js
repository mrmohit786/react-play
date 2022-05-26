import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundaries";
import Loading from "./Components/Loading";
import PageNotFound from "./Components/PageNotFound";
import Home from "./pages/Home";

const Hooks = lazy(() => import("./Examples/Hooks"));
const GoogleMaps = lazy(() => import("./Examples/GoogleMapsIntegration"));
const HigherOrderComponent = lazy(() =>
  import("./Examples/HigherOrderComponent")
);
const ContextApi = lazy(() => import("./Examples/ContextApi"));
const Redux = lazy(() => import("./Examples/ReduxSetup"));
const ReduxToolkit = lazy(() => import("./Examples/ReduxToolkitSetup"));
const GooglePage = lazy(() => import("./Examples/CssWorks/GooglePage"));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/reduxSetup" element={<Redux />} />
              <Route path="/reduxToolkitSetup" element={<ReduxToolkit />} />
              <Route path="/contextApi" element={<ContextApi/>}/>
              <Route path="/higherOrderComponent" element={<HigherOrderComponent/>}/>
              <Route path="/googleMaps" element={<GoogleMaps/>}/>
              <Route path="/googlePage" element={<GooglePage/>}/>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
