import "./css/reset.css"
import logo from "./assets/logo.png"
import Questions from "./components/Questions"
import styled from "styled-components"

export default function App() {
  return (
    <>
      <AppStyled>
        <Header>
          <img src={logo} alt={logo} />
          <h1>ZapRecall</h1>
        </Header>
      </AppStyled>
      <Footer>
        <p>0/4 CONCLUÍDOS</p>
      </Footer>
    </>
  )
}

const AppStyled = styled.div`
    width: 375px;
    height: 1000px;
    background-color: #FB6B6B;
    display: flex;
    align-items: center;
    flex-direction: column;     
    padding-top: 42px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 51px;

    h1 {
      font-family:'righteous';
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #FFFFFF;
    }
    
    img {
      width: 52px;
      height: 60px;
      padding-right: 20px;
    }
`

const Footer = styled.div`
    width: 375px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    p {
      font-family: 'Recursive';
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
`


