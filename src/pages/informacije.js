import React from "react"
import MainLayout from "../components/MainLayout";

import {Fieldset} from 'primereact/fieldset';

export default () => (
    <div>
        <MainLayout>
            <div className="informacijeLayout">
                
                <Fieldset className="informacija" legend="Akvapark" toggleable={true} collapsed={false}>
                    <p>
                        U petak u 10:00 ujutru se okupljamo ispred akvaparka. Oni koji nemaju prevoz do akvaparka mogu da se jave na 063 404322 za informacije kako da dođu do tamo.
                        U sličaju da neko dođe kasnije biće ostavljena lista na ulazu, tako da možete sa ličnom kartom da uđete kada se javite na šalteru. Pare za ulaznicu ćemo prikupiti kad se svi okupimo. Ponesite kupaći!
                    </p>
                </Fieldset>
                <Fieldset className="informacija" legend="Subota pre podne" toggleable={true} collapsed={true}>
                    <p>
                    Bogosluženje u subotu ujutro počinje u 10:00. Što se tiče oblačenja, pošto se bogosluženje održava pod šatorom, smart-casual still je preporučen. 
                    Posle bogosluženja ćemo imati yajednički ručak i svi ste pozvani.
                    </p> 
                </Fieldset>
                <Fieldset className="informacija" legend="Subota posle podne" toggleable={true} collapsed={true}>
                    <p>
                    Imaćemo radionice posle ručka. <br /> Akcije u gradu neće biti umesto njih će biti slobodno vreme i zakuska. <br /> Uveče posle teme i večere igraćemo jednu igru za koju će vam trebati lampe (svetla), 
                    tako da napunite svoje telefone za subotu uveče ili ponesite baterijske lampe od kuće.
                    </p> 
                </Fieldset>
                <Fieldset className="informacija" legend="Nedelja ujutro sport" toggleable={true} collapsed={true}>
                    <p>
                    Nedelja je predviđena kao sportski dan(u sali) tako da ponesite nešto u čemu ćete moći da se bavite sportom.
                    Posle hale svako će dobiti upakovanu pljeskavicu. I oni koji ostanu mogu da idu na bazen ili na tikvaru.
                    </p> 
                </Fieldset>
                <Fieldset className="informacija" legend="Kontakt" toggleable={true} collapsed={false}>
                <p className="kontaktText" >
                    Kontakt na 063 404 322 (Viber ili WhatsApp)
                </p>
                </Fieldset>

                

            </div>
        </MainLayout>
    </div>
)