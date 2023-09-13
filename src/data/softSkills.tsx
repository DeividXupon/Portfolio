import { BiSolidMessageError } from 'react-icons/bi'
import {
  GiHeartInside,
  GiArtificialIntelligence,
  GiFireSilhouette
} from 'react-icons/gi'
import { v4 } from 'uuid'

const softSkills = [
  {
    id: v4(),
    softSkill: 'Inteligência Emocional',
    Icons: GiArtificialIntelligence,
    desc: 'Pessoas com alta inteligência emocional têm a capacidade de reconhecer, compreender e gerenciar suas próprias emoções, bem como as emoções dos outros. Isso lhes permite lidar com situações estressantes de forma mais equilibrada.',
    motivo:
      'Em situações estressantes, sei manter a calma e ser o mais compreensivo possível. Antes de tomar decisões complexas, sei lidar sob pressão de maneira eficaz.'
  },
  {
    id: v4(),
    softSkill: 'Resiliência',
    Icons: GiFireSilhouette,
    desc: 'A resiliência é a capacidade de se recuperar rapidamente de situações difíceis e adversidades. Pessoas resilientes tendem a manter uma atitude mais positiva mesmo em momentos estressantes.',
    motivo:
      'Em minha trajetória, tive que enfrentar situações adversas que me exigiram não apenas manter a calma, mas também encontrar maneiras de seguir em frente de maneira construtiva.'
  },
  {
    id: v4(),
    softSkill: 'Resolução de Problemas',
    Icons: BiSolidMessageError,
    desc: 'A capacidade de abordar problemas de maneira lógica e sistemática pode ajudar alguém a reduzir o estresse. A habilidade de quebrar um problema complexo em etapas menores e lidar com cada etapa pode evitar que o estresse se acumule.',
    motivo:
      'A resolução de problemas é uma das soft skills que mais valorizo em minha jornada pessoal e profissional. Encaro os desafios como oportunidades para crescer e encontrar soluções criativas, abordando cada obstáculo com uma mente analítica e determinada.'
  },
  {
    id: v4(),
    softSkill: 'Mente Aberta e Empatia',
    Icons: GiHeartInside,
    desc: 'Ter uma mente aberta para diferentes perspectivas e demonstrar empatia em relação aos outros pode ajudar a minimizar conflitos e reduzir o estresse em situações sociais.',
    motivo:
      'Já passei por situações que desgastaram muito minha mente. Essas experiências me tornaram muito mais empático com os sentimentos das pessoas ao meu redor. Durante a minha adolescência estudei sobre depressão e outros transtornos mentais. Toda essa jornada me proporcionou um entendimento profundo das complexidades emocionais e uma maior capacidade de me conectar com as emoções das pessoas que me cercam.'
  }
]

export default softSkills
