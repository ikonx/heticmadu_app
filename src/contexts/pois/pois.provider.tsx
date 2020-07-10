import React, { useState, useEffect } from 'react';
import PoisContext from './pois.context';
import { getPois, deletePoi as deletePoiAPI } from '@utils/http';
import { PoiModel } from '@src/utils/models/pois.model';
import { poisData } from '@src/utils/mocks/pois.data';

interface Props {}

const defaultPois: PoiModel[] = [...poisData];

const PoisProvider: React.FC<Props> = ({ children }) => {
  const [pois, setPois] = useState<PoiModel[]>(defaultPois);
  const [fetchingPois, setFetchingPois] = useState<boolean>(false);

  useEffect(() => {
    // fetchPois();
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
    getPois()
      .then((res: any) => {
        if (res.status === 200) {
          setPois(res.data);
          setFetchingPois(false);
        }
        return res;
      })
      .catch((error: any) => console.log(error));

  const deletePoi = (_poiId: string | number) =>
    deletePoiAPI(_poiId)
      .then((res: any) => {
        setFetchingPois(true);
        if (res.status === 200) {
          setFetchingPois(false);
          refreshPois();
        }
        return res;
      })
      .catch((error: any) => console.log(error));

  return (
    <PoisContext.Provider
      value={{
        pois,
        setPois,
        fetchingPois,
        setFetchingPois,
        fetchPois,
        refreshPois,
        deletePoi,
      }}
    >
      {children}
    </PoisContext.Provider>
  );
};

export default PoisProvider;
