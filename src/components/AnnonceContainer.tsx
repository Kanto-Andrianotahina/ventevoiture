import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonIcon, IonItem, IonLabel, IonList, IonThumbnail} from "@ionic/react";
import { cardOutline, cartOutline, reorderFourOutline } from "ionicons/icons";

const AnnonceContainer: React.FC = () => {
    return(
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>User 1</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" style={{width: '150px', height:'60px'}}/>
                        </IonThumbnail>
                        <IonLabel>
                            <h2> BMW </h2>
                            <p>Carburant: Essence</p>
                            <p>Boite: Automatique</p>
                            <strong><p>Prix: 220 Euro</p></strong>
                        </IonLabel>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>User 2</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonThumbnail>
                        <IonLabel>
                            <h2> AUDI </h2>
                            <p>Carburant: Essence</p>
                            <p>Boite: Automatique</p>
                            <strong><p>Prix: 220 Euro</p></strong>
                        </IonLabel>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>User 3</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonThumbnail>
                        <IonLabel>
                            <h2> SUBARU </h2>
                            <p>Carburant: Essence</p>
                            <p>Boite: Automatique</p>
                            <strong><p>Prix: 220 Euro</p></strong>

                        </IonLabel>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>User 4</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonThumbnail>
                        <IonLabel>
                            <h2> EVO X </h2>
                            <p>Carburant: Essence</p>
                            <p>Boite: Automatique</p>
                            <strong><p>Prix: 220 Euro</p></strong>
                        </IonLabel>
                    </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </>
    );
};
export default AnnonceContainer;