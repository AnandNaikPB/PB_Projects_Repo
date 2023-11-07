import apiClient, { setHeader, setCookie } from "../../utils/apiClient";
import { addSession } from "../../utils/sessionManagement";
import { apiBegin, apiFailure, apiSuccess } from "../action/apiAction";
import { loginCall, loginFailure, loginSuccess } from "../action/loginActions";
import { apiConfig } from "../apiConfig/loginApiConfig";
import { toast } from "react-toastify";

export const startLogin = (payload) => (dispatch) => {
  const apiPayload = { ...apiConfig.LOGIN };
  // apiPayload.data.name = payload.name;
  apiPayload.data.email = payload.email;
  apiPayload.data.password = payload.password;
  dispatch(apiBegin());
  dispatch(loginCall());
  apiClient(apiPayload)
    .then((res) => {
      dispatch(loginSuccess(res));
      addSession(res?.data);
      setHeader(res?.data?.token);
      // setCookie(res?.data?.Cookie);
      dispatch(apiSuccess());
      toast.success("You have successfully logged in");
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailure(err));
      dispatch(apiFailure(err));
      toast.error(
        err.response.data.msg || "Something went wrong please try again"
      );
    });
};
