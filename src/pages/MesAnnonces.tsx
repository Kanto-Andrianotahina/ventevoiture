import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import AnnonceContainer from '../components/AnnonceContainer';

const MesAnnonces: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle style={{color:'Black'}}>Vos annonces</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <AnnonceContainer />
        </IonContent>
        <NavbarContainer />
    </IonPage>
  );
};

export default MesAnnonces;
