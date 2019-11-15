import { rootUrl } from '../config';

export const battleProperties = `
    {
      {
      #?id skos:prefLabel ?prefLabel .
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("${rootUrl}/battles/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      }
      UNION {
        ?id siso-schema:start_date ?startDate__id .
        BIND (?startDate__id AS ?startDate__prefLabel)
      }
      UNION {
        ?id siso-schema:end_date ?endDate__id .
        BIND (?endDate__id AS ?endDate__prefLabel)
      }
      UNION {
        ?id siso-schema:exact_place ?exactPlace__id .
        ?exactPlace__id skos:prefLabel ?exactPlace__prefLabel .
      }
      UNION {
        ?id siso-schema:units ?units__id .
        BIND (?units__id AS ?units__prefLabel)
      }
      UNION {
        ?id siso-schema:greater_place ?greaterPlace__id .
        ?greaterPlace__id skos:prefLabel ?greaterPlace__prefLabel .
      }
    }
`;

export const battlePlacesQuery =  `
  SELECT *
  WHERE {
    <FILTER>
    ?id a siso-schema:Battle .
    ?id skos:prefLabel ?prefLabel .
    ?id siso-schema:exact_place ?exact_place .
    ?exact_place geo:lat ?lat .
    ?exact_place geo:long ?long .
  }
`;

export const battlePlacesAnimationQuery =  `
  SELECT *
  WHERE {
    <FILTER>
    ?id a siso-schema:Battle .
    ?id skos:prefLabel ?prefLabel .
    ?id siso-schema:start_date ?startDate .
    ?id siso-schema:end_date ?endDate .
    ?id siso-schema:exact_place ?exact_place .
    ?exact_place geo:lat ?lat .
    ?exact_place geo:long ?long .
  }
  ORDER BY ?startDate
`;

export const battlePropertiesInfoWindow = `
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("${rootUrl}/battles/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    ?id siso-schema:greater_place ?greaterPlace__id .
    ?greaterPlace__id skos:prefLabel ?greaterPlace__prefLabel .
    OPTIONAL {
      ?id siso-schema:start_date ?startDate .
    }
    OPTIONAL {
      ?id siso-schema:end_date ?endDate .
    }
`;
