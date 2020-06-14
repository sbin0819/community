import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import styled from "styled-components";
import { AppProps } from "next/app";

interface IAppProps extends AppProps {
  className?: string;
}

function App(props: IAppProps) {
  return (
    <Layout className={props.className}>
      <props.Component {...props.pageProps} />
    </Layout>
  )
}

export default styled(App)`
`;
