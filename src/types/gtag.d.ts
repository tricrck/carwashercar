// TypeScript declarations for Google Analytics gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export {};