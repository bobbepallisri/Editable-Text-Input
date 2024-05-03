import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to top, #d946ef, #f5d0fe);
  padding: 20px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.651) 0px 7px 29px 0px;
  background-color: white;
  border-radius: 10px;
  min-height: 200px;
  width:100%;
  max-width: 400px;
  flex-wrap
`

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  flex-wrap: wrap;
`
export const Input = styled.input`
  width: 100%;
  min-width: 100px;
  padding: 10px;
  border: solid 2px rgb(216, 216, 216);
  border-radius: 5px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 7px;
`

export const Text = styled.p`
  font-size: 15px;
  margin-top: 10px;
  padding: 0px 10px;
  flex-wrap: wrap;
`
export const Button = styled.button`
  background-color: #d946ef;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  margin-left: 20px;
  color: white;
  border-radius: 5px;
`
