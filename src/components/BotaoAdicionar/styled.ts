import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variavies from '../../styles/variavies'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variavies.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
