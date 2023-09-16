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

  @media (max-width: 1199px) {
    box-sizing: border-box;
    width: ${space.container.xcontainer_md};
  }

  @media (max-width: 991px) {
    width: ${space.container.xcontainer_sm};
  }

  @media (max-width: 767px) {
    width: ${space.container.xcontainer_xs};
    border-left: 4px solid ${(p) => p.theme.colors.primary.base};
  }

  @media (max-width: 480px) {
    width: 320px;
  }
`

function Studies() {
  return (
    <section
      id="estudos"
      style={{ counterReset: 'cont', display: 'flex', flexDirection: 'column' }}
    >
      <StudiesTitle $fontPrimari>Estudos</StudiesTitle>
      {contentInstitution.map((item, index) => (
        <Institution
          key={item.institution + item.course}
          content={item}
          index={index + 1}
        />
      ))}
    </section>
  )
}

export default Studies
