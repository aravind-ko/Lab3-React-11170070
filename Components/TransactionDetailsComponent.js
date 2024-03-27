import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailsComponent = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
    
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{transaction.amount}</Text>

        
        <View style={styles.nameAddressContainer}> 
          <Text style={styles.detailText}>{transaction.name}</Text>
          <Text style={styles.detailText}>{transaction.address}</Text>
        </View>
      </View>

      
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Date:  {transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  nameAddressContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  dateContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 16,
  },
});

export default TransactionDetailsComponent;
