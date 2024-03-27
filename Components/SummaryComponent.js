import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from './TransactionContainer';

const SummaryComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);

  if (!transactionsData || !Array.isArray(transactionsData) || transactionsData.length === 0) {
    return <Text style={styles.errorText}>No transactions data available.</Text>;
  }

 
  const totalTransactions = transactionsData.length;
  const amounts = transactionsData.map(t => parseFloat(t.amount.replace('$', '')));
  const highestAmount = Math.max(...amounts);
  const lowestAmount = Math.min(...amounts);
  const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);

  const highestTransaction = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === highestAmount);
  const lowestTransaction = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === lowestAmount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.line} />
      <View style={styles.item}>
        <Text style={styles.itemText}>Transactions</Text>
        <Text style={styles.amountText}>{totalTransactions}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Balance</Text>
        <Text style={styles.amountText}>${totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Highest Spending</Text>
        <View style={styles.subItem}>
          <Text style={styles.subItemText}>{highestTransaction.name}</Text>
          <Text style={styles.amountText}>{highestTransaction.amount}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Lowest Spending</Text>
        <View style={styles.subItem}>
          <Text style={styles.subItemText}>{lowestTransaction.name}</Text>
          <Text style={styles.amountText}>{lowestTransaction.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff', 
    borderRadius: 8,
    margin: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  item: {
    marginBottom: 8,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginTop: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  subItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    color: 'red', 
  },
});

export default SummaryComponent;
