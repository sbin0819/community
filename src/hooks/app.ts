import * as React from "react";
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { useLocalStore } from "mobx-react-lite";
import { IAppProps } from "../pages/_app";
import App from "next/app";
import cookie from "cookie";

export interface IApp {
  props: IAppProps;
  state: IAppState;
  action: IAppAction;
}

export type TAppAction = typeof dispatch extends (...args: any[]) => infer R ? R : never;
export interface IAppAction extends TAppAction { }

export interface IAppState {
  status: { loading: boolean },
  user: {
    id: string,
    name: string,
    token: string,
    level: string
  }
}

const initializer = (props: IAppProps) => {
  const state: IAppState = {
    status: { loading: false },
    user: {
      id: props.init?.user.id,
      name: props.init?.user.name,
      token: props.init?.user.token,
      level: props.init?.user.level,
    },
  };

  return state;
};

const dispatch = ($: { state: IAppState }) => {
  const login = () => {
    $.state.user.token = "";
  };

  const logout = () => {
    $.state.user.token = "";
  };

  return {
    login,
    logout,
  };
};

const useApp = (props: IAppProps): IApp => {
  const $ = useLocalStore(() => ({ state: initializer(props) }));

  const action = dispatch($);

  const app = { props, state: $.state, action };

  return app;
};

App.getInitialProps = async (appContext: NextAppContext) => {
  const nextAppProps = await NextApp.getInitialProps(appContext);
  const ctx = appContext.ctx;

  const ssr = !!appContext.ctx.req;
  const ck = cookie.parse((ctx.req ? ctx.req.headers.cookie : document.cookie) ?? "");

  const token = ck.auth ?? "";

  return {
    ...nextAppProps,
    ssr, cookie,
    init: {
      user: {
        token,
      }
    },
  }
}

export default useApp;
