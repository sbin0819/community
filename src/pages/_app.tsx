import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import styled from "styled-components";
import { AppProps } from "next/app";
import { useObserver } from 'mobx-react';
import GlobalStyle from '../../styles/global';
import { AppContext } from '../components/App/context';
import useApp from '../hooks/app';

export interface IAppProps extends AppProps {
  className?: string;
  ssr: boolean;
  cookie: string;
  init: any;
}

function App(props: IAppProps) {
  return useObserver(() => {
    const app = useApp(props);
    return (
      <>
        <GlobalStyle />
        <AppContext.Provider value={app}>
          <Layout>
            <props.Component {...props.pageProps} />
          </Layout>
        </AppContext.Provider>

      </>
    );
  });
}

export default styled(App)`
`;
