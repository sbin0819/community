import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { useObserver, useLocalStore } from 'mobx-react';
import { Table, Pagination } from 'antd';

interface IBoardListProps {
  className?: string;
  data: {
    dataSource: BoardItem[],
    columns: any[],
  };
}

interface BoardItem {
  key: string,
  title: string,
  writer: string,
  likeCnt: number,
  viewCnt: number,
  commentCnt: number,
}

const BoardList: React.FC<IBoardListProps> = (props) => {
  return useObserver(() => {

    return (
      <div className={props.className}>
        {/* 검색바 */}
        <Table<BoardItem> dataSource={props.data.dataSource} columns={props.data.columns} />
      </div>
    );
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const columns = [{
    key: "title",
    title: "제목",
    dataIndex: "title",
  }, {
    key: "writer",
    title: "작성자",
    dateIndex: "writer",
  }, {
    key: "likeCnt",
    title: "좋아요",
    dateIndex: "likeCnt",
  }, {
    key: "viewCnt",
    title: "조회수",
    dateIndex: "viewCnt",
  }, {
    title: "댓글수",
    dateIndex: "commentCnt",
    key: "commentCnt",
  }];

  const dataSource: BoardItem[] = [{
    key: "1",
    title: "제목",
    writer: "작성자",
    likeCnt: 1,
    viewCnt: 1,
    commentCnt: 1,
  }, {
    key: "2",
    title: "제목",
    writer: "작성자",
    likeCnt: 1,
    viewCnt: 1,
    commentCnt: 1,
  }, {
    key: "3",
    title: "제목",
    writer: "작성자",
    likeCnt: 1,
    viewCnt: 1,
    commentCnt: 1,
  }];

  return {
    props: {
      data: { dataSource, columns }
    }
  };
}

export default styled(BoardList)`
`;
