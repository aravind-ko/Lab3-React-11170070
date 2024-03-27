import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransactionComponent from './Components/TransactionComponent';
import SummaryComponent from './Components/SummaryComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/TransactionContainer'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Transactions') {
                iconName = 'list'; 
              } else if (route.name === 'Summary') {
                iconName = 'assessment'; 
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Transactions" component={TransactionComponent} />
          <Tab.Screen name="Summary" component={SummaryComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}
