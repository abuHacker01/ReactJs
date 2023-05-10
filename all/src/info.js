import React from "react";
import img1 from "./img/bad.png";
import img2 from "./img/bath.png";
import img3 from "./img/machine.png";
import img4 from "./img/ruler.png";
import img5 from "./img/strel.png";
import img6 from "./img/like.png";
import back from "./img/back.png";

class Student extends React.Component {
    render() {
        return <div style={{ width: "381px", border: "1px solid #E6E9EC", marginRight: "20px", marginBottom: "20px" }}>
            <div style={{ display: "flex", background: `url(${back})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "220px", justifyContent: "space-evenly", paddingTop: "20px" }}>
                <button style={{ cursor: "pointer", marginRight: "196px", display: "flex", width: "73px", height: "23px", alignItems: "center", justifyContent: "center", backgroundColor: "#0061DF", borderRadius: "3px", border: "none", }}><p style={{ fontSize: "10px", color: "white" }}>FEATURED</p></button>
                <button style={{ cursor: "pointer", display: "flex", width: "73px", height: "23px", alignItems: "center", justifyContent: "center", backgroundColor: "#0D263B", borderRadius: "3px", border: "none", }}><p style={{ fontSize: "10px", color: "white" }}>FOR SALE</p></button>
            </div>
            <div style={{ borderBottom: "1px solid #E6E9EC", }}>
                <p style={{ marginLeft: "20px", fontSize: "16px", fontWeight: "600", marginTop: "24px", marginBottom: "4px" }}>New Apartment Nice Wiew</p>
                <p style={{ marginLeft: "20px", fontSize: "14px", marginTop: "0px", fontWeight: "400", color: "#696969" }}>Quincy St, Brooklyn, NY, USA</p>
                <section style={{ display: "flex", justifyContent: "space-around", marginBottom: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <img src={img1} alt="network error" />
                        <p style={{ fontWeight: "400", color: "#696969", fontSize: "14px", marginTop: "0" }}>4 Beds</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <img src={img2} alt="network error" />
                        <p style={{ fontWeight: "400", color: "#696969", fontSize: "14px", marginTop: "0" }}>5 Baths</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <img src={img3} alt="network error" />
                        <p style={{ fontWeight: "400", color: "#696969", fontSize: "14px", marginTop: "0" }}>1 Garage</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <img src={img4} alt="network error" />
                        <p style={{ fontWeight: "400", color: "#696969", fontSize: "14px", marginTop: "0" }}>1200 Sq Ft</p>
                    </div>
                </section>
            </div>
            <section style={{ display: "flex", gap: "184px" }}>
                <div style={{ marginLeft: "20px" }}>
                    <p style={{ fontWeight: "400", fontSize: "12px", marginBottom: "0px", color: "#696969" }}><del>$2,800/mo</del></p>
                    <p style={{ fontWeight: "600", marginTop: "0px", fontSize: "16px" }}>$7,500/mo</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <img src={img5} alt="network error" />
                    <img src={img6} style={{ cursor: "pointer" }} alt="network error" />
                </div>
            </section>
        </div>;
    }
}

export default Student;