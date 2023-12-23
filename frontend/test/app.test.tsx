// import 'jest';
// import '@types/jest';
// import React from 'react';

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../src/App.tsx';
import { BrowserRouter } from 'react-router-dom';
// MemoryRouter
// import userEvent from '@testing-library/user-event';

// test('demo', () => {
//     expect(true).toBe(true)
// })

describe('App', () => { 
    it('renders the main page', async () => {
        render(<App />, {wrapper: BrowserRouter})
        // expect(screen.getByText(/Home/i)).toBeInTheDocument()
        expect(screen.getByText(/CloneGPT/i)).toBeInTheDocument()
    })
})

// describe('test', () => {
//     it('full app rendering', () => {
//         render(<App />, {wrapper: BrowserRouter});
//         const user = userEvent.setup();

//         expect(screen.getByText(/Home/i)).toBeInTheDocument()
//     })
// })