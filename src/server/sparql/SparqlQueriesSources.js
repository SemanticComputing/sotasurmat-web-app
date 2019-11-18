import { rootUrl } from '../config';

export const sourceProperties = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("${rootUrl}/sources/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
    UNION
    {
      ?id siso-schema:source_code ?sourceCode .
    }
    UNION
    {
      ?id siso-schema:source_description ?description .
    }
    `;
