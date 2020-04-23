import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function Home(props) {
  const { navigation } = props
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}
    >
      <TouchableHighlight
        style={{
          backgroundColor: 'rgba(240, 120, 80, 0.30)',
          height: 100,
          width: 100,
          margin: 5,
          padding: 10,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('cep')}
      >
        <>
          <Text style={{ textAlign: 'center' }}>Busca CEP</Text>
          <Feather
            name='codepen'
            size={24}
            color='#282B35'
            style={{ margin: 5 }}
          />
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          backgroundColor: 'rgba(10, 210, 30, 0.30)',
          height: 100,
          width: 100,
          margin: 5,
          padding: 10,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('endereco')}
      >
        <>
          <Text style={{ textAlign: 'center' }}>Endeereço (ScrollView)</Text>
          <Feather
            name='clipboard'
            size={24}
            color='#282B35'
            style={{ margin: 5 }}
          />
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          backgroundColor: 'rgba(70, 130, 250, 0.30)',
          height: 100,
          width: 100,
          margin: 5,
          padding: 10,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('enderecoFlatlist')}
      >
        <>
          <Text style={{ textAlign: 'center' }}>Endereço (Flatlist)</Text>
          <Feather
            name='cast'
            size={24}
            color='#282B35'
            style={{ margin: 5 }}
          />
        </>
      </TouchableHighlight>
    </View>
  )
}
