function produtos() {
    fetch('https://skateshop--armintasfernand.repl.co/prod') // Remova o 'mode: no-cors'
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro na solicitação: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data);
            let str = '';
            for (let i = 0; i < data.length; i++) {
                var product = data[i];
                str +=
                    `<div class="card col-12 col-md-4 mt-4">
              <img id ="img" src="${product.imagem}" class="card-img-top" alt="...">
              <div class="card-body">
                <h6 class="card-title">${product.name}</h6>
                <p class="card-text">Largura: ${product.largura}<br>Comprimento: ${product.comprimento}</p>
                <a href="detalhes.html?id=${product.id}" class="btn btn1">Mais detalhes</a>
              </div>
            </div>`;
            }
            document.getElementById('tela').innerHTML = str;
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
}


function filtrar() {
    var selectElement = document.querySelector('input[name="opcao"]:checked');
    valorOpcao = selectElement.value;
    console.log(valorOpcao);
    fetch(`https://skateshop--armintasfernand.repl.co/prod?type=${valorOpcao}`) // Remova o 'mode: no-cors'
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro na solicitação: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data);
            let str = '';
            for (let i = 0; i < data.length; i++) {
                var product = data[i];
                str +=
                    `<div class="card col-12 col-md-4 mt-4">
            <img id ="img" src="${product.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">${product.name}</h6>
              <p class="card-text">Largura: ${product.largura}<br>Comprimento: ${product.comprimento}</p>
              <a href="detalhes.html?id=${product.id}" class="btn btn1">Mais detalhes</a>
            </div>
          </div>`;
            }
            document.getElementById('tela').innerHTML = str;
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
}

