import axios from "axios";

export interface IReadPayload { }

export interface IReadResponse {
  data: {};
}

const boardListBroker = {
  url: `/board/list`,
  async read(payload: IReadPayload) {
    try {
      const res = await axios.get(this.url);

      const data = {};

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default boardListBroker;
