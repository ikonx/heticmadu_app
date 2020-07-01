import Colors from '@styleGuide/Colors';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { ProfileBadgeModel } from '@utils/models/profileBadge.model';
import { ProfileLeaderboardModel } from '@utils/models/profileLeaderboard.model';

export const profileTabs = [
  {
    label: 'Badges',
    value: 'badges',
  },
  {
    label: 'Classement',
    value: 'rankings',
  },
];

export const profileData: ProfileBadgeModel[] = [
  {
    illustration: IllustrationName.ENERGIE,
    text: 'Master de l\'energie',
    count: 1,
    color: Colors.mainRed,
  },
  {
    illustration: IllustrationName.CUISINE,
    text: 'Chef cuisinier',
    count: 0,
    color: Colors.secondaryGrey,
  },
  {
    illustration: IllustrationName.MAISON,
    text: 'Maison verte',
    count: 1,
    color: Colors.mainOrange,
  },
  {
    illustration: IllustrationName.RECYCLAGE,
    text: 'Recycleur de l\'extrême',
    count: 1,
    color: Colors.mainPurple,
  },
];

export const leaderboardData: ProfileLeaderboardModel[] = [
  {
    rank: 1,
    name: 'Andrea',
    text: '20 Défi réaliser',
  },
  {
    rank: 2,
    name: 'Willie',
    text: '18 Défi réaliser',
  },
  {
    rank: 3,
    name: 'Barry',
    text: '14 Défi réaliser',
  },
  {
    rank: 4,
    name: 'Emma',
    text: '12 Défi réaliser',
  },
  {
    rank: 5,
    name: 'Martin',
    text: '11 Défi réaliser',
  },
  {
    rank: 6,
    name: 'Julien',
    text: '8 Défi réaliser',
  },
  {
    rank: 7,
    name: 'Kader',
    text: '7 Défi réaliser',
  },
  {
    rank: 8,
    name: 'Alk',
    text: '6 Défi réaliser',
  },
  {
    rank: 9,
    name: 'Dimeh',
    text: '4 Défi réaliser',
  },
  {
    rank: 10,
    name: 'Hommer',
    text: '3 Défi réaliser',
  },
];
