import jwt_decode from "jwt-decode";

export const isValidAndAuthorized = (token, time = null, permissions = []) => {
  try {
    const decoded = jwt_decode(token);

    // ms to s
    time = Math.floor(time / 1000);

    let result = true;
    // is expired?
    result &= decoded.exp - time > 0;

    // valid permissions?
    // TODO: ADD PERMISSIONS

    console.log("AUTH STATUS", result);
    return result;
  } catch (error) {
    return false;
  }
};
