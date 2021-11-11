import checkIp from "./ip.js";
import checkMac from "./mac.js";
import checkVisa from "./visa.js";

const checker = {
  rules: {
    checkIp,
    checkMac,
    checkVisa,
  },
  validate(str, validator) {
    switch (validator) {
      case "ip": {
        return this.rules.checkIp(str);
      }
      case "mac": {
        return this.rules.checkMac(str);
      }
      case "visa": {
        return this.rules.checkVisa(str);
      }
    }
  },
};

export default checker;
