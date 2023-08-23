import {
  BoxImgsProject,
  SkeletonMoba,
  SkeletonNot,
  Box,
  BoxTextProject,
  Link
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
    <Box
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      $reverse={$reverse}
    >
      <BoxTextProject>
        {children}
        <Link
          whileHover={{ scale: 1.25, boxShadow: '0px 0px 30px black' }}
          transition={{ type: 'spring', stiffness: 100, damping: 8 }}
          href={link}
          target="_blank"
        >
          Acesse
        </Link>
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
