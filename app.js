function buscar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section_resultado = document.getElementById("resultados-pesquisa")

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultado_cursos = ""

    // Itera sobre cada curso na lista de cursos
    for (let curso of cursos) {

        // Cria uma div para cada curso, formatando os dados do curso em HTML
        resultado_cursos += `

        <div class="item-resultado">
            <h2>${curso.nome}</h2>

            <table style="width:100%">
                <thead>
                    <tr>
                        <th>Formação</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                        <th>Modalidade Online</th>
                        <th>Modalidade Presencial</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${curso.formacao}</td>
                        <td>${curso.duracao}</td>
                        <td>${curso.modalidade}</td>
                        <td>
                            <a href="${curso.link_online}"
                                target="_blank"><strong>Saber mais</strong>
                            </a>
                        </td>
                        <td>
                            <a href="${curso.link_presencial}"
                                target="_blank"><strong>Saber mais</strong>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="descricao-meta">
                ${curso.descricao}
            </p>
            <ul class="lista-horizontal">
                <li>
                    <a href="https://www.instagram.com/rebecarandrade/" target="_blank" title="Instagram"><img
                            src="img/facebook.png" alt="Instagram" >
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=U6QlKjfTSpc" target="_blank" title="YouTube"><img
                            src="img/twitter.png" alt="YouTube">
                    </a>
                </li> 
            </ul>
            <a href="https://www.fiap.com.br/" target="_blank"><strong><span class="fiap">FIAP</span> - ALURA</strong></a>
        </div>
        `
    }
    // Atribui o HTML gerado à seção de resultados
    section_resultado.innerHTML = resultado_cursos
}



