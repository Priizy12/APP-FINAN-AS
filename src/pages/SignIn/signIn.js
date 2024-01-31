import {
    Image,
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

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

    const { sigIn, loading } = useContext(AuthContext)

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSignIn() {
        sigIn(email, password);
    }

    return (
        <SafeAreaView style={styles.Background}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Image
                    style={styles.logo}
                    source={require('../../assets/Logo.png')}
                />

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

                <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={handleSignIn}>

                    {
                        loading ? (
                            <ActivityIndicator size={30} color="#FFF" />

                        ) : (
                            <Text style={styles.textbtn}> Acessar </Text>
                        )
                    }


                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
                    <Text styles={styles.linkText}> Criar uma conta !</Text>
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
    logo: {
        marginBottom: 25
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


