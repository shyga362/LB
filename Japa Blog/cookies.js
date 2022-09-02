setCookie = (cname, cvalue, expDays) => {
   let date = new Date();
   date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
   const expires = "expires=" + date.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

getCookie = (cname) => {
   const name = cname + "=";
   const decodedCookie = decodeURIComponent(document.cookie);
   const cArray = decodedCookie.split('; ');
   let value;
   cArray.forEach(val => {
      if (val.indexOf(name) === 0) {
         value = val.substring(name.length);
      };
   });
      
      
   return value;
}


document.querySelector("#cookies-btn").addEventListener("click", () => {
   document.querySelector("#cookies").style.display = "none";
   setCookie("cookies", true, 15);
})

cookieMessage = () => {
   if !(getCookie("cookies")) {
      document.querySelector("#cookies").style.display = "block";
   }
}