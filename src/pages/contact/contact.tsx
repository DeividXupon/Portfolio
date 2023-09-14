import {
  Addres,
  BoxMain,
  SectionContact,
  TitleMain,
  Locat,
  Map,
  Gmail
} from '.'
import MapGoogle from '../../components/googleMaps/mapGoogle'

function Contact() {
  return (
    <SectionContact id="faleComigo">
      <Addres>
        <TitleMain $fontPrimari>Contato</TitleMain>
        <hr />
        <BoxMain>
          <div className="contat">
            <div className="faleCom">
              <h3>Fale Comigo</h3>
              <p>
                Basta fornecer seu e-mail corretamente para que eu possa
                responder, ou se preferir, pode me contatar pelo WhatsApp ou
                através do meu e-mail profissional.
              </p>
              <ul>
                <li>
                  Email:{' '}
                  <a href="mailto:deivid.silva.info@gmail.com">
                    deivid.silva.info@gmail.com
                  </a>
                </li>
                <li>
                  Cel:{' '}
                  <a
                    href="https://web.whatsapp.com/send?phone=5511952737346"
                    target="_blank"
                  >
                    11 95273-7346
                  </a>
                </li>
              </ul>
            </div>

            <Locat>
              <h4>Localização</h4>
              <div className="grid-locDados">
                <div>
                  <label>Endereço</label>
                  <p>Rua Expedito de Oliveira Santos</p>
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
            </Locat>
            <Map>
              <MapGoogle />
            </Map>
          </div>
          <Gmail>
            <h3>Mande uma mensagem</h3>
            <form
              action="https://formsubmit.co/deivid.silva.info@gmail.com"
              method="POST"
              target="_blank"
            >
              <div className="mainInfo">
                <input placeholder="Nome" type="text" name="name" required />
                <input placeholder="Email" type="text" name="email" required />
              </div>
              <div className="msg">
                <textarea
                  name="message"
                  placeholder="Deixe sua mensagem aqui :)"
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </Gmail>
        </BoxMain>
      </Addres>
    </SectionContact>
  )
}

export default Contact
