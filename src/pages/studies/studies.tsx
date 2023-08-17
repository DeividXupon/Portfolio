import { styled } from 'styled-components'
import { Title } from '../../UI/styles'
import Institution from '../../components/institution/studies'
import contentInstitution from '../../data/institution.json'
import { space } from '../../UI/variaveis'

const StudiesTitle = styled(Title)`
  width: ${space.container.xcontainer_lg};
  align-self: center;
  border-left: 8px solid ${(p) => p.theme.colors.primary.base};
  border-radius: ${space.x2} 0px 0px 0px;
`

function Studies() {
  return (
    <section
      id="estudos"
      style={{ counterReset: 'cont', display: 'flex', flexDirection: 'column' }}
    >
      <StudiesTitle $fontPrimari>Estudos</StudiesTitle>
      {contentInstitution.map((item, index) => (
        <Institution content={item} index={index + 1} />
      ))}
    </section>
  )
}

export default Studies
