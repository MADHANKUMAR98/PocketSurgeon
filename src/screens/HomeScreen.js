// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { teethData } from '../data/teethData';

// const HomeScreen = ({ navigation }) => {
//   const renderToothItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.gridItem}
//       onPress={() => navigation.navigate('ToothDetail', { tooth: item })}
//     >
//       <Text style={styles.toothName}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Pocket Surgeon</Text>
//       <FlatList
//         data={teethData}
//         renderItem={renderToothItem}
//         keyExtractor={item => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.listContent}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#2c3e50',
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   gridItem: {
//     flex: 1,
//     margin: 8,
//     height: 120,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   toothName: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });

// export default HomeScreen;