import { useState } from 'react'
import { ContainerSkill, HardSkill, SkillsButtons, SoftSkill } from '.'
import { Title } from '../../UI/styles'
import hardSkills from '../../data/hardSkills'
import softSkills from '../../data/softSkills'
import { space } from '../../UI/variaveis'

function Skills() {
  const [control, setControl] = useState({ hard: true, soft: false })
  const [descItem, setDescItem] = useState('hover')

  function changeControl() {
    setControl((prev) => ({ hard: !prev.hard, soft: !prev.soft }))
  }

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', marginTop: space.x28 }}
    >
      <Title $fontPrimari>Habilidades</Title>
      <SkillsButtons>
        <button
          onClick={changeControl}
          disabled={control.hard}
          type="button"
          className="hard"
        >
          Hard Skills
        </button>
        <button
          onClick={changeControl}
          disabled={control.soft}
          type="button"
          className="soft"
        >
          Sofr Skills
        </button>
      </SkillsButtons>
      <ContainerSkill>
        {control.hard ? (
          <>
            <h3>HARD</h3>
            <HardSkill>
              {hardSkills.map((item) => (
                <div
                  onMouseLeave={() => setDescItem('Hover')}
                  onMouseOver={() => setDescItem(item.about)}
                  className="item"
                >
                  <item.Icon size={'70%'} />
                </div>
              ))}
              <p className="description">{descItem}</p>
            </HardSkill>
          </>
        ) : (
          <>
            <h3>SOFT</h3>
            <SoftSkill>
              {softSkills.map((item) => (
                <div className="item">
                  <h3>{item.softSkill}</h3>
                  <div>
                    <item.Icons size={'100%'} />
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </SoftSkill>
          </>
        )}
      </ContainerSkill>
    </section>
  )
}

export default Skills
