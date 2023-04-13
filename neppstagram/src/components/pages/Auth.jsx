import styled from "styled-components"
import { Outlet } from "react-router-dom"

export default function Auth(){

  return <Container>
    <OutletWrapper>
    <Outlet></Outlet>
    </OutletWrapper>
  </Container>
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;

`

const OutletWrapper = styled.div`
  border: 1px solid #000;
  padding:50px 20px;

`
