import { IonContent, IonHeader, IonPage} from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import NotificationContainer from '../components/NotificationContainer';

const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <NotificationContainer />
      </IonContent>
      <NavbarContainer />
    </IonPage>
  );
};

export default Notification;
