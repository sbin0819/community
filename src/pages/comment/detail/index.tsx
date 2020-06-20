import styled from 'styled-components';

interface Props {
    className?: string;
}

export const Detail: React.SFC<Props> = props => {
    return (
        <div className={props.className}>
            상세화면 
        </div>
    )
};

export default styled(Detail)`
`;