import { IconName } from '@assets/icons/IconName.enum';
import HomeScreen from '@src/components/screens/HomeScreen/HomeScreen';
import ChallengeScreen from '@components/screens/ChallengeScreen/ChallengeScreen';
import MapScreen from '@src/components/screens/Map/MapScreen';
import ProfileScreen from '@components/screens/ProfileScreen/ProfileScreen';
import { NavigationItemModel } from '../models/navigationItem.model';

const navigationBottomData: NavigationItemModel[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: IconName.HOME,
    text: 'Accueil',
  },
  {
    name: 'Map',
    component: MapScreen,
    icon: IconName.MAPS,
    text: 'Carte',
  },
  {
    name: 'Défi',
    component: ChallengeScreen,
    icon: IconName.STORY,
    text: 'Défi',
  },
  {
    name: 'Profil',
    component: ProfileScreen,
    icon: IconName.USER,
    text: 'Profil',
  },
];

export default navigationBottomData;
