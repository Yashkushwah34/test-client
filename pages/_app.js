import { useEffect } from "react";
import LayoutComponent from "../components/HOC/LayoutComponent";
import store from "../redux/store";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { gettingUserInfo } from "../redux/actions/authentication";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) {
      store.dispatch(gettingUserInfo(token));
    }
  }, [token]);

  return (
    <Provider store={store}>
      <LayoutComponent>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}

export default MyApp;
