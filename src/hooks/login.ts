
import * as React from "react";

import { useRouter, NextRouter } from "next/router";

import { useLocalStore } from "mobx-react-lite";
import { AppContext } from "../components/App/context";
import { IBoardListProps } from "../pages/list";


export type TLogin = typeof useLogin extends (...args: any[]) => infer R ? R : never;

export interface ILoginState {
  loading: boolean;
  list: {}[];
}

const initializer = (props: IBoardListProps): ILoginState => {
  return {
    loading: false,
    list: [],
  };
};

const action = (props: IBoardListProps, $: { state: ILoginState }) => {
  const router = useRouter();
  const app = React.useContext(AppContext);

  return {};
};

const useLogin = (props: IBoardListProps) => {
  const app = React.useContext(AppContext);
  const router = useRouter();

  const $ = useLocalStore(() => ({ state: initializer(props) }));
  const dispatch = action(props, $);
}

export default useLogin;
