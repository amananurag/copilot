function cookiesParser(cookies) {
  let session_id = "";
  // res.headers.cookie or cookies ( single string separated by ;) = ["cookie_1=value_1; cookie_2=value_2; session_id=1234"]
  if (cookies) {
    const cookieArray = cookies.split(";");
    // ['cookie_1=value_1','cookie_2=value_2', 'session_id=1234']
    console.log("cookieArray:", cookieArray);
    const cookieObj = {};

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim().split("="); // ['cookie_1', 'value_1'] ['cookie_2', 'value_2'] ['session_id', '1234']
      // [cookie_1] = [value_1];
      cookieObj[cookie[0]] = cookie[1];
    }

    session_id = cookieObj["session_id"];
    console.log("session_id:", session_id);
  }

  return session_id;
}

export default cookiesParser;
