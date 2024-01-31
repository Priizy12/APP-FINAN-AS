import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    ActivityIndicator
} from 'react-native';

import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {


    const { signUp, loading } = useContext(AuthContext)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    function handleSignUp() {
        if (nome === '' || email === '' || password === '') return
        signUp(email, password, nome);
    }


    return (
        <SafeAreaView style={styles.Background}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder="Seu nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </View>

                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.areaInput}>
                    <TextInput style={styles.Input}
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.btn} onPress={handleSignUp}>

                    {
                        loading ? (
                            <ActivityIndicator size={30} color="#FFF" />

                        ) : (
                            <Text style={styles.textbtn}> Cadastrar </Text>
                        )
                    }


                </TouchableOpacity>


            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: '#F0F4FF'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaInput: {
        flexDirection: 'row'
    },
    Input: {
        backgroundColor: '#FFF',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15,
    },
    btn: {
        width: '70%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3b3dbf',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbtn: {
        fontSize: 20,
        color: '#FFF'
    },

    link: {
        marginTop: 20,
        marginBottom: 10
    },
    linkText: {
        color: '#171717'
    }



})


