import IllustrationName from '@assets/illustrations/IllustrationName.enum';

export interface ProfileBadgeModel {
  illustration: IllustrationName;
  text: string;
  count: number;
  color: string;
}
