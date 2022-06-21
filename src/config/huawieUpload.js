export default class HuawieUploads {
  static singleton = null;
  static obsClient = null;

  constructor() {
    this.obsClient = new window.ObsClient({
      access_key_id: "UU9PVEFNRJWZUZCJVBH9",
      secret_access_key: "S89JceWvYo5PVOIfmWoJ1jcm0QHDcRj30kzcWTQX",
      server: "obs.my-kualalumpur-1.alphaedge.tmone.com.my",
      region: "MY-Kuala Lumpur",
      timeout: 60 * 5,
    });
  }

  static getInstance() {
    if (HuawieUploads.singleton === null) {
      HuawieUploads.singleton = new HuawieUploads();
    }
    return HuawieUploads.singleton;
  }
}
