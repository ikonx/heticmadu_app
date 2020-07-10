import React, { useEffect, useState } from 'react';
import ChallengesContext from './challenges.context';
import { getPois, getThemes } from '@utils/http';

interface Props {}

const ChallengesProvider: React.FC<Props> = ({ children }) => {
  const [themes, setThemes] = useState([]);
  const [fetchingThemes, setFetchingThemes] = useState<boolean>(false);

  useEffect(() => {
    // getThemes().then((res: any) => {
    //   if (res.status === 200) {
    //     setThemes(res.data);
    //     setFetchingThemes(false);
    //   }
    // });
    // TODO: manage user context
    // if (isLogin) {
    //   setFetchingPois(true);
    //   getPois().then((res: any) => {
    //     if (res.status === 200) {
    //       setPois(res.data);
    //       setFetchingPois(false);
    //     }
    //   });
    // }
  }, []);

  const refreshThemes = () =>
    getThemes().then((res: any) => {
      if (res.status === 200) {
        setThemes(res.data);
        setFetchingThemes(false);
      }
      return res;
    });

  return (
    <ChallengesContext.Provider
      value={{
        themes,
        setThemes,
        fetchingThemes,
        refreshThemes,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
