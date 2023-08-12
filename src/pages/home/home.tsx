import {
  ButtonAlter,
  ButtonScroll,
  ContainerTitle,
  HomeContainer,
  Intro,
  MainTitle,
  SubTitle
} from './index'
import { BsFillPenFill } from 'react-icons/bs'
import { BiMouse } from 'react-icons/bi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import title from '../../data/titles.json'

import { useState } from 'react'

import { motion } from 'framer-motion'
import { ThemeConsumer } from 'styled-components'

function Home() {
  const [titleValue, setTitleValue] = useState(0)

  function changeTitle() {
    setTimeout(() => {
      setTitleValue((prev) => (prev > 9 ? 0 : prev + 1))
    }, 500)
  }

  const [isAnimating, setIsAnimating] = useState(false)

  const handleButtonClick = () => {
    setIsAnimating(true)

    // Após um tempo, resetar a animação
    setTimeout(() => {
      setIsAnimating(false)
    }, 1050) // Tempo em milissegundos
  }

  return (
    <HomeContainer>
      <SubTitle>Explorando a Fronteira da Web</SubTitle>
      <ContainerTitle>
        <ThemeConsumer>
          {(theme) => (
            <>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%'
                }}
                initial={{
                  background: theme?.colors.accent[100],
                  opacity: 1,
                  width: '0px',
                  height: '0px'
                }}
                animate={
                  isAnimating
                    ? {
                        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        width: '2000px',
                        height: '2000px'
                      }
                    : {
                        background: theme?.colors.secondary.base,
                        opacity: 0,
                        zIndex: -1
                      }
                }
                transition={
                  isAnimating
                    ? {
                        duration: 1,
                        ease: [0.65, 0, 0.35, 1],
                        repeat: titleValue
                      }
                    : {}
                }
              />

              <MainTitle>{title[titleValue]}</MainTitle>
              <ButtonAlter
                disabled={isAnimating}
                onClick={() => {
                  handleButtonClick()
                  changeTitle()
                }}
              >
                {isAnimating ? (
                  <>
                    <AiOutlineLoading3Quarters
                      size={26}
                      style={{
                        transition: '1.2s',
                        transform: isAnimating
                          ? 'rotate(1000deg)'
                          : 'rotate(0deg)'
                      }}
                    />
                    <BsFillPenFill style={{ display: 'none' }} />
                  </>
                ) : (
                  <>
                    <AiOutlineLoading3Quarters
                      size={-10}
                      style={{
                        transition: '1s',
                        transform: isAnimating
                          ? 'rotate(300deg)'
                          : 'rotate(0deg)'
                      }}
                    />
                    <BsFillPenFill size={25} style={{ marginTop: '-14' }} />
                  </>
                )}
              </ButtonAlter>
            </>
          )}
        </ThemeConsumer>
      </ContainerTitle>
      <Intro>
        Bem-vindo ao meu portfolio! Sou apaixonado por transformar conceitos em
        realidade através do desenvolvimento web. Combinando criatividade e
        código, estou empenhado em criar soluções digitais impactantes que
        impressionam visualmente e funcionam excepcionalmente. Explore meu
        portfólio e descubra como minha jornada na web dá vida a projetos únicos
        e envolventes que impulsionam a experiência online a novos patamares.
      </Intro>
      <ButtonScroll>
        <p>Scroll</p>
        <BiMouse size={30} />
      </ButtonScroll>
    </HomeContainer>
  )
}

export default Home
