var express = require('express');
var app = express();
var userIdsHelper = require('./userid_helper.js')
var sendEvents = require('./batch_event_helper.js')

// Minimal client
const optimizely = require("@optimizely/optimizely-sdk");
const rp = require("request-promise");

//logging clients
const defaultLogger = require('@optimizely/optimizely-sdk/lib/plugins/logger');
const LOG_LEVEL = require('@optimizely/optimizely-sdk/lib/utils/enums').LOG_LEVEL;

// TODO: replace with your datafile URL
const DATAFILE_URL =
  "https://cdn.optimizely.com/datafiles/PFXzrzGx6TcTfrtDecyXgK.json";
let datafile;
let optimizelyClient;
let variation
const NUM_USERIDS = 10000; //enter number here

// create array of userIds
var userIds = userIdsHelper(NUM_USERIDS);

var options = {
  uri: DATAFILE_URL,
  json: true
};

rp(options)
  .then(function(repos) {
    datafile = repos;
    optimizelyClient = optimizely.createInstance({
      datafile,
      logger: defaultLogger.createLogger({
        logLevel: LOG_LEVEL.INFO
      })
    })
  })
  .then(function(){
    for(var i = 0; i < userIds.length; i++) {
      console.log(userIds[i]);
      let variation = optimizelyClient.activate("BATCH_EVENTS_TEST", userIds[i])
      console.log("Heather's variation logged", variation);
    }
    return process.exit();
  });



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
