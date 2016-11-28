var express = require('express');
var router = express.Router();
var result;
// var mws = require('amazon-mws-node')({
//     AmzSecretKey: 'nySEuqkG2coIW53NER',
//     AWSAccessKeyId: 'AKIAJOVYKDEC5IYAQR3A'
//   });

//   mws({
//     method: 'GET',
//     base: 'mws.amazonservices.com',
//     endpoint: '/Orders/2013-09-01',
//     params: {
//       'Action': 'ListOrders',
//       'CreatedAfter': '2016-09-01',
//       'MarketplaceId.Id.1': 'ATVPDKIKX0DER',
//       'SellerId': 'A2LX4IL6EQVA63',
//       'MWSAuthToken': 'amzn.mws.64abd052-d8bc-adc7-0d2e-35a0e51acb5f',
//       'Version': '2013-09-01'
//     },
//     callback: function (error, response, body) {
//       result = body;
//       console.log('this is the result'); 
//       console.log(body);
//     }
//   });

// mws-sdk-promises
var result;
var MWS = require('mws-sdk-promises'),
client = new MWS.Client('AKIAJOVYKDEC5IYAQR3A', 'nySEuqkG2coIW53NERc9qbUU03edNFktQcqobkTR', 'A2LX4IL6EQVA63', {}),
MarketplaceId = "ATVPDKIKX0DER";

function getListOrders(client, args) {
var req = MWS.Orders.requests.ListOrders();
req.set(args);
return client.invoke(req);
}
var date = new Date();
getListOrders(client, {
MarketplaceId: MarketplaceId,
MaxResultsPerPage: 10,
CreatedAfter: new Date(2015, 09, 01),
CreatedBefore: new Date(2016, 10, 21)
})
.catch(function(error) {
console.error(error);
})
.then(function(RESULT){
console.log("--------");
console.log(JSON.stringify(RESULT));
result = JSON.stringify(RESULT);
console.log("--------");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(result);
  res.render('index', { title: 'result' });
});

router.get('/createuser', function(req, res, next) {
  res.render('createuser', null);
});

module.exports = router;
