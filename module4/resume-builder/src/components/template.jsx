import "./template.css"
import skin1 from "../static/images/skin1.svg"
import skin2 from "../static/images/skin2.svg"
import skin3 from "../static/images/skin3.svg"
import skin4 from "../static/images/skin4.svg"
import skin5 from "../static/images/skin5.svg"
import skin6 from "../static/images/skin6.svg"
import skin7 from "../static/images/skin7.svg"
import skin8 from "../static/images/skin8.svg"
import {Link} from "react-router-dom"

const Template = ()=>{
    return(
        <div className="templates">
            <div className="templates-intro">
                <h1>Select a resume template</h1>
                <p>you can edit and change it later!</p>
            </div>  
            <div className="templates-styles">
                <div className="template">
                    <img src={skin2}></img>
                   <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin3}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin4}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin1}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin5}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin6}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin7}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
                <div className="template">
                    <img src={skin8}></img>
                    <Link to="/contact"> <button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Template