import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, businessOutline, businessSharp, calendarOutline, calendarSharp, checkmarkDoneOutline, checkmarkDoneSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, peopleOutline, peopleSharp, timerOutline, timerSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Meetings',
    url: '/page/Meetings',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'Committees',
    url: '/page/Committees',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Tasks',
    url: '/page/Tasks',
    iosIcon: checkmarkDoneOutline,
    mdIcon: checkmarkDoneSharp
  },
  {
    title: 'Members',
    url: '/page/Members',
    iosIcon: businessOutline,
    mdIcon: businessSharp
  },
  {
    title: 'Attendence',
    url: '/page/Attendence',
    iosIcon: timerOutline,
    mdIcon: timerSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Zold Trackers</IonListHeader>
          <IonNote>Committee Only</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
