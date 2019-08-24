import React from "react"
import { Button } from 'primereact/button';
import MainLayout from "../components/MainLayout";
import Timer from "../components/Timer";
import {Link} from 'gatsby';

export default () => (
    <div>
        <MainLayout>
            <div className="frontLayout">
                <div className="eventDate">AVGUST 30. - SEPTEMBAR 1.</div>
                <div className="eventTitle">SUSRET MLADIH BAČKA PALANKA <br /><span>2019</span></div>
                <Link to="/prijava" className="prijaviSeBTN"><Button label="Prijavi se" className="p-button-raised p-button-success" icon="pi pi-user-plus" iconPos="right"></Button></Link>
                <Link to="/raspored" className="rasporedBTN"><Button label="Raspored" className="p-button-raised p-button-info" icon="pi pi-list" iconPos="left"></Button></Link>
                <div className="timerLayout">
                    <Timer />
                </div>
            </div>
        </MainLayout>
    </div>
)
