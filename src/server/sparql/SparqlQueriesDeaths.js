export const deathsProperties = `
    {?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (?id as ?prefLabel__dataProviderUrl) }
    UNION {
      ?id siso-schema:party ?party__id .
      ?party__id skos:prefLabel ?party__prefLabel .
    }
    UNION {
      ?id siso-schema:living_municipality ?livingMunicipality__id .
      ?livingMunicipality__id skos:prefLabel ?livingMunicipality__prefLabel .
    }
    UNION {
      ?id siso-schema:occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
    }
    UNION {
      ?id siso-schema:death_date ?deathDate__id .
      BIND (?deathDate__id AS ?deathDate__prefLabel)
    }
    UNION {
      ?id siso-schema:birth_date ?birthDate__id .
      BIND (?birthDate__id AS ?birthDate__prefLabel)
    }
    UNION {
      ?id siso-schema:registered_place ?registeredPlace__id .
      ?registeredPlace__id skos:prefLabel ?registeredPlace__prefLabel .
    }
    `;
