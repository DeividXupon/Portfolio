import { AiOutlineHome, AiOutlineMessage, AiOutlineSmile } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { v4 } from 'uuid'

const NavItens = [
  {
    id: v4(),
    Icon: AiOutlineHome,
    title: 'Home',
    href: '#home'
  },
  {
    id: v4(),
    Icon: AiOutlineSmile,
    title: 'Sobre Mim',
    href: '#sobre'
  },
  {
    id: v4(),
    Icon: MdWorkOutline,
    title: 'Projetos',
    href: '#projetos'
  },
  {
    id: v4(),
    Icon: AiOutlineMessage,
    title: 'Fale Comigo',
    href: '#faleComigo'
  }
]

export default NavItens
