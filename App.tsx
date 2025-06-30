import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VisualizerScreen from './src/features/visualizer/presentation/screens/VisualizerScreen'
import InfoScreen from './src/features/visualizer/presentation/screens/InfoScreen'
import RegExASTScreen from './src/features/regExAST/presentation/screens/RegExASTScreen'
import { StackParamList } from './src/core/navigation/types'
import { RailroadScreen } from './src/features/railroad/presentation/screens/RailRoadScreen'

const stack = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Group screenOptions={{ headerShown: true }}>
          <stack.Screen name="Visualizer" component={VisualizerScreen} />
        </stack.Group>
        <stack.Group screenOptions={{ headerShown: false }}>
          <stack.Screen name="Info" component={InfoScreen} />
          <stack.Screen name="AST" component={RegExASTScreen} />
          <stack.Screen name="Railroad" component={RailroadScreen} />
        </stack.Group>
      </stack.Navigator>
    </NavigationContainer>
  )
}
