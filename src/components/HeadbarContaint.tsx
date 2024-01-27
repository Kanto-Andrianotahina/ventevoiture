import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";

const HeadbarContainer: React.FC = () => {
    return(
        <IonCard>
            <IonCardHeader>
            <IonCardSubtitle>Bonjour,</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent><h2>ANDRIANOTAHINA Kanto</h2></IonCardContent>
        </IonCard>
    );
};
export default HeadbarContainer;
