import react, { useState, } from 'react'

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function BalancTypes({ type, sendType }) {

    const [typeChecked, setTypeChecked] = useState(type)

    function changeType (name) {
        if(name === 'receita') {
            setTypeChecked('receita')
            sendType('receita')
        } else {
            setTypeChecked('despesa')
            sendType('despesa')
        }
    }

    return (
        <View style={styles.container}  >

            <TouchableOpacity 
            style={[styles.btn, {  backgroundColor: typeChecked === 'receita' ? '#FFF' : 'e7e7e7', borderColor: typeChecked ===  'receita' ? '#3B3d' : 'transparent' }]
            }
            onPress={() => changeType('receita')}
            >
                
                <Icon name='arrow-up' size={25} color="#121212" />
                <Text style={styles.btnText}>Receita</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, { backgroundColor: typeChecked === 'despesa' ? '#FFF' : 'e7e7e7', borderColor: typeChecked === 'despesa' ? '#DB1B2E' : 'transparent' }]}
            onPress={() => changeType('despesa')}
            >
                <Icon name='arrow-down' size={25} color="#121212" />
                <Text style={styles.btnText}>Despesa</Text>
            </TouchableOpacity>




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 45,
        borderRadius: 5,
        borderWidth: 1.5,
        marginBottom: 14
    },
    btnText: {
        marginLeft: 8,
        fontSize: 16
    }
})