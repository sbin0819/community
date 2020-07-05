import React from 'react'
import Link from 'next/link'

import { useObserver } from "mobx-react";
import styled from 'styled-components';

import { Form, Input, Button } from 'antd';

const PasswordReset = (props) => {
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
            <Form.Item
              className="center form-item"
              name="email"
            >
              <Input
                className="input"
                id="email"
                placeholder='이메일을 입력해주세요'

              />
            </Form.Item>
            <Form.Item
              className="center form-item"
              name="password"
            >
              <Input.Password
                className="input"
                id="password"
                placeholder="재설정 비밀번호를 입력해주세요"
              />
            </Form.Item>
            <Form.Item
              className="center form-item"
              name="password"
            >
              <Input.Password
                className="input"
                id="password"
                placeholder="재설정 비밀번호를 다시 입력해주세요."
              />
            </Form.Item>
            <Form.Item>
              <Button className='button' type="primary" htmlType="submit">비밀번호 재설정</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  });
}

export default styled(PasswordReset)`
  & {
    height: 75vh;
    overflow: scroll;
    a {
      text-decoration: underline;
    }
    .title {
      font-size: 2.3rem;
      text-align: center;
      margin-bottom: 100px;
    }

    .wrapper {
      margin: 15px auto;
      width: 300px;
      .form-item {
        margin-bottom: 10px;
      }
      .input{
        height: 40px;
      }
    }

    .button{
      width: 100%;
      height: 40px
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: black;

      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
  .signup-txt {
    margin-bottom: 8px;
    span{
      margin-right: 10px;
    }
  }
`;