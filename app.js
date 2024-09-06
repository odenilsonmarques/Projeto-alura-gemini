function buscar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section_resultado = document.getElementById("resultados-pesquisa")

    let campoBusca = document.getElementById("campo-busca").value
    
    if(!campoBusca){
        alert('campo de pesquisa vazio. Por favor preencha o campo')
       return
    }

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultadoEstados = ""

    // Itera sobre cada estado na lista de estados
    for (let estado of estados) {

        if (estado.nome.includes(campoBusca)) {

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
                                <td>${estado.populacao.toLocaleString('pt-BR')} habitantes</td>
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
                        <a href="${estado.map}" target="_blank" title="Instagram"><img
                                src="img/fixar-mapa.png" alt="Instagram" >
                        </a>
                    </li>
                </ul>
                <a href="${estado.link}" target="_blank"><strong><span>saiba mais</strong></a>
            </div>
                    `
        }
    }
    // Atribui o HTML gerado à seção de resultados
    section_resultado.innerHTML = resultadoEstados
}



