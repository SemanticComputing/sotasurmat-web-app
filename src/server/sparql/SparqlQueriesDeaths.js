export const deathsProperties = `
    {
      ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/sotasurmat/surmatut/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    }
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
    UNION {
      ?id siso-schema:identifier ?identifier .
    }
    UNION {
      ?id siso-schema:cause_of_death ?causeOfDeath__id .
      ?causeOfDeath__id skos:prefLabel ?causeOfDeath__prefLabel .
    }
    UNION {
      ?id siso-schema:registered_municipality ?registeredMunicipality__id .
      ?registeredMunicipality__id skos:prefLabel ?registeredMunicipality__prefLabel .
    }
    UNION {
      ?id siso-schema:registered_province ?registeredProvince__id .
      ?registeredProvince__id skos:prefLabel ?registeredProvince_prefLabel .
    }
    UNION {
      ?id siso-schema:registered_country ?registeredCountry__id .
      ?registeredCountry__id skos:prefLabel ?registeredCountry__prefLabel .
    }
    UNION {
      ?id siso-schema:death_municipality ?deathMunicipality__id .
      ?deathMunicipality__id skos:prefLabel ?deathMunicipality__prefLabel .
    }
    UNION {
      ?id siso-schema:death_province ?deathProvince__id .
      ?deathProvince__id skos:prefLabel ?deathProvince_prefLabel .
    }
    UNION {
      ?id siso-schema:death_country ?deathCountry__id .
      ?deathCountry__id skos:prefLabel ?deathCountry__prefLabel .
    }
    UNION {
      ?id siso-schema:ammo_occupation ?ammoOccupation__id .
      ?ammoOccupation__id skos:prefLabel ?ammoOccupation__prefLabel .
      FILTER(?ammoOccupation__prefLabel = 'fi') .
    }
    `;

export const personQuery = `
      SELECT *
      WHERE {
        {
        BIND (<ID> AS ?id)
        ?id skos:prefLabel ?prefLabel__id .
        BIND (?prefLabel__id as ?prefLabel__prefLabel)
        BIND (?id as ?prefLabel__dataProviderUrl)
        }
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
        OPTIONAL {
          ?id siso-schema:registered_place ?registeredPlace__id .
          ?registeredPlace__id skos:prefLabel ?registeredPlace__prefLabel .
        }
        OPTIONAL {
          ?id siso-schema:identifier ?identifier .
        }
      }
        `;

export const birthYearsQuery = `
      SELECT ?counted (count(?counted) AS ?count)
      WHERE {
        <FILTER>
        ?id a siso-schema:Death_record .
        ?id siso-schema:birth_time ?btimeSpan .
        ?btimeSpan crm:P82a_begin_of_the_begin ?earliestBTime .
        ?btimeSpan crm:P82b_end_of_the_end ?latestBTime .
        BIND (year(?earliestBTime) AS ?counted) .
        BIND (year(?latestBTime) AS ?latestYear) .
        FILTER (?counted = ?latestYear) .
      }
      GROUP BY ?counted
      ORDER BY ?counted
      `;

export const ageQuery = `
      SELECT ?counted (count(?counted) AS ?count)
      WHERE {
        <FILTER>
        ?id a siso-schema:Death_record .
        ?id siso-schema:age ?ageString .
        BIND (xsd:integer(?ageString) AS ?counted) .
      }
      GROUP BY ?counted
      ORDER BY ?counted
            `;

export const deathDateQuery = `
      SELECT ?counted (count(?counted) AS ?count)
      WHERE {
        <FILTER>
        ?id a siso-schema:Death_record .
        ?id siso-schema:death_time ?timeSpan .
        ?timeSpan crm:P82a_begin_of_the_begin ?earliestTime .
        ?timeSpan crm:P82b_end_of_the_end ?latestTime .
        FILTER (?earliestTime = ?latestTime) .
        BIND (?earliestTime AS ?counted) .
      }
      GROUP BY ?counted
      ORDER BY ?counted
      `;

export const csvDeathsQuery = `
  SELECT ?id ?prefLabel ?familyName ?givenName ?birthYear ?birthDay ?age ?party ?gender ?occupation ?numberOfChildren
  WHERE {
      <FILTER>
      ?id a siso-schema:Death_record .
      ?id skos:prefLabel ?prefLabel .
      ?id siso-schema:identifier ?id_number .
      OPTIONAL {
        ?id siso-schema:familyName ?familyName .
      }
      OPTIONAL {
        ?id siso-schema:birth_year ?birthYear .
      }
      OPTIONAL {
        ?id siso-schema:birth_day ?birthDay .
      }
      OPTIONAL {
        ?id siso-schema:age ?age .
      }
      OPTIONAL {
        ?id siso-schema:givenName ?givenName .
      }
      OPTIONAL {
        ?id siso-schema:party ?party_uri .
        ?party_uri skos:prefLabel ?party .
      }
      OPTIONAL {
        ?id siso-schema:gender ?gender_uri .
        ?gender_uri skos:prefLabel ?gender .
      }
      OPTIONAL {
        ?id siso-schema:occupation_literal ?occupation .
      }
      OPTIONAL {
        ?id siso-schema:num_of_children ?numberOfChildren .
      }
   }
   ORDER BY ?prefLabel
   `;
