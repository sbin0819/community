import boardListBroker from "./board/list";

export type TBrokerAction = (payload: any, options?: any) => Promise<{ data?: any }>;

export interface IBroker {
  url?: string;
  create?: TBrokerAction;
  read?: TBrokerAction;
  update?: TBrokerAction;
  delete?: TBrokerAction;
}

export const brokerTypeChecker = <T>(brk: T extends IBroker ? T : never) => {
  return brk;
};

const broker = {
  boardList: brokerTypeChecker(boardListBroker)
};

export default broker;