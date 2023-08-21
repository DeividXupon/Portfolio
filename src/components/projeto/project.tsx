import {
  BoxImgsProject,
  SkeletonMoba,
  SkeletonNot,
  Box,
  BoxTextProject
} from '.'

interface Iprops {
  children: React.ReactNode
  mobaImg: string
  notImg: string
  link: string
  $reverse?: boolean
}

function Project({ mobaImg, notImg, $reverse, children, link }: Iprops) {
  return (
    <Box $reverse={$reverse}>
      <BoxTextProject>
        {children}
        <a className="link" href={link} target="_blank">
          acesse
        </a>
      </BoxTextProject>
      <BoxImgsProject>
        <SkeletonMoba className="moba">
          <img
            draggable="false"
            src={mobaImg}
            alt="imagem de um site de notas no celular"
          />
        </SkeletonMoba>
        <SkeletonNot>
          <img
            draggable="false"
            src={notImg}
            alt="imagem de um site de notas em um notbook"
          />
        </SkeletonNot>
      </BoxImgsProject>
    </Box>
  )
}

export default Project
