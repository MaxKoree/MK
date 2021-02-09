import React from "react";
import PIC1 from "./img/Screenshot (1).png";
import PIC2 from "./img/Screenshot (2).png";
import PIC3 from "./img/Screenshot (3).png";
import PIC4 from "./img/Screenshot (4).png";


export default class Portfolio extends React.Component {




    render() {


        return (
            <div className="portfolio " >
                <img src={PIC1}></img>
                <img src={PIC2}></img>
                <img src={PIC3}></img>
                <img src={PIC4}></img>
            </div>
        )
    }
}