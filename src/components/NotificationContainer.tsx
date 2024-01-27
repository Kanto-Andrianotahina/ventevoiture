import { IonAvatar, IonItem, IonLabel, IonList } from "@ionic/react";

const NotificationContainer: React.FC = () => {
    return(
        <>
        <IonList>
            <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                    <h2> User 2 vous a envoyez une message  </h2>
                    <p>Message: Bonjour </p>
                    </IonLabel>
            </IonItem>
            <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                    <h2> User 2 vous a envoyez une message </h2>
                    <p>Message: Prix svp</p>
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                    <h2> User 2 vous a envoyez une message  </h2>
                    <p>Message: Merci</p>
                </IonLabel>
            </IonItem>
        </IonList>
        </>
    );

};
export default NotificationContainer;