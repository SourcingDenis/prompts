import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PromptList from './components/PromptList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SubmitPrompt from './components/SubmitPrompt';
import './App.css';

function App() {
  const [prompts, setPrompts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    const response = await axios.get('GITHUB_RAW_CSV_URL');
    const fetchedPrompts = parseCSV(response.data);
    setPrompts(fetchedPrompts);
  };

  const parseCSV = (data) => {
    // Implement CSV parsing logic
  };

  const filteredPrompts = prompts.filter((prompt) =>
    prompt.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Prompt Sharing App</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <PromptList prompts={filteredPrompts} />
      <SubmitPrompt />
    </div>
  );
}

export default App;
