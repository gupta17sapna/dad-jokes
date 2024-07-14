import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SearchContext } from '../../SearchContext';
import '../SearchBarWithHookForm/SearchBarWithHookForm.module.scss';

function SearchBarWithHookForm() {
  const { setSearchTerm } = useContext(SearchContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSearchTerm(data.term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit(onSubmit)} className="search-form">
        <input
          type="text"
          placeholder="Search for a joke..."
          {...register('term', { required: true })}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBarWithHookForm;
