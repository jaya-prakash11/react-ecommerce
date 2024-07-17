import useAuth from "./useAuth";
import { AxiosPrivate } from "../Redux/Api/api";

function useRefreshToken() {
  const { auth, setAuth } = useAuth();

  const refreshToken = async () => {
    const response = await AxiosPrivate.post("/refresh-token", {
      refreshToken: auth.refreshtoken,
    });

    console.log("refereaaaaa", response);

    setAuth((prev) => {
      return {
        ...prev,
        accesstoken: response.data.access_token,
        refreshtoken: response.data.refresh_token,
      };
    });

    return response.data.access_token;
  };

  return refreshToken;
}

export default useRefreshToken;
