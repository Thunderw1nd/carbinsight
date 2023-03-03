// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
} from "solid-start";
import { AppContextProvider } from "@/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/root.css";
import "uno.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          charset="utf-8"
          httpEquiv="Content-Security-Policy"
          content="script-src 'none'"
        />
      </Head>
      <Body>
        <div class="dark:bg-true-gray-9 light:bg-teal-8 transition-colors-300 min-h-screen font-sans">
          <ErrorBoundary>
            <AppContextProvider>
              <Suspense>
                <Header></Header>
                <main>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </main>
                <Footer></Footer>
              </Suspense>
            </AppContextProvider>
          </ErrorBoundary>
        </div>

        <Scripts />
      </Body>
    </Html>
  );
}
