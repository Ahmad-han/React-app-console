import styled from "styled-components";
import { Title } from "./Title";
import { Flex } from "./Flex";
import { Console } from "./Console";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 2rem;
  color: white;
  font-family: "Consolas" ,sans-serif;
`



export const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"red"}>
          Console cmd Lincode by Ahmad. 2023
        </Title>
      </Flex>
      <Console/>
      
    </AppWrapper>
  );
}


