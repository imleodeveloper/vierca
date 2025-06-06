import { mdiApplicationSettingsOutline } from "@mdi/js";
import Icon from "@mdi/react";


export function StartPrice(){
    return(
        <div className="startPrice-section">
            <article>
                <section>
                    <div className="title-section">
                        <h1>Encontre o site ideal para você!</h1>
                    </div>
                    <div className="container-section">
                        <div className="item">
                            <div className="title">
                                <span>
                                    Para pequenas e médias empresas
                                </span>
                                <h2><Icon path={mdiApplicationSettingsOutline} size={1.4}></Icon>Landing Pages</h2>
                                <p>Perfeito para empresários e comércios de pequeno porte. Tudo o que você precisa para começar no online.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}