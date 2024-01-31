import react, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Balance({ data }) {

    const LabelName = useMemo(() => {

        if(data.tag === 'saldo'){ 

            return {
                label: 'Saldo Atual',
                color: '#3b3dbf'
            }

        } else if(data.tag === 'receita') {

            return {
                label: 'Entrada Monetaria',
                color: '#00b94a'
            }

        } else {
            return {
                label: 'Saida Monetaria',
                color: '#EF463a'
            }
        }

    }, [data])


    return (
        <View style={[styles.container,{ backgroundColor: LabelName.color}]} >
            <Text style={styles.label}> {LabelName.label} </Text>
            <Text style={styles.saldo}>R$ {data.saldo} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 14,
        marginRight: 14,
        borderRadius: 4,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 300,
        paddingLeft: 14,
        height: 400

    },
    label: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 50
    },
    saldo: {
        marginTop: 5,
        fontSize: 30,
        color: '#FFF'
    }
})
