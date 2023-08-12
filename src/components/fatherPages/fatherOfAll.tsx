import { Father, FatherCentralizer } from './index'

interface Iprops {
  children?: React.ReactNode
}

function FatherOfAll({ children }: Iprops) {
  return (
    <FatherCentralizer>
      <Father
        initial={{ maxHeight: 0, maxWidth: 0 }}
        animate={{
          maxHeight: '100%',
          maxWidth: '100%',
          height: '100%',
          width: '100%'
        }}
        transition={{
          maxHeight: { delay: 3.5 },
          maxWidth: {
            delay: 4.114,
            duration: 0.75,
            ease: [0.37, 0, 0.63, 0.63]
          },
          height: { delay: 3.5 },
          width: {
            delay: 4.114,
            duration: 0.75,
            ease: [0.37, 0, 0.63, 0.63]
          }
        }}
      >
        {children}
      </Father>
    </FatherCentralizer>
  )
}

export default FatherOfAll
