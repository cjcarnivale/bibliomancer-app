import React from 'react'

const Context = React.createContext({
  recommendation: [],
  index: 0, 
  getGenre: () => {},
  browse: () => {}, 
  read: [],
  handleRead: () => {},
  handleSelectRec: () => {}, 
  handleChooseNew: () => {},
  currRec: []
});

export default Context; 