// ============================================================
//  Sweet Tips — contenido editorial
//  Añade un nuevo artículo agregando un objeto a este array.
//  El "slug" define la URL: /sweet-tips/<slug>
// ============================================================

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  coverLabel: string;
  // Cada bloque es un párrafo. Si empieza con "## " se renderiza como subtítulo.
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "preparar-la-piel",
    title: "Cómo preparar tu piel para el bronceado perfecto",
    category: "Preparación",
    excerpt:
      "Los gestos previos que garantizan un color más uniforme, luminoso y duradero.",
    readingTime: "4 min",
    coverLabel: "Editorial · Piel",
    body: [
      "Un bronceado bonito empieza mucho antes de la sesión. La piel es un lienzo: cuanto mejor la prepares, más natural y duradero será el resultado. En Sweet Bronze siempre lo decimos: la mitad del glow se juega en casa, los días previos.",
      "## Exfolia con cariño",
      "Dos o tres días antes de tu cita, haz una exfoliación suave por todo el cuerpo. Eliminar las células muertas alisa la superficie y evita que el color se acumule en zonas más ásperas como rodillas, codos y tobillos. No hace falta frotar con fuerza: constancia y suavidad.",
      "## Hidrata la víspera, no el mismo día",
      "La noche anterior, aplica una crema hidratante ligera para que la piel llegue nutrida y flexible. El día de la sesión, en cambio, ven con la piel limpia y libre de cremas, aceites o perfumes: cualquier producto puede crear una barrera y afectar la uniformidad del bronceado.",
      "## Detalles que marcan la diferencia",
      "Depílate al menos 24 horas antes para que los poros estén cerrados. Trae ropa cómoda y oscura, y tu bikini favorito para diseñar tus líneas. Con estos pequeños gestos, tu piel estará lista para lucir ese dorado cálido que tanto nos gusta.",
    ],
  },
  {
    slug: "hacer-durar-el-bronceado",
    title: "Cómo hacer que tu bronceado dure más tiempo",
    category: "Cuidado",
    excerpt:
      "Trucos sencillos de mantenimiento para conservar el glow día tras día.",
    readingTime: "3 min",
    coverLabel: "Editorial · Duración",
    body: [
      "Conseguir el bronceado es solo el principio. Mantenerlo bonito durante semanas depende del cuidado que le des después. La buena noticia: son gestos fáciles que se integran en tu rutina sin esfuerzo.",
      "## Hidratación, tu mejor aliada",
      "Una piel hidratada conserva el color mucho más tiempo. Aplica crema nutritiva cada día, idealmente después de la ducha, cuando la piel aún está ligeramente húmeda. Verás cómo el dorado se mantiene luminoso en lugar de apagarse.",
      "## Mima la primera ducha",
      "Las primeras horas son clave para fijar el color. Evita duchas muy calientes, saunas y baños prolongados al principio. Usa geles suaves, sin alcohol ni exfoliantes agresivos, para no arrastrar el bronceado antes de tiempo.",
      "## Protege y retoca",
      "Aplica protección solar para cuidar tu piel y evitar que el tono se vaya de forma desigual. Y cuando notes que empieza a bajar, reserva tu retoque: mantener el color siempre es más fácil que empezar de cero.",
    ],
  },
  {
    slug: "bikini-o-cinta",
    title: "Bronceado con bikini o con cinta: ¿cuál es para ti?",
    category: "Método",
    excerpt:
      "Descubre las diferencias entre las dos técnicas brasileñas más queridas.",
    readingTime: "4 min",
    coverLabel: "Editorial · Método",
    body: [
      "Una de las preguntas que más nos hacéis: ¿bikini o cinta? Ambas son parte del auténtico método brasileño y ambas dan resultados preciosos. La elección depende del estilo de marcas que buscas.",
      "## Bronceado con bikini",
      "Es nuestro clásico. Crea las líneas naturales y favorecedoras de una prenda de baño, con ese contraste dorado tan característico. Ideal si quieres un resultado versátil que combine con la mayoría de tus bikinis y bañadores.",
      "## Bronceado con cinta (fita)",
      "Aquí entra el arte. Con la técnica de la cinta diseñamos marcas totalmente personalizadas: más finas, más marcadas o con la forma que prefieras. Perfecto si buscas un look muy definido o quieres algo único, hecho a tu medida.",
      "## ¿Y si no lo tengo claro?",
      "No pasa nada. En tu evaluación personalizada analizamos tu piel, escuchamos lo que buscas y te aconsejamos la opción que mejor encaja contigo. Nunca hay una respuesta única: hay la respuesta perfecta para ti.",
    ],
  },
  {
    slug: "errores-comunes",
    title: "Errores comunes que arruinan tu bronceado",
    category: "Consejos",
    excerpt:
      "Lo que conviene evitar antes y después de tu sesión para un acabado impecable.",
    readingTime: "3 min",
    coverLabel: "Editorial · Errores",
    body: [
      "A veces, lo que no haces importa tanto como lo que haces. Estos son los descuidos más frecuentes que pueden restar belleza a tu bronceado, y cómo evitarlos con facilidad.",
      "## Llegar con la piel cargada de productos",
      "Cremas, aceites o maquillaje corporal el día de la sesión crean una barrera que afecta la uniformidad. Ven con la piel limpia y desnuda: es la mejor base posible.",
      "## Saltarte la exfoliación",
      "Sin exfoliar, el color tiende a acumularse en las zonas secas y a desvanecerse de forma irregular. Unos días antes, dedica un momento a preparar tu piel.",
      "## Descuidar las primeras horas",
      "Duchas muy calientes, sudor intenso o ropa que roza justo después pueden marcar el resultado. Dale a tu bronceado un poco de calma al principio y te lo devolverá con creces.",
    ],
  },
  {
    slug: "primera-sesion",
    title: "Tu primera sesión en Sweet Bronze: qué esperar",
    category: "Primera vez",
    excerpt:
      "Todo lo que necesitas saber para vivir tu primera experiencia con calma.",
    readingTime: "3 min",
    coverLabel: "Editorial · Primera vez",
    body: [
      "Si es tu primera vez, respira: aquí no hay prisa. Nuestra intención es que te sientas cómoda, cuidada y bien acompañada de principio a fin.",
      "## Empezamos escuchándote",
      "Toda sesión comienza con una breve evaluación: hablamos de tu tipo de piel, de tus expectativas y del resultado que imaginas. A partir de ahí, personalizamos cada paso.",
      "## Un ritual, no una prisa",
      "Trabajamos con calma y con protocolos profesionales de higiene y aplicación. Te explicamos qué hacemos en cada momento para que estés tranquila y disfrutes de la experiencia.",
      "## Sales radiante",
      "Al terminar, te damos las recomendaciones de cuidado para que tu bronceado luzca perfecto y dure más. Y si tienes cualquier duda después, estamos a un mensaje de distancia.",
    ],
  },
  {
    slug: "glow-de-vacaciones",
    title: "El glow perfecto para tus vacaciones de verano",
    category: "Vacaciones",
    excerpt:
      "Cómo planificar tu bronceado para llegar radiante a la playa o al evento.",
    readingTime: "3 min",
    coverLabel: "Editorial · Vacaciones",
    body: [
      "Llegar a las vacaciones ya radiante cambia por completo cómo te sientes en la playa, en las fotos y en cada evento. Con un poco de planificación, el glow perfecto es totalmente tuyo.",
      "## Reserva con margen",
      "Agenda tu sesión unos días antes de viajar, no la víspera. Así el color se asienta y llegas con un tono natural y homogéneo desde el primer día.",
      "## Lleva tu cuidado contigo",
      "Mete en la maleta tu crema hidratante y protección solar. Mantener la piel nutrida e protegida hará que el bronceado te acompañe durante todo el viaje.",
      "## Piensa en tus looks",
      "¿Vestidos abiertos, bañador nuevo, un evento especial? Coméntanoslo en la sesión y adaptamos tus líneas para que todo combine y te sientas espectacular.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
