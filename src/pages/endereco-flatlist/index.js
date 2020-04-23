import React from 'react'
import axios from 'axios'
import {
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { EnderecoCard } from '../../components'

export default function EnderecoFlatlist(props) {
  const [endereco, setEndereco] = React.useState('')
  const [carregando, setCarregando] = React.useState(false)
  const [dados, setDados] = React.useState([])

  function handleButton() {
    if (endereco.trim().length > 0) {
      setCarregando(true)
      axios
        .get(`http://enderecos.metheora.com/api/cidade/${endereco}`)
        .then((res) => setDados(res.data))
        .catch((err) => null)
        .finally(() => setCarregando(false))
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder='informe parte do endereco'
        autoCapitalize='none'
        onChangeText={(e) => setEndereco(e)}
        style={{
          borderBottomColor: '#282B35',
          borderBottomWidth: 1,
          height: 40,
          margin: 10,
          padding: 5,
          textAlign: 'center',
        }}
      />
      <Button title='buscar' onPress={handleButton} />
      <ActivityIndicator color='#0000ff' animating={carregando} />
      <FlatList
        data={dados}
        renderItem={({ item }) => <EnderecoCard data={item} />}
        keyExtractor={(item) => toString(item.Id)}
      />
    </View>
  )
}
