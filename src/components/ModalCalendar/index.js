import react, { useState } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBR } from './localeCalendar'

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'

export default function ModalCalendar({ setVisible, handleFilter }) {


    const [dateNow, setDateNow] = useState(new Date())
    const [markedDate, setMarkedDates] = useState({})

    function handleOnday(date) {

        setDateNow(new Date(date.dateString));
        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay)
    }

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible()
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>


            <Calendar
                onDayPress={handleOnday}
                markedDates={markedDate}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: '#FF0000',
                    selectedDayTextColor: '#FFF',
                    selectedDayBackgroundColor: '#00adf5'
                }}
            />

            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.btn} onPress={handleFilterDate}>
                    <Text style={styles.filter}> Filtrar </Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(34, 34, 34, 0.4)'
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    filter: {
        color: '#FFF',
        fontSize: '19',
        fontWeight: 'bold'
    },
    btn: {
        borderRadius: 4,
        backgroundColor: '#3b3dbf',
        height: 45,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
