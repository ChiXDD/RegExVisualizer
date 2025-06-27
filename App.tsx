import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VisualizerScreen from './src/features/visualizer/presentation/screens/VisualizerScreen'
import HistoryScreen from './src/features/history/presentation/screens/HistoryScreen'
import DetailsScreen from './src/features/details/presentation/screens/detailsScreen'
import { StackParamList } from './types'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'

const BottomTabs = createBottomTabNavigator<StackParamList>()
const stack = createNativeStackNavigator<StackParamList>()

function DetailsStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator screenOptions={{ headerTitle: 'RegEx Visualizer' }}>
        <BottomTabs.Screen
          name="Visualizer"
          component={VisualizerScreen}
          options={{
            tabBarIcon(props) {
              return <FontAwesome6 name="house" size={20} color={props.color} iconStyle="solid" />
            },
          }}
        />
        <BottomTabs.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon(props) {
              return <FontAwesome6 name="clock-rotate-left" size={20} color={props.color} iconStyle="solid" />
            },
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}
