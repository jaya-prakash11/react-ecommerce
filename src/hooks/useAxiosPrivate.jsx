import { AxiosPrivate } from "../Redux/Api/api";
import useAuth from "./useAuth";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
function useAxiosPrivate() {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = AxiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accesstoken}`;
        }
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    const responseInterceptor = AxiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;

        if (err?.response?.status == 401 && !prevReq?.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return AxiosPrivate(prevReq);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      AxiosPrivate.interceptors.request.eject(requestInterceptor);

      AxiosPrivate?.interceptors?.response?.eject(responseInterceptor);
    };
  }, [auth, refresh]);

  return AxiosPrivate;
}

export default useAxiosPrivate;
