const router = require("express").Router();
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

module.exports = router;

const authenticator = new IamAuthenticator({
  apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

const assistant = new AssistantV2({
  version: "2019-02-28",
  authenticator: authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
});

router.get("/session", async (req, res, next) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });

    console.log("session", session)

    res.json(session["result"]);
  } catch (error) {
    next(error);
  }
});


