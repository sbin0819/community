import { instance } from "../../common";

export interface IReadPayload {
  page?: number;
  title: string;
}

export interface IReadResponse {
  data: {};
}

const boardListBroker = {
  url: `/board/page?pageNumber=10`,
  async read(payload: IReadPayload) {
    try {
      const res = await instance.get(this.url + `&title=${payload.title}`);
      console.log("res : ", res);
      const data = {};

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default boardListBroker;
