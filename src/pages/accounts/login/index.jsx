import Link from 'next/link'

import { useObserver } from "mobx-react";
import styled from 'styled-components';

import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import useLogin from '../../../hooks/login';

const Login = (props) => {
  return useObserver(() => {
    const login = useLogin(props);
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
              className="center"
              name="email"
            // rules={[
            //   {
            //     required: true,
            //     message: '이메일을 입력해주세요.',
            //   },
            // ]}
            >
              <Input
                className="input"
                id="email"
                placeholder='이메일을 입력해주세요'
                value={login.state.value.email}
                onChange={(e) => {
                  login.state.value.email = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item
              className="center"
              name="password"
            // rules={[
            //   {
            //     required: true,
            //     message: '비밀번호를 입력해주세요.',
            //   },
            // ]}
            >
              <Input.Password
                className="input"
                id="password"
                placeholder="비밀번호를 입력해주세요"
                value={login.state.value.password}
                onChange={(e) => {
                  login.state.value.password = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox >로그인 유지</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button className='button' type="primary" htmlType="submit" onClick={() => {
                console.log("email : ", login.state.value.email);
                console.log("password : ", login.state.value.password);
              }}>로그인</Button>
            </Form.Item>
          </div>
          <Row className="center">
            <Col className="signup_txt">계정이 없으신가요? <Link href="signup"><a>회원가입</a></Link></Col>
          </Row>
          <Row className="center">
            <Col className="lostpw_txt"><Link href="password/reset"><a>비밀번호를 잊으셨나요?</a></Link></Col>
          </Row>
          {/* <Row className="center">
            <Col><div className="login_logo">F</div></Col>
            <Col><div className="login_logo">g</div></Col>
            <Col><div className="login_logo">N</div></Col>
          </Row> */}
        </Form>
      </div>
    );
  });
}

export default styled(Login)`
  & {
    height: 75vh;
    overflow: scroll;
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