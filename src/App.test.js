// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CardanoCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CardanoCore/i);
    expect(titleElement).toBeInTheDocument();
});
