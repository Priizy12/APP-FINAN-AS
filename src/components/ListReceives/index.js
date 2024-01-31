import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Receives({ data, deleteItem }) {



    function handleDelete() {
        Alert.alert(
        'Atenção',
        'Você tem certeza que deseja deletar esse registro?',
        [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Continuar',
                onPress: () => deleteItem(data.id)
            }
        ]
        )
    }


    return (
        <TouchableWithoutFeedback onLongPress={handleDelete}>
            <View style={styles.container}>
                <View style={styles.tipo}>
                    <View style={[styles.IconView, { backgroundColor: data.type === 'despesa' ? '#c62c36' : '#049301' }]}>
                        <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            size={20}
                            color="#FFF" />
                        <Text style={styles.tipoText}> {data.type} </Text>
                    </View>
                </View>

                <View >
                    <Text style={styles.valueText}> R$ {data.value} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7e7e7',
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 14,
        padding: 12,
        marginTop: 16
    },
    tipo: {
        flexDirection: 'row',
    },
    IconView: {
        flexDirection: 'row',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4
    },
    tipoText: {
        color: '#FFF',
        fontSize: 16,
        fontStyle: 'italic'
    },
    valueText: {
        color: '#121212',
        fontSize: 18,
        marginTop: 10
    }
});
