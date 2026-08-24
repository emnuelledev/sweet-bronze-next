import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import ComoFunciona from "@/components/ComoFunciona";
import Resultados from "@/components/Resultados";
import BiquinisPreview from "@/components/BiquinisPreview";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <ComoFunciona />
      <Resultados />
      <BiquinisPreview />
      <Contacto />
    </>
  );
}
