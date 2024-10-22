import Film from "./Film";
import './App.css';
import Top from "./top"

function App() {
  return (
    <div className="App">

        <div className="Top">


    <Top></Top>



        </div>
        <div className="LinkButtons">

        </div>
        <div className="MainData">

        </div>

        <div className="FilmSelection">
            <div className="Header">
                <h1>REPERTUAR</h1>
                <div className="Searches">
                    <select className="Fselect">
                        <option>BIELSKO-BIAŁA</option>
                        <option>ZAMOŚĆ</option>
                    </select>
                    <div>
                        <button className="sBtn">KINA</button>
                        <button className="sBtn">FILMY</button>
                    </div>


                </div>
                <div className="Dates">
                    <div className="Days">
                        <button>Dziś</button>
                        <button>Wt</button>
                        <button>Śr</button>
                        <button>Cz</button>
                        <button>Pt</button>
                        <button>So</button>
                        <button>Nd</button>
                        <button className="Calendar"><img src="calendar-icon.png"/></button>


                    </div>
                    <div>
                        <select>
                            <option>WYBIERZ RODZAJ SEANSU</option>
                        </select>
                        <select>
                            <option>WYBIERZ FILM</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="Films">
                <Film Source="1.png" Title="Uśmiechnij się 2" Tag="Horror" Time="127 min" Type="2D"
                      Hours="13:00 | 15:45 | 18:45" Language="EN (NAP: PL)"></Film>
                <Film Source="1.png" Title="Uśmiechnij się 2" Tag="Horror" Time="127 min" Type="2D" Hours="13:00 | 14:00 | 15:00" Language="EN (NAP: PL)"></Film>
            </div>

        </div>
    </div>``
  );
}

export default App;
