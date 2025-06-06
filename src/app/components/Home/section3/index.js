import { mdiCheckDecagram, mdiHours24, mdiSpeedometer } from "@mdi/js";
import Icon from "@mdi/react";



export function BenefitsPage(){
    return(
        <div className="benefits-section">
            <article>
                <section>
                    <div className="benefits-title">
                        <h2>Constância, Agilidade & Eficiência.</h2>
                        <h3>Tenha um de nossos sites de alta qualidade com chatbots e proporcione uma experiência rápida para seus visitantes!</h3>
                    </div>
                    <div className="benefits-content">
                        <div className="benefit">
                            <span>
                                <Icon path={mdiHours24} size={2}></Icon>
                            </span>
                            <h4>99,9% Online e trabalhando. <br/>Seu site e chatbot 24/7.</h4>
                            <p>Seu site sempre online, trabalhando e prestando suporte aos seus visitantes. Evolua o atendimento com o chatbot!</p>
                        </div>
                        <div className="benefit">
                            <span>
                                <Icon path={mdiSpeedometer} size={2}></Icon>
                            </span>
                            <h4>Site responsivo, estruturado para o melhor desempenho e SEO!</h4>
                            <p>Tenha uma presença online eficiente: estrutura pensada para carregar rápido, aparecer no Google e oferecer atendimento automatizado.</p>
                        </div>
                        <div className="benefit">
                            <span>
                                <Icon path={mdiCheckDecagram} size={2}></Icon>
                            </span>
                            <h4>Cuidamos de tudo para você, do site ao chatbot!</h4>
                            <p>Desenvolvemos e hospedamos seu site do zero, com o chatbot já instalado e funcionando. Você não se preocupa com nada técnico — entregamos tudo pronto e otimizado.</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}