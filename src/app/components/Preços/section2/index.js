"use client";
import {
  mdiApplicationSettingsOutline,
  mdiCart,
  mdiDomain,
  mdiMinusThick,
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
          categorie: "Starter Chatbot",
          description_1: "Landing Page com chatbot integrado",
          description_2:
            "Ideal para apresentar serviços e gerar leads de forma automática, 24h por dia.",
          description_3:
            "💡 Indicado para profissionais liberais e negócios locais iniciando na automação.",
          valor: `1.000,00`,
          description_4: "*Pagamento único.",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
          list_1: `Página única com design atrativo`,
          list_2: `Chatbot com liberdade para o atendimento`,
          list_3: `Integração com WhatsApp ou e-mail`,
        },
        {
          id: 2,
          classification: "Popular",
          categorie: "Pro Chatbot",
          description_1: "Site institucional com chatbot integrado",
          description_2: "Mais páginas, mais presença online, mais conversão.",
          description_3:
            "🏢 Ideal para empresas que querem agilidade no atendimento e site completo.",
          valor: `1.800,00`,
          description_4: "*Pagamento único.",
          style_classification: "hidden",
          style_description: "20px 20px",
          list_1: `Site com aprox. 5 páginas (Home, Sobre, Serviços, Contato, etc.)`,
          list_2: `com perguntas frequentes e direcionamento para contato`,
        },
        {
          id: 3,
          classification: "Popular",
          categorie: "Business Chatbot",
          description_1:
            "Loja virtual ou página de vendas com chatbot vendedor integrado",
          description_2:
            "Venda com automação total: o chatbot orienta, responde e direciona vendas.",
          description_3:
            "Para quem quer vender produtos ou serviços de forma automatizada.",
          valor: `3.000,00`,
          description_4: "*Pagamento único.",
          style_classification: "hidden",
          style_description: "20px 20px",
          list_1: `Loja com catálogo, pagamentos, painel admin`,
          list_2: `Chatbot com perguntas frequentes e direcionamento de compra`,
          list_3: `Integrações com PIX, boleto e cartão`,
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
                          <span>{content.categorie}</span>
                          <h4>{content.description_1}</h4>
                          <p>{content.description_2}</p>
                          <p>{content.description_3}</p>
                        </div>
                        <div>
                          <p>
                            R$ <span>{content.valor}</span>
                          </p>
                          <span>{content.description_4}</span>
                        </div>
                        <div>
                          <ul>
                            {content.list_1 && (
                              <li>
                                {" "}
                                <Icon
                                  path={mdiMinusThick}
                                  size={0.7}
                                  color="#1e90ff"
                                ></Icon>
                                {content.list_1}
                              </li>
                            )}
                            {content.list_2 && (
                              <li>
                                {" "}
                                <Icon
                                  path={mdiMinusThick}
                                  size={0.7}
                                  color="#1e90ff"
                                ></Icon>
                                {content.list_2}
                              </li>
                            )}
                            {content.list_3 && (
                              <li>
                                {" "}
                                <Icon
                                  path={mdiMinusThick}
                                  size={0.7}
                                  color="#1e90ff"
                                ></Icon>
                                {content.list_3}
                              </li>
                            )}
                            {content.list_4 && (
                              <li>
                                {" "}
                                <Icon
                                  path={mdiMinusThick}
                                  size={0.7}
                                  color="#1e90ff"
                                ></Icon>
                                {content.list_4}
                              </li>
                            )}
                          </ul>
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
