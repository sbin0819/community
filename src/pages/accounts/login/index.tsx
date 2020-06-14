import Link from 'next/link'

import { useObserver, useLocalStore } from "mobx-react";
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  className?: string;
}

const Login: React.FC<Props> = (props) => {
  return useObserver(() => {
    const state = useLocalStore(() => {
      return {
        email: "",
        password: "",
      };
    });

    return (
      <div className={props.className}>
        <div className="wrap">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="이메일을 입력해주세요" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="로그인 유지" />
            </Form.Group>
            <Button variant="primary" block onClick={() => {
              console.log("email :", state.email);
              console.log("password : ", state.password);
            }}>
              로그인
            </Button>
            <Row>
              <Col className="signup_txt">계정이 없으신가요? <Link href="signup"><a>회원가입</a></Link></Col>
            </Row>
            <Row>
              <Col className="lostpw_txt"><Link href="password/reset"><a>비밀번호를 잊으셨나요?</a></Link></Col>
            </Row>
            <Row>
              <Col><div className="login_logo">F</div></Col>
              <Col><div className="login_logo">g</div></Col>
              <Col><div className="login_logo">N</div></Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  });
}

export default styled(Login)`
  & {
    .wrap {
      margin: 200px auto;
      width: 460px;
    }

    .signup_txt {
      text-align: center;
    }

    .lostpw_txt {
      text-align: center;
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