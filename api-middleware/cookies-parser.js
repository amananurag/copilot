import authController from "./../controller/auth/auth-controller.js";

function cookiesParser(req, res, next) {
  let session_id = "";
  let cookies = req.headers.cookie;

  if (!authController.sessionId) {
    if (req.url === "/login") {
      next();
      return;
    } else {
      res.status(401).send("Unauthorized");
    }
  }
  // res.headers.cookie or cookies ( single string separated by ;) = ["cookie_1=value_1; cookie_2=value_2; session_id=1234"]
  if (cookies) {
    console.log("inside cookie" + cookies);
    const cookieArray = cookies.split(";");
    // ['cookie_1=value_1','cookie_2=value_2', 'session_id=1234']

    const cookieObj = {};

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim().split("="); // ['cookie_1', 'value_1'] ['cookie_2', 'value_2'] ['session_id', '1234']
      // [cookie_1] = [value_1];
      cookieObj[cookie[0]] = cookie[1];
    }

    session_id = cookieObj["session_id"];
    // console.log(session_id + 'hello' + authController.sessionId)
  }
  if (session_id && session_id === authController.sessionId) {
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
}

export default cookiesParser;
