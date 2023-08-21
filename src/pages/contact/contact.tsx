import { Addres, BoxMain, SectionContact, TitleMain, Locat, Map } from '.'

function Contact() {
  return (
    <SectionContact id="faleComigo">
      <Addres>
        <TitleMain $fontPrimari>Contato</TitleMain>
        <hr />
        <BoxMain>
          <div className="contat">
            <h3>Fale Comigo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing
            </p>
            <Locat>
              <h4>Localização</h4>
              <div className="grid-locDados">
                <div>
                  <label>CEP</label>
                  <p>05821-050</p>
                </div>
                <div>
                  <label>Endereço</label>
                  <p>Rua Expedito de Oliveira Santos</p>
                </div>
                <div>
                  <label>Numero</label>
                  <p>90</p>
                </div>
                <div>
                  <label>Bairro</label>
                  <p>Parque Santo Antônio</p>
                </div>
                <div>
                  <label>Cidade</label>
                  <p>São Paulo</p>
                </div>
                <div>
                  <label>UF</label>
                  <p>São Paulo</p>
                </div>
              </div>
              <Map></Map>
            </Locat>
          </div>
          <hr />
          <div className="gmail">BBBBBBBBBBBBBBBBBBBBBBBBBBBB</div>
        </BoxMain>
      </Addres>
    </SectionContact>
  )
}

export default Contact
