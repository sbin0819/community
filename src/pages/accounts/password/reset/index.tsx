import styled from 'styled-components';

interface IPasswordResetProps {
  className?: string;
}
const PasswordReset: React.FC<IPasswordResetProps> = (props) => {
  return (
    <div className={props.className}>
      비밀번호 재설정
    </div>
  )
}

export default styled(PasswordReset)`
`;