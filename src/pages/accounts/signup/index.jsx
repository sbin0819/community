import Link from 'next/link'

import { useObserver } from "mobx-react";
import styled from 'styled-components';

import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const Signup = (props) => {
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
              name="nickname"
            >
              <Input
                className="input"
                id="nickname"
                placeholder='활동 닉네임'
              />
            </Form.Item>
            <Form.Item
              className="center form-item"
              name="userId"
            >
              <Input
                className="input input-id"
                id="userId"
                placeholder='아이디를 입력해주세요'
              />
              <Button className='button-id' type="primary">중복 확인</Button>
            </Form.Item>
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
                placeholder="영문 + 숫자 조합 8자리 이상"
              />
            </Form.Item>
            <Form.Item
              className="center form-item"
              name="password"
            >
              <Input.Password
                className="input"
                id="password"
                placeholder="확인 비밀번호를 입력해주세요"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>개인 정보 취급 방침 동의</Checkbox>
              <Link href="signup/privacy"><a className='privacy'>보기</a></Link>
            </Form.Item>
            <Form.Item>
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
              }}>회원 가입</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  });
}

export default styled(Signup)`
  & {
    height: 75vh;
    overflow: scroll;

    .title{
      font-size: 2.3rem;
      text-align: center;
      margin-bottom: 20px;
    }
    .wrapper {
      margin: 15px auto;
      width: 300px;
      .form-item {
        margin-bottom: 15px;
      }
      .input{
        height: 40px;
      }
      .input-id{
        width: 205px;
        margin-right: 10px;
      }
      .button-id {
        height: 38px;
      }
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .privacy{
      float: right;
      text-decoration: underline;
    }
    .button{
      width: 100%;
      height: 40px
    }
  }
`;