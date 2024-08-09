import { inter } from "../_lib/fonts";
import { services } from "./_utils";

export default function Services() {
  return (
    <main>
      <h1 className="mt-12 text-3xl font-black text-yellow-300">Serviços</h1>

      <section className="flex gap-12 mt-16">
        {
          services.map((service) => (
            <article key={service.id}>
              <h2 className="mb-4 text-lg font-black text-white">{service.title}</h2>
              <p className="text-sm font-extralight text-zinc-400">{service.content}</p>
            </article>
          ))
        }
      </section>
    </main>
  );
}
