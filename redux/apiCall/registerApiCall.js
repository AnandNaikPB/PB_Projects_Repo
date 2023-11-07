import { toast } from "react-toastify";
import apiClient, { setHeader } from "../../utils/apiClient";
import { addSession } from "../../utils/sessionManagement";
import { apiBegin, apiFailure, apiSuccess } from "../action/apiAction";
import {
  registerCall,
  registerFailure,
  registerSuccess,
} from "../action/registerActions";
import { apiConfig } from "../apiConfig/registerApiConfig";

export const register = (payload) => (dispatch) => {
  const apiPayload = { ...apiConfig.REGISTER };
  apiPayload.data.name = payload.name;
  apiPayload.data.email = payload.email;
  apiPayload.data.password = payload.password;
  dispatch(apiBegin());
  dispatch(registerCall());
  apiClient(apiPayload)
    .then((res) => {
      dispatch(registerSuccess(res));
      dispatch(apiSuccess());
      toast.success("You have successfully registered");
    })
    .catch((err) => {
      console.log("err", err);
      dispatch(registerFailure(err));
      dispatch(apiFailure(err));
      toast.error(
        err.response.data.msg ||
          err.message ||
          "Something went wrong please try again"
      );
    });
};
