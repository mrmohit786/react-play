import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./Components/ErrorBoundaries";
import Loading from "./Components/Loading";
import Header from "./Components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
