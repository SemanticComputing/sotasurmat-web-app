export const manuscriptProperties = `
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (?id as ?prefLabel__dataProviderUrl)
    OPTIONAL {
      ?id siso-schema:party ?party__id .
      ?party__id skos:prefLabel ?party__prefLabel .
    }
    OPTIONAL {
      ?id siso-schema:living_municipality ?livingMunicipality__id .
      ?livingMunicipality__id skos:prefLabel ?livingMunicipality__prefLabel .
    }
    OPTIONAL {
      ?id siso-schema:occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
    }
    OPTIONAL {
      ?id siso-schema:death_date ?deathDate__id .
      BIND (?deathDate__id AS ?deathDate__prefLabel)
    }
    OPTIONAL {
      ?id siso-schema:birth_date ?birthDate__id .
      BIND (?birthDate__id AS ?birthDate__prefLabel)
    }
    `;
export const productionPlacesQuery = `
  SELECT ?id ?lat ?long ?prefLabel ?source ?dataProviderUrl
  (COUNT(DISTINCT ?manuscripts) as ?instanceCount)
  WHERE {
    <FILTER>
    ?manuscripts ^crm:P108_has_produced/crm:P7_took_place_at ?id .
    ?id skos:prefLabel ?prefLabel .
    ?id dct:source ?source .
    ?id dct:source <http://vocab.getty.edu/tgn/> .
    OPTIONAL { ?id mmm-schema:data_provider_url ?dataProviderUrl }
    OPTIONAL {
      ?id wgs84:lat ?lat ;
          wgs84:long ?long .
    }
    FILTER(?id != <http://ldf.fi/mmm/places/tgn_7026519>)
  }
  GROUP BY ?id ?lat ?long ?prefLabel ?source ?dataProviderUrl
`;

//# https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
export const migrationsQuery = `
  SELECT DISTINCT ?id ?manuscript__id ?manuscript__url ?from__id ?from__name
    ?from__lat ?from__long ?to__id ?to__name ?to__lat ?to__long
  WHERE {
    <FILTER>
    ?manuscript__id ^crm:P108_has_produced/crm:P7_took_place_at ?from__id .
    ?manuscript__id mmm-schema:data_provider_url ?manuscript__url .
    ?from__id skos:prefLabel ?from__name .
    ?from__id wgs84:lat ?from__lat ;
              wgs84:long ?from__long .
    ?event__id crm:P30_transferred_custody_of|mmm-schema:observed_manuscript ?manuscript__id .
    OPTIONAL { ?event__id skos:prefLabel ?event__prefLabel }
    ?event__id crm:P4_has_time-span|mmm-schema:observed_time-span ?event__date .
    ?event__id crm:P7_took_place_at|mmm-schema:observed_location ?to__id .
    ?to__id skos:prefLabel ?to__name .
    ?to__id wgs84:lat ?to__lat ;
            wgs84:long ?to__long .
    BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "http://ldf.fi/mmm/place/", ""))) as ?id)
    FILTER NOT EXISTS {
      ?event__id2 crm:P30_transferred_custody_of ?manuscript__id .
      ?event__id2 crm:P4_has_time-span ?event__date2 .
      filter (?event__date2 > ?event__date)
    }
  }
`;

export const networkQuery = `
  SELECT DISTINCT ?id
  WHERE {

  }
`;
