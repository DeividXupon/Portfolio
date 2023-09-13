import {
  ButtonAlter,
  ButtonScroll,
  ContainerTitle,
  HomeContainer,
  Intro,
  Lik,
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

    setTimeout(() => {
      setIsAnimating(false)
    }, 1050)
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 7,
        staggerChildren: 0.3
      }
    }
  }

  const itemVar1 = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  const itemVar2 = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  return (
    <HomeContainer
      variants={container}
      initial="hidden"
      animate="visible"
      id="home"
    >
      <SubTitle variants={itemVar1}>Explorando a Fronteira da Web</SubTitle>
      <ContainerTitle variants={itemVar2}>
        <ThemeConsumer>
          {(theme) => (
            <>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '95%',
                  top: '80%',
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
                        width: '4000px',
                        height: '4000px'
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
                      size={26}
                      style={{
                        opacity: isAnimating ? 1 : 0,
                        transform: isAnimating
                          ? 'rotate(300deg)'
                          : 'rotate(0deg)'
                      }}
                    />
                    <BsFillPenFill
                      size={25}
                      style={{ transform: 'translate(0%, -100%)' }}
                    />
                  </>
                )}
              </ButtonAlter>
            </>
          )}
        </ThemeConsumer>
      </ContainerTitle>
      <Intro variants={itemVar1}>
        Primeiramente, seja <em>bem-vindo</em> ao meu portfólio. Agradeço por
        visitar. Uma sinergia perfeita entre a arte do <em>Design</em>, a
        maestria do Desenvolvimento <em>FrontEnd</em> e habilidades excepcionais
        é o que verdadeiramente <em>elevará</em> o seu produto a um patamar
        destacado no mercado. É exatamente isso que estou
        <em>oferecendo a você</em>. E então, que tal trabalharmos juntos?
      </Intro>
      <ButtonScroll variants={itemVar2}>
        <Lik href="#sobre">
          <p>Scroll</p>
          <BiMouse size={30} />
        </Lik>
      </ButtonScroll>
    </HomeContainer>
  )
}

export default Home
