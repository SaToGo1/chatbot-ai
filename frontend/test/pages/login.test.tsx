import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Login from '../../src/pages/Login'
import { BrowserRouter } from 'react-router-dom';

describe('in Login', () => { 
  it('the user sees the elements', async () => {
    render(<Login />, {wrapper: BrowserRouter})

    expect(screen.getByRole('banner')).toBeInTheDocument()

    expect(screen.getByRole('textbox', {name: /Email/i})).toBeInTheDocument()
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /Log In/i})).toBeInTheDocument()

    expect(screen.getByRole('link', {name: /Register here/i})).toBeInTheDocument()
  })
})
