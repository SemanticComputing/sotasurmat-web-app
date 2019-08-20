export const manuscriptProperties =
`?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/manuscripts/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    {
      ?id mmm-schema:data_provider_url ?source__id .
      BIND (?source__id AS ?source__prefLabel)
      BIND (?source__id AS ?source__dataProviderUrl)
    }
    UNION
    {
      ?id mmm-schema:manuscript_author ?author__id .
      ?author__id skos:prefLabel ?author__prefLabel .
      BIND(CONCAT("/actors/page/", REPLACE(STR(?author__id), "^.*\\\\/(.+)", "$1")) AS ?author__dataProviderUrl)
    }
    {
      ?id mmm-schema:manuscript_work ?work__id .
      ?work__id skos:prefLabel ?work__prefLabel .
      BIND(CONCAT("/works/page/", REPLACE(STR(?work__id), "^.*\\\\/(.+)", "$1")) AS ?work__dataProviderUrl)
    }
    UNION
    {
      ?id crm:P128_carries ?expression__id .
      ?expression__id skos:prefLabel ?expression__prefLabel .
      OPTIONAL {
        ?expression__id crm:P72_has_language ?language__id .
        ?language__id skos:prefLabel ?language__prefLabel .
      }
      BIND(CONCAT("/expressions/page/", REPLACE(STR(?expression__id), "^.*\\\\/(.+)", "$1")) AS ?expression__dataProviderUrl)
    }
    UNION
    {
      ?production crm:P108_has_produced ?id .
      ?production crm:P4_has_time-span ?productionTimespan__id .
      ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel .
      ?productionTimespan__id dct:source ?productionTimespan__source__id .
      ?productionTimespan__source__id skos:prefLabel ?productionTimespan__source__prefLabel .
      OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
      OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
    }
    UNION
    {
      ?production crm:P108_has_produced ?id .
      ?production crm:P7_took_place_at ?productionPlace__id .
      ?productionPlace__id skos:prefLabel ?productionPlace__prefLabel .
      BIND(CONCAT("/places/page/", REPLACE(STR(?productionPlace__id), "^.*\\\\/(.+)", "$1")) AS ?productionPlace__dataProviderUrl)
      # FILTER NOT EXISTS {
      #   ?production crm:P7_took_place_at ?productionPlace__id2 .
      #   ?productionPlace__id2 crm:P89_falls_within+ ?productionPlace__id .
      # }
    }
    UNION
    {
      ?id crm:P45_consists_of ?material__id .
      ?material__id skos:prefLabel ?material__prefLabel .
    }
    UNION
    {
      ?id crm:P46i_forms_part_of ?collection__id .
      ?collection__id skos:prefLabel ?collection__prefLabel .
      BIND(CONCAT("/collections/page/", REPLACE(STR(?collection__id), "^.*\\\\/(.+)", "$1")) AS ?collection__dataProviderUrl)
    }
    UNION
    {
      ?id crm:P51_has_former_or_current_owner ?owner__id .
      ?owner__id skos:prefLabel ?owner__prefLabel .
      BIND(CONCAT("/actors/page/", REPLACE(STR(?owner__id), "^.*\\\\/(.+)", "$1")) AS ?owner__dataProviderUrl)
      #OPTIONAL { ?owner__id mmm-schema:data_provider_url ?owner__dataProviderUrl }
      #OPTIONAL {
      #  [] rdf:subject ?id ;
      #    rdf:predicate crm:P51_has_former_or_current_owner ;
      #    rdf:object ?owner__id ;
      #    mmm-schema:order ?order .
      #  BIND(xsd:integer(?order) + 1 AS ?owner__order)
      #}
    }
    UNION
    {
      ?event__id crm:P30_transferred_custody_of ?id .
      ?event__id a ?event__type .
      OPTIONAL { ?event__id crm:P4_has_time-span/skos:prefLabel ?event__date }
      BIND("Transfer of Custody" AS ?event__prefLabel)
      BIND(CONCAT("/events/page/", REPLACE(STR(?event__id), "^.*\\\\/(.+)", "$1")) AS ?event__dataProviderUrl)
    }
    UNION
    {
      ?event__id mmm-schema:observed_manuscript ?id .
      ?event__id a mmm-schema:On_Sale . # not yet in MMM data
      ?event__id a ?event__type .
      OPTIONAL { ?event__id crm:P4_has_time-span/skos:prefLabel ?event__date }
      BIND("On Sale" AS ?event__prefLabel)
      BIND(CONCAT("/events/page/", REPLACE(STR(?event__id), "^.*\\\\/(.+)", "$1")) AS ?event__dataProviderUrl)
    }
    UNION
    {
      ?id crm:P3_has_note ?note .
    }
    UNION
    {
      ?event__id mmm-schema:observed_manuscript ?id .
      ?event__id a crm:E7_Activity .
      ?event__id a ?event__type .
      ?event__id mmm-schema:ownership_attributed_to/skos:prefLabel ?owner_prefLabel .
      OPTIONAL { ?event__id crm:P4_has_time-span/skos:prefLabel ?event__date }
      BIND("Owner: " + ?owner_prefLabel  AS ?event__prefLabel)
      BIND(CONCAT("/events/page/", REPLACE(STR(?event__id), "^.*\\\\/(.+)", "$1")) AS ?event__dataProviderUrl)
    }`;

export const expressionProperties =
`?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/expressions/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    {
      ?id mmm-schema:data_provider_url ?source__id .
      BIND (?source__id AS ?source__prefLabel)
      BIND (?source__id AS ?source__dataProviderUrl)
    }
    UNION
    {
      ?id ^crm:P128_carries ?manuscript__id .
      ?manuscript__id skos:prefLabel ?manuscript__prefLabel .
      BIND(CONCAT("/manuscripts/page/", REPLACE(STR(?manuscript__id), "^.*\\\\/(.+)", "$1")) AS ?manuscript__dataProviderUrl)
    }
    UNION
    {
      ?id crm:P72_has_language ?language__id .
      ?language__id skos:prefLabel ?language__prefLabel .
      BIND(?language__id as ?language__dataProviderUrl)
    }
 `;

export const collectionProperties =
 `?id skos:prefLabel ?prefLabel__id .
     BIND (?prefLabel__id as ?prefLabel__prefLabel)
     BIND(CONCAT("/collections/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
     {
       ?id dct:source ?source__id .
       ?source__id skos:prefLabel ?source__prefLabel .
       BIND (?source__id AS ?source__dataProviderUrl)
     }
     UNION
     {
       ?id ^crm:P46i_forms_part_of ?manuscript__id .
       ?manuscript__id skos:prefLabel ?manuscript__prefLabel .
       BIND(CONCAT("/manuscripts/page/", REPLACE(STR(?manuscript__id), "^.*\\\\/(.+)", "$1")) AS ?manuscript__dataProviderUrl)
     }
  `;


export const productionPlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?manuscripts) as ?instanceCount)
  WHERE {
    <FILTER>
    ?manuscripts ^crm:P108_has_produced/crm:P7_took_place_at ?id .
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
  GROUP BY ?id ?lat ?long
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
