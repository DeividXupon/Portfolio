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
import cv from '../../assets/DEIVID_DE_SOUZA.pdf'

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
                      y: '240px',
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
              Me chamo Deivid, tenho 20 anos e sou uma pessoa apaixonada por
              tecnologia. Descobri a programação aos meus 13 anos, fazendo jogos
              no Roblox Studio e criando servidores de minigames do Minecraft.
              Comecei a estudar de verdade aos 15 anos, quando entrei em uma
              escola técnica de informática na ETEC Jardim Ângela. Na época, era
              uma das ETECs mais disputadas. Foi lá que começou minha paixão
              pela programação. Estudei um pouco de cada área, como
              desenvolvimento web, criação de banco de dados, back-end, análise
              de dados e criação de projetos.
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

            <a href={cv} download>
              Download CV
            </a>
          </ContainerAboutButtons>
        </div>
      </BoxContent>
      <Faixa />
    </Container>
  )
}

export default About
