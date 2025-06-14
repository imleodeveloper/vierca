import {
  mdiCheckAll,
  mdiHelpCircleOutline,
  mdiShieldCheckOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

export function HomePage() {
  return (
    <div className="start-section">
      <article>
        <section>
          <div className="text-start">
            <div className="title-text">
              <h1>Tudo o que você precisa para ter seu ChatBot funcionando</h1>
            </div>
            <div className="price-text">
              <div className="text">
                <span>A partir de:</span>
              </div>
              <div className="value">
                <h3>
                  R$ <span>91,58</span>/mês
                </h3>
                <button>Outros planos</button>
              </div>
            </div>
            <div className="guarantee">
              <span>
                <Icon path={mdiShieldCheckOutline} size={1}></Icon>
                <p>30 dias para solicitar reembolso</p>
              </span>
            </div>
            <div className="vantage-text">
              <div className="vantage">
                <div className="icon">
                  <Icon path={mdiCheckAll} size={1}></Icon>
                </div>
                <div className="text">
                  <p>Suporte aos seus clientes 24h</p>
                </div>
                <div className="tip">
                  <Icon path={mdiHelpCircleOutline} size={0.9}></Icon>
                </div>
              </div>
              <div className="vantage">
                <div className="icon">
                  <Icon path={mdiCheckAll} size={1}></Icon>
                </div>
                <div className="text">
                  <p>Instalação 100% por nossa conta</p>
                </div>
                <div className="tip">
                  <Icon path={mdiHelpCircleOutline} size={0.9}></Icon>
                </div>
              </div>
              <div className="vantage">
                <div className="icon">
                  <Icon path={mdiCheckAll} size={1}></Icon>
                </div>
                <div className="text">
                  <p>Economia de tempo e custo</p>
                </div>
                <div className="tip">
                  <Icon path={mdiHelpCircleOutline} size={0.9}></Icon>
                </div>
              </div>
              <div className="vantage">
                <div className="icon">
                  <Icon path={mdiCheckAll} size={1}></Icon>
                </div>
                <div className="text">
                  <p>Agilidade nas respostas</p>
                </div>
                <div className="tip">
                  <Icon path={mdiHelpCircleOutline} size={0.9}></Icon>
                </div>
              </div>
            </div>
          </div>
          <div className="img-start">
            <div>
              <Image
                src={"/page-home.png"}
                alt=""
                title=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
