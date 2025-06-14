"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mdiMinusThick, mdiPentagon } from "@mdi/js";
import Icon from "@mdi/react";

export function PlansPage() {
  const categoriesBots = [
    {
      id: 1,
      textApplication: [
        {
          id: 1,
          classification: "Popular",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
          categorie: "Tradicional",
          text_h4: "Um chatbot para um site",
          description_1:
            "Ideal para sites pessoais, institucionais ou pequenos negócios que precisam automatizar atendimentos básicos com inteligência artificial.",
          valor: "799,99",
          description_2: "*Pagamento único.",
          link_plan: "",
          list_1: `Responde dúvidas frequentes`,
          list_2: `Direciona para WhatsApp ou canais externos`,
          list_3: `Sem necessidade de painel ou suporte técnico contínuo`,
        },
        {
          id: 2,
          classification: "Popular",
          style_classification: "hidden",
          style_description: "20px 20px",
          categorie: "Negócios",
          text_h4: "Dois chatbots para dois sites",
          description_1:
            "Perfeito para empresas com duas frentes de atuação, marcas distintas ou filiais que precisam de atendimento automatizado em sites separados.",
          valor: "1499,99",
          description_2: "*Pagamento único.",
          link_plan: "",
          list_1: `Um chatbot por site (até 2 sites)`,
          list_2: `Ideal para múltiplas marcas`,
          list_3: `Pronto para responder e direcionar atendimentos`,
        },
        {
          id: 3,
          classification: "Popular",
          style_classification: "hidden",
          style_description: "20px 20px",
          categorie: "Empresarial",
          text_h4: "Cinco chatbots para cinco sites",
          description_1:
            "Solução para empresas maiores, com diversas marcas, produtos ou áreas de atuação, que precisam de chatbots distribuídos em vários domínios.",
          valor: "3499,99",
          description_2: "*Pagamento único.",
          link_plan: "",
          list_1: `Atendimento automatizado em (até 5 sites)`,
          list_2: `Comunicação inteligente com visitantes`,
          list_3: `Direcionamento estratégico para canais externos`,
        },
      ],
      id: 2,
      chatBotAnnual: [
        {
          id: 1,
          classification: "Popular",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Básico",
          text_h4: "Aprox. 1.000 conversas por mês",
          description_1: `Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)`,
          valor: "91,58/mês",
          description_2:
            "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
          list_1: `Aproximadamente 12.000 conversas no ano`,
          list_2: `Atendimento simples e eficaz`,
          list_3: `Custo acessível para começar`,
          list_4: `Incluso desenvolvimento de site`,
        },
        {
          id: 2,
          classification: "Recomendado",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
          categorie: "Intermediário",
          text_h4: "Aprox. 10.000 conversas por mês",
          description_1:
            "Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)",
          valor: "214,00/mês",
          description_2:
            "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
          list_1: `Aproximadamente 120.000 conversas no ano`,
          list_2: `Escalável e com bom custo-benefício`,
          list_3: `Indicado para ecommerces, consultórios, prestadores de serviço`,
          list_4: `Incluso desenvolvimento de site`,
        },
        {
          id: 3,
          classification: "Recomendado",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Profissional",
          text_h4: "Aprox 20.000 conversas por mês",
          description_1:
            "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
          valor: "379,00/mês",
          description_2:
            "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
          list_1: `Aproximadamente 240.000 conversas no ano`,
          list_2: `Estável, eficiente e preparado para alto volume`,
          list_3: `Ideal para marketplaces, SaaS, franquias digitais`,
          list_4: `Incluso desenvolvimento de site`,
        },
      ],
      id: 3,
      chatBotMonthly: [
        {
          id: 1,
          classification: "Popular",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Básico",
          text_h4: "Aprox. 1.000 conversas",
          description_1:
            "Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)",
          valor: "115,00/mês",
          description_2: "*Plano mensal. Cancele a qualquer momento.",
          list_1: `Atendimento simples e eficaz`,
          list_2: `Custo acessível para começar`,
        },
        {
          id: 2,
          classification: "Recomendado",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
          categorie: "Intermediário",
          text_h4: "Aprox. 10.000 conversas",
          description_1:
            "Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)",
          valor: "254,00/mês",
          description_2: "*Plano mensal. Cancele a qualquer momento.",
          list_1: `Escalável e com bom custo-benefício`,
          list_2: `Indicado para ecommerces, consultórios, prestadores de serviço`,
        },
        {
          id: 3,
          classification: "Recomendado",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Profissional",
          text_h4: "Aprox. 20.000 conversas",
          description_1:
            "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
          valor: "429,00/mês",
          description_2: "*Plano mensal. Cancele a qualquer momento.",
          list_1: `Estável, eficiente e preparado para alto volume`,
          list_2: `Ideal para marketplaces, SaaS, franquias digitais`,
        },
      ],
      id: 4,
      sites: [
        {
          id: 1,
          classification: "Popular",
          style_classification: "visible",
          style_description: "0px 0px 20px 20px",
          categorie: "Landing Page",
          text_h4:
            "Site objetivo de uma única página com foco em conversão. Ideal para campanhas, lançamentos, captação de leads e apresentação de serviços.",
          description_1:
            "Recomendado para autônomos, profissionais liberais e microempreendedores.",
          valor: "600,00",
          description_2: "*Pagamento único",
          list_1: `Layout moderno e responsivo`,
          list_2: `Foco em chamada para ação (CTA)`,
          list_3: `Integração com WhatsApp ou formulário`,
        },
        {
          id: 2,
          classification: "Popular",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Site Institucional",
          text_h4:
            "Site com múltiplas páginas, ideal para apresentar sua empresa com profissionalismo",
          description_1:
            "Indicado para empresas de serviços, clínicas, escritórios e projetos profissionais.",
          valor: "800,00",
          description_2: "*Pagamento único",
          list_1: `Página inicial + páginas internas (sobre, serviços, contato, etc.)`,
          list_2: `Layout moderno e responsivo`,
          list_3: `Otimização para SEO`,
        },
        {
          id: 3,
          classification: "Recomendado",
          style_classification: "hidden",
          style_description: "20px 20px 20px 20px",
          categorie: "Loja Virtual",
          text_h4:
            "Plataforma de e-commerce com sistema de produtos, carrinho e painel de gestão",
          description_1:
            "Ideal para marcas, lojas e revendedores que desejam vender pela internet.",
          valor: "1600,00",
          description_2: "*Pagamento único",
          list_1: `Cadastro de produtos com imagens e preços`,
          list_2: `Carrinho de compras e integração com pagamento`,
          list_3: `Área do cliente + painel administrador`,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("textApplication");

  const currentCategory = categoriesBots[0][activeCategory];

  return (
    <div className="plans-section">
      <article>
        <section>
          <div className="title-plans">
            <div className="titles">
              <div
                className={activeCategory === "textApplication" ? "active" : ""}
                onClick={() => setActiveCategory("textApplication")}
              >
                <strong>Implementação Chatbot</strong>
              </div>
              <div
                className={activeCategory === "chatBotAnnual" ? "active" : ""}
                onClick={() => setActiveCategory("chatBotAnnual")}
              >
                <strong>Chatbot Anual</strong>
              </div>
              <div
                className={activeCategory === "chatBotMonthly" ? "active" : ""}
                onClick={() => setActiveCategory("chatBotMonthly")}
              >
                <strong>Chatbot Mensal</strong>
              </div>
              <div
                className={activeCategory === "sites" ? "active" : ""}
                onClick={() => setActiveCategory("sites")}
              >
                <strong>Sites</strong>
              </div>
            </div>
            <div className="subtitle-text">
              <h2>Confira um de nossos planos para você!</h2>
              <h3>
                Nossos planos possuem 30 dias para solicitação de reembolso,
                zero risco!
              </h3>
            </div>
          </div>
          <div className="plans">
            {currentCategory.map((texts) => {
              return (
                <div className="plan" key={texts.id}>
                  <div
                    className="classification"
                    style={{ visibility: texts.style_classification }}
                  >
                    {texts.classification}
                  </div>
                  <div
                    className="description"
                    style={{ borderRadius: texts.style_description }}
                  >
                    <div>
                      <span>{texts.categorie}</span>
                      <h4>{texts.text_h4}</h4>
                      <p>{texts.description_1}</p>
                    </div>
                    <div>
                      <p>
                        R$ <span>{texts.valor}</span>
                      </p>
                      <span>{texts.description_2}</span>
                    </div>
                    <div>
                      <ul>
                        {texts.list_1 && (
                          <li>
                            <Icon
                              path={mdiMinusThick}
                              size={0.7}
                              color="#1e90ff"
                            ></Icon>
                            {texts.list_1}
                          </li>
                        )}
                        {texts.list_2 && (
                          <li>
                            <Icon
                              path={mdiMinusThick}
                              size={0.7}
                              color="#1e90ff"
                            ></Icon>
                            {texts.list_2}
                          </li>
                        )}
                        {texts.list_3 && (
                          <li>
                            <Icon
                              path={mdiMinusThick}
                              size={0.7}
                              color="#1e90ff"
                            ></Icon>
                            {texts.list_3}
                          </li>
                        )}
                        {texts.list_4 && (
                          <li>
                            <Icon
                              path={mdiMinusThick}
                              size={0.7}
                              color="#1e90ff"
                            ></Icon>
                            {texts.list_4}
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
          <div className="payments">
            <span className="terms-button">Termos de pagamento</span>
            <p>
              O pagamento pode ser parcelado em até 12x{" "}
              <Image src="/cards.avif" width={200} height={30} />
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
