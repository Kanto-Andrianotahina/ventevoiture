import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import NouveauContainer from '../components/NouveauContainer';

const NouveauAnnonce: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle style={{color:'Black'}}>Nouveau annonce</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <NouveauContainer />
            
        </IonContent>
        <NavbarContainer />
    </IonPage>
  );
};

export default NouveauAnnonce;
