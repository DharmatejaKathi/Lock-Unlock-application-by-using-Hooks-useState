// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Para = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 30px;
`
export const Button = styled.button`
  color: white;
  font-family: 'Roboto';
  font-size: 19px;
  border-radius: 11px;
  border: none;
  outline: none;
  background-color: #06b6d4;
  width: 130px;
  height: 40px;
  cursor: pointer;
`
