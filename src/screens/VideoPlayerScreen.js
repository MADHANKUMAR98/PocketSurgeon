// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const VideoPlayerScreen = ({ route }) => {
//   const { videoUrl, toothName } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Video: {toothName}</Text>
//       <View style={styles.videoPlaceholder}>
//         <Text style={styles.placeholderText}>Video Player</Text>
//         <Text style={styles.urlText}>{videoUrl}</Text>
//         <Text style={styles.instructionText}>
//           Install react-native-video package for actual video playback
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#2c3e50',
//   },
//   videoPlaceholder: {
//     flex: 1,
//     backgroundColor: '#e9ecef',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#dee2e6',
//     borderStyle: 'dashed',
//   },
//   placeholderText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#6c757d',
//     marginBottom: 10,
//   },
//   urlText: {
//     fontSize: 14,
//     color: '#495057',
//     textAlign: 'center',
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   instructionText: {
//     fontSize: 16,
//     color: '#868e96',
//     textAlign: 'center',
//     marginHorizontal: 20,
//     fontStyle: 'italic',
//   },
// });

// export default VideoPlayerScreen;