import Link from 'next/link'
import React from 'react';
import styled from 'styled-components';


import { Button } from 'antd';

const Privacy = (props) => (
    <div className={props.className}>
        <div>
            <h1>개인 정보 취급 방침</h1>
            <p>
                이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라
            <br />
                예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로
             <br />
                청춘! 너의 두손을 가슴에 대고 물방아 같은 심장의 고동을 들어 보라 청춘의 피는 끓는다 끓는 피에 뛰
            </p>
            <Button type="primary">
                <Link href='/accounts/signup'>
                    <a>동의</a>
                </Link>
            </Button>
        </div>
    </div>
);

export default styled(Privacy)`
& {
  height: 75vh;
  overflow: scroll;
}
`;