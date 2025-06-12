"use client";
import {
  mdiApplicationSettingsOutline,
  mdiCart,
  mdiDomain,
  mdiRobotHappy,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useState } from "react";

export const PlansPrice = () => {
  const categoriesSite = [
    {
      id: 1,
      siteWithChatbot: [
        {
          id: 1,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
        },
        {
          id: 2,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "hidden",
          style_description: "20px 20px",
        },
        {
          id: 3,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "hidden",
          style_description: "20px 20px",
        },
      ],
      id: 2,
      siteToCompany: [
        {
          id: 1,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 2,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 3,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
      ],
      id: 3,
      landingPage: [
        {
          id: 1,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 2,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 3,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
      ],
      id: 4,
      eCommerce: [
        {
          id: 1,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 2,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
        {
          id: 3,
          classification: "Popular",
          categorie: "Landing Page",
          description_1: "Ideal para campanhas",
          valor: `1.200,00`,
          description_2: "*Pagamento único.",
          style_classification: "visible",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("siteWithChatbot");
  const currentCategory = categoriesSite[0][activeCategory];

  return (
    <div className="plansPrice-section">
      <article>
        <section>
          <div className="title-section">
            <h2>
              Desenvolva seu site conosco com planos e serviços acessíveis
            </h2>
          </div>
          <div className="container-section">
            <div className="tags">
              <div
                className={activeCategory === "siteWithChatbot" ? "active" : ""}
                onClick={() => setActiveCategory("siteWithChatbot")}
              >
                <Icon size={1} path={mdiRobotHappy}></Icon>
                Site com Chatbot
              </div>
              <div
                className={activeCategory === "siteToCompany" ? "active" : ""}
                onClick={() => setActiveCategory("siteToCompany")}
              >
                <Icon size={1} path={mdiDomain}></Icon>
                Site para Empresas
              </div>
              <div
                className={activeCategory === "landingPage" ? "active" : ""}
                onClick={() => setActiveCategory("landingPage")}
              >
                <Icon size={1} path={mdiApplicationSettingsOutline}></Icon>
                Página de Vendas/Produtos
              </div>
              <div
                className={activeCategory === "eCommerce" ? "active" : ""}
                onClick={() => setActiveCategory("eCommerce")}
              >
                <Icon size={1} path={mdiCart}></Icon>
                Loja Virtual
              </div>
            </div>

            <div className="categorie">
              <div className="plans">
                {currentCategory.map((content) => {
                  return (
                    <div className="plan" key={content.id}>
                      <div
                        className="classification"
                        style={{ visibility: content.style_classification }}
                      >
                        {content.classification}
                      </div>
                      <div
                        className="description"
                        style={{ borderRadius: content.style_description }}
                      >
                        <div>
                          <h4>{content.categorie}</h4>
                          <p>{content.description_1}</p>
                        </div>
                        <div>
                          <p>
                            R$ <span>{content.valor}</span>
                          </p>
                          <span>{content.description_2}</span>
                        </div>
                        <div>
                          <div className="links">
                            <Link href="#" className="choose-plan-link">
                              Escolher plano
                            </Link>
                            <Link href="#" className="details-links">
                              Detalhes
                            </Link>
                          </div>
                          <span>
                            Solicitação de reembolso em até 30 dias. Cancele a
                            qualquer momento.
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
