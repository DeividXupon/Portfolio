import { BiLogoReact } from 'react-icons/bi'
import { SiStyledcomponents } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { LiaJava } from 'react-icons/lia'
import { SiNextdotjs } from 'react-icons/si'

import { v4 } from 'uuid'

const hardSkills = [
  {
    id: v4(),
    Icon: BiLogoReact,
    about:
      'O React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e dinâmicas. Desenvolvida pelo Facebook, ela permite a criação de componentes reutilizáveis que atualizam automaticamente conforme os dados mudam, seguindo o paradigma de programação declarativa.'
  },
  {
    id: v4(),
    Icon: SiStyledcomponents,
    about:
      'O Styled Components é uma biblioteca popular de CSS-in-JS para React, permitindo estilizar componentes de forma encapsulada e dinâmica usando sintaxe JavaScript. Ele combina o código JavaScript e as regras de estilo em um único componente, simplificando o desenvolvimento e manutenção de estilos em aplicações React.'
  },
  {
    id: v4(),
    Icon: DiSass,
    about:
      'Sass (Syntactically Awesome Stylesheets) é uma linguagem de extensão para folhas de estilo CSS. Ela oferece recursos avançados como variáveis, aninhamento, mixins e funções, facilitando a criação e organização de estilos mais complexos e reutilizáveis em projetos web.'
  },
  {
    id: v4(),
    Icon: DiJavascript1,
    about:
      'JavaScript é uma linguagem de programação amplamente usada para criar interatividade e dinamismo em páginas web. Ela permite a manipulação de elementos da página, interação com o usuário e comunicação com servidores, sendo executada diretamente no navegador do cliente.'
  },
  {
    id: v4(),
    Icon: SiTypescript,
    about:
      'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que estende o JavaScript com tipos estáticos opcionais, trazendo mais robustez ao desenvolvimento de software. Ela facilita a detecção de erros, melhor documentação e oferece recursos avançados ao escrever código para aplicações web e outras áreas.'
  },
  {
    id: v4(),
    Icon: FiFigma,
    about:
      'O Figma é uma plataforma de design baseada na nuvem, amplamente utilizada para criar, colaborar e prototipar interfaces de usuário e elementos gráficos de maneira eficiente, permitindo trabalho colaborativo em tempo real e facilitando o design responsivo.'
  },
  {
    id: v4(),
    Icon: MdOutlineDesignServices,
    about:
      'O Design de Experiência do Usuário (UX Design) envolve a criação de interfaces e interações que proporcionam experiências positivas e intuitivas aos usuários em produtos e serviços, considerando sua usabilidade, acessibilidade e satisfação. Ele visa melhorar a maneira como os usuários interagem com um produto, buscando atender suas necessidades e objetivos de forma eficaz.'
  },
  {
    id: v4(),
    Icon: AiFillGithub,
    about:
      'O Git é um sistema de controle de versão distribuído que rastreia alterações em código-fonte, permitindo a colaboração e o gerenciamento de projetos de desenvolvimento de software. O GitHub é uma plataforma de hospedagem que utiliza o Git, fornecendo ferramentas para compartilhar, colaborar e controlar versões de código, além de oferecer recursos sociais para desenvolvedores.'
  },
  {
    id: v4(),
    Icon: LiaJava,
    about:
      'Java é uma linguagem de programação versátil e orientada a objetos, conhecida por sua portabilidade e ampla utilização em desenvolvimento de software, desde aplicações de desktop até sistemas web e móveis. Ela utiliza uma máquina virtual (JVM) para executar o código, o que contribui para sua capacidade de ser executada em diferentes plataformas.'
  },
  {
    id: v4(),
    Icon: SiNextdotjs,
    about:
      'Next.js é um framework de desenvolvimento React que simplifica a criação de aplicações web rápidas e escaláveis, oferecendo renderização no lado do servidor (SSR), pré-renderização estática e outras funcionalidades como roteamento e tratamento de dados. Ele é frequentemente usado para criar páginas web otimizadas em termos de desempenho e SEO.'
  }
]

export default hardSkills
