import { Placeholder, SunIcon } from "./Placeholder";
import { wa } from "@/lib/site";
import { images } from "@/lib/images";

export default function Tratamientos() {
  return (
    <section className="band" id="tratamientos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Tratamientos</span>
          <h2 className="section-title">Nuestro ritual de bronceado.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Un menú que crece contigo. Hoy, nuestro tratamiento estrella; mañana, mucho más por descubrir.
          </p>
        </div>
        <div className="treat-grid">
          <div className="treat featured reveal">
            <Placeholder className="treat-img" label="Bronceado con Bikini" src={images.tratamientoBikini} alt="Bronceado con Bikini">
              <span className="treat-tag">Más solicitado</span>
            </Placeholder>
            <div className="treat-body">
              <h3>Bronceado con Bikini</h3>
              <p className="treat-price">
                70€ <small>/ sesión</small>
              </p>
              <p className="desc">
                Nuestro tratamiento insignia. Un bronceado brasileño completo con las líneas naturales del
                bikini, para un resultado dorado, favorecedor y absolutamente tuyo.
              </p>
              <div className="treat-meta">
                <div>
                  <b>Incluye:</b>
                  <span>Evaluación de piel, aplicación profesional y acabado personalizado.</span>
                </div>
                <div>
                  <b>Beneficios:</b>
                  <span>Tono uniforme, luminosidad natural y marcas favorecedoras.</span>
                </div>
                <div>
                  <b>Ideal para:</b>
                  <span>Verano, vacaciones, eventos o simplemente sentirte radiante.</span>
                </div>
                <div>
                  <b>Duración:</b>
                  <span>Aprox. 45–60 min (orientativo).</span>
                </div>
              </div>
            </div>
          </div>

          <div className="treat soon reveal d1">
            <SunIcon />
            <h3>Bronceado con Cinta</h3>
            <p>
              La técnica de la <em>fita</em> brasileña para diseñar tus propias marcas. Próximamente
              disponible.
            </p>
          </div>

          <div className="treat soon reveal d2">
            <SunIcon />
            <h3>Nuevos rituales</h3>
            <p>Estamos preparando más experiencias para cuidar tu glow durante todo el año.</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }} className="reveal">
          <a
            href={wa("Hola Sweet Bronze, quiero reservar el Bronceado con Bikini")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Reservar mi sesión
          </a>
        </div>
      </div>
    </section>
  );
}
