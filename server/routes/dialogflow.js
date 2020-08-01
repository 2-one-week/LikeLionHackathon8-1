const express = require('express');
const router = express.Router();
const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
//route 두개 만들기
const config = require('../config/key');
const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode
// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
//Text Query Route
router.post('/textQuery', async(req, res)=> {
    //we need to send some info from client to DialogFlow API
     
    /**
     * Send a query to the dialogflow agent, and return the query result.
     * @param {string} projectId The project to be used
     */

     

     
      // The text query request.
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: req.body.text,
            // The language used by the client (ko-KR)
            languageCode: languageCode,
          },
        },
      };
     
      // Send request and log result
      const responses = await sessionClient.detectIntent(request);
      console.log('Detected intent');
      const result = responses[0].queryResult;
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);

      res.send(result)
    })

//Event Query Route

router.post('/eventQuery', async(req, res)=> {
  //we need to send some info from client to DialogFlow API
   
  /**
   * Send a query to the dialogflow agent, and return the query result.
   * @param {string} projectId The project to be used
   */

   

   
    // The event query request.
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          // The query to send to the dialogflow agent
          name: req.body.event,
          // The language used by the client (ko-KR)
          languageCode: languageCode,
        },
      },
    };
   
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
  })


module.exports = router;
