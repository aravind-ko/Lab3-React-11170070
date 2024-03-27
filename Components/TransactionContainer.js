import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Food Basics', amount: '$100', date: '2024-03-25', address: '123 Main St' },
    { id: 2, name: 'Tim Hortons', amount: '$50', date: '2024-03-24', address: '456 Elm St' },
    { id: 3, name: 'Car expenses', amount: '$800', date: '2024-03-20', address: '789 Oak St' },
    { id: 4, name: 'Osmows', amount: '$60', date: '2024-03-19', address: '321 Pine St' },
    { id: 5, name: 'Real Canadian', amount: '$40', date: '2024-03-18', address: '654 Maple St' },
    
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};

const TransactionListComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);

  return (
    <View style={styles.container}>
      {transactionsData.map(transaction => (
        <View key={transaction.id} style={styles.transaction}>
          <View>
            <Text style={styles.transactionName}>{transaction.name}</Text>
            <Text style={styles.transactionAddress}>{transaction.address}</Text>
          </View>
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAddress: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionListComponent;
