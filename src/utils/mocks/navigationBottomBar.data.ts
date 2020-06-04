import { IconName } from '@assets/icons/IconName.enum';
import TagsList from '@components/molecules/TagsList/TagsList';
import { NavigationItemModel } from '../models/navigationItem.model';
import HomeScreen from '@src/components/screens/HomeScreen/HomeScreen';
import StoryScreen from '@components/screens/StoryScreen/StoryScreen';
import MapScreen from '@src/components/screens/Map/MapScreen';

const navigationBottomData: NavigationItemModel[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: IconName.HOME,
    text: 'Home',
  },
  {
    name: 'Map',
    component: MapScreen,
    icon: IconName.MAPS,
    text: 'Carte',
  },
  {
    name: 'Story',
    component: StoryScreen,
    icon: IconName.STORY,
    text: 'Story',
  },
  {
    name: 'Profil',
    component: TagsList,
    icon: IconName.USER,
    text: 'Profil',
  },
];

export default navigationBottomData;
