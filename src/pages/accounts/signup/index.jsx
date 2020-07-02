import Link from 'next/link'

import { useObserver } from "mobx-react";
import styled from 'styled-components';

import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const Signup = (props) => {
  return useObserver(() => {
    return (
      <div className={props.className}>
        <h1 className='title'>회원가입</h1>

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
              className="center"
              name="email"
              rules={[
                {
                  required: true,
                  message: '이메일을 입력해주세요.',
                },
              ]}
            >
              <Input
                className="input"
                id="email"
              // value={login.state.value.email}
              // onChange={(e) => {
              //   login.state.value.email = e.target.value;
              // }}
              />
            </Form.Item>
            <Form.Item
              className="center"
              name="password"
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요.',
                },
              ]}
            >
              <Input.Password
                className="input"
                id="password"
              // value={login.state.value.password}
              // onChange={(e) => {
              //   login.state.value.password = e.target.value;
              // }}
              />
            </Form.Item>
            <Form.Item className='test' >
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
                console.log("email : ", login.state.value.email);
                console.log("password : ", login.state.value.password);
              }}>회원가입</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  });
}

export default styled(Signup)`
  & {
    /* text-align: center; */
    .title{
      font-size: 2.3rem;
      text-align: center;
      margin-bottom: 100px;
    }

    .wrapper {
      margin: 15px auto;
      width: 300px;
      .input{
        height: 40px;
      }
    }

    .button{
      width: 100%;
      height: 40px
    }

    .test{
      background-color: gold;
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
`;