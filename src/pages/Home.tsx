import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import HeadbarContainer from '../components/HeadbarContaint';
import AnnonceContainer from '../components/AnnonceContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <HeadbarContainer/>
        </IonHeader>
        <AnnonceContainer />
      </IonContent>
      <NavbarContainer />
    </IonPage>
  );
};

export default Home;
