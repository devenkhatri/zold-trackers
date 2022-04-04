import { IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonMenuButton, IonPage, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react';
import { add, list } from 'ionicons/icons';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [loading, setLoading] = useState<boolean>(true);

  const mapping = [
    {
      title: 'Meetings',
      mainUrl: 'https://airtable.com/embed/shrYoglIE1u6ab35b?backgroundColor=teal&viewControls=on',
      iconUrl: '/page/Meetings Add',
      icon: <IonIcon icon={add} />
    },
    {
      title: 'Meetings Add',
      mainUrl: 'https://airtable.com/embed/shrVMGQIOvd46cU29?backgroundColor=teal',
      iconUrl: '/page/Meetings',
      icon: <IonIcon icon={list} />
    },
    {
      title: 'Committees',
      mainUrl: 'https://airtable.com/embed/shrKU7SuuPMDav9bW?backgroundColor=cyan&viewControls=on',
    },
    {
      title: 'Tasks',
      mainUrl: 'https://airtable.com/embed/shrbGg1dsmQnYmRpo?backgroundColor=cyan&viewControls=on',
    },
    {
      title: 'Members',
      mainUrl: 'https://airtable.com/embed/shrh1DHQ2IbK5onrP?backgroundColor=cyan&viewControls=on',
    },
    {
      title: 'Attendence',
      mainUrl: '',
    }
  ];

  const airtableItem = mapping.find(item => item.title == name);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {airtableItem && airtableItem.iconUrl &&
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton color='primary' href={airtableItem.iconUrl}>
              {airtableItem.icon}
            </IonFabButton>
          </IonFab>
        }
        {!(airtableItem && airtableItem.mainUrl) && <ExploreContainer name={name} />}
        {airtableItem && airtableItem.mainUrl &&
          <Fragment>
            {loading && <div className="ion-padding custom-skeleton">
              <IonSkeletonText animated style={{ width: '60%' }} />
              <IonSkeletonText animated />
              <IonSkeletonText animated style={{ width: '88%' }} />
              <IonSkeletonText animated style={{ width: '70%' }} />
              <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
            }
            <iframe className="airtable-embed"
              src={airtableItem.mainUrl} frameBorder="0"
              onLoad={() => setLoading(false)}
              width="100%" height="85%"
              style={{ background: "transparent", border: "1px solid #ccc;" }} />
          </Fragment>
        }
      </IonContent>
    </IonPage>
  );
};

export default Page;
