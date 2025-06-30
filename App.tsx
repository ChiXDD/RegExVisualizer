import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VisualizerScreen from './src/features/visualizer/presentation/screens/VisualizerScreen'
import HistoryScreen from './src/features/history/presentation/screens/HistoryScreen'
import DetailsScreen from './src/features/visualizer/presentation/screens/DetailsScreen'
import RegExASTScreen from './src/features/regExAST/presentation/screens/RegExASTScreen'
import { StackParamList } from './types'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'

const BottomTabs = createBottomTabNavigator<StackParamList>()

function BottomTabsNavigation() {
  return (
    <BottomTabs.Navigator screenOptions={{ headerTitle: 'RegEx Visualizer & Tester', headerTitleAlign: 'center' }}>
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
  )
}

const stack = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={BottomTabsNavigation} />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="AST" component={RegExASTScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
