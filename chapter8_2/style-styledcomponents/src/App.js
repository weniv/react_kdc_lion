import { createGlobalStyle, styled, css } from 'styled-components'
import { Example } from './components/Example';
import { reset } from 'styled-reset';
import { Button, ButtonStyle2, ButtonStyle3 } from './components/Buttons';

// const GlobalStyle = createGlobalStyle`
//   ${reset}
//   span{
//     color: red;
//     font-size: 12px;
//   }
// `

const ContentDiv = styled.div`
  padding: 30px;
`;

const ContentH3 = styled.h3`
  color: ${(props) => props.name === 'hello' ? 'hotpink' : 'seagreen'};
  font-size: 20px;
  text-align: center;
`;

const ContentExtends = styled(ContentH3)`
  border: 3px solid black;
`;

const One = css`
  color: hotpink;
`

const Two = css`
  border: 1px solid black;
`

const Three = styled.strong`
  ${One}
  ${Two}
`



function App() {
  return (
    <ContentDiv>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼3</ButtonStyle3>
      <Three>또 다른 확장 스타일입니다!</Three>
      <ContentExtends>확장 스타일입니다.</ContentExtends>
      {/* <GlobalStyle /> */}
      <h1>hello world</h1>
      <ContentH3 name="hello">i am h3 with styled components</ContentH3>
      <span>hello world with span</span>
      <Example />
    </ContentDiv>
  );
}
export default App;
