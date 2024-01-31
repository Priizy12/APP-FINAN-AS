import react from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export default function Header({ title }) {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer() }> 
                <Icon name='menu' size={35} color="#121212" />
            </TouchableOpacity>

            {title && (
                <Text style={styles.textMenu}> {title} </Text>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
        marginBottom: 15,
        marginLeft: 8,
        width: '100%',
        maxHeight: 60
    },
    textMenu: {
        fontSize: 20,
        marginLeft: 15
    },
    btnMenu: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})