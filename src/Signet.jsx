import "./Signet.scss";

export default function Signet(props){


        return(
            <li className="Signet">
                <div className="image">
                    <img src={'images-signets/' + props.id + '.webp'} alt={props.titre}/>

                </div>
                <div className="info">
                    <h3>{props.titre}</h3>
                    <p className="dateDeModif">Modifi/: {props.dateMod}</p>
                </div>
            </li>



        );

}