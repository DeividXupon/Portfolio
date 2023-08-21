import stickMoba from '../../assets/SticksMoba.jpg'
import stickNot from '../../assets/SticksNot.png'

import basilMoba from '../../assets/basilMoba.png'
import basilNot from '../../assets/basilNot.png'

import OrganoMoba from '../../assets/OrganoMoba.png'
import OrganoNot from '../../assets/OrganoNot.png'

import Project from '../../components/projeto/project'
import { Title } from '../../UI/styles'
import { space } from '../../UI/variaveis'
import { Define } from '.'

function Projects() {
  const stick = ['S', 'T', 'I', 'C', 'K']

  return (
    <section
      id="projetos"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: space.x28
      }}
    >
      <Title $fontPrimari>Projetos</Title>
      <Project
        link="https://sticky-steel.vercel.app"
        mobaImg={stickMoba}
        notImg={stickNot}
      >
        <h3>
          {stick.map((item, index) => (
            <Define $index={index}>{item}</Define>
          ))}
        </h3>
        <p>
          O Stick é um aplicativo para fazer anotações e relembrar coisas. Ele
          guarda as suas anotações e lembretes diretamente no seu navegador, no
          seu próprio espaço de armazenamento. Esse app é super colorido e cheio
          de animações legais, o que deixa ele cheio de detalhes interessantes e
          bem divertido de usar. Vale a pena dar uma conferida! 😉
        </p>
      </Project>
      <Project
        link="https://basil-green.vercel.app"
        mobaImg={basilMoba}
        notImg={basilNot}
        $reverse
      >
        <h3 style={{ color: 'green' }}>Basil Green🥕</h3>
        <p>
          A Basil Green era uma empresa dedicada à entrega de refeições
          congeladas, lamentavelmente encerrou suas operações em 2022. Através
          da aplicação, é possível explorar uma variedade de pratos,
          acompanhados de funcionalidades de filtragem na seção do cardápio.
          Ademais, o app fornecia informações relevantes sobre o restaurante.
          Embora os links tenham sido removidos da página, é válido ressaltar
          que a presença da Basil Green ainda perdura no{' '}
          <a href="https://www.instagram.com/basilgreenfit/" target="_blank">
            *Instagram*
          </a>
        </p>
      </Project>
      <Project
        link="https://first-react-application.vercel.app"
        mobaImg={OrganoMoba}
        notImg={OrganoNot}
      >
        <h3 style={{ color: '#695eff' }}>Organo</h3>
        <p>
          O Organo é uma plataforma inovadora desenvolvida para otimizar a
          gestão de equipes, oferecendo recursos abrangentes. Com essa
          aplicação, você pode facilmente montar times, atribuir cargos,
          estabelecer hierarquias e personalizar a apresentação dos membros por
          meio de fotos e informações detalhadas. Além disso, a ferramenta
          permite uma estilização única dos cards dos membros, proporcionando
          uma experiência visualmente atraente e organizada.
        </p>
      </Project>
    </section>
  )
}

export default Projects
