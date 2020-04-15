import { version, name } from "../package";

export default {
  company: "zapsoft",
  constants: {
    TOKEN: "token"
  },
  http: {
    timeout: 25000
  },
  releases: {
    name,
    version
  },
  copywriting: {
    loadingText: "加载中"
  }
};
