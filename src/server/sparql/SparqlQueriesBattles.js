export const battleProperties = `
    {
      ?id skos:prefLabel ?prefLabel .
      #?id skos:prefLabel ?prefLabel__id .
      #BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      # BIND(?id AS ?prefLabel__dataProviderUrl)
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

export const battlePlaceQuery =  `
  SELECT ?id ?prefLabel
  WHERE {
    BIND (<ID> AS ?id)
    ?id skos:prefLabel ?prefLabel
  }
`;
