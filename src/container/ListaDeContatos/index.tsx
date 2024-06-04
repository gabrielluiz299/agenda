import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              email={t.email}
              titulo={t.titulo}
              numero={t.numero}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
