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
          ?familyNameInfo siso-s:referred_death_record ?id .
          ?familyNameInfo a siso-s:Information_resource .
          ?familyNameInfo siso-s:information_type siso-s:0_1_family_name .
          ?familyNameInfo siso-s:value ?familyName__id .
          BIND(?familyName__id AS ?familyName__prefLabel) .
          OPTIONAL {
            ?familyNameInfo siso-s:source ?familyName__source__id .
            ?familyName__source__id skos:altLabel ?familyName__source__prefLabel .
            BIND (?familyName__source__id AS ?familyName__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?firstNameInfo siso-s:referred_death_record ?id .
          ?firstNameInfo a siso-s:Information_resource .
          ?firstNameInfo siso-s:information_type siso-s:0_2_given_name .
          ?firstNameInfo siso-s:value ?firstName__id .
          BIND(?firstName__id AS ?firstName__prefLabel) .
          OPTIONAL {
            ?firstNameInfo siso-s:source ?firstName__source__id .
            ?firstName__source__id skos:altLabel ?firstName__source__prefLabel .
            BIND (?firstName__source__id AS ?firstName__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?birthPlaceInfo siso-s:referred_death_record ?id .
          ?birthPlaceInfo a siso-s:Information_resource .
          ?birthPlaceInfo siso-s:information_type siso-s:0_3_birth_place .
          ?birthPlaceInfo siso-s:value ?birthPlace__id .
          ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
          OPTIONAL {
            ?birthPlaceInfo siso-s:source ?birthPlace__source__id .
            ?birthPlace__source__id skos:altLabel ?birthPlace__source__prefLabel .
            BIND (?birthPlace__source__id AS ?birthPlace__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?birthCountryInfo siso-s:referred_death_record ?id .
          ?birthCountryInfo a siso-s:Information_resource .
          ?birthCountryInfo siso-s:information_type siso-s:0_4_birth_country .
          ?birthCountryInfo siso-s:value ?birthCountry__id .
          ?birthCountry__id skos:prefLabel ?birthCountry__prefLabel .
          OPTIONAL {
            ?birthCountryInfo siso-s:source ?birthCountry__source__id .
            ?birthCountry__source__id skos:altLabel ?birthCountry__source__prefLabel .
            BIND (?birthCountry__source__id AS ?birthCountry__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?regMunicipalityInfo siso-s:referred_death_record ?id .
          ?regMunicipalityInfo a siso-s:Information_resource .
          ?regMunicipalityInfo siso-s:information_type siso-s:0_7_registered_municipality .
          ?regMunicipalityInfo siso-s:value ?regMunicipality__id .
          ?regMunicipality__id skos:prefLabel ?regMunicipality__prefLabel .
          OPTIONAL {
            ?regMunicipalityInfo siso-s:source ?regMunicipality__source__id .
            ?regMunicipality__source__id skos:altLabel ?regMunicipality__source__prefLabel .
            BIND (?regMunicipality__source__id AS ?regMunicipality__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?regProvinceInfo siso-s:referred_death_record ?id .
          ?regProvinceInfo a siso-s:Information_resource .
          ?regProvinceInfo siso-s:information_type siso-s:0_8_registered_province .
          ?regProvinceInfo siso-s:value ?regProvince__id .
          ?regProvince__id skos:prefLabel ?regProvince__prefLabel .
          OPTIONAL {
            ?regProvinceInfo siso-s:source ?regProvince__source__id .
            ?regProvince__source__id skos:altLabel ?regProvince__source__prefLabel .
            BIND (?regProvince__source__id AS ?regProvince__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?regCountryInfo siso-s:referred_death_record ?id .
          ?regCountryInfo a siso-s:Information_resource .
          ?regCountryInfo siso-s:information_type siso-s:0_9_registered_country .
          ?regCountryInfo siso-s:value ?regCountry__id .
          ?regCountry__id skos:prefLabel ?regCountry__prefLabel .
          OPTIONAL {
            ?regCountryInfo siso-s:source ?regCountry__source__id .
            ?regCountry__source__id skos:altLabel ?regCountry__source__prefLabel .
            BIND (?regCountry__source__id AS ?regCountry__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?livingMunicipalityInfo siso-s:referred_death_record ?id .
          ?livingMunicipalityInfo a siso-s:Information_resource .
          ?livingMunicipalityInfo siso-s:information_type siso-s:0_10_living_municipality .
          ?livingMunicipalityInfo siso-s:value ?livingMunicipality__id .
          ?livingMunicipality__id skos:prefLabel ?livingMunicipality__prefLabel .
          OPTIONAL {
            ?livingMunicipalityInfo siso-s:source ?livingMunicipality__source__id .
            ?livingMunicipality__source__id skos:altLabel ?livingMunicipality__source__prefLabel .
            BIND (?livingMunicipality__source__id AS ?livingMunicipality__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?livingProvinceInfo siso-s:referred_death_record ?id .
          ?livingProvinceInfo a siso-s:Information_resource .
          ?livingProvinceInfo siso-s:information_type siso-s:0_11_living_province .
          ?livingProvinceInfo siso-s:value ?livingProvince__id .
          ?livingProvince__id skos:prefLabel ?livingProvince__prefLabel .
          OPTIONAL {
            ?livingProvinceInfo siso-s:source ?livingProvince__source__id .
            ?livingProvince__source__id skos:altLabel ?livingProvince__source__prefLabel .
            BIND (?livingProvince__source__id AS ?livingProvince__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?livingCountryInfo siso-s:referred_death_record ?id .
          ?livingCountryInfo a siso-s:Information_resource .
          ?livingCountryInfo siso-s:information_type siso-s:0_12_living_country .
          ?livingCountryInfo siso-s:value ?livingCountry__id .
          ?livingCountry__id skos:prefLabel ?livingCountry__prefLabel .
        }
        UNION
        {
          ?occupationInfo siso-s:referred_death_record ?id .
          ?occupationInfo a siso-s:Information_resource .
          ?occupationInfo siso-s:information_type siso-s:0_13_occupation .
          ?occupationInfo siso-s:value ?occupation__id .
          ?occupation__id skos:prefLabel ?occupation__prefLabel .
        }
        UNION
        {
          ?maritalStatusInfo siso-s:referred_death_record ?id .
          ?maritalStatusInfo a siso-s:Information_resource .
          ?maritalStatusInfo siso-s:information_type siso-s:0_14_marital_status .
          ?maritalStatusInfo siso-s:value ?maritalStatus__id .
          ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
        }
        UNION
        {
          ?numberOfChildrenInfo siso-s:referred_death_record ?id .
          ?numberOfChildrenInfo a siso-s:Information_resource .
          ?numberOfChildrenInfo siso-s:information_type siso-s:0_15_num_of_children .
          ?numberOfChildrenInfo siso-s:value ?numberOfChildren__id .
          BIND(?numberOfChildren__id AS ?numberOfChildren__prefLabel) .
        }
        UNION
        {
          ?genderInfo siso-s:referred_death_record ?id .
          ?genderInfo a siso-s:Information_resource .
          ?genderInfo siso-s:information_type siso-s:0_16_gender .
          ?genderInfo siso-s:value ?gender__id .
          ?gender__id skos:prefLabel ?gender__prefLabel .
        }
        UNION
        {
          ?nationalityInfo siso-s:referred_death_record ?id .
          ?nationalityInfo a siso-s:Information_resource .
          ?nationalityInfo siso-s:information_type siso-s:0_17_nationality .
          ?nationalityInfo siso-s:value ?nationality__id .
          ?nationality__id skos:prefLabel ?nationality__prefLabel .
        }
        UNION
        {
          ?languageInfo siso-s:referred_death_record ?id .
          ?languageInfo a siso-s:Information_resource .
          ?languageInfo siso-s:information_type siso-s:0_18_language .
          ?languageInfo siso-s:value ?language__id .
          ?language__id skos:prefLabel ?language__prefLabel .
        }
        UNION
        {
          ?personCommentInfo siso-s:referred_death_record ?id .
          ?personCommentInfo a siso-s:Information_resource .
          ?personCommentInfo siso-s:information_type siso-s:0_20_person_comment .
          ?personCommentInfo siso-s:value ?personComment__id .
          BIND(?personComment__id AS ?personComment__prefLabel) .
        }
        UNION
        {
          ?militaryOrganizationInfo siso-s:referred_death_record ?id .
          ?militaryOrganizationInfo a siso-s:Information_resource .
          ?militaryOrganizationInfo siso-s:information_type siso-s:21_military_organization .
          ?militaryOrganizationInfo siso-s:value ?militaryOrganization__id .
          ?militaryOrganization__id skos:prefLabel ?militaryOrganization__prefLabel .
        }
        UNION
        {
          ?recruitmentInfo siso-s:referred_death_record ?id .
          ?recruitmentInfo a siso-s:Information_resource .
          ?recruitmentInfo siso-s:information_type siso-s:0_22_method_of_recruitment .
          ?recruitmentInfo siso-s:value ?recruitment__id .
          ?recruitment__id skos:prefLabel ?recruitment__prefLabel .
        }
        UNION
        {
          ?rankInfo siso-s:referred_death_record ?id .
          ?rankInfo a siso-s:Information_resource .
          ?rankInfo siso-s:information_type siso-s:0_23_rank .
          ?rankInfo siso-s:value ?rank__id .
          ?rank__id skos:prefLabel ?rank__prefLabel .
        }
        UNION
        {
          ?positionInfo siso-s:referred_death_record ?id .
          ?positionInfo a siso-s:Information_resource .
          ?positionInfo siso-s:information_type siso-s:0_24_position .
          ?positionInfo siso-s:value ?position__id .
          ?position__id skos:prefLabel ?position__prefLabel .
        }
        UNION
        {
          ?combatantStatusInfo siso-s:referred_death_record ?id .
          ?combatantStatusInfo a siso-s:Information_resource .
          ?combatantStatusInfo siso-s:information_type siso-s:0_25_combatant_status .
          ?combatantStatusInfo siso-s:value ?combatantStatus__id .
          ?combatantStatus__id skos:prefLabel ?combatantStatus__prefLabel .
        }
        UNION
        {
          ?partyInfo a siso-s:Information_resource .
          ?partyInfo siso-s:referred_death_record ?id .
          ?partyInfo siso-s:information_type siso-s:0_26_party .
          ?partyInfo siso-s:value ?party__id .
          ?party__id skos:prefLabel ?party__prefLabel .
          OPTIONAL {
            ?partyInfo siso-s:source ?party__source__id .
            ?party__source__id skos:altLabel ?party__source__prefLabel .
            BIND (?party__source__id AS ?party__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?armedStatusInfo siso-s:referred_death_record ?id .
          ?armedStatusInfo a siso-s:Information_resource .
          ?armedStatusInfo siso-s:information_type siso-s:0_27_armed_status .
          ?armedStatusInfo siso-s:value ?armedStatus__id .
          ?armedStatus__id skos:prefLabel ?armedStatus__prefLabel .
          OPTIONAL {
            ?armedStatusInfo siso-s:source ?armedStatus_id .
            ?armedStatus__source__id skos:altLabel ?armedStatus__source__prefLabel .
            BIND (?armedStatus__source__id AS ?armedStatus__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?welfareInfo siso-s:referred_death_record ?id .
          ?welfareInfo a siso-s:Information_resource .
          ?welfareInfo siso-s:information_type siso-s:0_28_family_welfare .
          ?welfareInfo siso-s:value ?welfare__id .
          ?welfare__id skos:prefLabel ?welfare__prefLabel .
          OPTIONAL {
            ?welfareInfo siso-s:source ?welfare_id .
            ?welfare__source__id skos:altLabel ?welfare__source__prefLabel .
            BIND (?welfare__source__id AS ?welfare__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?statusNoteInfo siso-s:referred_death_record ?id .
          ?statusNoteInfo a siso-s:Information_resource .
          ?statusNoteInfo siso-s:information_type siso-s:0_29_status_note .
          ?statusNoteInfo siso-s:value ?statusNote__id .
          BIND(?statusNote__id AS ?statusNote__prefLabel) .
          OPTIONAL {
            ?statusNoteInfo siso-s:source ?statusNote_id .
            ?statusNote__source__id skos:altLabel ?statusNote__source__prefLabel .
            BIND (?statusNote__source__id AS ?statusNote__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?placeOfCaptureInfo siso-s:referred_death_record ?id .
          ?placeOfCaptureInfo a siso-s:Information_resource .
          ?placeOfCaptureInfo siso-s:information_type siso-s:0_30_place_of_capture .
          ?placeOfCaptureInfo siso-s:value ?placeOfCapture__id .
          BIND(?placeOfCapture__id AS ?placeOfCapture__prefLabel)
          OPTIONAL {
            ?placeOfCaptureInfo siso-s:source ?placeOfCapture__source__id .
            ?placeOfCapture__source__id skos:altLabel ?placeOfCapture__source__prefLabel .
            BIND (?placeOfCapture__source__id AS ?placeOfCapture__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?campInfo siso-s:referred_death_record ?id .
          ?campInfo a siso-s:Information_resource .
          ?campInfo siso-s:information_type siso-s:0_31_prison_camp .
          ?campInfo siso-s:value ?camp__id .
          ?camp__id skos:prefLabel ?camp__prefLabel .
          OPTIONAL {
            ?campInfo siso-s:source ?camp__source__id .
            ?camp__source__id skos:altLabel ?camp__source__prefLabel .
            BIND (?camp__source__id AS ?camp__source__dataProviderUrl) .
          }
        }
        UNION
        {
          # literal, but could be ontologized
          ?imprisonmentMotiveInfo siso-s:referred_death_record ?id .
          ?imprisonmentMotiveInfo a siso-s:Information_resource .
          ?imprisonmentMotiveInfo siso-s:information_type siso-s:0_32_imprisonment_motive .
          ?imprisonmentMotiveInfo siso-s:value ?imprisonmentMotive__id .
          BIND(?imprisonmentMotive__id AS ?imprisonmentMotive__prefLabel)
          OPTIONAL {
            ?imprisonmentMotiveInfo siso-s:source ?imprisonmentMotive__source__id .
            ?imprisonmentMotive__source__id skos:altLabel ?imprisonmentMotive_source__prefLabel .
            BIND (?imprisonmentMotive__source__id AS ?imprisonmentMotive__source__dataProviderUrl) .
          }
        }
        UNION
        {
          # literal
          ?imprisonmentDateInfo siso-s:referred_death_record ?id .
          ?imprisonmentDateInfo a siso-s:Information_resource .
          ?imprisonmentDateInfo siso-s:information_type siso-s:0_33_imprisonment_date .
          ?imprisonmentDateInfo siso-s:value ?imprisonmentDate__id .
          BIND(?imprisonmentDate__id AS ?imprisonmentDate__prefLabel)
          OPTIONAL {
            ?imprisonmentDateInfo siso-s:source ?imprisonmentDate__source__id .
            ?imprisonmentDate__source__id skos:altLabel ?imprisonmentDate__source__prefLabel .
            BIND (?imprisonmentDate__source__id AS ?imprisonmentDate__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?releaseDateInfo siso-s:referred_death_record ?id .
          ?releaseDateInfo a siso-s:Information_resource .
          ?releaseDateInfo siso-s:information_type siso-s:0_34_release_date .
          ?releaseDateInfo siso-s:value ?releaseDate__id .
          BIND(?releaseDate__id AS ?releaseDate__prefLabel)
          OPTIONAL {
            ?releaseDateInfo siso-s:source ?releaseDate__source__id .
            ?releaseDate__source__id skos:altLabel ?releaseDate__source__prefLabel .
            BIND (?releaseDate__source__id AS ?releaseDate__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?deathYearInfo siso-s:referred_death_record ?id .
          ?deathYearInfo a siso-s:Information_resource .
          ?deathYearInfo siso-s:information_type siso-s:0_35_death_year .
          ?deathYearInfo siso-s:value ?deathYear__id .
          BIND(?deathYear__id AS ?deathYear__prefLabel)
          OPTIONAL {
            ?deathYearInfo siso-s:source ?deathYear__source__id .
            ?deathYear__source__id skos:altLabel ?deathYear__source__prefLabel .
            BIND (?deathYear__source__id AS ?deathYear__source__dataProviderUrl) .
          }
        }
        UNION
        {
          ?deathDayInfo siso-s:referred_death_record ?id .
          ?deathDayInfo a siso-s:Information_resource .
          ?deathDayInfo siso-s:information_type siso-s:0_36_death_day .
          ?deathDayInfo siso-s:value ?deathDay__id .
          BIND(?deathDay__id AS ?deathDay__prefLabel)
        }
        UNION
        {
          ?ageInfo siso-s:information_type siso-s:0_37_age .
          ?ageInfo siso-s:referred_death_record ?id .
          ?ageInfo siso-s:value ?age__id .
          BIND(?age__id AS ?age__prefLabel)
        }
        UNION
        {
          ?deathMunicipalityInfo siso-s:referred_death_record ?id .
          ?deathMunicipalityInfo a siso-s:Information_resource .
          ?deathMunicipalityInfo siso-s:information_type siso-s:0_38_death_municipality .
          ?deathMunicipalityInfo siso-s:value ?deathMunicipality__id .
          ?deathMunicipality__id skos:prefLabel ?deathMunicipality__prefLabel .
        }
        UNION
        {
          ?deathProvinceInfo siso-s:referred_death_record ?id .
          ?deathProvinceInfo a siso-s:Information_resource .
          ?deathProvinceInfo siso-s:information_type siso-s:0_39_death_province .
          ?deathProvinceInfo siso-s:value ?deathProvince__id .
          ?deathProvince__id skos:prefLabel ?deathProvince__prefLabel .
        }
        UNION
        {
          ?deathCountryInfo siso-s:referred_death_record ?id .
          ?deathCountryInfo a siso-s:Information_resource .
          ?deathCountryInfo siso-s:information_type siso-s:0_40_death_country .
          ?deathCountryInfo siso-s:value ?deathCountry__id .
          ?deathCountry__id skos:prefLabel ?deathCountry__prefLabel .
        }
        UNION
        {
          ?deathPlaceInfo a siso-s:Information_resource .
          ?deathPlaceInfo siso-s:referred_death_record ?id .
          ?deathPlaceInfo siso-s:information_type siso-s:0_41_death_place .
          ?deathPlaceInfo siso-s:value ?deathPlace__id .
          BIND(?deathPlace__id AS ?deathPlace__prefLabel)
        }
        UNION
        {
          ?causeOfDeathInfo siso-s:referred_death_record ?id .
          ?causeOfDeathInfo a siso-s:Information_resource .
          ?causeOfDeathInfo siso-s:information_type siso-s:0_42_cause_of_death .
          ?causeOfDeathInfo siso-s:value ?causeOfDeath__id .
          ?causeOfDeath__id skos:prefLabel ?causeOfDeath__prefLabel .
        }
        UNION
        {
          ?deathMotiveInfo siso-s:referred_death_record ?id .
          ?deathMotiveInfo a siso-s:Information_resource .
          ?deathMotiveInfo siso-s:information_type siso-s:0_43_death_motive .
          ?deathMotiveInfo siso-s:value ?deathMotive__id .
          ?deathMotive__id skos:prefLabel ?deathMotive__prefLabel .
        }
        UNION
        {
          ?burialInfo siso-s:referred_death_record ?id .
          ?burialInfo a siso-s:Information_resource .
          ?burialInfo siso-s:information_type siso-s:0_44_method_of_burial .
          ?burialInfo siso-s:value ?burial__id .
          ?burial__id skos:prefLabel ?burial__prefLabel .
        }
        UNION
        {
          ?deathComment siso-s:referred_death_record ?id .
          ?deathComment a siso-s:Information_resource .
          ?deathComment siso-s:information_type siso-s:0_45_death_comment .
          ?deathComment siso-s:value ?deathComment__id .
          BIND(?deathComment__id AS ?deathComment__prefLabel)
        }
        UNION
        {
          ?religionInfo siso-s:referred_death_record ?id .
          ?religionInfo a siso-s:Information_resource .
          ?religionInfo siso-s:information_type siso-s:0_46_religion .
          ?religionInfo siso-s:value ?religion__id .
          ?religion__id skos:prefLabel ?religion__prefLabel .
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
