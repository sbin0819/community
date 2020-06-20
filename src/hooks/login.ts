
import * as React from "react";

import { useRouter, NextRouter } from "next/router";

import { useLocalStore } from "mobx-react-lite";
import { AppContext } from "../components/App/context";
import { ILoginProps } from "../pages/accounts/login";


export type TLogin = typeof useLogin extends (...args: any[]) => infer R ? R : never;

export interface ILoginState {
  loading: boolean;
  list: {}[];
  value: {
    email: string;
    password: string;
  }
}

const initializer = (props: ILoginProps): ILoginState => {
  return {
    loading: false,
    list: [],
    value: {
      email: "",
      password: "",
    },
  };
};

const action = (props: ILoginProps, $: { state: ILoginState }) => {
  const router = useRouter();
  const app = React.useContext(AppContext);

  return {};
};

const useLogin = (props: ILoginProps) => {
  const app = React.useContext(AppContext);
  const router = useRouter();

  const $ = useLocalStore(() => ({ state: initializer(props) }));
  const dispatch = action(props, $);

  return { state: $.state, dispatch };
}

export default useLogin;
