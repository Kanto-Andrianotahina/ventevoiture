import { IonContent, IonHeader, IonPage} from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import AnnonceContainer from '../components/AnnonceContainer';

const MesAnnonces: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <AnnonceContainer />
      </IonContent>
      <NavbarContainer />
    </IonPage>
  );
};

export default MesAnnonces;
