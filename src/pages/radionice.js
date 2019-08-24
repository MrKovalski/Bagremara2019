import React from "react"

import MainLayout from "../components/MainLayout";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default () => (
    <div>
        <MainLayout>
            <div className="smestajLayout">
                <h1 className="smestajTitle">RADIONICE</h1>
                <div className="smestajCards">
                    <div className="cardsLayout">
                        <Accordion>
                            <AccordionTab header="Kako da pokreneš revoluciju u svom mestu? - Igor Mitrović">
                                Kako da kao pojedinac ili deo grupe u crkvi ili van nje, uradiš nešto za dobro ljudi u tvom mestu - u tvojoj školi, ulici, gradu, koji se muče u životu iz bilo kog razloga? Kako izabrati šta raditi a da zaista deluje i pomogne im? Šta bi voleo da radiš za dobrobit zajednice? U čemu se pronalaziš? Ova radionica će pomoći da dođemo do odgovora. 
	Sadržaće i praktične vežbe gde će se u grupama raditi na konkretnim i stvarnim problemima iz različitih mesta u Srbiji. Svi će imati priliku da smisle konkretne planove koje mogu i da sprovedu. Ideja je da svi u radionici nauče kako da prepoznaju potrebe ljudi u lokalnoj zajednici, naprave jednostavan i sprovodiv plan pomoći u koji bi se sami uključili. Naučićemo i kako da znamo da li smo zaista pomogli. 
	Napomena: Uspešnost radionice je garantovana prisustvom i vođstvom neprevaziđenog direktora Adre. Ukoliko radionica bude podbacila, to će sigurno biti zbog drugih, ne njega.
                            </AccordionTab>
                            <AccordionTab header="Jači ste nego što mislite - Željko Begić">
                                Život u 21. Veku postao je naporan. Uprkos velikom blagostanju (posebno zapadnog sveta), ljudi se osećaju da su stalno pod velikim pritiskom. Visoki zahtevi koji se postavljaju u studiranju, profesionalnom životu, partnerskim odnosima, religiji i drugim aktivnostima govore nam da sve više strepimo kako bi održali korak jedni sa drugima. Sve veći zahtevi za postizanjem boljih rezultata  na poslu, ljubavnoj vezi i slično, stvara takmičarski duh gde je sve nesigurno. Naposletku, to rezultira da moramo biti savršeni partneri i radnici, a samo malo kasnije, izuzetno dobre majke, očevi i idealni članovi društva, crkve i slično.
Neuspesi, kritike i samokritike kod takvog svakodnevnog programa naprosto su unapred isprogramirani, što ima često i ozbiljne posledice: raskidi, razvodi, sagorevanje na radu i depresiju. Biblija kaže da je Isus  isceljivao svaku bolest i svaku nemoć po ljudima (Mt 4,23). Može li Isus i danas odgovoriti šta je to što neke ljude čini jakima i otpornima ili rezilijentnima u današnjem kontekstu. Ako je iko bio otporan onda je to Božiji Sin. Zagonetka otpornosti i danas je velika tema za pastore, psihologe, pedagoge i neurologe. Dali je temelj za snagu postavljen već u detinjstvu i da li se može nadograditi danas. Koliko naša duhovnost pomaže u sveukupnoj otpornosti svih nas? Moguće odgovore možda sadrži i ova radionica. Dobrodošli!
                            </AccordionTab>
                            <AccordionTab header="Dvostruki život i kako ga se rešiti - Marko Lukić">
                                Sigurno vam je poznata priča najvećih superheroja filmske indurstrije. Preko dana je  prosečan čovek a uveče navlači masku, plašt i donji veš preko helanki trčeći u poteru za negativcima koji prete da unište svet. Tajnoviti heroj, miljenik naroda.
Većina nas nije te sreće. Tajne koje krijemo ne čine nas baš ponosnim, a još manje popularnim. Baš zato mislimo da su najsigurnije ako ostanu zakopane tamo negde, daleko od očiju i ušiju drugih. Neke ugledaju svetlost dana, a neke ne. One koje ostanu sakrivene često budu gorivo za disfunkcionalne odnose u porodici, prijateljstvu, vezi, braku pa i u crkvi, bilo da smo toga svesni ili ne. 
	Svrha ove radionice jeste da razotkrijemo na koje načine tajne utiču na gore pomenute odnose i konačno odnos sa Bogom. Cilj ove radionice jeste da kroz eksperiment pronađemo efikasno oruđe za borbu protiv ovog čudovišta koje nas sprečava da rastemo i sazrevamo. 
                            </AccordionTab>
                            <AccordionTab header="Ivan Popović" disabled={true}>

                            </AccordionTab>
                        </Accordion>                           
                    </div>
                </div>
            </div>
        </MainLayout>
    </div>
)