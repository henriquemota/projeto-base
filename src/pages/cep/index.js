import React, { useState } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native'

export default function CEP() {
  const [cep, setCEP] = useState('')
  const [loading, setLoading] = useState(false)
  const [endereco, setEndereco] = useState(null)

  function handleButton() {
    if (cep.trim().length < 8)
      Alert.alert('Erro', 'O CEP tem que ter 8 digitos')
    else {
      setLoading(true)
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) =>
          res.data.cep ? setEndereco(res.data) : setEndereco(null)
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        keyboardType='number-pad'
        placeholder='informe o cep'
        maxLength={8}
        style={{
          borderBottomColor: '#282B35',
          borderBottomWidth: 1,
          height: 40,
          padding: 5,
          margin: 10,
          textAlign: 'center',
        }}
        onChangeText={(e) => setCEP(e)}
      />
      <Button title='busca cep' onPress={handleButton} />
      <ActivityIndicator animating={loading} size='large' color='#0000ff' />
      {endereco && <PainelCEP data={endereco} />}
    </View>
  )
}

function PainelCEP(props) {
  const { cep, logradouro, complemento, bairro, localidade, uf } = props.data
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#282B35',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Text style={{ marginBottom: 10 }}>CEP {cep}</Text>
      <Text style={{ marginBottom: 10 }}>{logradouro}</Text>
      <Text style={{ marginBottom: 10 }}>{complemento || 'Não Informado'}</Text>
      <Text style={{ marginBottom: 10 }}>{bairro}</Text>
      <Text style={{}}>
        {localidade} - {uf}
      </Text>
    </View>
  )
}
