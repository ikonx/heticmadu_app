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
    color: Colors.mainGreen,
  },
  {
    illustration: IllustrationName.CUISINE,
    text: 'Chef cuisinier',
    count: 0,
    color: Colors.darknessPurple,
  },
  {
    illustration: IllustrationName.MAISON,
    text: 'Maison verte',
    count: 1,
    color: Colors.mainYellow,
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
    text: '20 Défis réalisés',
  },
  {
    rank: 2,
    name: 'Willie',
    text: '18 Défis réalisés',
  },
  {
    rank: 3,
    name: 'Barry',
    text: '14 Défis réalisés',
  },
  {
    rank: 4,
    name: 'Emma',
    text: '12 Défis réalisés',
  },
  {
    rank: 5,
    name: 'Martin',
    text: '11 Défis réalisés',
  },
  {
    rank: 6,
    name: 'Julien',
    text: '8 Défis réalisés',
  },
  {
    rank: 7,
    name: 'Kader',
    text: '7 Défis réalisés',
  },
  {
    rank: 8,
    name: 'Alk',
    text: '6 Défis réalisés',
  },
  {
    rank: 9,
    name: 'Dimeh',
    text: '4 Défis réalisés',
  },
  {
    rank: 10,
    name: 'Hommer',
    text: '3 Défis réalisés',
  },
];
