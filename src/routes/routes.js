import react, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'


import { AuthContext } from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes () {

    const { signed, loadingApp } = useContext(AuthContext)

    if(loadingApp) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F4FF'}}>
                <ActivityIndicator size="large" color='#131313'/>
            </View>
        )
    }
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}