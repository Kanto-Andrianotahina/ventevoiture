import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import HeadbarContainer from '../components/HeadbarContaint';
import AnnonceContainer from '../components/AnnonceContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
            <IonHeader>
                <HeadbarContainer/>
            </IonHeader>
        <IonContent fullscreen>
            <ExploreContainer />
            <AnnonceContainer />
        </IonContent>
        <NavbarContainer />
    </IonPage>
  );
};
export default Home;