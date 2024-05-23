const Contador = () => {
    const [state, dispatch] = useReducer(reducer, { contador: 0 });
    return (
      <View style={styles.conteudo}>
        <Text>Contagem</Text>
        <Text style={styles.contador}>{state.contador}</Text>
        <Button
          title="Incrementar"
          onPress={() => dispatch({ type: "incrementar", payload: 1 })}
        />
        <Button
          title="Decrementar"
          onPress={() => dispatch({ type: "decrementar", payload: 1 })}
        />
      </View>
    );
  };
  