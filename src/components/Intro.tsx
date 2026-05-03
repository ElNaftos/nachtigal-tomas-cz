import { FadeIn } from "./FadeIn";

export function Intro() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">O mně</span>
              <h2 className="headline-lg mt-4">
                Kdo za tím
                <br />
                stojí
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <div className="max-w-[560px] space-y-6">
                <p className="body">
                  Roky jsem prodával mobily. Bavilo mě to, ale nikdy jsem
                  neprodával něco svého.
                </p>
                <p className="body">
                  Dneska stavím weby a datové projekty pro český a slovenský
                  trh. Jazyk je přirozená výhoda — v Česku nemůžeš soutěžit
                  s anglickým copy-paste a vyhrát.
                </p>
                <p className="body">
                  Pracuju s AI nástroji. Ale tady končí podobnost s těmi,
                  co ti na Instagramu slibují web za hodinu a 90 tisíc
                  měsíčně. Nic z toho, co vidíš níže, nevzniklo jedním
                  promptem. Každý projekt má za sebou stovky hodin —
                  od nápadu přes data, design, testování až po marketing.
                </p>
                <p className="body">
                  Nemám rád generické věci. Nemám rád zkratky, které vedou
                  k průměru. A nemám rád weby, u kterých na první pohled
                  poznáš, že je vytvořila umělá inteligence bez lidského
                  dohledu.
                </p>
                <p className="body">
                  Myslím nekonvenčně. Hledám díry na trhu, ne trendy.
                  A stavím věci, které mají smysl — ne věci, které dobře
                  vypadají na LinkedIn postu.
                </p>

                <div className="pt-8">
                  <span className="label">
                    Next.js · TypeScript · Supabase · Vercel · Stripe ·
                    Claude Code
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
