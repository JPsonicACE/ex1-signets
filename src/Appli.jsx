import './Appli.scss';
import Entete from './Entete';
import ListeSignet from './ListeSignet';
import BoutonAjout from './BoutonAjout';


function Appli() {
  return (
    // jsx comme du html ish
    <div className="Appli">
      <Entete/>
    <section className="contenuePrincipal">
    <ListeSignet/>
    </section>
    <BoutonAjout/>
    </div>
  );
}

export default Appli;