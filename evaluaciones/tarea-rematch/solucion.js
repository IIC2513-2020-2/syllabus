const fsPromises = require('fs').promises;
const wiki = require('wikijs').default;
const re = require('rematchjs');

const queries = [
  {
    pattern: '(^|\\n)== !title{[^=]+} ==',
    primary: 'Título',
    secondary: 'Posición',
    groupVariable: 'title',
    spanVariable: 'title',
  },
  {
    pattern: '(^|\\n)=== !subtitle{[^=]+} ===',
    primary: 'Subtítulo',
    secondary: 'Posición',
    groupVariable: 'subtitle',
    spanVariable: 'subtitle',
  },
  {
    pattern: '(^|\\n)==== !subsubtitle{[^=]+} ====\\n!content{[^=]*}((\\n=)|$)',
    primary: 'Subsubtítulo',
    secondary: 'Contenido',
    groupVariable: 'subsubtitle',
    spanVariable: 'content',
  },
  {
    pattern: '(^|\\n)== !title{[^=]+} ==\\n!content{[^=]*}((\\n== )|$)',
    primary: 'Título',
    secondary: 'Contenido',
    groupVariable: 'title',
    spanVariable: 'content',
  },
  {
    pattern: '(^|\\n)=== !subtitle{[^=]+} ===\\n!content{([^=]|(====))*}((\\n== )|(\\n=== )|$)',
    primary: 'Subtítulo',
    secondary: 'Contenido',
    groupVariable: 'subtitle',
    spanVariable: 'content',
  },
  {
    pattern: '=== !subtitle{[^=]+} ===\\n!content{([^=]|(====))*====([^=]|(====))*}((\\n== )|(\\n=== )|$)',
    primary: 'Subtítulo',
    secondary: 'Contenido',
    groupVariable: 'subtitle',
    spanVariable: 'content',
  },
]

const processQuery = (queryData, document) => {
  const {
    pattern,
    primary,
    secondary,
    groupVariable,
    spanVariable,
  } = queryData;
  regex = re.compile(pattern);
  const iter = regex.findIter(document);
  const result = [];
  for (let match of iter) {
    result.push(`- ${primary}: '${match.group(groupVariable)}' - ${secondary}: [${match.span(spanVariable)})`);
  }
  return result;
};

async function main(queries, term) {
  const document = await wiki()
    .page(term)
    .then(page => page.rawContent());

  queriesParts = queries.map((queryData, index) => [
    `# Consulta ${index + 1}`,
    ...processQuery(queryData, document),
    '',
  ]);
  const resultStr = queriesParts.flat().join('\n');
  await fsPromises.writeFile(`out.txt`, resultStr);
}

const [term] = process.argv.slice(2);
main(queries, term);
