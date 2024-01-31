import react, { useContext, useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Modal
} from 'react-native'

import Header from '../../components/Header'
import { api } from '../../services/api'
import { format } from 'date-fns'
import { useIsFocused } from '@react-navigation/native'
import Balance from '../../components/balance'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Receives from '../../components/ListReceives'
import ModalCalendar from '../../components/ModalCalendar'



export default function Home() {

    const isFocus = useIsFocused()
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [moviments, setMoviments] = useState([])
    const [modal, setModal] = useState(false)


    useEffect(() => {

        let isActive = true
        async function getMovements() {
    
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, "dd/MM/yyyy")

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            });

            if (isActive) {
                setMoviments(receives.data)
                setListBalance(balance.data);
            }
        }

        getMovements()

        return () => isActive = false

    }, [isFocus, dateMovements])


    async function handleDelete(id) {
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        } catch (err) {
            console.log(err);
        }
    }


    function filterDateMovements(dateSelected) {
        setDateMovements(dateSelected)
    }


    return (
        <SafeAreaView styles={styles.container}>
            <Header title="Minhas movimentações" />

            <FlatList style={styles.listContainer}
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (<Balance data={item} />)}

            />

            <View style={styles.areaBtn} >
                <TouchableOpacity style={styles.btn} onPress={() => setModal(true)}>
                    <Icon name='event' color='#121212' size={35} />
                </TouchableOpacity>
                <Text style={styles.Text}>Ultimas movimentações</Text>
            </View>

            <FlatList
                data={moviments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Receives data={item} deleteItem={handleDelete} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <Modal visible={modal} animationType='fade' transparent={true}>
                <ModalCalendar
                setVisible={() => setModal(false)}
                handleFilter={filterDateMovements}
                />
                
            </Modal>

        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',

    },
    listContainer: {
        maxHeight: 190
    },
    areaBtn: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 5,
        width: '95%',
        height: 60,
        borderRadius: 5
    },
    btn: {
        marginRight: 10
    },
    Text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})
