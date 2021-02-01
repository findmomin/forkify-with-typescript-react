import React, { createContext, useState } from 'react';

interface State {
  isOverlayShowing: boolean;
  activeComp?: 'FORM' | 'QUERIES';
}

interface Value extends State {
  toggleOverlay: (overlay: State) => void;
}

export const OverlayContext = createContext<Partial<Value>>({});

export const OverlayProvider: React.FC = ({ children }) => {
  // State
  const [overlay, toggleOverlay] = useState<State>({
    isOverlayShowing: false,
    activeComp: 'FORM',
  });

  return (
    <OverlayContext.Provider value={{ ...overlay, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
