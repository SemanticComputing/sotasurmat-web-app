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
    UNION {
      ?id siso-schema:num_of_children ?numberOfChildren__id .
      ?numberOfChildren__id skos:prefLabel ?numberOfChildren__prefLabel .
    }
    `;

export const personProperties = `
        {
        ?id skos:prefLabel ?prefLabel__id .
        BIND (?prefLabel__id as ?prefLabel__prefLabel)
        BIND (?id as ?prefLabel__dataProviderUrl)
        }
        UNION
        {
          ?partyInfo siso-s:referred_death_record ?id .
          ?partyInfo a siso-s:Information_resource .
          ?partyInfo siso-s:information_type siso-s:0_26_party .
          ?partyInfo siso-s:value ?party__id .
          ?party__id skos:prefLabel ?party__prefLabel .
          OPTIONAL {
            ?partyInfo siso-s:source ?party__source .
          }
        }
        UNION
        {
          ?familyNameInfo a siso-s:Information_resource .
          ?familyNameInfo siso-s:referred_death_record ?id .
          ?familyNameInfo siso-s:information_type siso-s:0_1_family_name .
          ?familyNameInfo siso-s:value ?familyName__id .
          BIND(?familyName__id AS ?familyName__prefLabel) .
        }
        UNION
        {
          ?firstNameInfo a siso-s:Information_resource .
          ?firstNameInfo siso-s:referred_death_record ?id .
          ?firstNameInfo siso-s:information_type siso-s:0_2_given_name .
          ?firstNameInfo siso-s:value ?firstName__id .
          BIND(?firstName__id AS ?firstName__prefLabel) .
        }
        UNION
        {
          ?birthPlaceInfo a siso-s:Information_resource .
          ?birthPlaceInfo siso-s:referred_death_record ?id .
          ?birthPlaceInfo siso-s:information_type siso-s:0_3_birth_place .
          ?birthPlaceInfo siso-s:value ?birthPlace__id .
          ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
        }
        UNION
        {
          ?birthCountryInfo a siso-s:Information_resource .
          ?birthCountryInfo siso-s:referred_death_record ?id .
          ?birthCountryInfo siso-s:information_type siso-s:0_4_birth_country .
          ?birthCountryInfo siso-s:value ?birthCountry__id .
          ?birthCountry__id skos:prefLabel ?birthCountry__prefLabel .
        }
        UNION
        {
          ?regMunicipalityInfo a siso-s:Information_resource .
          ?regMunicipalityInfo siso-s:referred_death_record ?id .
          ?regMunicipalityInfo siso-s:information_type siso-s:0_7_registered_municipality .
          ?regMunicipalityInfo siso-s:value ?regMunicipality__id .
          ?regMunicipality__id skos:prefLabel ?regMunicipality__prefLabel .
        }
        UNION
        {
          ?regProvinceInfo a siso-s:Information_resource .
          ?regProvinceInfo siso-s:referred_death_record ?id .
          ?regProvinceInfo siso-s:information_type siso-s:0_8_registered_province .
          ?regProvinceInfo siso-s:value ?regProvince__id .
          ?regProvince__id skos:prefLabel ?regProvince__prefLabel .
        }
        UNION
        {
          ?regCountryInfo a siso-s:Information_resource .
          ?regCountryInfo siso-s:referred_death_record ?id .
          ?regCountryInfo siso-s:information_type siso-s:0_9_registered_country .
          ?regCountryInfo siso-s:value ?regCountry__id .
          ?regCountry__id skos:prefLabel ?regCountry__prefLabel .
        }
        UNION
        {
          ?livingMunicipalityInfo a siso-s:Information_resource .
          ?livingMunicipalityInfo siso-s:referred_death_record ?id .
          ?livingMunicipalityInfo siso-s:information_type siso-s:0_10_living_municipality .
          ?livingMunicipalityInfo siso-s:value ?livingMunicipality__id .
          ?livingMunicipality__id skos:prefLabel ?livingMunicipality__prefLabel .
        }
        UNION
        {
          ?livingProvinceInfo a siso-s:Information_resource .
          ?livingProvinceInfo siso-s:referred_death_record ?id .
          ?livingProvinceInfo siso-s:information_type siso-s:0_11_living_province .
          ?livingProvinceInfo siso-s:value ?livingProvince__id .
          ?livingProvince__id skos:prefLabel ?livingProvince__prefLabel .
        }
        UNION
        {
          ?livingCountryInfo a siso-s:Information_resource .
          ?livingCountryInfo siso-s:referred_death_record ?id .
          ?livingCountryInfo siso-s:information_type siso-s:0_12_living_country .
          ?livingCountryInfo siso-s:value ?livingCountry__id .
          ?livingCountry__id skos:prefLabel ?livingCountry__prefLabel .
        }
        UNION
        {
          ?occupationInfo a siso-s:Information_resource .
          ?occupationInfo siso-s:referred_death_record ?id .
          ?occupationInfo siso-s:information_type siso-s:0_13_occupation .
          ?occupationInfo siso-s:value ?occupation__id .
          ?occupation__id skos:prefLabel ?occupation__prefLabel .
        }
        UNION
        {
          ?maritalStatusInfo a siso-s:Information_resource .
          ?maritalStatusInfo siso-s:referred_death_record ?id .
          ?maritalStatusInfo siso-s:information_type siso-s:0_14_marital_status .
          ?maritalStatusInfo siso-s:value ?maritalStatus__id .
          ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
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
  SELECT ?id ?prefLabel ?familyName ?givenName ?birthYear ?birthDay ?deathYear ?deathDay ?age ?party ?gender ?occupation ?numberOfChildren ?familyWelfare
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
        ?id siso-schema:death_year ?deathYear .
      }
      OPTIONAL {
        ?id siso-schema:death_day ?deathDay .
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
      OPTIONAL {
        ?id siso-schema:family_welfare ?familyWelfare_uri .
        ?familyWelfare_uri skos:prefLabel ?familyWelfare .
      }
   }
   ORDER BY ?prefLabel
   `;
