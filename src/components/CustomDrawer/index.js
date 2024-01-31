import react, { useContext } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { AuthContext } from '../../contexts/auth'
export default function CustomDrawer(props) {

    const { user, logOut } = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props}>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                    resizeMode='contain'
                />

                <Text style={{ fontSize: 18, marginTop: 18 }}>Bem vindo</Text>

                <Text numberOfLines={1}
                    style={{ fontSize: 17, marginBottom: 10, fontWeight: 'bold', paddingHorizontal: 20 }}
                > {user && user.name} </Text>

            </View>

            <DrawerItemList {...props} />

            <DrawerItem 
            {...props}
            label='Sair'
            onPress={() => logOut()}
            />
        </DrawerContentScrollView>
    )
}