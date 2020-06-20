import styled from 'styled-components';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = Layout;

interface ILayoutPros {
  className?: string;
}

const route = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "게시판",
    url: "/list",
  }, {
    title: "로그인",
    url: "/accounts/login",
  }
];


const LayoutComponent: React.FC<ILayoutPros> = (props) => {
  const router = useRouter();

  const routerAsPath = router.asPath.split("/");


  return (
    <Layout className={props.className}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {route.map((i) => <Menu.Item key={i.url} onClick={() => { router.push(i.url) }}>{i.title}</Menu.Item>)}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {routerAsPath.map((d) => <Breadcrumb.Item>{d}</Breadcrumb.Item>)}
        </Breadcrumb>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default styled(LayoutComponent)`
`;