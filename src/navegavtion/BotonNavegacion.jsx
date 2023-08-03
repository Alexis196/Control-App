import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screens/Home"
import Operaciones from "../screens/Operaciones"

const Tab = createMaterialBottomTabNavigator();

function BotonNavegacion() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            activeColor="#ffbf00"
            inactiveColor="#fff"
            barStyle={{ 
                backgroundColor: '#001F3F',
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color='#ffbf00'
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Operaciones"
                component={Operaciones}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="wallet-outline"
                            color='#ffbf00'
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default BotonNavegacion