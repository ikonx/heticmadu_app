import Price, { IPriceBadge } from './Price';
import GreenScore, { IGreenScoreBadge } from './GreenScore';
import Challenge, { IChallengeBadge } from './Challenge';

interface IBadge {
  Price: React.FunctionComponent<IPriceBadge>;
  GreenScore: React.FunctionComponent<IGreenScoreBadge>;
  Challenge: React.FunctionComponent<IChallengeBadge>;
}

const Badge: IBadge = {
  Price,
  GreenScore,
  Challenge,
};

export default Badge;
