import './Appli.css';
import Entete from './Entete';
import ListeSignet from './ListeSignet';
import BoutonAjou from './BoutonAjou';

function Appli() {
  return (
    // jsx comme du html ish
    <div className="Appli">
      <Entete/>
    <section className="contenuePrincipal">
    <ListeSignet/>
    </section>
    <BoutonAjou/>
    </div>
  );
}

export default Appli;