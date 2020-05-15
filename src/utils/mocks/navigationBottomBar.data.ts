import Input from '../../components/atoms/Input/Input';
import { IconName } from '../../assets/icons/IconName.enum';
import TagsList from '../../components/molecules/TagsList/TagsList';
import { NavigationItemModel } from '../models/navigationItem.model';

const navigationBottomData: NavigationItemModel[] = [
  {
    name: 'Home',
    component: Input,
    icon: IconName.HOME,
    text: 'Home',
  },
  {
    name: 'Carte',
    component: TagsList,
    icon: IconName.MAPS,
    text: 'Carte',
  },
  {
    name: 'Story',
    component: Input,
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
