import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import './NouveauContainer.css';
import { useState } from "react";

const NouveauContainer: React.FC = () =>{
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const year = Array.from({ length: new Date().getFullYear() - 1970 + 1 }, (_, i) => 1970 + i);

    const[selectedNbr,setSelectedNbr] = useState<number | null>(null);
    const nbr = Array.from({length: 10},(_,j) => 1+j);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!")
    };
    return(
        <div className="containt">
            <IonList>
            <form onSubmit={handleSubmit}>
                <IonItem className="item">
                    <IonSelect placeholder="Select marque" name="marque">
                        <div className="label" slot="label">
                            Marque
                        </div>
                        <IonSelectOption value="apple">Citroen</IonSelectOption>
                        <IonSelectOption value="banana">Toyota</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem className="item">    
                    <IonSelect placeholder="Select modele " name="modele">
                        <div className="label" slot="label">
                            Modele
                        </div>
                        <IonSelectOption value="apple">C6</IonSelectOption>
                        <IonSelectOption value="banana">Yaris</IonSelectOption>
                        <IonSelectOption value="orange">Saxo</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem className="item">    
                    <IonSelect placeholder="Select annee" value={selectedYear} onIonChange={e => setSelectedYear(Number(e.detail.value))} name="annee">
                        <div className="label" slot="label">
                            Annee
                        </div>
                        {year.map((y, index) => (
                            <IonSelectOption key={index} value={y}>{y}</IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>

                <IonItem className="item">
                    <IonSelect placeholder="Select transmission" name="transmission">
                        <div  className="label" slot="label">
                            Transmission
                        </div>
                        <IonSelectOption value="apple">C6</IonSelectOption>
                        <IonSelectOption value="banana">Yaris</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem className="item">
                    <IonSelect placeholder="Select carburant " name="carburant">
                        <div  className="label" slot="label">
                            Carburant
                        </div>
                        <IonSelectOption value="apple">Essence</IonSelectOption>
                        <IonSelectOption value="banana">Diesel</IonSelectOption>
                    </IonSelect>
                </IonItem> 

                <IonItem className="item">
                    <IonInput label="Consommation" name="consommation" />
                </IonItem>

                <IonItem className="item">
                    <IonInput label="Kilometrage"  name="kilometrage" />
                </IonItem>

                <IonItem className="item">
                    <IonInput label="Places" type="number"  name="nbrplace"/>
                </IonItem>
                
                <IonItem className="item">
                    <IonInput label="Portes" type="number" name="nbrporte" />
                </IonItem>

                <IonItem className="item">    
                    <IonSelect placeholder="Select etat exterieur" value={selectedNbr} onIonChange={e => setSelectedNbr(Number(e.detail.value))} name="etatext">
                        <div className="label" slot="label">
                            Etat exterieur
                        </div>
                        {nbr.map((y, index) => (
                            <IonSelectOption key={index} value={y}>{y}</IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>

                <IonItem className="item">
                    <IonSelect placeholder="Select etat interieur" value={selectedNbr} onIonChange={e => setSelectedNbr(Number(e.detail.value))} name="etatint">
                        <div className="label" slot="label">
                            Etat interieur
                        </div>
                        {nbr.map((y, index) => (
                            <IonSelectOption key={index} value={y}>{y}</IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>

                <IonItem className="item">
                    <IonInput label="Prix" name="prix"/>
                </IonItem>
                
                <IonItem className="item">
                    <IonLabel>Upload Photo</IonLabel>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange}  name="img"/>
                </IonItem>

                <IonButton type="submit">Valider</IonButton>
            </form>
            </IonList>
        </div>
    );
}
export default NouveauContainer;