import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import NavbarContainer from '../components/NavbarContainer';
import NotificationContainer from '../components/NotificationContainer';

const Notification: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle style={{color:'Black'}}>Notifications</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <NotificationContainer />
        </IonContent>
        <NavbarContainer />
    </IonPage>
  );
};

export default Notification;
