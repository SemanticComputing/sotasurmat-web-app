export default {
  languageLabel: 'English',
  appTitle: {
    short: 'mmm',
    long: 'Mapping Manuscript Migrations'
  },
  appDescription: `
    Mapping Manuscript Migrations (MMM) is a semantic portal for finding and studying pre-modern manuscripts and
    their movements, based on linked collections of Schoenberg Institute, Bodleian Library,
    and IRHT.
  `,
  selectPerspective: 'Select a perspective to search and browse the MMM data:',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Blog',
      aboutTheProject: 'About the project'
    },
    searchBarPlaceHolder: 'Search all MMM content',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    narrowDownBy: 'Narrow down by'
  },
  tabs: {
    table: 'table',
    map: 'map',
    production_places: 'production places',
    migrations: 'migrations',
    export: 'export',
    'by-period': 'by period'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
  },
  perspectives: {
    manuscripts: {
      label: 'Manuscripts',
      facetResultsType: 'manuscripts',
      shortDescription: 'Physical manuscript objects',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to physical manuscript objects.
          If two or more source datasets include the same manuscript and
          this has been verified, the information from the source datasets has been merged
          into one manuscript. See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all manuscripts in
            the MMM data. One table row is equivalent to one manuscript.
          </li>
          <li>
            <strong>PRODUCTION PLACES</STRONG> view visualizes the connection
            between manuscripts and the places where they were produced.
          </li>
          <li>
            <strong>MIGRATIONS</strong> view visualizes the migration of a
            manuscript from place of production to its most recently observed location.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Manuscript',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            MMM’s Manuscript entity corresponds to
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a>
            Manifestation Singleton, defined as "physical objects that each carry an instance of
            [an Expression], and that were produced as unique objects..." The various types
            of records that describe manuscripts in each of the three contributing MMM
            datasets have been mapped to this entity.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
            Manuscript labels
          </h6>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            If the Bibale or Oxford databases reference a shelf mark for the manuscript,
            that information will appear as its label. Otherwise, an SDBM ID number will serve
            as its label. SDBM ID numbers contain prefixes that indicate different things about
            the type of record they contain:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM
              Entries. Each Entry represents a different observation of a manuscript at a different
              point in time, derived from various sources.
            </li>
            <li>
              SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any
              other Entries and therefore has no SDBM Manuscript Record.
            </li>
            <li>
              SDBM_MS_part: a record identified as a fragment of a larger manuscript.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: 'A short label describing the manuscript.'
        },
        author: {
          label: 'Author',
          description:`
            The author(s) who have contributed to the intellectual content (works)
            contained in the manuscript.
          `
        },
        work: {
          label: 'Work',
          description: 'The intellectual content (works) contained in the manuscript.'
        },
        expression: {
          label: 'Expression',
          description: 'The linguistic versions of the works contained in the manuscript.'
        },
        productionPlace: {
          label: 'Production place',
          description: `
            The location where the manuscript was written. Multiple production places
            may appear for a single manuscript due to the following reasons:  1) there
            are discrepancies in the contributing data source,  2) there are discrepancies
            between several contributing data sources, 3) the precise date is uncertain,
            4) the production indeed took place on several occasions (e.g. for composite
            manuscripts).
          `
        },
        productionTimespan: {
          label: 'Production date',
          description: `
            The date when the manuscript was written. Multiple production dates may appear
            for a single manuscript due to the following reasons:  1) there are discrepancies
            in the contributing data source,  2) there are discrepancies between several
            contributing data sources, 3) the precise date is uncertain, 4) the production
            indeed took place on several occasions (e.g. for composite manuscripts).
          `
        },
        note: {
          label: 'Note',
          description: `
            Other info such as distinguishing characteristics, notes on the physical structure
            of the manuscript, script types, note glosses, physical relationships among various
            texts and/or parts of a miscellany, such as multiple types of page layout.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language(s) in which the manuscript was written.
          `
        },
        event: {
          label: 'Event',
          description: `
            Events related to the manuscript.
          `
        },
        owner: {
          label: 'Owner',
          description: `
            Former or current owners (individual or institutional).
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The collection(s) that the manuscript has been part of at some point in time.
          `
        },
        transferOfCustodyPlace: {
          label: 'Transfer of Custody Place',
          description: `
            The locations of “Transfer of Custody” events related to the manuscript.
          `
        },
        transferOfCustodyTimespan: {
          label: 'Transfer of Custody Date',
          description: `
            The dates of “Transfer of Custody” events related to the manuscript.
          `
        },
        material: {
          label: 'Material',
          description: `
            The physical material on which the text is written.
          `
        },
        height: {
          label: 'Height',
          description: `
            The height of the manuscript in millimeters.
          `
        },
        width: {
          label: 'Width',
          description: `
            The width of the manuscript in millimeters.
          `
        },
        folios: {
          label: 'Folios',
          description: `
            The number of folios (leaves).
          `
        },
        lines: {
          label: 'Lines',
          description: `
            The number of lines in a text block. Left blank if the number of lines
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        columns: {
          label: 'Columns',
          description: `
            The number of columns. Left blank if the number of columns
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        miniatures: {
          label: 'Miniatures',
          description: `
            The number of miniatures.
          `
        },
        decoratedInitials: {
          label: 'Decorated initials',
          description: `
            The number of decorated initials.
          `
        },
        historiatedInitials: {
          label: 'Historiated initials',
          description: `
            The number of historiated initials.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
            information on the manuscript. If two or more source datasets include
            the same manuscript and this has been manually verified, the information
            from the source datasets have been merged into one manuscript (table row).
             Click on the links to view the original record on the source’s website.
          `
        },
      },
    },
    works: {
      label: 'Works',
      facetResultsType: 'works',
      shortDescription: 'Intellectual content carried out by manuscripts.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to Works. The MMM data model follows
          the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
          definition of a work, which refers to “distinct concepts or combinations
          of concepts identified in artistic and intellectual expressions.” If two or more source
          datasets include the same Work and this has been verified, the information
          from the source datasets has been merged into one Work.  See
          <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view gives you a list of specific works, and
            the manuscripts and manuscript collections in which they can be found.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Work',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            The MMM data model follows the
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of a work, which refers to
            “distinct concepts or combinations of concepts identified in artistic and
            intellectual expressions.” Works contain title and author information.
            This definition is not shared by the Bibale or Oxford Libraries’ conception
            of the term, which both define their internal “work” concept more closely to
            the FRBRoo conception of an Expression. The SDBM does not have a work concept
            at all, recording only the titles of the texts as given in its various sources,
            without normalizing that data or linking it directly to author information.
            Works were generated within the MMM dataset by manually creating links across
            the three datasets’ various conceptions of the relationship between authors
            and their creations. This process was not able to reconcile every work
            contained within the combined dataset.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The name or title of the Work.'
        },
        author: {
          label: 'Possible author',
          description: `
            The author(s) associated with the Work. Because of the structure of
            entries in the Schoenberg Database, the authors shown as being
            associated with a Work may actually be associated with other
            Works in the same manuscript instead.
          `
        },
        language: {
          label: 'Language',
          description:  `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        expression: {
          label: 'Expression',
          description:  `
            The expression(s) of the Work.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
            The specific manuscript(s) in which the Work can be found.
          `
        },
        productionTimespan: {
          label: 'Manuscript production date',
          description: `
            The date(s) when the manuscript(s) in which the Work can be found were written.
            Multiple production dates may appear for a single manuscript,
            when there are discrepancies between the contributing data source
            or when the precise date is uncertain.
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The specific collection(s) of manuscripts in which a Work can be found.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database(s) (Schoenberg, Bibale, and Bodleian) that the Work
            occurs in. Click on the result table link to view the original record on the
            source’s website.
          `
        },
      }
    },
    events: {
      label: 'Events',
      facetResultsType: 'events',
      shortDescription: 'Events related to manuscripts.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Event',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        type: {
          label: 'Type',
          description: `
            Distinguish between “Transfer of Custody”, “Production”, and other
            types of “Activity” events.
          `
        },
        language: {
          label: 'Language',
          description:  `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        manuscript: {
          label: 'Manuscript / Collection',
          description: `
            The manuscript or manuscript collection associated with the event.
          `
        },
        eventTimespan: {
          label: 'Date',
          description: `
            The date or time period associated with the event.
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        surrender: {
          label: 'Custody surrendered by',
          description: `
            Custody surrendered by
          `
        },
        receiver: {
          label: 'Custody received by',
          description: `
            Custody received by
          `
        },
        observedOwner: {
          label: 'Observed owner',
          description: `
            Observed owner
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that provided
            the information about the event.
          `
        },
      }
    },
    actors: {
      label: 'Actors',
      facetResultsType: 'actors',
      shortDescription: 'People and institutions related to manuscripts and works.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          This perspective provides access to data related to the persons and institutions
          who impacted the production or dissemination of manuscripts and works.
          Actors include authors of works, artists and scribes who produced manuscripts,
          and the individual owners and institutions who bought or sold manuscripts.
          If two or more source datasets include the same Actor and this has been verified,
          the information from the source datasets has been merged into one Actor.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all Actors in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the connection between Actors
            and the places where they lived or were located.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Actor',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Actors are individuals or groups who influenced the production or provenance
            of a manuscript. Actor types include Person, Group, or Actor. Persons refer to
            individuals, while Groups indicate corporate or institutional bodies.
            The Actor type is used when a more specific type is unknown or not specified
            in the source dataset.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            The standardized name of the actor.
          `
        },
        type: {
          label: 'Type',
          description:  `
            Indicates whether the actor is an individual (Person) or an institution,
            corporation, or family (Group)
          `
        },
        birthDateTimespan: {
          label: 'Birth / formation date',
          description: `
            The date when the actor was born or established.
          `
        },
        deathDateTimespan: {
          label: 'Death / dissolution date',
          description: `
            The date when the actor died or dissolved.
          `
        },
        place: {
          label: 'Activity location',
          description: `
            Place(s) of activity linked to this actor.
          `
        },
        work: {
          label: 'Work',
          description: `
            Work(s) linked to the actor.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
            Manuscript(s) linked to the actor.
          `
        },
        role: {
          label: 'Role',
          description: `
            Role(s)
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
            information on the actor. If two or more source datasets include the
            same actor and this has been manually verified, the information from
            the source datasets has been merged into one MMM actor.
            Click on the result table link(s) to view the original record on the
            source’s website.
          `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'places',
      shortDescription: 'Places related to manuscripts and works.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to places named in the source datasets
          (Schoenberg, Bibale, and Bodleian). The places have been linked to Getty Thesaurus
          of Geographic Names when possible. If two or more source datasets include the same
          Place and this has been verified, the information from the source datasets has been
          merged into one Place. See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all Places in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view shows all Places that have coordinates.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Places refer to geographic locations that relate to Manuscripts, Events, Actors, and
            Collections. MMM uses the Getty Thesaurus of Geographic Names as its hierarchy for
            geographic data. Coordinate data is approximate for locations such as counties,
            regions, and nations.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            The name of the place.
          `
        },
        placeType: {
          label: 'Place type',
          description:  `
            The place type from Getty Thesaurus of Geographic Names.
          `
        },
        area: {
          label: 'Parent Place',
          description: `
            The preferred parent place in the hierarchy used by the Getty
            Thesaurus of Geographic Names.
          `
        },
        manuscriptProduced: {
          label: 'Manuscripts produced',
          description: `
            Manuscript(s) produced here.
          `
        },
        manuscriptTransferred: {
          label: 'Manuscripts transferred',
          description: `
            The manuscript(s) that have a "Transfer of Custody" event located here.
          `
        },
        manuscriptObserved: {
          label: 'Manuscripts observed',
          description: `
            The manuscript(s) that have a provenance event located here.
          `
        },
        actor: {
          label: 'Actor',
          description: `
            The actor(s) associated with the place.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset (Schoenberg, Bibale, and Bodleian) and the place
            authority (Getty Thesaurus of Geographic Names and GeoNames)
            contributing the information on the place.
          `
        }
      }
    },
    collections: {
      label: '',
      facetResultsType: '',
      shortDescription: '',
      longDescription: `
      `,
      instancePage: {
        label: 'Collection',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            A collection refers to a group of manuscripts that were owned by the same actor,
            including individuals, institutions, or other types of groups. A manuscript can
            appear in multiple collections over time, and no explicit distinction
            is made between a manuscript’s current or former collections. Similarly,
            collections will include links to every manuscript that has ever been in
            the collection, regardless of whether all of those manuscripts were within
            the collection at the same time.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            The name or title of the Collection.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description:  `
            The manuscript(s) that have been a part of the collection at some
            point in time.
          `
        },
        owner: {
          label: 'Owner',
          description: `
            Former or current owners (individual or institutional).
          `
        },
        place: {
          label: 'Place',
          description: `
            Location of the collection at some point during its existence
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that the Collection
            occurs in. Currently one Collection has always only one dataset as a source.
          `
        }
      }
    },
    expressions: {
      label: '',
      facetResultsType: '',
      shortDescription: '',
      longDescription: `
      `,
      instancePage: {
        label: 'Expression',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            The MMM data model follows the
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of an Expression, which
            refers to “the intellectual or artistic realisations of works in the form
            of identifiable immaterial objects...” Expressions contain title,
            and language information, and represent the various versions of texts that
            appear in manuscripts.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            The name or title of the Expression.
          `
        },
        language: {
          label: 'Language',
          description:  `
            The language of the Expression.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that the Expression
            occurs in. Currently one Expression has always only one dataset as a source.
          `
        }
      }
    },
  },
  aboutTheProject: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the project
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Mapping Manuscript Migrations (MMM) has been developed with funding from the Trans-Atlantic
      Platform under its Digging into Data Challenge (2017-2019). The partners in this project are
      the University of Oxford, the University of Pennsylvania, Aalto University,
      and the Institut de recherche et d’histoire des textes.
      Funding has been provided by the UK Economic and Social Research Council,
      the Institute of Museum and Library Services, the Academy of Finland, and the
      Agence nationale de la recherche.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      MMM is intended to enable large-scale exploration of data relating to the history and provenance
      of (primarily) Western European medieval and early modern manuscripts.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      MMM combines data from three specialist databases:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        <a href="https://sdbm.library.upenn.edu/"
          target='_blank' rel='noopener noreferrer'
        >
          Schoenberg Database of Manuscripts
        </a>
      </li>
      <li>
        <a href="http://bibale.irht.cnrs.fr/"
          target='_blank' rel='noopener noreferrer'
        >
          Bibale
        </a>
      </li>
      <li>
        <a href="https://medieval.bodleian.ox.ac.uk/"
          target='_blank' rel='noopener noreferrer'
        >
          Medieval Manuscripts in Oxford Libraries
        </a>
      </li>
    </ul>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The data have been combined using a unified Data Model based on the CIDOC-CRM
      and FRBRoo ontologies. A diagram of the Data Model can be seen
      <a href="https://drive.google.com/open?id=1uyTA8Prwtts5g13eor48tKHk_g63NaaG" target='_blank' rel='noopener noreferrer'>
      here</a>. The data have not been corrected or amended in any way. If you notice an error in the data,
      please report it to the custodians of the original database.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Features
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The MMM interface enables you to browse and search through most of the data assembled by the project
      from the three source databases. If you want to inspect the full raw data for any individual
      manuscript or other entity, please click on the “Open in Linked Data browser” button on
      the “Export” tab of the landing-page for that entity.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The MMM interface also provides map-based visualizations for a selection of the data relating to
      Manuscripts, Actors, and Places. The data resulting from a search or a filtered browse can be
      exported in the form of a CSV file. Click on the “Export” tab and then on the button
      “Open SPARQL query in yasgui.org”.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      If you want to search all the underlying data using the SPARQL query language, the endpoint is
      available here: <a href="http://ldf.fi/mmm-cidoc/sparql" target='_blank' rel='noopener noreferrer'>
      http://ldf.fi/mmm-cidoc/sparql</a>.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data Reuse
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The MMM data are made available for reuse under a
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='_blank' rel='noopener noreferrer'>CC-BY-NC 4.0 licence</a>.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You must give appropriate credit, provide a link to the license, and indicate if changes
      were made. You may do so in any reasonable manner, but not in any way that suggests the
      MMM project or its partner institutions endorses you or your use.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You may not use the data for commercial purposes.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      More Information
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The MMM project has its own
      <a href="https://github.com/mapping-manuscript-migrations" target='_blank' rel='noopener noreferrer'>GitHub site</a>.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Here you will find documentation, scripts and programs, and samples of the raw data.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the MMM portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class (Manuscripts, Works, Events, Actors, or Places).
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `
};
