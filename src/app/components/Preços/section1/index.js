import { mdiApplicationSettingsOutline, mdiStore24Hour, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export function StartPrice() {
  const sitesPlans = [
    {
      id: 1,
      title: "Ideal para campanhas",
      theme: "Landing Page",
      description:
        "Uma landing page com até 7 seções principais, focada em conversão e otimizada para campanhas de tráfego pago e captação de leads.",
      feature_1_p1: "Simplicidade",
      feature_1_p2: "Alta",
      bar1_1: "active",
      bar2_1: "active",
      bar3_1: "active",
      feature_2_p1: "Foco em conversão",
      feature_2_p2: "Alta",
      bar1_2: "active",
      bar2_2: "active",
      bar3_2: "active",
      feature_3_p1: "Velocidade de entrega",
      feature_3_p2: "Alta",
      bar1_3: "active",
      bar2_3: "active",
      bar3_3: "active",
      background: "#d7e8fa",
      mdIcon: mdiApplicationSettingsOutline,
    },
    {
      id: 2,
      title: "Presença profissional",
      theme: "Site Institucional",
      description:
        "Um site institucional completo com até 10 seções principais, ideal para apresentar sua empresa, serviços, equipe e manter presença online com credibilidade.",
      feature_1_p1: "Autoridade de marca",
      feature_1_p2: "Alta",
      bar1_1: "active",
      bar2_1: "active",
      bar3_1: "active",
      feature_2_p1: "Flexibilidade de conteúdo",
      feature_2_p2: "Média",
      bar1_2: "active",
      bar2_2: "active",
      bar3_2: "inactive",
      feature_3_p1: "Escalabilidade",
      feature_3_p2: "Média",
      bar1_3: "active",
      bar2_3: "active",
      bar3_3: "inactive",
      background: "#bdf",
      mdIcon: mdiWeb,
    },
    {
      id: 3,
      title: "Venda online com estrutura robusta",
      theme: "Loja Virtual",
      description:
        "Loja virtual com estrutura escalável, sistema de cadastro de produtos, carrinho de compras, integração com meios de pagamento e pronta para vender 24h por dia.",
      feature_1_p1: "Escalabilidade",
      feature_1_p2: "Alta",
      bar1_1: "active",
      bar2_1: "active",
      bar3_1: "active",

      feature_2_p1: "Gestão de produtos",
      feature_2_p2: "Alta",
      bar1_2: "active",
      bar2_2: "active",
      bar3_2: "active",

      feature_3_p1: "Flexibilidade de conteúdo",
      feature_3_p2: "Média",
      bar1_3: "active",
      bar2_3: "active",
      bar3_3: "",

      background: "#e6f0fc",
      mdIcon: mdiStore24Hour,
    },
  ];

  return (
    <div className="startPrice-section">
      <article>
        <section>
          <div className="title-section">
            <h1>Encontre o site ideal para você!</h1>
          </div>
          <div className="container-section">
            {sitesPlans.map((index, id) => (
              <div
                className="item"
                key={id}
                style={{ background: index.background }}
              >
                <div className="title">
                  <span>{index.title}</span>
                  <h2>
                    <Icon path={index.mdIcon} size={1.4}></Icon>
                    {index.theme}
                  </h2>
                  <p>{index.description}</p>
                </div>
                <div className="features">
                  <div className="feature">
                    <div className="text">
                      <p>{index.feature_1_p1}</p>
                      <p>{index.feature_1_p2}</p>
                    </div>
                    <div className="bar">
                      <span
                        className={
                          index.bar1_1 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar2_1 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar3_1 === "active" ? "active" : "inactive"
                        }
                      ></span>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="text">
                      <p>{index.feature_2_p1}</p>
                      <p>{index.feature_2_p2}</p>
                    </div>
                    <div className="bar">
                      <span
                        className={
                          index.bar1_2 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar2_2 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar3_2 === "active" ? "active" : "inactive"
                        }
                      ></span>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="text">
                      <p>{index.feature_3_p1}</p>
                      <p>{index.feature_3_p2}</p>
                    </div>
                    <div className="bar">
                      <span
                        className={
                          index.bar1_3 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar2_3 === "active" ? "active" : "inactive"
                        }
                      ></span>
                      <span
                        className={
                          index.bar3_3 === "active" ? "active" : "inactive"
                        }
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="links">
            <Link href="#" className="link">
              Começar agora
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
