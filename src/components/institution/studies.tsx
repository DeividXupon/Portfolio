import { Description, LineMatte, List, StudItem, Cont } from '.'
import content from '../../data/institution.json'

interface Iprops {
  content: (typeof content)[0]
  index: number
}

function Institution({ content, index }: Iprops) {
  return (
    <Cont $index={index + 1}>
      <StudItem
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3>{content.type}</h3>
        <div className="Sco_Dat">
          <h4>
            instituição de ensino: <strong>{content.institution}</strong>
          </h4>
          <span>{content.date}</span>
        </div>
        <h2>{content.course}</h2>
        <LineMatte />
        <Description>
          <p>{content.description}</p>
          <div className="listBox">
            <h4>O que aprendi aqui</h4>
            <List>
              {content.ListItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </List>
          </div>
        </Description>
      </StudItem>
    </Cont>
  )
}

export default Institution
