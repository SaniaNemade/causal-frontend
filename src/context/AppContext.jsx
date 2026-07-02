import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clinician, setClinician] = useState(null);
  const [patient, setPatient] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState('Research Questions');
  
  // Datasets state
  const [isDatasetsModalOpen, setIsDatasetsModalOpen] = useState(false);
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const [datasets, setDatasets] = useState([
    { id: 1, name: 'Sleep_Study_2025.csv', date: '2025-05-12', size: '2.4 MB' },
    { id: 2, name: 'MCI_Patient_Logs.csv', date: '2025-06-01', size: '1.1 MB' }
  ]);

  const [isGuidelinesModalOpen, setIsGuidelinesModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        clinician,
        setClinician,
        patient,
        setPatient,
        activeTimeline,
        setActiveTimeline,
        isDatasetsModalOpen,
        setIsDatasetsModalOpen,
        isWorkspaceModalOpen,
        setIsWorkspaceModalOpen,
        isReportsModalOpen,
        setIsReportsModalOpen,
        isGuidelinesModalOpen,
        setIsGuidelinesModalOpen,
        datasets,
        setDatasets
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
