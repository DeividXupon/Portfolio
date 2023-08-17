import { AiOutlineHome, AiOutlineMessage, AiOutlineSmile } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'

const NavItens = [
  {
    id: 1,
    Icon: AiOutlineHome,
    title: 'Home',
    href: '#home'
  },
  {
    id: 3,
    Icon: AiOutlineSmile,
    title: 'Sobre Mim',
    href: '#sobre'
  },
  {
    id: 4,
    Icon: MdWorkOutline,
    title: 'Projetos',
    href: '#projetos'
  },
  {
    id: 2,
    Icon: AiOutlineMessage,
    title: 'Fale Comigo',
    href: '#faleComigo'
  }
]

export default NavItens
