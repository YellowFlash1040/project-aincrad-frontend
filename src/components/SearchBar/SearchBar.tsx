import { useState } from 'react';
import clsx from 'clsx';

import { LensIcon } from '../../assets';

import s from './SearchBar.module.css';

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  return (
    <label className={clsx(s.queryFieldWrapper, className)}>
      <input
        className={s.queryField}
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      ></input>
      <LensIcon className={s.lensIcon} width={24} height={24} />
    </label>
  );
};

export default SearchBar;
