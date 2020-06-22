import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import broker from '../../api';
import { Row } from 'antd';
import BoardList from '../../components/Board/List';
import SearchInput from '../../components/SearchInput';

const BoardPage = (props) => {
  return useObserver(() => {

    return (
      <div className={props.className}>
        {/* 검색바 */}
        <Row justify="end">
          <SearchInput />
        </Row>
        <Row justify="start">
          <ul className="filter">
            <li>좋아요순</li>
            <li>댓글순</li>
            <li>조회수순</li>
          </ul>
        </Row>
        {/* 리스트 */}
        <BoardList loading={false} dataSource={props.content} />
      </div>
    );
  });
};

export const getStaticProps = async () => {
  const boardListRes = await broker.boardList.read({ title: "" });

  return {
    props: {
      board: boardListRes.data.body,
    }
  };
}

export default styled(BoardPage)`
  & {
    .filter {
      display: flex;
      > li {
        margin-right: 10px;
        font-size: 14px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
