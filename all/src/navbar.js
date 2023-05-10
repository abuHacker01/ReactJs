import React from "react";
import logo from './img/Vector.png';
class navigation extends React.Component {
    render() {
        return (
            <nav style={{ paddingRight: "102.6%", marginLeft: "-20%", gap: "310px", backgroundColor: "#0D263B", display: "flex", justifyContent: "space-evenly", width: "501px", alignItems: "center", color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "243%", gap: "16px" }}>
                    <img src={logo} />
                    <h1>Hauzing</h1>
                </div>
                <div style={{ display: "flex", gap: "64px", width: "333px" }}>
                    <p>Home</p>
                    <p>Properties</p>
                    <p>Contacts</p>
                </div>
                <div style={{ width: "400px" }}>
                    <button style={{ height: "44px", width: "150px", marginLeft: "-33px" }}>Login</button>
                </div>
            </nav>
        );
    }
}
export default navigation;