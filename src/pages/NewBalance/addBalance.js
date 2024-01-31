import react, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'

import Header from '../../components/Header'
import BalancTypes from '../../components/BalanceTypes'
import { api } from '../../services/api'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'



export default function AddBalance() {

    const navigation = useNavigation()

    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')


    function handleSubmit() {
        Keyboard.dismiss();

        if (type === null) {
            alert("Preencha todos os campos")
            return;
        }


        Alert.alert(
            'Confirmando Dados',
            `Tipo: ${type} - Valor ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Prosseguir',
                    onPress: () => handleAdd()
                }
            ]

        )
    }

    async function handleAdd() {
        Keyboard.dismiss()

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <SafeAreaView style={styles.container}>
                <Header title='Registro de Movimentação' />

                <SafeAreaView style={styles.inputArea}>

                    <TextInput style={styles.input}
                        placeholder='Descrição desse registro'
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}

                    />


                    <TextInput style={styles.input}
                        placeholder='Valor Desejado'
                        keyboardType='numeric'
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />


                    <BalancTypes type={type} sendType={(item) => setType(item)} />

                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.btnText}>Registrar</Text>
                    </TouchableOpacity>

                </SafeAreaView>

            </SafeAreaView>

        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF'
    },
    inputArea: {
        marginTop: 14,
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: '#FFF',
        fontSize: 17,
        padding: 10,
        paddingRight: 8,
        marginBottom: 14,
        borderRadius: 4
    },
    btn: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00b94a',
        borderRadius: 4
    },
    btnText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
})