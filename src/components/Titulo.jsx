import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import Dolar from '../../assets/dolar.jpeg';

function Titulo() {
    return (
        <View style={style.container}>
            <ImageBackground style={style.portada} source={Dolar} resizeMode="cover" />
            <View style={style.texto}>
                <Text style={style.titulo}>
                    Control Financiero
                </Text>
                <View style={style.contentInput}>
                    <Text style={style.textInput}>Name:</Text>
                    <TextInput
                        placeholder='Enter your name'
                        placeholderTextColor='#fff' // Cambiar color del placeholder
                        style={style.input}
                    />
                </View>
            </View>
        </View>
    );
}

export default Titulo;

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    portada: {
        height: '100%',
        width: '100%',
    },
    texto: {
        gap: 120,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        backgroundColor: '#001F3F',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    titulo: {
        marginTop: 16,
        alignSelf: 'center',
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    contentInput:{
        alignSelf: 'center'
    },
    textInput: {
        color: '#fff',
        marginBottom: 8, 
    },
    input: {
        width: 200,
        borderColor: '#fff',
        borderBottomWidth: 1, 
        color: '#fff',
    },
});
