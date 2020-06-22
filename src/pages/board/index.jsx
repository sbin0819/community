import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import broker from '../../api';
import { Input, Menu, Row, Col, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import BoardList from '../../components/Board/List';
const { Search } = Input;

const BoardPage = (props) => {
  return useObserver(() => {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            제목
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            글쓴이
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={props.className}>
        {/* 검색바 */}
        <Row justify="end">
          {/* <Col span={2}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                필터 <DownOutlined />
              </a>
            </Dropdown>
          </Col> */}
          <Col span={5}>
            <Search placeholder="검색어를 입력하세요." onSearch={value => console.log(value)} enterButton />
          </Col>
        </Row>

        {/* 리스트 */}
        {console.log("content : ", props.content)}
        <BoardList dataSource={props.content} />
      </div>
    );
  });
};

export const getStaticProps = async () => {
  const boardListRes = await broker.boardList.read({ title: "" });

  return {
    props: boardListRes.data.body,
  };
}

export default styled(BoardPage)`
`;
