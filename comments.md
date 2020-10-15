# Matheus Eduardo Muniz

# Netlify

https://boring-ride-6d7973.netlify.app

# Pacotes

* react-redux
* bulma
* axios
* node-sass

# Metodologia

* Decidi começar pela modelagem do state, primeiramente fiz o state sem filtros, ou seja, todas as issues. Após isso estar funcionando
    parti para a modelagem do state dos filtros, cada tipo de filtro tem sua action correspondente, porém decidi usar um grande objeto "searchParams" para melhor integração com a assinatura dos métodos do axios, podendo utilizar o spread operator "{...searchParams}" para passar os parâmetros para a API do GitHub. Optei por um único reducer pois a quantidade de dados não é grande o suficiente para justificar desmembrá-lo, ao meu ver.

* Decidi desmembrar a lista em um componente lógico "IssuesListContainer" e passar props e callbacks para os filhos dele, além de apenas ele se comunicar com o Redux.

* O único componente que possui state local, além do "IssuesListContainer" é o "Filters", pois a busca só é disparada quando o usuário clica em "Search".

# Dificuldades

* Inicialmente relembrar a API do React, pois no meu emprego não o utilizo, então alguns detalhes foram esquecidos, mas nada demais,
    consegui rapidamente lembrar das principais features e aplicá-las.

* A API do Github "/repos/**/issues", não retorna o número de issues totais do repo, portanto utilizei o header "link" para pegar o link
    da ultima página que continha o parâmetro "page=*" correto para fazer a paginação.

# Possíveis melhorias

* Melhora da modelagem do state (slices???)

* Melhor método de paginação, tanto visualmente quanto logicamente

* Implementação de testes automatizados