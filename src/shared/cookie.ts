export const cookies = {
  setCookie(cname: string, cvalue: string, exdays: number) {
    if (typeof document == 'undefined') {
      console.warn(new Date(), "Cannot store cookies on serverside")
      return
    }
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie(cname: string) {
    if (typeof document == 'undefined') {
      console.warn(new Date(), "Cookies is not available on serverside")
      return
    }
    let name = cname + "=";
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      let c = cookie;
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}