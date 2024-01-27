import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { homeOutline,reorderFourOutline, addCircleOutline, notificationsOutline, personOutline } from 'ionicons/icons';

const NavbarContainer: React.FC = () => {
    return(
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>

          <IonTabButton tab="mesannonces" href="/mesannonces">
            <IonIcon icon={reorderFourOutline} />
            <IonLabel>Mes annonces</IonLabel>
          </IonTabButton>

          <IonTabButton tab="newannonce" href="/newannonce">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Nouveau</IonLabel>
          </IonTabButton>

          <IonTabButton tab="notification" href="/notification">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
          <IonTabButton tab="compte" href="/compte">
            <IonIcon icon={personOutline} />
            <IonLabel>Compte</IonLabel>
          </IonTabButton>
        </IonTabBar>
    );
};
export default NavbarContainer;