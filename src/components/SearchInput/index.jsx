import styled from 'styled-components';

import { Input, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Search } = Input;

const SearchInput = () => {
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
    <div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          필터 <DownOutlined />
        </a>
      </Dropdown>
      <Search placeholder="검색어를 입력하세요." onSearch={value => console.log(value)} enterButton />
    </div>
  );
};

export default styled(SearchInput)`
`;