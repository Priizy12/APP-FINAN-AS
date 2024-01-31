import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signup';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

            <AuthStack.Screen
                name='SignUp'
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#3b3dbf',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a'
                    },
                    headerTintColor: '#FFF',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false
                }}
            />
        </AuthStack.Navigator>
    ) 
}