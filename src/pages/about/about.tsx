import {
  BoxContent,
  Container,
  MySelf,
  TextConteiner,
  ContainerAboutButtons,
  Faixa,
  ModalHover,
  Modal
} from '.'

import contentItemsModal from '../../data/contentItemsModal.json'

import { PiDogFill } from 'react-icons/pi'
import { IoLogoGameControllerA } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import { BiSolidBrain } from 'react-icons/bi'
import { useState } from 'react'
import { ThemeConsumer } from 'styled-components'

function About() {
  const itensModal = [
    <PiDogFill size={30} />,
    <IoLogoGameControllerA size={30} />,
    <MdDesignServices size={30} />,
    <BiSolidBrain size={30} />
  ]

  const [goToItem, setGoToItem] = useState({ goTo: 0, exit: 0 })

  function moveToComponent(index: number): void {
    setGoToItem({ goTo: index, exit: 1 })
  }

  function exitModal(): void {
    setGoToItem((prev) => ({ goTo: prev.goTo, exit: 0 }))
  }

  return (
    <Container id="sobre">
      <BoxContent>
        <ThemeConsumer>
          {(theme) => (
            <ModalHover
              animate={
                goToItem.exit === 0
                  ? {
                      width: '2px',
                      height: '0px',
                      x: '166px',
                      y: '220px',
                      zIndex: -1,
                      background: theme?.colors.primary.base
                    }
                  : {
                      width: '334px',
                      height: '180px',
                      x: '0px',
                      y: '0px',
                      background: theme?.colors.background,
                      zIndex: 0
                    }
              }
              transition={
                goToItem.exit === 0
                  ? {
                      delay: 0.85,
                      height: { delay: 1.5, duration: 0.02 },
                      y: { delay: 1.5, duration: 0.02 },
                      zIndex: { delay: 1.6 }
                    }
                  : {
                      zIndex: { delay: 0.05 },
                      height: { delay: 0.75, duration: 0.02 },
                      y: { duration: 0.8 }
                    }
              }
              $item={goToItem.goTo}
              $exit={goToItem.exit}
            >
              {
                <>
                  <h5>{contentItemsModal[goToItem.goTo].title}</h5>
                  <p>{contentItemsModal[goToItem.goTo].paragrafo}</p>
                </>
              }
            </ModalHover>
          )}
        </ThemeConsumer>
        <MySelf>
          <img src="https://github.com/DeividXupon.png" alt="foto" />
        </MySelf>

        <div>
          <TextConteiner>
            <h3>Sobre Mim</h3>
            <h2>Deivid Silva</h2>
            <h4>Creative Front-end Developer 🧑‍💻</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              distinctio asperiores laboriosam nisi ex sed voluptatibus! Odio,
              iure vero ad assumenda obcaecati saepe maxime soluta, quod ullam
              sit facilis corporis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Est distinctio asperiores laboriosam nisi ex sed
              voluptatibus! Odio, iure vero ad assumenda obcaecati saepe maxime
              soluta, quod ullam sit facilis corporis.
            </p>
          </TextConteiner>

          <ContainerAboutButtons>
            <ul onMouseLeave={exitModal}>
              {itensModal.map((item, index) => (
                <Modal onMouseOver={() => moveToComponent(index)} key={index}>
                  {item}
                </Modal>
              ))}
            </ul>

            <button> RESUMO </button>
          </ContainerAboutButtons>
        </div>
      </BoxContent>
      <Faixa />
    </Container>
  )
}

export default About
