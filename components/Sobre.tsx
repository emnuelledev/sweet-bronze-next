import { Placeholder } from "./Placeholder";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export default function Sobre() {
  return (
    <section className="band" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-copy reveal">
          <span className="eyebrow">Sobre Sweet Bronze</span>
          <h2 className="section-title">
            Traemos el verano de Brasil
            <br />a la luz del Mediterráneo.
          </h2>
          <p className="first">
            Sweet Bronze nació en {site.since} de una idea sencilla y luminosa: que cada mujer pudiera
            llevar su propio sol dentro.
          </p>
          <p>
            Descubrimos el arte del bronceado brasileño —esa técnica que convierte la piel en algo cálido,
            dorado y profundamente natural— y quisimos traerlo a Valencia con todo su mimo original. No como
            un servicio más, sino como un ritual: pausado, cuidado y hecho a la medida de cada piel.
          </p>
          <p>
            Desde entonces, cada cita en nuestro estudio es una invitación a parar, respirar y sentirte
            radiante. Trabajamos con protocolos profesionales, productos seleccionados y una atención
            personalizada que ha hecho de Sweet Bronze uno de los estudios de bronceado mejor valorados de la
            ciudad.
          </p>
          <div className="sobre-stats">
            <div className="stat">
              <b>{site.since}</b>
              <span>En Valencia</span>
            </div>
            <div className="stat">
              <b>{site.reviews.rating}★</b>
              <span>{site.reviews.count} reseñas Google</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>Atención personal</span>
            </div>
          </div>
        </div>
        <Placeholder className="sobre-img reveal d2" label="Estudio Sweet Bronze" sun src={images.sobre} alt="Estudio Sweet Bronze en Valencia" />
      </div>
    </section>
  );
}
