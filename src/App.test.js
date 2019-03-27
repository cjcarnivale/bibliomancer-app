import React from 'react';
import { StaticRouter } from 'react-router-dom'
import App from './App';
import NotFoundPage from "./components/NotFoundPage"
import renderer from 'react-test-renderer'; 
import LandingPage from './components/LandingPage';
import { BooksProvider } from './Context';
import DemoPage from './components/DemoPage';
import Recommendation from './components/Recommendation';
import SelectButton from './components/SelectButton';

const values = {
  allBooks: [
    {
      title: 'Atlas Shrugged', 
      author: 'Ayn Rand', 
      description: `Peopled by larger-than-life heroes and villains, charged with towering questions of good and evil, 
                    Atlas Shrugged is Ayn Rand’s magnum opus: a philosophical revolution told in the form of an action thriller—nominated 
                    as one of America’s best-loved novels by PBS’s The Great American Read.`,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51TyZI03%2B9L._SX303_BO1,204,203,200_.jpg',
      genre: 'Fiction'
    },
    {
      title: 'Slaughterhouse-Five', 
      author: 'Kurt Vonnegut',
      description: `An American classic and one of the world’s great antiwar books. Centering on the infamous 
                    firebombing of Dresden, Billy Pilgrim’s odyssey through time reflects the mythic journey of our own fractured lives 
                    as we search for meaning in what we fear most.`,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41tyM7I9EcL._SX328_BO1,204,203,200_.jpg',
      genre: 'Fiction'
    } 
  ],
  genres: {Fiction: []},
  genre: 'Fiction',
  current: [  
    {
    title: 'Atlas Shrugged', 
    author: 'Ayn Rand', 
    description: `Peopled by larger-than-life heroes and villains, charged with towering questions of good and evil, 
                  Atlas Shrugged is Ayn Rand’s magnum opus: a philosophical revolution told in the form of an action thriller—nominated 
                  as one of America’s best-loved novels by PBS’s The Great American Read.`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51TyZI03%2B9L._SX303_BO1,204,203,200_.jpg',
    genre: 'Fiction'
    },
  ],
  selectGenre: jest.fn(),
  readIt: jest.fn(),
  next: jest.fn(),
  read: {
    title: 'Slaughterhouse-Five', 
    author: 'Kurt Vonnegut',
    description: `An American classic and one of the world’s great antiwar books. Centering on the infamous 
                  firebombing of Dresden, Billy Pilgrim’s odyssey through time reflects the mythic journey of our own fractured lives 
                  as we search for meaning in what we fear most.`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41tyM7I9EcL._SX328_BO1,204,203,200_.jpg',
    genre: 'Fiction'
    }
  }

describe('Render all components', () => {
  it('renders App as expected', () => {
    const tree = renderer 
    .create(<StaticRouter><BooksProvider value={values}><App /></BooksProvider></StaticRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
  it('renders Landing Page as expected', () => {
    const tree = renderer 
    .create(<StaticRouter><BooksProvider value={values}><LandingPage /></BooksProvider></StaticRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
  it('renders Demo Page as expected', () => {
    const tree = renderer 
    .create(<StaticRouter><BooksProvider value={values}><DemoPage /></BooksProvider></StaticRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
  it('renders Not Found Page as expected', () => {
    const tree = renderer 
    .create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
  it('renders Recommendation as expected', () => {
    const tree = renderer 
    .create(<StaticRouter><BooksProvider value={values}><Recommendation /></BooksProvider></StaticRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
  it('renders SelectButton as expected', () => {
    const tree = renderer 
    .create(<StaticRouter><BooksProvider value={values}><SelectButton /></BooksProvider></StaticRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
  })
})




