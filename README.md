# Calcular tempo de evento

Método calcula o tempo que se passou de uma data, ate o dia de hoje. 

Para utilizar basta incluir o arquivo e chamar o metodo calcularData().
Por parametro deve ser passado a data do evento.

O metodo retorna uma promessa que informa quanto tempo se passou, 
Minutos, Horas, Dias, Messes ou Anos. 

Estilo post de rede social.

#### Exemplo de utilização

```javascript
calculaData(DATA_DO_EVENTO).then((resultado) => {
	console.log(resultado); // Ex: 2 dias
});
```

