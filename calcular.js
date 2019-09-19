/**
 * Método responsável por calcular quanto tempo se passou
 * de um determinado post.
 * A data deve ser informada no seguinte padrao: "Y-m-d H:i:s"
 * -------------------------------------------------------
 * @author igorcacerez
 * @param data
 * @return {Promise<any>}
 */
function calculaData(data)
{
    // Retorna a promesa
    return new Promise((resolve, reject) => {

        var dataAtual = new Date();
        var dataPost = new Date(data);
        var resultado = "";

        var diferenca = Math.abs(dataAtual - dataPost); //diferença em milésimos e positivo
        var minuto = 1000*60; // milésimos de segundo correspondente a um minuto

        var totalMinuto = Math.round(diferenca/minuto); // valor total de minutos passados

        // Varifica se passou mais de 60 minutos
        if(totalMinuto >= 60)
        {
            var horasTotal =  Math.round(totalMinuto/60);

            // Verifica se é mais de 24horas
            if(horasTotal >= 24)
            {
                var diasTotal =  Math.round(horasTotal/24);

                // Verifica se é maior de 30 dias
                if(diasTotal >= 30)
                {
                    var mesTotal = Math.round(diasTotal/30);

                    if(mesTotal >= 12)
                    {
                        var anos = Math.round(mesTotal/12);

                        resultado = anos + " anos";
                    }
                    else
                    {
                        resultado = mesTotal + " messes";
                    }
                }
                else
                {
                    resultado = diasTotal + " dias";
                }
            }
            else
            {
                resultado = horasTotal + " horas";
            }
        }
        else
        {
            resultado = totalMinuto + " minutos";
        }

        // Resolve o role
        resolve(resultado);
    });
    
} // End >> Fun::calculaData()
