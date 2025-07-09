// App.tsx
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VisualizerScreen from './src/features/visualizer/presentation/screens/VisualizerScreen'
import InfoScreen from './src/features/visualizer/presentation/screens/InfoScreen'
import RegExASTScreen from './src/features/regExAST/presentation/screens/RegExASTScreen'
import { HistoryScreen } from './src/features/history/presentation/screens/HistoryScreen'
import { RailroadScreen } from './src/features/railroad/presentation/screens/RailRoadScreen'
import { StackParamList } from './src/core/navigation/types'
import { useThemeStore } from './src/core/context/ThemeStore'
import { ThemeToggleButton } from './src/features/visualizer/presentation/atoms/ThemeToggleButton'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'

const Stack = createNativeStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator()

// El stack que contiene todas las pantallas internas de "Visualizer"
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={VisualizerScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="AST" component={RegExASTScreen} />
      <Stack.Screen name="Railroad" component={RailroadScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  const { colors } = useThemeStore()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'RegEx Visualizer & Tester',
          headerRight: () => <ThemeToggleButton />,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          tabBarStyle: {
            backgroundColor: colors.background,
          },
        }}>
        <Tab.Screen
          name="Visualizer"
          component={HomeStack}
          options={{
            tabBarIcon: (props) => <FontAwesome6 name="house" size={20} color={props.color} iconStyle="solid" />,
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: (props) => <FontAwesome6 name="clock-rotate-left" size={20} color={props.color} iconStyle="solid" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
