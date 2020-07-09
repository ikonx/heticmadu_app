import React, { useState } from 'react';
import FiltersContext from './filters.context';

interface Props {}

const FiltersProvider: React.FC<Props> = ({ children }) => {
  const defaultFilters = [
    {},
    {},
    {},
  ];
  const [activeFilters, setActiveFilters] = useState(defaultFilters);

  return (
    <FiltersContext.Provider
      value={{
        activeFilters,
        setActiveFilters,
        defaultFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
