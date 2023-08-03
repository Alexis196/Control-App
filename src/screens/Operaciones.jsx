import { View, Text, StyleSheet } from "react-native"

function Operaciones() {
    return (
        <View style={styles.posicion}>
            <Text>
                Hola
            </Text>
        </View>
    )
}

export default Operaciones

const styles = StyleSheet.create({
    posicion:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})