// src/hooks/useSearch.js
import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return {
    searchTerm,
    onSearch,
  };
};

export default useSearch;
