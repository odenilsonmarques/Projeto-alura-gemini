let estados = [
    {
        nome: "Maranhão",
        capital: "São Luís",
        areaTerritorial: 331983.302, 
        populacao: 7.107820, 
        densidadeDemografica: 21.4, 
        regiao: "Nordeste",
        idh: 0.654, 
        descricao: "O Maranhão é conhecido por suas belezas naturais, como os Lençóis Maranhenses, e pela rica cultura popular. A capital, São Luís, é famosa pelo seu centro histórico, com construções coloniais e azulejos portugueses.",
        link: "https://cidades.ibge.gov.br/brasil/ma/panorama",
        map: "https://maps.app.goo.gl/tTfQVD6w6S5jS3yx9",
        tags: "centro historico bumba boi barreirinhas barreirinha praia litoral lencóis marenhense patrimonio cultural"
    },

    {
        nome: "São Paulo",
        capital: "São Paulo",
        areaTerritorial: 248.222, 
        populacao: 46.289, 
        densidadeDemografica: 186.7, 
        regiao: "Sudeste",
        idh: 0.826, 
        descricao: "São Paulo é o estado mais populoso do Brasil e o principal centro econômico do país. A capital é uma metrópole global, com grande influência nas áreas de finanças, cultura e entretenimento.",
        link: "https://cidades.ibge.gov.br/brasil/sp/panorama",
        map: "https://maps.app.goo.gl/XgW895EmqgzrxKRi8",
        tags: "avenida paulista museu ibirapuera mercado municipal grande são paulo litoral paulista centro econômico monumentos culturais"
    },

    {
        nome: "Rio de Janeiro",
        capital: "Rio de Janeiro",
        areaTerritorial: 43.696, 
        populacao: 17.366, 
        densidadeDemografica: 365.2, 
        regiao: "Sudeste",
        idh: 0.799,
        descricao: "Famoso por suas praias icônicas, como Copacabana e Ipanema, o estado do Rio de Janeiro também abriga o Pão de Açúcar e o Cristo Redentor, além de ser um grande centro cultural e turístico.",
        link: "https://cidades.ibge.gov.br/brasil/rj/panorama",
        map: "https://maps.app.goo.gl/rm6idfeVRwpafGNk7",
        tags: "cristo redentor pão de açúcar copacabana maracanã carnaval samba lapa praia cultura carioca"
    },

    {
        nome: "Bahia",
        capital: "Salvador",
        areaTerritorial: 564.733, 
        populacao: 15.203, 
        densidadeDemografica: 24.9, 
        regiao: "Nordeste",
        idh: 0.714,
        descricao: "A Bahia tem uma forte identidade cultural, sendo o berço do samba de roda, capoeira e do carnaval de Salvador. O estado também é conhecido por suas belas praias e pelo centro histórico de Salvador.",
        link: "https://cidades.ibge.gov.br/brasil/ba/panorama",
        map: "https://maps.app.goo.gl/o2sUVD4mktesCEAk9",
        tags: "salvador pelourinho carnaval acarajé chapada diamantina litoral baiano candomblé baiana cultura afro-brasileira"
    },

    {
        nome: "Paraná",
        capital: "Curitiba",
        areaTerritorial: 199.298, 
        populacao: 11.516, 
        densidadeDemografica: 57.8, 
        regiao: "Sul",
        idh: 0.749,
        descricao: "O Paraná é famoso pelas Cataratas do Iguaçu, uma das maiores atrações turísticas do Brasil. A capital, Curitiba, é conhecida por sua qualidade de vida e planejamento urbano.",
        link: "https://cidades.ibge.gov.br/brasil/pr/panorama",
        map: "https://maps.app.goo.gl/aZjgtVA2XShRuxtq6",
        tags: "curitiba parque tangua cataratas do iguaçu foz do iguaçu serras paranaenses agricultura cultura paranaense"
    },

    {
        nome: "Amazonas",
        capital: "Manaus",
        areaTerritorial: 1.559, 
        populacao: 4.207, 
        densidadeDemografica: 2.6, 
        regiao: "Norte",
        idh: 0.674,
        descricao: "O Amazonas abriga a maior floresta tropical do mundo, a Amazônia, e a cidade de Manaus, com seu famoso Teatro Amazonas. O estado é um dos maiores em biodiversidade e recursos naturais.",
        link: "https://cidades.ibge.gov.br/brasil/am/panorama",
        map: "https://maps.app.goo.gl/t1iMBDjXVVbw3iZw7",
        tags: "manaus encontro das águas floresta amazônica cultura indígena festival de parintins fauna biodiversidade"
    },

    {
        nome: "Distrito Federal",
        capital: "Brasília",
        areaTerritorial: 5.802, 
        populacao: 3.094, 
        densidadeDemografica: 533.9, 
        regiao: "Centro-Oeste",
        idh: 0.850,
        descricao: "O Distrito Federal é onde está localizada a capital do Brasil, Brasília, conhecida por sua arquitetura moderna, planejada por Oscar Niemeyer e Lúcio Costa. É o centro político do país.",
        link: "https://cidades.ibge.gov.br/brasil/df/panorama",
        map: "https://maps.app.goo.gl/GbzPme4MzCNDupVY6",
        tags: "brasília esplanada dos ministérios congresso nacional palácio do planalto arquitetura moderna"
    },

    {
        nome: "Acre",
        capital: "Rio Branco",
        areaTerritorial: 164.123, 
        populacao: 906.876, 
        densidadeDemografica: 4.7, 
        regiao: "Norte",
        idh: 0.663,
        descricao: "O Acre é conhecido por sua história ligada à exploração da borracha e à luta ambientalista de Chico Mendes. A capital, Rio Branco, é o centro político e econômico do estado.",
        link: "https://cidades.ibge.gov.br/brasil/ac/panorama",
        map: "https://maps.app.goo.gl/ph9sandDRVpY3ywm9",
        tags: "rio branco floresta amazônica seringueiros história do acre cultura acreana biodiversidade"
    },

    {
        nome: "Alagoas",
        capital: "Maceió",
        areaTerritorial: 27.778, 
        populacao: 3.365, 
        densidadeDemografica: 120.7, 
        regiao: "Nordeste",
        idh: 0.631,
        descricao: "Alagoas é um estado do Nordeste conhecido por suas belas praias, como Maragogi e Pajuçara, além de sua rica herança cultural, que inclui o folclore e a culinária típica nordestina.",
        link: "https://cidades.ibge.gov.br/brasil/al/panorama",
        map: "https://maps.app.goo.gl/hPiNJDpigAqoGDKBA",
        tags: "maceió maragogi lagoas cultura alagoana jangadas praias paradisíacas litoral nordestino"
    },

    {
        nome: "Amapá",
        capital: "Macapá",
        areaTerritorial: 142.814, 
        populacao: 877.613, 
        densidadeDemografica: 6.1, 
        regiao: "Norte",
        idh: 0.708,
        descricao: "O Amapá é um dos estados menos populosos do Brasil, com grande parte de seu território coberto pela Floresta Amazônica. Macapá, sua capital, é famosa pela linha do Equador que a corta ao meio.",
        link: "https://cidades.ibge.gov.br/brasil/ap/panorama",
        map: "https://maps.app.goo.gl/ggVTYwZ7JjsaJWAc8",
        tags: "macapá fortaleza de são josé floresta amazônica linha do equador biodiversidade cultura amapaense"
    },

    {
        nome: "Ceará",
        capital: "Fortaleza",
        areaTerritorial: 148.920, 
        populacao: 9.240, 
        densidadeDemografica: 58.2, 
        regiao: "Nordeste",
        idh: 0.682,
        descricao: "Ceará é famoso por suas praias paradisíacas, como Jericoacoara e Canoa Quebrada, além de sua vibrante cultura, incluindo o forró e a literatura de cordel.",
        link: "https://cidades.ibge.gov.br/brasil/ce/panorama",
        map: "https://maps.app.goo.gl/CEyoF6UMJDPPvmZh7",
        tags: "fortaleza jericoacoara praias cearenses jangadas caju chapada do araripe artesanato cultura nordestina"
    },

    {
        nome: "Espírito Santo",
        capital: "Vitória",
        areaTerritorial: 46.077, 
        populacao: 4.108, 
        densidadeDemografica: 89.2, 
        regiao: "Sudeste",
        idh: 0.740,
        descricao: "O Espírito Santo é um estado com belas praias e montanhas. Vitória, a capital, é um importante porto e a região de Pedra Azul é conhecida por suas paisagens naturais.",
        link: "https://cidades.ibge.gov.br/brasil/es/panorama",
        map: "https://maps.app.goo.gl/EioRY2WrcSyqDLTq8",
        tags: "vila velha vitória congo capixaba moqueca praias capixabas cultura capixaba"
    },

    {
        nome: "Goiás",
        capital: "Goiânia",
        areaTerritorial: 340.086, 
        populacao: 7.206, 
        densidadeDemografica: 21.2, 
        regiao: "Centro-Oeste",
        idh: 0.735,
        descricao: "Goiás é um estado do Centro-Oeste conhecido por suas paisagens naturais, incluindo o Parque Nacional da Chapada dos Veadeiros e suas famosas cachoeiras.",
        link: "https://cidades.ibge.gov.br/brasil/go/panorama",
        map: "https://maps.app.goo.gl/6z45GgRUN4e5WwDU8",
        tags: "chapada dos veadeiros goiânia cerrado cultura sertaneja culinária goiana arquitetura colonial parque nacional"
    },

    {
        nome: "Mato Grosso",
        capital: "Cuiabá",
        areaTerritorial: 903.357, 
        populacao: 3.567, 
        densidadeDemografica: 3.7, 
        regiao: "Centro-Oeste",
        idh: 0.725,
        descricao: "Mato Grosso é um dos estados mais ricos em biodiversidade, abrigando o Pantanal, a maior planície alagada do mundo, e a Chapada dos Guimarães.",
        link: "https://cidades.ibge.gov.br/brasil/mt/panorama",
        map: "https://maps.app.goo.gl/KoyZyTuELXsWUVb48",
        tags: "pantanal chapada dos guimarães cuiabá cerrado biodiversidade turismo ecológico cultura pantaneira"
    },

    {
        nome: "Mato Grosso do Sul",
        capital: "Campo Grande",
        areaTerritorial: 357.145, 
        populacao: 2.839, 
        densidadeDemografica: 7.9, 
        regiao: "Centro-Oeste",
        idh: 0.765,
        descricao: "Mato Grosso do Sul é famoso pelo Pantanal, uma das maiores reservas de vida selvagem do mundo, e pela cidade de Bonito, destino popular para ecoturismo.",
        link: "https://cidades.ibge.gov.br/brasil/ms/panorama",
        map: "https://maps.app.goo.gl/aDgUFVBFZ3opedHr8",
        tags: "pantanal campo grande bonito ecoturismo rios cristalinos biodiversidade cultura sul-mato-grossense"
    },

    {
        nome: "Minas Gerais",
        capital: "Belo Horizonte",
        areaTerritorial: 586.521, 
        populacao: 21.411, 
        densidadeDemografica: 36.5, 
        regiao: "Sudeste",
        idh: 0.731,
        descricao: "Minas Gerais é conhecido por suas cidades históricas, como Ouro Preto e Tiradentes, além de sua rica tradição culinária e cultural, sendo também um grande produtor de café e minério.",
        link: "https://cidades.ibge.gov.br/brasil/mg/panorama",
        map: "https://maps.app.goo.gl/G5bNgxBXTzEuhUaS7",
        tags: "ouro preto tiradentes montanhas queijos mineiros baroque igrejas históricas cultura mineira"
    },

    {
        nome: "Pará",
        capital: "Belém",
        areaTerritorial: 1.248, 
        populacao: 8.690, 
        densidadeDemografica: 6.6, 
        regiao: "Norte",
        idh: 0.646,
        descricao: "O Pará abriga a maior parte da floresta amazônica e é famoso por sua culinária única, incluindo pratos como o açaí e o tacacá. Belém, sua capital, é conhecida pelo mercado Ver-o-Peso.",
        link: "https://cidades.ibge.gov.br/brasil/pa/panorama",
        map: "https://maps.app.goo.gl/88M45WWtrwSw5Qd87",
        tags: "belém ver-o-peso festival de círio de nazaré ilha de marajó floresta amazônica cultura paraense"
    },

    {
        nome: "Paraíba",
        capital: "João Pessoa",
        areaTerritorial: 56.439, 
        populacao: 4.059, 
        densidadeDemografica: 72.6, 
        regiao: "Nordeste",
        idh: 0.683,
        descricao: "A Paraíba possui belas praias, como a Ponta do Seixas, ponto mais oriental das Américas, e é rica em cultura, especialmente no artesanato e na música nordestina.",
        link: "https://cidades.ibge.gov.br/brasil/pb/panorama",
        map: "https://maps.app.goo.gl/gwx865svnpvM75NX9",
        tags: "joão pessoa campina grande forró litoral paraibano cultura nordestina festas juninas"
    },

    {
        nome: "Pernambuco",
        capital: "Recife",
        areaTerritorial: 98.311, 
        populacao: 9.674, 
        densidadeDemografica: 95.5, 
        regiao: "Nordeste",
        idh: 0.673,
        descricao: "Pernambuco é um dos estados mais culturalmente ricos do Brasil, sendo conhecido pelo frevo, maracatu e pelo carnaval do Recife e Olinda, além das praias de Porto de Galinhas.",
        link: "https://cidades.ibge.gov.br/brasil/pe/panorama",
        map: "https://maps.app.goo.gl/ebJdqGWCxVibod7y9",
        tags: "recife olinda carnaval frevo maracatu praias pernambucanas cultura pernambucana centro histórico"
    },

    {
        nome: "Piauí",
        capital: "Teresina",
        areaTerritorial: 251.611, 
        populacao: 3.281, 
        densidadeDemografica: 12.6, 
        regiao: "Nordeste",
        idh: 0.646,
        descricao: "O Piauí é conhecido por seu litoral curto, porém belo, e pela Serra da Capivara, um parque arqueológico que guarda as mais antigas pinturas rupestres das Américas.",
        link: "https://cidades.ibge.gov.br/brasil/pi/panorama",
        map: "https://maps.app.goo.gl/zRYSzVUsrB51VAeU8",
        tags: "teresina serra da capivara litoral piauiense cultura nordestina delta do parnaíba arqueologia"
    },

    {
        nome: "Rio Grande do Norte",
        capital: "Natal",
        areaTerritorial: 52.796, 
        populacao: 3.560, 
        densidadeDemografica: 66.5, 
        regiao: "Nordeste",
        idh: 0.684,
        descricao: "O Rio Grande do Norte é conhecido por suas praias de dunas, como as de Genipabu, e por ser um dos principais destinos turísticos do Brasil para amantes do sol e mar.",
        link: "https://cidades.ibge.gov.br/brasil/rn/panorama",
        map: "https://maps.app.goo.gl/aeBewgVztzYTX3Lc7",
        tags: "natal genipabu dunas praias nordestinas cultura potiguar litoral potiguar"
    },

    {
        nome: "Rio Grande do Sul",
        capital: "Porto Alegre",
        areaTerritorial: 281.730, 
        populacao: 11.422, 
        densidadeDemografica: 40.2, 
        regiao: "Sul",
        idh: 0.746,
        descricao: "O Rio Grande do Sul é o estado mais ao sul do Brasil, com forte influência da imigração europeia. A serra gaúcha é famosa por sua produção de vinhos e pelas festas tradicionais.",
        link: "https://cidades.ibge.gov.br/brasil/rs/panorama",
        map: "https://maps.app.goo.gl/sQRN7kQBFnmU5tD38",
        tags: "porto alegre churrasco gaúcho pampas serra gaúcha gramado canela tradição gaucha chimarrão"
    },

    {
        nome: "Rondônia",
        capital: "Porto Velho",
        areaTerritorial: 237.590, 
        populacao: 1.815, 
        densidadeDemografica: 7.6, 
        regiao: "Norte",
        idh: 0.690,
        descricao: "Rondônia é um estado localizado na região Norte, com economia baseada no agronegócio e na extração de minérios. Porto Velho, sua capital, é um importante polo econômico da região.",
        link: "https://cidades.ibge.gov.br/brasil/ro/panorama",
        map: "https://maps.app.goo.gl/cc8hEme5MSbkzWGYA",
        tags: "porto velho floresta amazônica rio madeira cultura rondoniense biodiversidade mineração"
    },

    {
        nome: "Roraima",
        capital: "Boa Vista",
        areaTerritorial: 224.301, 
        populacao: 631.181, 
        densidadeDemografica: 2.8, 
        regiao: "Norte",
        idh: 0.707,
        descricao: "Roraima é o estado mais ao norte do Brasil, com paisagens de savana e montanhas. Boa Vista é a única capital brasileira totalmente localizada acima da linha do Equador.",
        link: "https://cidades.ibge.gov.br/brasil/rr/panorama",
        map: "https://maps.app.goo.gl/JZKeKFsc9RP9suTg9",
        tags: "boa vista monte roraima serra do tepequém floresta amazônica fronteira cultura indígena"
    },

    {
        nome: "Santa Catarina",
        capital: "Florianópolis",
        areaTerritorial: 95.733, 
        populacao: 7.338, 
        densidadeDemografica: 77.8, 
        regiao: "Sul",
        idh: 0.774,
        descricao: "Santa Catarina é conhecido por suas praias no litoral e pelas influências da colonização europeia, especialmente alemã e italiana, que se refletem na cultura e gastronomia local.",
        link: "https://cidades.ibge.gov.br/brasil/sc/panorama",
        map: "https://maps.app.goo.gl/CoU6QNdTJPDnn6hFA",
        tags: "florianópolis balneário camboriú praias catarinenses oktoberfest blumenau serra catarinense cultura alemã"
    },

    {
        nome: "Sergipe",
        capital: "Aracaju",
        areaTerritorial: 21.918, 
        populacao: 2.338, 
        densidadeDemografica: 106.7, 
        regiao: "Nordeste",
        idh: 0.682,
        descricao: "Sergipe é o menor estado do Brasil, conhecido por suas praias e pelo Cânion do Xingó, um destino turístico cada vez mais procurado no estado.",
        link: "https://cidades.ibge.gov.br/brasil/se/panorama",
        map: "https://maps.app.goo.gl/JEias2FM3Gm87rAn8",
        tags: "aracaju canindé de são francisco são cristóvão litoral sergipano cultura nordestina"
    },
    
    {
        nome: "Tocantins",
        capital: "Palmas",
        areaTerritorial: 277.720, 
        populacao: 1.607, 
        densidadeDemografica: 5.8, 
        regiao: "Norte",
        idh: 0.699,
        descricao: "Tocantins é o estado mais jovem do Brasil, com belas paisagens naturais como o Jalapão, um dos principais destinos de ecoturismo do país.",
        link: "https://cidades.ibge.gov.br/brasil/to/panorama",
        map: "https://maps.app.goo.gl/zs8nxnAXVYgiwTCJ7",
        tags: "palmas jalapão cerrado turismo de aventura cultura tocantinense"
    }

]