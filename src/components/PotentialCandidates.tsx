import React, { createContext, useContext, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

interface CandidateContextType{
  candidatesArray: Candidate[];
  setCandidatesArray: React.Dispatch<React.SetStateAction<Candidate[]>>;
}

const CandidateContext = createContext<CandidateContextType | undefined>(undefined);



export const ArrayProvider = ({ children }: { children: React.ReactNode }) =>{
  const [candidatesArray, setCandidatesArray] = useState<Candidate[]>([]);

  return (
    <CandidateContext.Provider value={{ candidatesArray, setCandidatesArray }}>
      {children}
    </CandidateContext.Provider>
  )
}

export const useArray = () => {
  const context = useContext(CandidateContext);

  if (!context){
    throw new Error('useArray must be used within an ArrayProvider');
  }

  return context;
}