import * as React from "react";

import styled from "styled-components";

const _HomeButton: React.FunctionComponent<{ className?: string; onClick: () => void }> = (props) => {
  return (
    <button className={props.className} onClick={() => props.onClick()}>
      <span className="title">홈으로 돌아가기</span>
    </button>
  );
};

const HomeButton = styled(_HomeButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 56px;

  width: 400px;
  @media (max-width: 720px) { width: 90%; }
  height: 56px;

  color: #006ee5;
  background-color: #fff;

  border: 1px solid #006ee5;
  border-radius: 4px;
  font-size: 18px;

  cursor: pointer;

  .title { margin-right: 5px; }

  path { stroke: #006ee5; }
`;

const _ErrorIndicator: React.FunctionComponent<{ className?: string; }> = (props) => {
  return (
    <div className={props.className}>

    </div>
  );
};

const ErrorIndicator = styled(_ErrorIndicator)`
  position: relative;

  width: 600px;
  padding-bottom: 400px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export interface IErrorPageProps {
  className?: string;
}

class ErrorPage extends React.Component<IErrorPageProps> {
  private timeoutId: number = NaN;

  constructor(props: IErrorPageProps) {
    super(props);

    this.state = { hasError: false };
  }

  public componentWillUnmount() {
    if (isNaN(this.timeoutId)) return;
    clearTimeout(this.timeoutId);
  }

  public render() {
    return (
      <div className={this.props.className}>
        <ErrorIndicator className="indicator" />
        <HomeButton onClick={() => location.replace("/")} />
      </div>
    );
  }
}

export default styled(ErrorPage)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .indicator {
    @media (max-width: 720px) {
      width: 120%;
      padding-bottom: 80%;
    }

    width: 600px;
    padding-bottom: 400px;
  }
`;
