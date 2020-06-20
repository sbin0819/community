import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { useObserver } from 'mobx-react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

export interface IBoardListProps {
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

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: `/list/${i}`,
    title: `${i} 제목입니다. `,
    description:
      '내용',
    likeCnt: i,
    commentCnt: i,
    writer: "작성자",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BoardList: React.FC<IBoardListProps> = (props) => {
  return useObserver(() => {
    return (
      <div className={props.className}>
        {/* 검색바 */}
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,

          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text={item.likeCnt} key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const columns = [];
  const dataSource: BoardItem[] = [];

  return {
    props: {
      data: { dataSource, columns }
    }
  };
}

export default styled(BoardList)`
`;
