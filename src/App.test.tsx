
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Basic check to ensure the app renders
    expect(document.body).toBeDefined();
  });
});
