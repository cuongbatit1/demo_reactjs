export const toInitials = (str) =>
  str
    // split string into array of strings (example: "fiRsT reSPoNsE AcAdEmY" ==> ["fiRsT", "reSPoNsE", "AcAdEmY"])
    .split(" ")
    // map over words and return a capitalized first letter of each word (example: ["fiRsT", "reSPoNsE", "AcAdEmY"] ==> ["F", "R", "A"])
    .map((c) => c.charAt(0).toUpperCase())
    // join letters to single string (example: ["F", "R", "A"] ==> "FRA")
    .join("")
    // append second letter of first word to this new string (example: "FRA" ==> "FRAI")
    .concat(str.charAt(1).toUpperCase())
    // limit this new string to 2 characters (example: "FRAI" ==> "FR")
    .substring(0, 2);

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export function isNotNull(value) {
  return typeof value !== "undefined" && value !== null;
}

export function checkRoleEditDataGird(userAuth, params) {
  if (userAuth?.role && userAuth.role === "admin") {
    if (userAuth.email === "admin@gmail.com") {
      if (params.row.email === "admin@gmail.com") {
        return false;
      } else {
        return true;
      }
    }
    return params.row.role === "member" || params.row.role === "manager";
  } else if (userAuth?.role && userAuth.role === "manager") {
    return params.row.role === "member";
  } else {
    return false;
  }
}
