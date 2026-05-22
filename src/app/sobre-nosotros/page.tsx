import Image from "next/image";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "La historia de Carpintería Los Artesanos, un taller familiar fundado en 1962, y el proceso artesanal con el que trabajamos cada pieza.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Escucha y diseño",
    body: "Visitamos el espacio, conversamos sobre el uso y dibujamos a mano alzada las primeras propuestas. Solo cuando el cliente reconoce su pieza pasamos al plano técnico.",
  },
  {
    step: "02",
    title: "Selección de la madera",
    body: "Elegimos personalmente cada tabla en el almacén. Buscamos veta, color y secado correctos. La madera mal seleccionada nunca llega al taller.",
  },
  {
    step: "03",
    title: "Mecanizado y ensamble",
    body: "Combinamos maquinaria de precisión con herramienta de mano. Las uniones críticas —espigas, colas de milano, lambdas— se ajustan a mano hasta encajar sin holgura.",
  },
  {
    step: "04",
    title: "Acabado a poro abierto",
    body: "Lijamos en cinco gramajes ascendentes hasta dejar la superficie sedosa. Aplicamos aceites y ceras naturales que respetan el tacto de la madera y permiten su mantenimiento.",
  },
  {
    step: "05",
    title: "Instalación y seguimiento",
    body: "Llevamos la pieza con guantes y mantas. Volvemos a los seis meses para un repaso preventivo de tornillería, ajustes estacionales y refresco del acabado si hace falta.",
  },
];

export default function AboutPage() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Tres generaciones de oficio
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
          La historia del taller
        </h1>
      </header>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80"
          alt="Interior del taller con herramientas de carpintería sobre el banco de trabajo"
          fill
          sizes="(min-width: 1024px) 56rem, 100vw"
          className="object-cover"
        />
      </div>

      <section className="prose prose-stone mt-12 max-w-none text-foreground/85 leading-relaxed">
        <p className="text-lg">
          Carpintería Los Artesanos nació en 1962 en un patio interior del barrio
          de Gràcia. Antoni Vallès, abuelo de los actuales propietarios, montó allí
          su primer banco de trabajo después de aprender el oficio durante diez
          años en un taller de ebanistería del Eixample. Empezó haciendo encargos
          pequeños para los vecinos —una mesa, una repisa, el cabezal de una
          cama— y nunca dejó de hacerlos.
        </p>
        <p className="mt-6">
          Sesenta años después seguimos en el mismo barrio. El taller se ha
          ampliado dos veces, las máquinas son nuevas y los procesos de
          presupuesto se gestionan por correo, pero el corazón del trabajo sigue
          siendo el mismo: una persona, una pieza de madera y el tiempo
          suficiente para hacerlo bien. Hoy somos cinco personas en plantilla
          —tres ebanistas, una restauradora y una arquitecta técnica— y
          colaboramos con herreros, tapiceros y cristaleros del barrio para los
          encargos que lo requieren.
        </p>
        <p className="mt-6">
          Trabajamos con maderas certificadas FSC o PEFC siempre que es posible,
          recuperamos vigas y tarimas antiguas de derribos cercanos y, cuando
          un mueble llega para restaurar, intentamos conservar el máximo de
          material original. La sostenibilidad no es para nosotros una etiqueta:
          es la forma natural de trabajar de un oficio que entiende la madera
          como un recurso finito y precioso.
        </p>
      </section>

      <Separator className="my-16" />

      <section>
        <h2 className="font-heading text-3xl font-semibold text-center">
          Nuestro proceso artesanal
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Cada encargo recorre cinco etapas. No las hemos inventado: son las
          que el oficio lleva siglos pidiendo.
        </p>

        <ol className="mt-12 space-y-10">
          {PROCESS_STEPS.map((s) => (
            <li
              key={s.step}
              className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-heading text-5xl md:text-6xl font-bold text-accent/70 leading-none">
                {s.step}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
