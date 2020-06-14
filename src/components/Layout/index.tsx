import styled from 'styled-components';

interface ILayoutPros {
  className?: string;
}
const Layout: React.FC<ILayoutPros> = (props) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
}

export default styled(Layout)`
`;