function cookiesParser(cookies) {
  let session_id = "";
  if (cookies) {
    const cookieArray = cookies.split(";");
    console.log("cookieArray:", cookieArray);
    const cookieObj = {};

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim().split("=");
      cookieObj[cookie[0]] = cookie[1];
    }

    session_id = cookieObj["session_id"];
    console.log("session_id:", session_id);
  }

  return session_id;
}

export default cookiesParser;
