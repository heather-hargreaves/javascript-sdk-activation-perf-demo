const rp = require('request-promise')

module.exports = function (userId, experimentId, variationId) {
  this.userId = userId;
  this.experimentId = experimentId;
  this.variationId = variationId;
  var eventObj = {
      "account_id": "8002358607",
      "project_id": "10752950781",
      "visitors": [
        {
          "session_id": "",
          "visitor_id": this.userId,
          "snapshots": [
            {
              "decisions": [
                {
                  "campaign_id": "12743880239",
                  "experiment_id": this.experimentId,
                  "variation_id": this.variationId
                }
              ],
              "events": [
    			  {
    			    "entity_id": "12743880239",
    			    "type": "campaign_activated",
    			    "timestamp": Date.now(),
    			    "uuid": "be4554a4-d360-442e-936d-80d63cf17260"
    			  }
              ]
            }
          ]
        }
      ],
      "anonymize_ip": false,
      "client_name": "Optimizely/event-api-demo",
      "client_version": "1.0.0"
    };
  this.sendEvents = function() {

    var options = {
      method: 'POST',
      uri: 'https://logx.optimizely.com/v1/events',
      body: eventObj,
      json: true // Automatically stringifies the body to JSON
    };

    rp(options)
      .then(function(parsedBody) {
        console.log('successful post', parsedBody);
      })
      .catch(function(err) {
        console.log("unsuccessful post", err);
      });

  };
};
