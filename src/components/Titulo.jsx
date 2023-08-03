import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
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
                    <Text style={style.textInput}>Nombre:</Text>
                    <TextInput
                        placeholder='Ingresa tu nombre'
                        placeholderTextColor='#fff'
                        style={style.input}
                    />
                    <TouchableOpacity style={style.button}>
                        <Text style={style.textButton}>
                            Continuar!
                        </Text>
                    </TouchableOpacity>
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
        gap: 100,
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
        fontSize: 22,
    },
    input: {
        width: 200,
        fontSize: 20,
        borderColor: '#fff',
        borderBottomWidth: 1, 
        color: '#fff',
    },
    button:{
        marginTop: 60,
        height: 35,
        backgroundColor: 'transparent',
        width: 120,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    textButton:{
        textAlign: 'center',
        color: '#fff'
    },
});
