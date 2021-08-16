import { getByText, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';


test('this is the videogame project', () =>{
  render(<BrowserRouter><App></App></BrowserRouter>)
  const button = screen.getByText(/The videogame project/i);
  expect(button).toBeInTheDocument();
});

test('this has a button to begin', () =>{
  render(<BrowserRouter><App></App></BrowserRouter>)
  const component = screen.getByText(/►/i)
  expect(component).toBeInTheDocument();
});
