var SERVER_GROUP = {
  DEBUG: {
    API_SERVER: "http://sandkg.kktv1.com:8384/kkgame/entrance",
    JS_API_SERVER: "http://sandkg.kktv1.com:8384/kkgame/entrance",
  },
  RELEASE: {
    API_SERVER: "http://apikg.kktv1.com:8080/kkgame/entrance",
    JS_API_SERVER: "http://apikg.kktv1.com:8080/kkgame/entrance",
  }
}

module.exports.serverConfig = SERVER_GROUP.DEBUG;
