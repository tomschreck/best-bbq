import pug from 'pug';
import yelp from 'yelp-fusion';
import { yelpBusinesses } from '../data/yelp-businesses'

module.exports = (app) =>
{
  app.get('/', (req, res) =>
  {
    const term = 'BBQ';
    const location = 'Tarrant County Texas';

    yelpBusinesses(req, term, location)
      .then(data => 
      {
        const results = data.search.business;
        const template = require('../views/index.pug');
        const title = `Top ${results.length} ${term} Joints in ${location}`;
        const HTML = pug.render(template, {data: results, title: title});

        res.status(200).send(HTML)

        // res.json(data.search.business);
      });
  });

  app.get('/list', function (req, res)
  {
    const client = yelp.client(req.webtaskContext.secrets.YELP_CLIENT_SECRET);

    client.search({
      term: 'BBQ',
      location: 'Tarrant County Texas',
      sort_by: 'rating',
      radius: 32000
    }).then(response =>
    {
      res.json(response.jsonBody.businesses);
    }).catch(e =>
    {
      console.log(e);
    });
  });

  app.get('/raw', function (req, res)
  {
    yelpBusinesses(req, 'BBQ', 'Tarrant County Texas')
      .then(data => 
      {
        res.json(data.search.business);
      });
  });
}
