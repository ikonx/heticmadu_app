import React, { useState, useEffect, useContext } from 'react';
import PoisContext from './pois.context';
import { getPois, deletePoi as deletePoiAPI } from '@utils/http';
import { PoiModel } from '@src/utils/models/pois.model';
import UserContext from '@src/contexts/user/user.context';

interface Props {}

const defaultPois: PoiModel[] = [];

const PoisProvider: React.FC<Props> = ({ children }) => {
  const [pois, setPois] = useState<PoiModel[]>(defaultPois);
  const [fetchingPois, setFetchingPois] = useState<boolean>(false);
  const { checkToken, user } = useContext(UserContext);

  useEffect(() => {
    checkToken();

    user.isLogin && fetchPois();
  }, []);

  const fetchPois = () => {
    setFetchingPois(true);
    getPois().then((res: any) => {
      if (res.status === 200) {
        setPois(res.data);
        setFetchingPois(false);
      }
    });
  };

  const refreshPois = () =>
    getPois().then((res: any) => {
      if (res.status === 200) {
        setPois(res.data);
        setFetchingPois(false);
      }
      return res;
    });

  const deletePoi = (_poiId: string | number) =>
    deletePoiAPI(_poiId).then((res: any) => {
      setFetchingPois(true);
      if (res.status === 200) {
        setFetchingPois(false);
        refreshPois();
      }
      return res;
    });

  return (
    <PoisContext.Provider
      value={{ pois, setPois, fetchingPois, setFetchingPois, fetchPois, refreshPois, deletePoi }}
    >
      {children}
    </PoisContext.Provider>
  );
};

export default PoisProvider;
