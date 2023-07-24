import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  useIonRouter
} from "@ionic/react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const router = useIonRouter();
  const signUpHandler = (e:any) => {
    e.preventDefault();
    router.push('/home');
  };
  return (
    <IonPage className="ion-background-color">
      <IonContent scrollY={false} className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonRow class="ion-justify-content-center">
                <h2 className="ion-justify-content-center">Sign Up</h2>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={signUpHandler}>
                    <IonInput
                      label="Name"
                      fill="outline"
                      labelPlacement="floating"
                    ></IonInput>
                    <IonInput
                      label="Username"
                      fill="outline"
                      labelPlacement="floating"
                      className="ion-margin-top"
                    ></IonInput>
                    <IonInput
                      className="ion-margin-top"
                      label="Password"
                      type="password"
                      fill="outline"
                      labelPlacement="floating"
                    ></IonInput>
                    <IonInput
                      className="ion-margin-top"
                      label="Confirm Password"
                      type="password"
                      fill="outline"
                      labelPlacement="floating"
                    ></IonInput>
                    <IonRow className="ion-justify-content-center">
                      <IonButton className="ion-margin-top " type="submit">
                        Save
                      </IonButton>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                      <Link className="ion-margin-top" to="/login">
                        Back to Login
                      </Link>
                    </IonRow>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SignUp;
