
// setupTests.ts
import { vi } from 'vitest';

// Simuler matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false, // Par défaut, vous pouvez ajuster selon le test
    media: query,
    onchange: null,
    addListener: vi.fn(), // obsolète, mais parfois utilisé par les libs
    removeListener: vi.fn(), // obsolète, mais parfois utilisé par les libs
    addEventListener: vi.fn(), // Utilisé pour les événements
    removeEventListener: vi.fn(), // Utilisé pour les événements
    dispatchEvent: vi.fn(), // Permet de déclencher des événements
  }),
});

  
