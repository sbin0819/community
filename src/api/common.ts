import axios from "axios";

const AUTH_TOKEN = "";
const serverURL = "";
const VERSION = "";
axios.defaults.baseURL = serverURL + VERSION;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// const serverURL = "";
// const serverPath = "";

// export const APIDefault = {
//   baseURL: serverURL + serverPath,
//   headers: { "Accept-Language": "ko" }
// };

// export const instance = axios.create({
//   baseURL: APIDefault.baseURL,
//   headers: APIDefault.headers,
// });


axios.interceptors.response.use((response) => {
  return response;
}), (error: any) => {
  switch (error.response.status) {
    case 401:
      // 권한 없음
      break;
    case 403:
      // 권한 없음
      break;
    case 404:
      // 없는 페이지
      break;
    case 410:
      // 더 이상 존재하지 않는 페이지
      break;
    default:
      // 예상치 못한 에러
      break;
  }
  return Promise.reject(error);
};
