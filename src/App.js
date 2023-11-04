
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const SubContainer = styled.div`
  width: calc(100% - 20px);
  max-width: 1200px;
`

const App = () => {
  return (
    <Container>
      <SubContainer>
        <Header />
        <Home />
      </SubContainer>
    </Container>
  )
}

export default App;
