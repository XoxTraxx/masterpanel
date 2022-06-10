const getUrl = (mode) => {
    switch (mode) {
      case "consumerPwa":
        return "https://consumerpwa.trax.asia:3000/?id=";
      default:
        return "https://consumerpwa.trax.asia:3000/?id=";
    }
  };
  
  const config = {
  mdg_api_url: "https://beapisvr.trax.asia/api/",
    // mdg_api_url: "http://7937-110-38-87-186.ngrok.io/api/",
  //  mdg_api_url: "http://192.168.1.18:9051/api/",
    fcmKey: "testFcmKey",
    google_map_key: "AIzaSyCvlR6R50PN-7o-7UABXDTrdjIAMudbRfM",
    // resetPasswordUrl: "http://13.228.129.207:10001/resetPassword",
    // qrUrl: "https://admincms.trax.com/TracibilityInfo/?rule=",
    pwaUrl: getUrl(),
  };
  export default config;
  