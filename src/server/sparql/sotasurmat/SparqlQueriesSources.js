import { rootUrl } from './FacetConfigsSotasurmat'

export const sourceProperties = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("${rootUrl}/sources/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
    UNION
    {
      ?id siso-schema:source_code ?sourceCode__id .
      BIND(?sourceCode__id AS ?sourceCode__prefLabel) .
    }
    UNION
    {
      ?id siso-schema:source_description ?description__id .
      BIND(?description__id  AS ?description__prefLabel) .
    }
    `;
