import { mdiAccountCircle, mdiCheck, mdiCircle, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";


export function SupportHome(){
     return(
        <div className="support-section">
            <article>
                <section>
                    <div className="text">
                        <h2>Estamos sempre disponível para lhe atender</h2>
                        <ul>
                            <li>
                                <Icon path={mdiCheck} size={1} color="rgb(3, 114, 3)"></Icon>
                                Suporte especializado à sua disposição, via e-mail ou WhatsApp.
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={1} color="rgb(3, 114, 3)"></Icon>
                                Atendimento bilíngue, falamos português e inglês para melhor atender você.
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={1} color="rgb(3, 114, 3)"></Icon>
                                Suporte ágil, você fala direto com quem entende.
                            </li>
                        </ul>
                    </div>
                    <div className="image">
                        <div className="contain-img">
                            <Image src={"/VierChat-SupportSection.png"} fill alt="" title=""></Image>
                        </div>
                        {/* 
                        <div className="contain-img">
                            <div className="active">
                                <Icon path={mdiCircle} size={0.9} color="rgb(14, 192, 14)"></Icon>
                                <p>VierChat - Ativo</p>
                                <Icon path={mdiClose} size={1.2} color="#fff"></Icon>
                            </div>
                            <div className="text-1">
                                <div>
                                    <Icon path={mdiAccountCircle} size={3} color="#fff"></Icon>
                                </div>
                                <div>
                                    Olá, quero criar meu site com a VierCa
                                </div>
                            </div>
                            <div className="text-2">
                                <div>
                                    Oi! Fico feliz em poder guiar você. Criar seu site pode ser mais fácil do que você imagina, vamos te guiar por cada etapa do processo.
                                </div>
                                <div>
                                    <Image src={"/android-chrome-512x512.png"} alt="" title="" width={90} height={90}></Image>

                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                </section>
            </article>
        </div>
     )
}