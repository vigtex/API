axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o').then(response =>{
        var onibus = response.data
        var list = document.getElementById('onibus')

        onibus.forEach(onibus =>{
            document.getElementById('onibus').innerHTML+=
            `<td>${onibus.nome}</td><td>${onibus.codigo}</td>`
            
        })
    }).catch(error =>{
        console.log(error)
    })

axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l').then(response =>{
        var lotacao = response.data
        var list = document.getElementById('lotacao')

        lotacao.forEach(lotacao =>{
            document.getElementById('lotacao').innerHTML+=
            `<td>${lotacao.nome}</td><td>${lotacao.codigo}</td>`
            
        })
    }).catch(error =>{
        console.log(error)
    })    