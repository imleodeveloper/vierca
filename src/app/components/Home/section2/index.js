"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export function PlansPage(){

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
                    text_h4: "Apenas um chatbot",
                    description_1: "Perfeito para sites pessoais/empresariais",
                    valor: "799,99",
                    description_2: "*Pagamento único. Após a entrega e instalação do chatbot, a manutenção e o funcionamento contínuo ficam sob responsabilidade do contratante.",
                    link_plan: "",
                    
                },
                {
                    id: 2,
                    classification: "Popular",
                    style_classification: "hidden",
                    style_description: "20px 20px",
                    categorie: "Negócios",
                    text_h4: "Com dois chatbots",
                    description_1: "Empresas com duas frentes de negócios/marcas",
                    valor: "1499,99",
                    description_2: "*Pagamento único. Após a entrega e instalação do chatbot, a manutenção e o funcionamento contínuo ficam sob responsabilidade do contratante.",
                    link_plan: "",

                },
                {
                    id: 3,
                    classification: "Popular",
                    style_classification: "hidden",
                    style_description: "20px 20px",
                    categorie: "Empresarial",
                    text_h4: "Com cinco chatbots",
                    description_1: "Empresa grande com diversas marcas ou áreas de atuação ",
                    valor: "3499,99",
                    description_2: "*Pagamento único. Após a entrega e instalação do chatbot, a manutenção e o funcionamento contínuo ficam sob responsabilidade do contratante.",
                    link_plan: "",

                }
            ],
            id: 2,
            chatBotAnnual: [
                {
                    id: 1,
                    classification: "Popular",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "Basic",
                    text_h4: "Até 1.000 conversas",
                    description_1: "Perfeito para sites pessoais/empresariais que estão começando.",
                    valor: "91,58/mês",
                    description_2: "*Estimativa de gasto mensal durante 12 meses. O plano é pago de forma integral.",
                },
                {
                    id: 2,
                    classification: "Recomendado",
                    style_classification: "visible",
                    style_description: "0px 0px 20px 20px",
                    categorie: "Intermediary",
                    text_h4: "Até 10.000 conversas",
                    description_1: "Perfeito para sites pessoais/empresariais com médio tráfego e atendimentos online.",
                    valor: "214,00/mês",
                    description_2: "*Estimativa de gasto mensal durante 12 meses. O plano é pago de forma integral.",
                },
                {
                    id: 3,
                    classification: "Recomendado",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "Profissional",
                    text_h4: "Até 20.000 conversas",
                    description_1: "Empresas com muito tráfego e alto volume de atendimentos online.",
                    valor: "379,00/mês",
                    description_2: "*Estimativa de gasto mensal durante 12 meses. O plano é pago de forma integral.",
                },
            ],
            id: 3,
            chatBotMonthly: [
                {
                    id: 1,
                    classification: "Popular",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "Basic",
                    text_h4: "Até 1.000 conversas",
                    description_1: "Perfeito para sites pessoais/empresariais que estão começando.",
                    valor: "115,00/mês",
                    description_2: "*Plano mensal.",
                },
                {
                    id: 2,
                    classification: "Recomendado",
                    style_classification: "visible",
                    style_description: "0px 0px 20px 20px",
                    categorie: "Intermediary",
                    text_h4: "Até 10.000 conversas",
                    description_1: "Perfeito para sites pessoais/empresariais com médio tráfego e atendimentos online.",
                    valor: "254,00/mês",
                    description_2: "*Plano mensal.",
                },
                {
                    id: 3,
                    classification: "Recomendado",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "Profissional",
                    text_h4: "Até 20.000 conversas",
                    description_1: "Empresas com muito tráfego e alto volume de atendimentos online.",
                    valor: "429,00/mês",
                    description_2: "*Plano mensal.",
                },
            ],
            id: 4,
            sites: [
                {
                    id: 1,
                    classification: "Popular",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "Single Page",
                    text_h4: "Site em uma única página sem funcionalidades complexas",
                    description_1: "Para microempreendedores e portfólio",
                    valor: "700,00",
                    description_2: "*O plano é pago de forma integral.",
                },
                {
                    id: 2,
                    classification: "Popular",
                    style_classification: "visible",
                    style_description: "0px 0px 20px 20px",
                    categorie: "Landing Page",
                    text_h4: "Site em uma única página ou diversas páginas, sem funcionalidades complexas",
                    description_1: "Para empresas e microempreendedores.",
                    valor: "800,00",
                    description_2: "*O plano é pago de forma integral.",
                },
                {
                    id: 3,
                    classification: "Recomendado",
                    style_classification: "hidden",
                    style_description: "20px 20px 20px 20px",
                    categorie: "E-Commerce",
                    text_h4: "Site com loja virtual, sistema de cadastro e administrador.",
                    description_1: "Empresas com foco em venda de produtos.",
                    valor: "1600,00",
                    description_2: "*O plano é pago de forma integral.",
                },
            ],
        }
    ];
    
    const [activeCategory, setActiveCategory] = useState("textApplication");

    const currentCategory = categoriesBots[0][activeCategory];

    return(
        <div className="plans-section">
            <article>
                <section>
                    <div className="title-plans">
                        <div className="titles">
                            <div className={activeCategory === "textApplication" ? 'active' : ''} onClick={() => setActiveCategory("textApplication")}><strong>Implementação Chatbot</strong></div>
                            <div className={activeCategory === "chatBotAnnual" ? 'active' : ''} onClick={() => setActiveCategory("chatBotAnnual")}><strong>Chatbot Anual</strong></div>
                            <div className={activeCategory === "chatBotMonthly" ? 'active' : ''} onClick={() => setActiveCategory("chatBotMonthly")}><strong>Chatbot Mensal</strong></div>
                            <div className={activeCategory === "sites" ? 'active' : ''} onClick={() => setActiveCategory("sites")}><strong>Sites</strong></div>
                        </div>
                        <div className="subtitle-text">
                            <h2>Confira um de nossos planos para você!</h2>
                            <h3>Nossos planos possuem 30 dias para solicitação de reembolso, zero risco!</h3>
                        </div>
                    </div>
                    <div className="plans">
                        {currentCategory.map((texts) => {    
                            return(                   
                                <div className="plan" key={texts.id}>
                                    <div className="classification" style={{visibility: texts.style_classification}}>
                                        {texts.classification}
                                    </div>
                                    <div className="description" style={{borderRadius: texts.style_description}}>
                                        <div>
                                            <span>{texts.categorie}</span>
                                            <h4>{texts.text_h4}</h4>
                                            <p>{texts.description_1}</p>
                                        </div>
                                        <div>
                                            <p>R$ <span>{texts.valor}</span></p>
                                            <span>
                                                {texts.description_2}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="links">
                                                <Link href="#" className="choose-plan-link">Escolher plano</Link>
                                                <Link href="#" className="details-links">Detalhes</Link>
                                            </div>
                                            <span>Solicitação de reembolso em até 30 dias. Cancele a qualquer momento.</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                    <div className="payments">
                        <span className="terms-button">
                            Termos de pagamento
                        </span>
                        <p>
                            O pagamento pode ser parcelado em até 12x <Image src="/cards.avif" width={200} height={30} />
                        </p>
                    </div>
                </section>
            </article>
        </div>
    )
}