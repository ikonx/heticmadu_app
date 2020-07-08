import React, { FunctionComponent, useState } from 'react';
import SearchContext from './search.context';
import { ITag } from '@components/molecules/TagsList/TagsList';

interface Props {}

const SearchProvider: FunctionComponent<Props> = ({ children }) => {
  const [pois, setPois] = useState([]);
  const [searchValue, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);

  return (
    <SearchContext.Provider value={{
      searchValue,
      setSearch,
      selectedTags,
      setSelectedTags,
      pois,
      setPois,
    }}>
      { children }
    </SearchContext.Provider>
  );
};

export default SearchProvider;
