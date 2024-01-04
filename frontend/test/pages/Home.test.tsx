import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from "../../src/pages/Home"
import { BrowserRouter } from 'react-router-dom';

describe('in Home', () => { 
  it('the user sees main interaction elements', async () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument()
    expect(screen.getByText(/Log In/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })

  it('the user sees the aditional information', async () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen.getByText(/UnlockedAi/i)).toBeInTheDocument()
    expect(screen.getByText(/Terms of use/i)).toBeInTheDocument()
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument()
  })
})
