import React from "react"

import MainLayout from "../components/MainLayout";
import SmestajCard from "../components/SmestajCard.js";
export default () => (
    <div>
        <MainLayout>
            <div className="smestajLayout">
                <h1 className="smestajTitle">SMEŠTAJ</h1>
                <div className="smestajCards">
                    <div className="cardsLayout">
                    <div className="smestajCard">
                        <SmestajCard 
                        title="Bagremara" 
                            text="Smeštaj u samom parku bagramara koji sadrži 80 mesta. Podeljen na dva objekta, jedan do drugog. PU maldost (35 kreveta) i Crveni krst (45 kreveta). Može se uzeti samo ceo vikend. Cena 1500 din." 
                        img="https://obidjisrbiju.com/wp-content/uploads/2018/09/2-6.jpg" />
                    </div>
                    <div className="smestajCard">
                        <SmestajCard
                            title='Hotel "Olimp"'
                            text="Smeštaj u Centru grada. Udaljen je 3km od samog događaja. Sobe su prostranije. Može se uzeti na samo jedno noć. Cena je 1200din po noći."
                            img="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/52/11/5211416.jpeg" />
                    </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    </div>
)