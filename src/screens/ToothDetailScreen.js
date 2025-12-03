// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// const ToothDetailScreen = ({ route, navigation }) => {
//   const { tooth } = route.params;

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <Text style={styles.title}>{tooth.name}</Text>
      
//       {/* Anesthetic Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Local Anesthetic Technique</Text>
//         <Text style={styles.text}><Text style={styles.bold}>Buccal:</Text> {tooth.anesthetic.buccal}</Text>
//         <Text style={styles.text}><Text style={styles.bold}>Palatal/Lingual:</Text> {tooth.anesthetic.palatal || tooth.anesthetic.lingual}</Text>
//       </View>

//       {/* Forceps Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Forceps Used</Text>
//         {tooth.forceps.map((forcep, index) => (
//           <Text key={index} style={styles.text}>• {forcep}</Text>
//         ))}
//       </View>

//       {/* Motion Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Motion for Extraction</Text>
//         <Text style={styles.motionText}>{tooth.motion}</Text>
//       </View>

//       {/* Video Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Video Demonstration</Text>
//         <TouchableOpacity 
//           style={styles.videoButton}
//           onPress={() => navigation.navigate('VideoPlayer', { videoUrl: tooth.videoUrl, toothName: tooth.name })}
//         >
//           <Text style={styles.videoButtonText}>🎥 PLAY VIDEO</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#2c3e50',
//   },
//   section: {
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     marginBottom: 16,
//     padding: 20,
//     borderRadius: 12,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#34495e',
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#555',
//     lineHeight: 22,
//   },
//   bold: {
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   motionText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#e74c3c',
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   videoButton: {
//     backgroundColor: '#3498db',
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   videoButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ToothDetailScreen;