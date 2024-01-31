import react, { useContext } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'

export default function Perfil() {


    const navigation = useNavigation()

    const { logOut, user } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Meu Perfil" />

            <Text style={styles.text}>
                Bem Vindo Novamente !!!
            </Text>

            <Text numberOfLines={1} style={styles.name}> {user && user.name} </Text>

            <TouchableOpacity style={styles.register} onPress={() => navigation.navigate("Novo Registro")}>
                <Text style={styles.newText}>Fazer Registro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logOut} onPress={() => logOut()}>
                <Text style={styles.textLogout}>Sair</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24
    },
    name: {
        fontSize: 20,
        marginBottom: 24,
        marginTop: 8,
        padding: 0,
        paddingLeft: 14,
        paddingRight: 14,
        color: "#121212",

    },
    register: {
        backgroundColor: '#3d3bbf',
        width: '90%',
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    newText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    logOut: {
        borderWidth: 1,
        borderColor: '#c62c36',
        width: '40%',
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textLogout: {
        color: '#c62c36',
        fontSize: 15,
        fontWeight: 'bold'
    }





})