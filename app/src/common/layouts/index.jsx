import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopNavbar from "../navbar";

const Index = () => {


  return (
    <Container>
      <TopNavbar/>
      <Wrapper>
        <Pages>
          <Outlet />
        </Pages>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`

`;
const Wrapper = styled.div`

`;

const Pages = styled.div`
 
  padding: 5%;
`;




export default Index;
