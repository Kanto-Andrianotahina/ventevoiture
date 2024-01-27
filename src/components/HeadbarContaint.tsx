import {IonCardContent, IonCardHeader, IonCardSubtitle, IonHeader, IonToolbar} from "@ionic/react";

const HeadbarContainer: React.FC = () => {
    return(
        <IonHeader>
            <IonToolbar>
                <IonCardHeader>
                    <IonCardSubtitle>Bonjour,</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent><h2>ANDRIANOTAHINA Kanto</h2></IonCardContent>
            </IonToolbar>
        </IonHeader>
    );
};
export default HeadbarContainer;
