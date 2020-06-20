import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { useObserver } from 'mobx-react';
import { List, Space } from 'antd';
import broker from '../../api';
import { TBoardItem } from '../../components/Board/type';

interface IBoardListProps {
  className?: string;
  data: {
    dataSource: TBoardItem[],
    columns: any[],
  };
}

const BoardPage: React.FC<IBoardListProps> = (props) => {
  return useObserver(() => {
    // const boardList = useBoardList();

    return (
      <div className={props.className}>
        {/* 검색바 */}

      </div>
    );
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const columns = [];
  const dataSource: TBoardItem[] = [];

  const boardListRes = await broker.boardList.read({ title: "" });
  console.log("board : ", boardListRes);
  return {
    props: {
      data: { dataSource, columns }
    }
  };
}

export default styled(BoardPage)`
`;
