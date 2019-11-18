import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { has } from 'lodash';
import {
  getResultCount,
  getPaginatedResults,
  getAllResults,
  getByURI } from './sparql/FacetResults';
import { getFacet } from './sparql/FacetValues';
import { queryJenaIndex } from './sparql/JenaQuery';
import { rootUrl } from './config';
const DEFAULT_PORT = 3001;
const app = express();
app.set('port', process.env.PORT || DEFAULT_PORT);
app.use(bodyParser.json());

// NODE_ENV is defined in package.json when running in localhost
const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

// allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let publicPath = null;

// Express server is used to serve the React app only in production
if (!isDevelopment) {
  // The root directory from which to serve static assets
  publicPath = path.join(__dirname, './../public/');
  app.use(rootUrl, express.static(publicPath));
}

// React app makes requests to these api urls
const apiPath = rootUrl + '/api';

// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
app.get(`${apiPath}/:resultClass/paginated`, async (req, res, next) => {
  try {
    const data = await getPaginatedResults({
      resultClass: req.params.resultClass,
      page: req.query.page == null ? null : req.query.page,
      pagesize: parseInt(req.query.pagesize) || null,
      sortBy: req.query.sortBy || null,
      sortDirection: req.query.sortDirection || null,
      constraints: req.query.constraints == null ? null : JSON.parse(req.query.constraints),
      resultFormat: req.query.resultFormat == null ? 'json' : req.query.resultFormat
    });
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.get(`${apiPath}/:resultClass/all`, async (req, res, next) => {
  try {
    const resultFormat = req.query.resultFormat == null ? 'json' : req.query.resultFormat;
    const data = await getAllResults({
      resultClass: req.params.resultClass,
      facetClass: req.query.facetClass || null,
      constraints: req.query.constraints == null ? null : JSON.parse(req.query.constraints),
      resultFormat: resultFormat
    });
    if (resultFormat === 'csv') {
      res.writeHead(200, {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=results.csv'
      });
      res.end(data);
    } else {
      res.json(data);
    }
  } catch(error) {
    next(error);
  }
});

app.get(`${apiPath}/:resultClass/count`, async (req, res, next) => {
  try {
    const data = await getResultCount({
      resultClass: req.params.resultClass,
      constraints: req.query.constraints == null ? null : JSON.parse(req.query.constraints),
      resultFormat: req.query.resultFormat == null ? 'json' : req.query.resultFormat
    });
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.get(`${apiPath}/:resultClass/instance/:uri`, async (req, res, next) => {
  try {
    const data = await getByURI({
      resultClass: req.params.resultClass,
      facetClass: req.query.facetClass || null,
      constraints: req.query.constraints == null ? null : JSON.parse(req.query.constraints),
      variant: req.query.variant || null,
      uri: req.params.uri,
      resultFormat: req.query.resultFormat == null ? 'json' : req.query.resultFormat
    });
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.get(`${apiPath}/:facetClass/facet/:id`, async (req, res, next) => {
  try {
    const data = await getFacet({
      facetClass: req.params.facetClass,
      facetID: req.params.id,
      sortBy: req.query.sortBy || null,
      sortDirection: req.query.sortDirection || null,
      constraints: req.query.constraints == null ? null : JSON.parse(req.query.constraints),
      resultFormat: req.query.resultFormat == null ? 'json' : req.query.resultFormat
    });
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.get(`${apiPath}/search`, async (req, res, next) => {
  let queryTerm = '';
  let latMin = 0;
  let longMin = 0;
  let latMax = 0;
  let longMax = 0;
  if (has(req.query, 'q')) {
    queryTerm = req.query.q;
  }
  if (has(req.query, 'latMin')) {
    latMin = req.query.latMin;
    longMin = req.query.longMin;
    latMax = req.query.latMax;
    longMax = req.query.longMax;
  }
  try {
    const data = await queryJenaIndex({
      queryTerm: queryTerm,
      latMin: latMin,
      longMin: longMin,
      latMax: latMax,
      longMax: longMax,
      resultFormat: req.query.resultFormat == null ? 'json' : req.query.resultFormat
    });
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.get(`/robots.txt`, (request, response) => {
  response.sendFile(path.join(publicPath, 'robots.txt'));
});

app.get(`/sitemap.xml`, (request, response) => {
  response.sendFile(path.join(publicPath, 'sitemap.xml'));
});

// Express server is used to serve the React app only in production
if (!isDevelopment) {
  /*  Routes are matched to a url in order of their definition
      Redirect all the the rest for react-router to handle */
  app.get('*', function(request, response) {
    response.sendFile(path.join(publicPath, 'index.html'));
  });
}

let servingInfo = isDevelopment ?
  `NODE_ENV=development, so Webpack serves the React app`
  : `Static files (e.g. the React app) will be served from ${publicPath}`;

const port = app.get('port');

app.listen(port, () =>
  console.log(`
  Express server listening on port ${port}
  API path is ${apiPath}
  ${servingInfo}
  `)
);
