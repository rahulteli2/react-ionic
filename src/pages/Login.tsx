import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const router = useIonRouter();
  const loginHandler = (e:any) => {
    e.preventDefault();
    router.push('/home');
  }
  return (
    <IonPage className='ion-background-color'>
      <IonContent scrollY={false} className='ion-padding'>
        <IonGrid fixed>
        <IonRow class='ion-justify-content-center'>
          <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
            <IonRow class='ion-justify-content-center'>
              <h2 className='ion-justify-content-center'>Distribution App</h2>
            </IonRow>
          </IonCol>
        </IonRow>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
              <IonCard>
                <IonCardContent>
                  <form onSubmit={loginHandler}>
                    <IonInput label="Username" fill="outline" labelPlacement="floating" name=''></IonInput>
                    <IonInput className='ion-margin-top' label="Password" type='password' fill="outline" labelPlacement="floating"></IonInput>
                    <IonRow className='ion-justify-content-center'>
                      <IonButton className='ion-margin-top ' type='submit'>Login</IonButton>
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                      <Link className='ion-margin-top' to='/signup'>Sign Up?</Link>
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

export default Login;
