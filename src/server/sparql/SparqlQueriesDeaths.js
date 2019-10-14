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
        UNION
        {
          ?numberOfChildrenInfo a siso-s:Information_resource .
          ?numberOfChildrenInfo siso-s:referred_death_record ?id .
          ?numberOfChildrenInfo siso-s:information_type siso-s:0_15_num_of_children .
          ?numberOfChildrenInfo siso-s:value ?numberOfChildren__id .
          BIND(?numberOfChildren__id AS ?numberOfChildren__prefLabel) .
        }
        UNION
        {
          ?genderInfo a siso-s:Information_resource .
          ?genderInfo siso-s:referred_death_record ?id .
          ?genderInfo siso-s:information_type siso-s:0_16_gender .
          ?genderInfo siso-s:value ?gender__id .
          ?gender__id skos:prefLabel ?gender__prefLabel .
        }
        UNION
        {
          # bugi?
          ?nationalityInfo a siso-s:Information_resource .
          ?nationalityInfo siso-s:referred_death_record ?id .
          ?nationalityInfo siso-s:information_type siso-s:0_17_nationality .
          ?nationalityInfo siso-s:value ?nationality__id .
          ?nationality__id skos:prefLabel ?nationality__prefLabel .
        }
        UNION
        {
          #bugi?
          ?languageInfo a siso-s:Information_resource .
          ?languageInfo siso-s:referred_death_record ?id .
          ?languageInfo siso-s:information_type siso-s:0_18_first_language .
          ?languageInfo siso-s:value ?language__id .
          ?language__id skos:prefLabel ?language__prefLabel .
        }
        UNION
        {
          ?personCommentInfo a siso-s:Information_resource .
          ?personCommentInfo siso-s:referred_death_record ?id .
          ?personCommentInfo siso-s:information_type siso-s:0_20_person_comment .
          ?personCommentInfo siso-s:value ?personComment__id .
          BIND(?personComment__id AS ?personComment__prefLabel) .
        }
        UNION
        {
          #bugaa
          ?militaryOrganizationInfo a siso-s:Information_resource .
          ?militaryOrganizationInfo siso-s:referred_death_record ?id .
          ?militaryOrganizationInfo siso-s:information_type siso-s:0_21_military_organization .
          ?militaryOrganizationInfo siso-s:value ?militaryOrganization__id .
          ?militaryOrganization__id skos:prefLabel ?militaryOrganization__prefLabel .
        }
        UNION
        {
          ?recruitmentInfo a siso-s:Information_resource .
          ?recruitmentInfo siso-s:referred_death_record ?id .
          ?recruitmentInfo siso-s:information_type siso-s:0_22_method_of_recruitment .
          ?recruitmentInfo siso-s:value ?recruitment__id .
          ?recruitment__id skos:prefLabel ?recruitment__prefLabel .
        }
        UNION
        {
          ?rankInfo a siso-s:Information_resource .
          ?rankInfo siso-s:referred_death_record ?id .
          ?rankInfo siso-s:information_type siso-s:0_23_rank .
          ?rankInfo siso-s:value ?rank__id .
          ?rank__id skos:prefLabel ?rank__prefLabel .
        }
        UNION
        {
          ?positionInfo a siso-s:Information_resource .
          ?positionInfo siso-s:referred_death_record ?id .
          ?positionInfo siso-s:information_type siso-s:0_24_position .
          ?positionInfo siso-s:value ?position__id .
          ?position__id skos:prefLabel ?position__prefLabel .
        }
        UNION
        {
          ?combatantStatusInfo a siso-s:Information_resource .
          ?combatantStatusInfo siso-s:referred_death_record ?id .
          ?combatantStatusInfo siso-s:information_type siso-s:0_25_combatant_status .
          ?combatantStatusInfo siso-s:value ?combatantStatus__id .
          ?combatantStatus__id skos:prefLabel ?combatantStatus__prefLabel .
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
          ?armedStatusInfo a siso-s:Information_resource .
          ?armedStatusInfo siso-s:referred_death_record ?id .
          ?armedStatusInfo siso-s:information_type siso-s:0_27_armed_status .
          ?armedStatusInfo siso-s:value ?armedStatus__id .
          ?armedStatus__id skos:prefLabel ?armedStatus__prefLabel .
        }
        UNION
        {
          ?welfareInfo a siso-s:Information_resource .
          ?welfareInfo siso-s:referred_death_record ?id .
          ?welfareInfo siso-s:information_type siso-s:0_28_family_welfare .
          ?welfareInfo siso-s:value ?welfare__id .
          ?welfare__id skos:prefLabel ?welfare__prefLabel .
        }
        UNION
        {
          ?statusNoteInfo a siso-s:Information_resource .
          ?statusNoteInfo siso-s:referred_death_record ?id .
          ?statusNoteInfo siso-s:information_type siso-s:0_29_status_note .
          ?statusNoteInfo siso-s:value ?statusNote__id .
          BIND(?statusNote__id AS ?statusNote__prefLabel) .
        }
        UNION
        {
            # bugaa
          ?placeOfCaptureInfo a siso-s:Information_resource .
          ?placeOfCaptureInfo siso-s:referred_death_record ?id .
          ?placeOfCaptureInfo siso-s:information_type siso-s:0_30_place_of_capture .
          ?placeOfCaptureInfo siso-s:value ?placeOfCapture__id .
          BIND(?placeOfCapture__id AS ?placeOfCapture__prefLabel)
        }
        UNION
        {
          ?campInfo a siso-s:Information_resource .
          ?campInfo siso-s:referred_death_record ?id .
          ?campInfo siso-s:information_type siso-s:0_31_prison_camp .
          ?campInfo siso-s:value ?camp__id .
          ?camp__id skos:prefLabel ?camp__prefLabel .
        }
        UNION
        {
          # literal, but could be ontologized
          ?imprisonmentMotiveInfo a siso-s:Information_resource .
          ?imprisonmentMotiveInfo siso-s:referred_death_record ?id .
          ?imprisonmentMotiveInfo siso-s:information_type siso-s:0_32_imprisonment_motive .
          ?imprisonmentMotiveInfo siso-s:value ?imprisonmentMotive__id .
          BIND(?imprisonmentMotive__id AS ?imprisonmentMotive__prefLabel)
        }
        UNION
        {
          # literal
          ?imprisonmentDateInfo a siso-s:Information_resource .
          ?imprisonmentDateInfo siso-s:referred_death_record ?id .
          ?imprisonmentDateInfo siso-s:information_type siso-s:0_33_imprisonment_date .
          ?imprisonmentDateInfo siso-s:value ?imprisonmentDate__id .
          BIND(?imprisonmentDate__id AS ?imprisonmentDate__prefLabel)
        }
        UNION
        {
          # bugi, bugi!!!
          ?releaseDateInfo a siso-s:Information_resource .
          ?releaseDateInfo siso-s:referred_death_record ?id .
          ?releaseDateInfo siso-s:information_type siso-s:0_34_release_date .
          ?releaseDateInfo siso-s:value ?releaseDate__id .
          BIND(?releaseDate__id AS ?releaseDate__prefLabel)
        }
        {
          ?deathYearInfo a siso-s:Information_resource .
          ?deathYearInfo siso-s:referred_death_record ?id .
          ?deathYearInfo siso-s:information_type siso-s:0_35_death_year .
          ?deathYearInfo siso-s:value ?deathYear__id .
          BIND(?deathYear__id AS ?deathYear__prefLabel)
        }
        UNION
        {
          ?deathDayInfo a siso-s:Information_resource .
          ?deathDayInfo siso-s:referred_death_record ?id .
          ?deathDayInfo siso-s:information_type siso-s:0_36_death_day .
          ?deathDayInfo siso-s:value ?deathDay__id .
          BIND(?deathDay__id AS ?deathDay__prefLabel)
        }
        {
          ?ageInfo a siso-s:Information_resource .
          ?ageInfo siso-s:referred_death_record ?id .
          ?ageInfo siso-s:information_type siso-s:0_37_age .
          ?ageInfo siso-s:value ?age__id .
          BIND(?age__id AS ?age__prefLabel)
        }
        UNION
        {
          ?deathMunicipalityInfo a siso-s:Information_resource .
          ?deathMunicipalityInfo siso-s:referred_death_record ?id .
          ?deathMunicipalityInfo siso-s:information_type siso-s:0_38_death_municipality .
          ?deathMunicipalityInfo siso-s:value ?deathMunicipality__id .
          ?deathMunicipality__id skos:prefLabel ?deathMunicipality__prefLabel .
        }
        UNION
        {
          ?deathProvinceInfo a siso-s:Information_resource .
          ?deathProvinceInfo siso-s:referred_death_record ?id .
          ?deathProvinceInfo siso-s:information_type siso-s:0_39_death_province .
          ?deathProvinceInfo siso-s:value ?deathProvince__id .
          ?deathProvince__id skos:prefLabel ?deathProvince__prefLabel .
        }
        UNION
        {
          ?deathCountryInfo a siso-s:Information_resource .
          ?deathCountryInfo siso-s:referred_death_record ?id .
          ?deathCountryInfo siso-s:information_type siso-s:0_40_death_country .
          ?deathCountryInfo siso-s:value ?deathCountry__id .
          ?deathCountry__id skos:prefLabel ?deathCountry__prefLabel .
        }
        UNION
        {
          # bugi? korjattu mutta pitää ajaa muunnos uusiksi
          ?deathPlaceInfo a siso-s:Information_resource .
          ?deathPlaceInfo siso-s:referred_death_record ?id .
          ?deathPlaceInfo siso-s:information_type siso-s:0_41_death_place .
          ?deathPlaceInfo siso-s:value ?deathPlace__id .
          BIND(?deathPlace__id AS ?deathPlace__prefLabel)
        }
        UNION
        {
          ?causeOfDeathInfo a siso-s:Information_resource .
          ?causeOfDeathInfo siso-s:referred_death_record ?id .
          ?causeOfDeathInfo siso-s:information_type siso-s:0_42_cause_of_death .
          ?causeOfDeathInfo siso-s:value ?causeOfDeath__id .
          ?causeOfDeath__id skos:prefLabel ?causeOfDeath__prefLabel .
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
