import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ReactGA from "react-ga";
import * as Sentry from "@sentry/browser";
import PAGE from "../../define/path";

import { History } from "history";
import { instance } from "../../API/common";

type AxiosWrapperFlag = { errMsg?: boolean; errRedirect?: boolean };

Axios.defaults.validateStatus = () => true;

const handleErrorStatusAction = (res: AxiosResponse) => {
  if (res.status < 400) return;

  switch (res.status) {
    case 400:
      Sentry.captureException(new Error(res.statusText));
      return;
    case 401:
      ReactGA.set({ userId: null });
      return alert("로그인을 다시 해주세요.");
    case 403:
      return alert("권한을 확인해주세요.");
    case 404:
      return;
    case 500:
      Sentry.captureException(new Error(res.statusText));
      return alert("서버에 에러가 발생하였습니다.");
    case 601:
      return alert("네트워크에 문제가 발생하였습니다.");
    default:
      Sentry.captureException(new Error(res.statusText));
      return alert("예상치 못한 에러가 발생하였습니다.");
  }
};

const handleErrorRedirectAction = (res: AxiosResponse, history: History) => {
  if (res.status < 400)
    return Sentry.captureException(new Error(res.statusText));
  switch (res.status) {
    case 401:
      ReactGA.set({ userId: null });
      return history.replace(PAGE.LOGIN.path, history.location.pathname);

    case 403:
      return history.replace(PAGE.PERMISSION_DENIED.path);

    case 404:
      return history.replace(PAGE.NOT_FOUND.path);

    case 500:
      Sentry.captureException(new Error(res.statusText));
      return history.replace(PAGE.SERVER_ERROR.path);

    case 601:
      return history.replace(PAGE.NETWORK_ERROR.path);

    default:
      Sentry.captureException(new Error(res.statusText));
      return history.replace(PAGE.ERROR.path);
  }
};

const historyPopCache = (config: AxiosRequestConfig) => ({
  ...config,
  forceUpdate: true,
  cache: true
});

const AxiosWrapper = {
  /** Initialize from App component */
  history: {} as History,

  async get(url: string, config?: AxiosRequestConfig, flag?: AxiosWrapperFlag) {
    const res = await instance.get(
      url,
      // historyPopCache(config as AxiosRequestConfig),
      config
    );
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  },

  async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    flag?: AxiosWrapperFlag
  ) {
    const res = await instance.post(url, data, config);
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  },

  async put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    flag?: AxiosWrapperFlag
  ) {
    const res = await instance.put(url, data, config);
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  },

  async patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    flag?: AxiosWrapperFlag
  ) {
    const res = await instance.patch(url, data, config);
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  },

  async delete(
    url: string,
    config?: AxiosRequestConfig,
    flag?: AxiosWrapperFlag
  ) {
    const res = await instance.delete(url, config);
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  },

  async head(
    url: string,
    config?: AxiosRequestConfig,
    flag?: AxiosWrapperFlag
  ) {
    const res = await instance.head(url, config);
    if (flag) {
      flag.errMsg && handleErrorStatusAction(res);
      flag.errRedirect && handleErrorRedirectAction(res, this.history);
    }
    return res;
  }
};

export default AxiosWrapper;
export { AxiosWrapperFlag };
