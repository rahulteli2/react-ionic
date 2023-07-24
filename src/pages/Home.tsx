import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonTitle } from "@ionic/react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonPage className="ion-background-color">
      <IonContent scrollY={false} className="ion-padding">
        <IonGrid fixed>
            <IonRow className="ion-justify-content-start">
                <Link className="Link" to="/login" color="medium">
                Back to Login
                </Link>
            </IonRow>
            <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                    <IonRow class="ion-justify-content-center">
                    <h2 className="ion-justify-content-center">Hello</h2>
                    </IonRow>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Home;
