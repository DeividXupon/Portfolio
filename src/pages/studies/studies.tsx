import Institution from '../../components/institution/studies'
import contentInstitution from '../../data/institution.json'
function Studies() {
  return (
    <section style={{ counterReset: 'cont' }}>
      {contentInstitution.map((item, index) => (
        <Institution content={item} index={index} />
      ))}
    </section>
  )
}

export default Studies
