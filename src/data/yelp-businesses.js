import { GraphQLClient } from 'graphql-request'

module.exports.yelpBusinesses = function(req, term, location)
{
    const query = `{
        search
        (
          term: "${term}",
          location: "${location}",
          limit: 20,
          sort_by: "rating"
        )
        {
            total
            business {
              id
              name
              rating
              photos
              review_count
              price
              categories
              {
                title
              }
              phone
              url
              location
              {
                formatted_address
              }
              reviews
              {
                id
                text
              }
            }
        }
    }`;

    const client = new GraphQLClient('https://api.yelp.com/v3/graphql', 
    {
      headers:
      {
        Authorization: `Bearer ${req.webtaskContext.secrets.YELP_CLIENT_SECRET}`,
      }
    });

    return client.request(query);
};