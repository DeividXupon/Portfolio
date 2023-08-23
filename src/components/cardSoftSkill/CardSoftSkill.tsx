import { CardBox } from '.'
import softSkills from '../../data/softSkills'

interface Iprops {
  // prettier-ignore
  item: typeof softSkills[0];
  onClick?: () => void
}

function CardSoftSkill({ item, onClick }: Iprops) {
  return (
    <CardBox onClick={onClick}>
      <h3>{item.softSkill}</h3>
      <div>
        <item.Icons size={'100%'} />
      </div>
      <p>{item.desc}</p>
    </CardBox>
  )
}

export default CardSoftSkill
