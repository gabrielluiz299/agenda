import BotaoAdicionar from '../../components/BotaoAdicionar'
import { BarraLateral } from '../../container/BarraLateral'
import ListaDeContatos from '../../container/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
