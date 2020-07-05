import Link from 'next/link'

import { useObserver } from "mobx-react";
import styled from 'styled-components';

import { Form, Button } from 'antd';

const Social = (props) => {
  return useObserver(() => {
    return (
      <div className={props.className}>
        <h1 className='title'>LOGO</h1>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={() => { console.log("finish") }}
          onFinishFailed={() => { console.log("onFinishFailed") }}
        >
          <div className='wrapper'>
            <Form.Item className='form-item'>
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
              }}>facebook으로 회원가입</Button>
            </Form.Item>
            <Form.Item className='form-item'>
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
              }}>goolge로 회원가입</Button>
            </Form.Item>
            <Form.Item className='form-item'>
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
              }}>naver로 회원가입</Button>
            </Form.Item>
            <Form.Item className='form-item'>
              <Button className='button button-last' htmlType="submit" onClick={() => {
              }}>커뮤니티 계정으로 회원가입</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  });
}

export default styled(Social)`
  & {
    height: 75vh;
    overflow: scroll;

    .title{
      font-size: 2.3rem;
      text-align: center;
      margin-bottom: 80px;
    }
    .wrapper {
      margin: 15px auto;
      width: 300px;
      .form-item {
        margin-bottom: 12px;
      }
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button {
      width: 100%;
      height: 40px
    }
    .button-last {
      background-color: #5D5E5D;
      color: white;
    }
  }
`;