import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => { 
    it('renders the logo', async () => {
        render(<Header />, {wrapper: BrowserRouter})
        expect(screen.getByText(/CloneGPT/i)).toBeInTheDocument()
    })
})