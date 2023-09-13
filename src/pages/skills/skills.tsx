import { useRef, useState } from 'react'
import {
  ContainerSkill,
  Decorative,
  Dia,
  HardSkill,
  SkillsButtons,
  SoftSkill
} from '.'
import { Title } from '../../UI/styles'
import hardSkills from '../../data/hardSkills'
import softSkills from '../../data/softSkills'
import { space } from '../../UI/variaveis'
import CardSoftSkill from '../../components/cardSoftSkill/CardSoftSkill'

function Skills() {
  const [control, setControl] = useState({ hard: true, soft: false })
  const [descItem, setDescItem] = useState('Passe o mouse por cima das caixas')

  const [ativeAnimet, setAtiveAnimet] = useState(false)

  const [selectSoftSkill, setSelectSoftSkill] = useState(softSkills[0])

  const refDialog = useRef<HTMLDialogElement>(null)

  function dialogIsOpen(isOpen: boolean) {
    if (isOpen) {
      refDialog.current?.showModal()
    } else {
      refDialog.current?.close()
    }
  }

  const contVariants = {
    height: [490, 0, 490],
    transition: {
      duration: 1.1,
      ease: [0.76, 0, 0.24, 1]
    }
  }

  const variants = {
    visible: contVariants,
    hidden: contVariants
  }

  function changeControl() {
    setAtiveAnimet((prev) => !prev)
    setTimeout(
      () => setControl((prev) => ({ hard: !prev.hard, soft: !prev.soft })),
      400
    )
  }

  return (
    <div className="a">
      <section
        style={{
          marginTop: space.x28,
          height: '750px'
        }}
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

        <Decorative $top />
        <ContainerSkill
          variants={variants}
          animate={ativeAnimet ? 'hidden' : 'visible'}
        >
          <Dia ref={refDialog}>
            <button onClick={() => dialogIsOpen(false)}>Esc / Fechar</button>
            <div>
              <CardSoftSkill item={selectSoftSkill} />
              <p>{selectSoftSkill.motivo}</p>
            </div>
          </Dia>
          {control.hard ? (
            <>
              <h3>HARD</h3>
              <HardSkill>
                {hardSkills.map((item) => (
                  <div
                    key={item.id}
                    onMouseLeave={() =>
                      setDescItem('Passe o mouse por cima das caixas')
                    }
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
                  <CardSoftSkill
                    key={item.id}
                    onClick={() => {
                      dialogIsOpen(true)
                      setSelectSoftSkill(item)
                    }}
                    item={item}
                  />
                ))}
              </SoftSkill>
            </>
          )}
        </ContainerSkill>
        <Decorative />
      </section>
    </div>
  )
}

export default Skills
