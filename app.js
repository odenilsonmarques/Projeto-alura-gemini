// Função para remover acentos de um texto, permitindo buscas mais precisas,ignorando diferenças de acentuação.
function removerAcentos(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let sectionResultado = document.getElementById("resultados-pesquisa")

    let campoBusca = document.getElementById("campo-busca").value.trim()


    if(!campoBusca){
        sectionResultado.innerHTML = "<p class='resultadoEstados'>Campo de pesquisa vazio, por favor preencha o campo</p>"
        return
    }

     campoBusca = removerAcentos(campoBusca.toLowerCase())

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultadoEstados = "";

    //nesse caso essa declaração é para pegar dentro do for em minusculo
    let nome = "";
    let capital = "";
    let regiao = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada estado na lista de estados
    for (let estado of estados) {

        nome = removerAcentos(estado.nome.toLowerCase());
        capital = removerAcentos(estado.capital.toLowerCase());
        regiao = estado.regiao.toLowerCase();
        descricao = estado.descricao.toLowerCase();
        tags = removerAcentos(estado.tags.toLowerCase());

        if (nome.includes(campoBusca) || capital.includes(campoBusca) || regiao.includes(campoBusca) || descricao.includes(campoBusca) || tags.includes(campoBusca)) {

            // Cria uma div para cada estado, formatando os dados do estado em HTML
            resultadoEstados += `

            <div class="item-resultado">
                <h2>${estado.nome}</h2>
                <div style="display: flex; align-items: flex-start;">
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Capital</th>
                                <td>${estado.capital}</td>
                            </tr> 
                            <tr>
                                <th>Área Territorial</th>
                                <td>${estado.areaTerritorial.toLocaleString('pt-BR')} km²</td>
                            </tr> 
                            <tr>
                                <th>População</th>
                                <td>${estado.populacao.toFixed(4).replace(',', '.')} habitantes</td>
                            </tr>
                            <tr>
                                <th>Densidade Demográfica</th>
                                <td>${estado.densidadeDemografica} hab/km²</td>
                            </tr>
                            <tr>
                                <th>Região</th>
                                <td>${estado.regiao}</td>
                            </tr> 
                            <tr>
                                <th>IDH</th>
                                <td>${estado.idh}</td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <p class="descricao-meta">
                    ${estado.descricao}
                </p>
                <ul class="lista-horizontal">
                    <li>
                        <a href="${estado.map}" target="_blank" title="maps"><img
                                src="img/fixar-mapa.png" alt="map" >
                        </a>
                    </li>
                </ul>
                <a href="${estado.link}" target="_blank"><strong><span>saiba mais</strong></a>
            </div>
                    `
        }
    }

    if(!resultadoEstados){
        resultadoEstados = "<p class='resultadoEstados'>Nenhuma informação encontrada !</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    sectionResultado.innerHTML = resultadoEstados
}



