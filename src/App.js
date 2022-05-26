import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundaries";
import Loading from "./Components/Loading";
import PageNotFound from "./Components/PageNotFound";
import UseEffectExample from "./Examples/Hooks/UseEffectExample";
import UseMemoExample from "./Examples/Hooks/UseMemoExample";
import UseReducerExample from "./Examples/Hooks/UseReducerExample";
import UseRefExample from "./Examples/Hooks/UseRefExample";
import UseStateExample from "./Examples/Hooks/UseStateExample";
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
        <header>
          <nav>
            <h2>React Playground</h2>
          </nav>
        </header>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="hooks/" element={<Hooks />}>
                <Route path="UseState" element={<UseStateExample />} />
                <Route path="UseEffect" element={<UseEffectExample />} />
                <Route path="UseReducer" element={<UseReducerExample />} />
                <Route path="UseMemo" element={<UseMemoExample />} />
                <Route path="UseRef" element={<UseRefExample />} />
              </Route>
              <Route path="reduxSetup" element={<Redux />} />
              <Route path="reduxToolkitSetup" element={<ReduxToolkit />} />
              <Route path="contextApi" element={<ContextApi />} />
              <Route
                path="higherOrderComponent"
                element={<HigherOrderComponent />}
              />
              <Route path="googleMaps" element={<GoogleMaps />} />
              <Route path="googlePage" element={<GooglePage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
