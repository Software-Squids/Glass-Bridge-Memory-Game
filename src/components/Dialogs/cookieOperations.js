function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  let expiryDate = date.toUTCString();
  document.cookie = name + '=' + value + '; expires=' + expiryDate + "; path=/; sameSite=Lax";
}

function getCookie(name) {
  const cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop()
  return cookie;
}

function authHeader() {
  const user = getCookie('jwt_token')

  if (user) {
    return { Authorization: 'Bearer ' + user }
  }
}

export { setCookie, getCookie, authHeader }