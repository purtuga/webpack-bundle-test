// common-micro-libs exports EVERYTHING via index.js
// https://github.com/purtuga/common-micro-libs/blob/master/src/index.js
// But: we only want `objectExtend`
//
import { objectExtend } from "common-micro-libs"
export const mod3 = objectExtend({}, { text: "module 3" });


//-----------------------------------------------
// This below seems to work fine...
//-----------------------------------------------
// export const mod3 = "module 3";
// export default mod3;
//
// export function getMod3() {
//     return mod3;
// }

