import { Form } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarNumero = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        email,
        numero
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Numero</Titulo>
      <Form onSubmit={cadastrarNumero}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Email"
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          type="text"
          placeholder="Número"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
