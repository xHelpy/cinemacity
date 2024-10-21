import React from "react";
import './Film.css'


const Film = (props) => (
    <div className="FilmTab">
        <img src={props.Source}></img><div className="FilmData"> <h1 className="Title">{props.Title}</h1><div className="Tags"> <btn><b>?</b></btn> <p>{props.Tag} | {props.Time}</p></div> <h2>{props.Type}</h2> <p className="Hours">{props.Hours}</p> <p>{props.Language}</p></div>
    </div>
)


export default  Film;