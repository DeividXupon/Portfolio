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
    desc: 'Pessoas com alta inteligência emocional têm a capacidade de reconhecer, compreender e gerenciar suas próprias emoções, bem como as emoções dos outros. Isso lhes permite lidar com situações estressantes de forma mais equilibrada.'
  },
  {
    id: v4(),
    softSkill: 'Resiliência',
    Icons: GiFireSilhouette,
    desc: 'A resiliência é a capacidade de se recuperar rapidamente de situações difíceis e adversidades. Pessoas resilientes tendem a manter uma atitude mais positiva mesmo em momentos estressantes.'
  },
  {
    id: v4(),
    softSkill: 'Resolução de Problemas',
    Icons: BiSolidMessageError,
    desc: 'A capacidade de abordar problemas de maneira lógica e sistemática pode ajudar alguém a reduzir o estresse. A habilidade de quebrar um problema complexo em etapas menores e lidar com cada etapa pode evitar que o estresse se acumule.'
  },
  {
    id: v4(),
    softSkill: 'Mente Aberta e Empatia',
    Icons: GiHeartInside,
    desc: 'Ter uma mente aberta para diferentes perspectivas e demonstrar empatia em relação aos outros pode ajudar a minimizar conflitos e reduzir o estresse em situações sociais.'
  }
]

export default softSkills
