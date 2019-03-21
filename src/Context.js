import React from 'react'

const Context = React.createContext({
  recommendations: [],
  index: 0, 
  getGenre: () => {},
  browse: () => {}, 
});

export default Context; 