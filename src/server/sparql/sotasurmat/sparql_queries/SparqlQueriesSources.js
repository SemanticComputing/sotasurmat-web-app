
export const sourceProperties = `
    {
      ?id skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?id siso-schema:source_code ?sourceCode .
    }
    UNION
    {
      ?id siso-schema:source_description ?description .
    }
    `
