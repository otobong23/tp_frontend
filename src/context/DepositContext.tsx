'use client';
import React, { createContext, useContext, useState } from "react";


export type labelType = 'Bitcoin' | 'Ethereum' | 'USDT'


type contextType = {
    label: labelType,
    handleLabel: (data: labelType) => void,
    amount: number,
    handleAmount: (data: number) => void
}

type contextProviderType = {
    children: React.ReactNode;
};

const subcontext = createContext({} as contextType);

const DepositProvider = ({ children }: contextProviderType) => {
    const [label, setLabel] = useState<labelType>('USDT'); // default image
    const [amount, setAmount] = useState<number>(0);
    const handleLabel = (data: labelType) => {
        setLabel(data);
    };
    const handleAmount = (data: number) => {
        setAmount(data);
    };

    return (
        <subcontext.Provider value={{ label, handleLabel, amount, handleAmount }}>{children}</subcontext.Provider>
    );
};
export default DepositProvider;


export const useContextStore = () => {
    return useContext(subcontext);
};