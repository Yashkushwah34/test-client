import React, { useEffect } from "react";
import { useRouter } from "next/router";

const LayoutComponent = (props) => {
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const tokenRoutes = ["/signup", "/login"];
    if (!token && !tokenRoutes.includes(router.asPath)) {
      router.replace("/login");
    } else {
      if (token && tokenRoutes.includes(router.asPath)) {
        router.replace("/");
      }
    }
  }, [router, token]);

  return <>{props.children}</>;
};

export default LayoutComponent;
