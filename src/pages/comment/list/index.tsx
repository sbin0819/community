import styled from 'styled-components';

interface Props {
    className?: string;
}

export const List: React.SFC<Props> = props => {
    return (
        <div className={props.className}>
            목록화면 
            
        </div>
    )
};

export default styled(List)`
`;