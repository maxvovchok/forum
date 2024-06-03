import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTopics } from '../../redux/store/store';
import { Typography, Select, MenuItem, TextField, Box } from '@mui/material'; 

export const SearchCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
    dispatch(filterTopics({ category: e.target.value, searchTerm }));
  };

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
    dispatch(
      filterTopics({ category: selectedCategory, searchTerm: e.target.value })
    );
  };

  return (
    <Box>
      <Typography>Обрати за категоріями</Typography>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        sx={{ marginBottom: '20px', width: '100%' }}
      >
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Programming">Programming</MenuItem>
        <MenuItem value="Announcements and news">
          Announcements and news
        </MenuItem>
        <MenuItem value="General discussions">General discussions</MenuItem>
        <MenuItem value="Healthy Lifestyle">Healthy Lifestyle</MenuItem>
      </Select>
      <Typography>Пошук</Typography>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: '100%', marginBottom: '70px' }}
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </Box>
  );
};
