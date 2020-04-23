import React from 'react'
import { View, Text } from 'react-native'

export default function EnderecoCard(props) {
  const { Nome, Latitude, Longitude, UF, CEP, CodigoIBGE } = props.data
  return (
    <View
      style={{
        margin: 10,
        borderColor: '#282B35',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
      }}
    >
      <Text style={{ margin: 5, fontSize: 15, flexWrap: 'wrap' }}>{Nome}</Text>
      <Text style={{ margin: 5, fontSize: 15, flexWrap: 'wrap' }}>
        lat: {Latitude} e lng: {Longitude}
      </Text>
      <Text style={{ margin: 5, fontSize: 15, flexWrap: 'wrap' }}>UF {UF}</Text>
      <Text style={{ margin: 5, fontSize: 15, flexWrap: 'wrap' }}>
        CEP {CEP}
      </Text>
      <Text style={{ margin: 5, fontSize: 15, flexWrap: 'wrap' }}>
        Código IBGE {CodigoIBGE}
      </Text>
    </View>
  )
}
