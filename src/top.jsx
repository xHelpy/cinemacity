import react from "react"
import "./top.css"
const Top = (props) =>
    (
        <div className="Top">


            <img className={"topLogo"} src={"https://www.cinema-city.pl/mrest/logos/v1/10103/logo.svg"}/>

            <div className={"button-container"}>

                <button className={"localization"}>
                    <img className={"locationPicker"}
                         src={"https://www.cinema-city.pl/xmedia/img/10103/locationpicker-map-marker.svg"}/>
                    <a className={"locationText"}>wybierz swoje kino</a>
                </button>

                <button className={"login"}>
                    <img className={"loginIcon"} src={"https://www.cinema-city.pl/xmedia/img/10103/user-icon.svg"}/>


                    <a className={"loginText"}>Zaloguj</a>
                </button>
                <button className={"register"}>
                    <img className={"registerIcon"}/>


                    <a className={"registerText"}>Zarejestruj</a>
                </button>
                <input type="text" placeholder={"Szukaj..."} id={"text"} className={"search"}>

                </input>
                <select className={"language"}>
                    <option value={"0"}>PL</option>
                    <option value={"1"}>ENG</option>
                </select>

            </div>


        </div>
    )
export default Top