import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

interface Value {
  isOverlayShowing: boolean;
  toggleOverlay: () => void;
}

export const UploadRecipeFormContext = createContext<Partial<Value>>({});

export const UploadRecipeFormProvider: React.FC = ({ children }) => {
  // State
  const [isOverlayShowing, toggleOverlay] = useToggle(false);

  return (
    <UploadRecipeFormContext.Provider
      value={{ isOverlayShowing, toggleOverlay }}
    >
      {children}
    </UploadRecipeFormContext.Provider>
  );
};
