export const endpoint = 'http://ldf.fi/siso/sparql';
//export const endpoint = 'http://localhost:3042/ds/sparql';

export const countQuery = `
  SELECT (COUNT(DISTINCT ?id) as ?count)
  WHERE {
    <FILTER>
    VALUES ?facetClass { <FACET_CLASS> }
    ?id a ?facetClass .
  }
`;

export const jenaQuery = `
  SELECT ?id ?prefLabel ?dataProviderUrl ?source__id ?source__prefLabel ?type__id ?type__prefLabel
  WHERE {
    <QUERY>
    ?id skos:prefLabel ?prefLabel .
    ?id a ?type__id .
    ?type__id rdfs:label|skos:prefLabel ?type__prefLabel_ .
    BIND(STR(?type__prefLabel_) AS ?type__prefLabel)  # ignore language tags
    OPTIONAL {
      ?id dct:source ?source__id .
      OPTIONAL { ?source__id skos:prefLabel ?source__prefLabel_ }
      BIND(COALESCE(?source__prefLabel_, ?source__id) as ?source__prefLabel)
    }
  }
`;

export const facetResultSetQuery = `
  SELECT *
  WHERE {
    {
      SELECT DISTINCT ?id {
        <FILTER>
        VALUES ?facetClass { <FACET_CLASS> }
        ?id a ?facetClass .
        OPTIONAL { ?id <ORDER_BY_PREDICATE> ?orderBy }
      }
      ORDER BY (!BOUND(?orderBy)) <SORT_DIRECTION>(?orderBy)
      <PAGE>
    }
    FILTER(BOUND(?id))
    <RESULT_SET_PROPERTIES>
  }
`;

export const facetValuesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?selected ?parent ?instanceCount {
    {
      {
        SELECT DISTINCT (count(DISTINCT ?instance) as ?instanceCount) ?id ?selected {
          # facet values that return results
          {
            <FILTER>
            ?instance <PREDICATE> ?id .
            VALUES ?facetClass { <FACET_CLASS> }
            ?instance a ?facetClass .
            <SELECTED_VALUES>
          }
          <SELECTED_VALUES_NO_HITS>
          <PARENTS>
          BIND(COALESCE(?selected_, false) as ?selected)
        }
        GROUP BY ?id ?selected
      }
      FILTER(BOUND(?id))
      <FACET_VALUE_FILTER>
      OPTIONAL { ?id skos:broader ?parent_ }
      OPTIONAL { ?id skos:prefLabel ?prefLabel_ }
      BIND(COALESCE(?parent_, '0') as ?parent)
      BIND(COALESCE(STR(?prefLabel_), STR(?id)) AS ?prefLabel)
    }
    UNION
    {
      # 'Unknown' facet value for results with no predicate path
      {
        SELECT DISTINCT (count(DISTINCT ?instance) as ?instanceCount) {
          <FILTER>
          VALUES ?facetClass { <FACET_CLASS> }
          ?instance a ?facetClass .
          FILTER NOT EXISTS {
            ?instance <PREDICATE> ?value .
          }
        }
      }
      FILTER(?instanceCount > 0)
      BIND(IRI("http://ldf.fi/MISSING_VALUE") AS ?id)
      BIND("Ei merkintää datassa" AS ?prefLabel)
      BIND('0' as ?parent)
      BIND(false as ?selected)
    }
  }
  <ORDER_BY>
`;

export const facetValuesQueryTimespan = `
  # ignore selections from other facets
  SELECT ?min ?max {
    {
      SELECT (MIN(?start) AS ?min) {
        ?instance <PREDICATE> ?timespan .
        VALUES ?facetClass { <FACET_CLASS> }
        ?instance a ?facetClass .
        ?timespan <START_PROPERTY> ?start .
        <FACET_VALUE_FILTER>
      }
    }
    {
      SELECT (MAX(?end) AS ?max) {
        ?instance <PREDICATE> ?timespan .
        VALUES ?facetClass { <FACET_CLASS> }
        ?instance a ?facetClass .
        ?timespan <END_PROPERTY> ?end .
        <FACET_VALUE_FILTER>
      }
    }
  }
`;
