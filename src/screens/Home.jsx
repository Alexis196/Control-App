import { View, StyleSheet } from "react-native"
import Titulo from "../components/Titulo"

function Home() {
    return (
        <View style={styles.posicion}>
            <Titulo/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    posicion:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})