import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./Components/ErrorBoundaries";
import Loading from "./Components/Loading";
import AppRoutes from "./routes";
import StyledHeader from "./Components/StyledComponents/StyledHeader";

function App() {
  return (
    <ErrorBoundary>
      <StyledHeader title="React Playground" />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
