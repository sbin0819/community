import styled from 'styled-components';

interface ISignUpProps {
  className?: string;
}
const SignUp: React.FC<ISignUpProps> = (props) => {
  return (
    <div className={props.className}>
      회원가입
    </div>
  )
}

export default styled(SignUp)`
`;