import "./ListeSignet.scss";
import Signet from "./Signet";
import tabSignets from "./data/DataSignet.json";

export default function ListeSignet(props){

    return(
        <div className="ListeSignets">
            <ul>
                {tabSignets.map((sig) => (
                <Signet key={sig.id}
                 id={sig.id} 
                 titre ={sig.titre}
                  couleur={sig.couleur}
                  dateMod={sig.modif}
                  />
                  ))}

            </ul>
        </div>
    );
}