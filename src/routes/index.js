import pug from 'pug';

const index = require('../views/index.pug');

module.exports = (app) =>
{
  app.get('/', (req, res) =>
  {
    res.send(renderView());
    // const HTML = pug.render(index);

    // res.status(200).send(HTML);
    // const HTML = renderView({
    //   title: 'Best BBQ In Fort Worth Texas',
    //   body: '<h1>Best BBQ In Fort Worth Texas Herman</h1>'
    // });

    // res.set('Content-Type', 'text/html');
    // res.status(200).send(HTML);
  });

  app.get('/list', function (req, res)
  {
    console.log('secrets wtf:', req.webtaskContext.secrets);
    const message = `hello from listful`;

    res.status(200).send(message);
    // yelp.accessToken(req.webtaskContext.secrets.YELP_CLIENT_ID, req.webtaskContext.secrets.YELP_CLIENT_SECRET).then(response =>
    // {
    //   const client = yelp.client(response.jsonBody.access_token);
    //   client.search({
    //     term: 'bars',
    //     location: req.body.query
    //   }).then(response =>
    //   {
    //     var bars = [];
    //     var results = response.jsonBody.businesses;
    //     for (var i = 0; i < results.length; i++)
    //     {
    //       bars.push({
    //         name: results[ i ].name,
    //         yelpId: results[ i ].id,
    //         image_url: results[ i ].image_url,
    //         display_address: results[ i ].location.display_address,
    //         display_phone: results[ i ].display_phone,
    //         visitors: []
    //       })
    //     }
    //     var promises = bars.map(function (bar)
    //     {
    //       return new Promise(function (resolve, reject)
    //       {
    //         req.barModel.find({ yelpId: bar.yelpId }, function (err, barInDb)
    //         {
    //           if (err)
    //           {
    //             return reject(err);
    //           }
    //           if (barInDb.length)
    //           {
    //             bar.visitors = barInDb[ 0 ].visitors;
    //           }
    //           resolve();
    //         })
    //       })
    //     });
    //     Promise.all(promises).then(function ()
    //     {
    //       res.json({ bars: bars });
    //     }).catch(e => res.json({ err: e.response.body }))
    //   }).catch(e => res.json({ err: e.response.body }));
    // });
  });
}

// function renderView(locals) {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <meta charset="utf-8">
//       <title>${locals.title}</title>
//     </head>

//     <body>
//       ${locals.body}
//     </body>
//     </html>
//   `;
// }


function renderView()
{
  var page=`
    #message
        h1 Hello World Foo
        h3 pug's in the house`; 
         
  return pug.render(page);
}