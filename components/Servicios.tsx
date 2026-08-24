import { Placeholder } from "./Placeholder";
import { wa, waMessages } from "@/lib/site";
import { images } from "@/lib/images";

const servicios = [
  {
    id: "propio",
    t: "Bronceado con bikini propio",
    price: 60,
    d: "Usas tu propio bikini para marcar las líneas.",
    img: images.tratamientoBikini,
    message: waMessages.bikiniPropio,
  },
  {
    id: "cinta",
    t: "Bronceado con cinta (fita)",
    price: 70,
    d: "La cinta la prepara la profesional antes de tu sesión.",
    img: images.tratamientoCinta,
    message: waMessages.bikiniCinta,
  },
];

export default function Servicios() {
  return (
    <section className="band" id="servicios">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Servicios</span>
          <h2 className="section-title">Elige tu bronceado.</h2>
        </div>
        <div className="serv-grid">
          {servicios.map((s, i) => (
            <div className={`treat reveal${i ? " d1" : ""}`} key={s.id}>
              <Placeholder className="treat-img" label={s.t} src={s.img} alt={s.t} />
              <div className="treat-body">
                <h3>{s.t}</h3>
                <p className="treat-price">
                  {s.price}€ <small>/ sesión</small>
                </p>
                <p className="desc">{s.d}</p>
                <a href={wa(s.message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Reservar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="serv-note reveal">
          ¿Quieres añadir más tiempo a tu sesión?{" "}
          <a href={wa(waMessages.tiempoAdicional)} target="_blank" rel="noopener noreferrer">
            Habla con nuestro equipo por WhatsApp.
          </a>
        </p>
      </div>
    </section>
  );
}
