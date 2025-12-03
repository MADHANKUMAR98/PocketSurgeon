// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import ToothDetailScreen from '../screens/ToothDetailScreen';
// import VideoPlayerScreen from '../screens/VideoPlayerScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen}
//           options={{ title: 'Pocket Surgeon' }}
//         />
//         <Stack.Screen 
//           name="ToothDetail" 
//           component={ToothDetailScreen}
//           options={({ route }) => ({ title: route.params.tooth.name })}
//         />
//         <Stack.Screen 
//           name="VideoPlayer" 
//           component={VideoPlayerScreen}
//           options={{ title: 'Video Demonstration' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;