function detectColorScheme() {
    var theme = "light"; 
    const darkModeBtn = document.getElementById("darkModeBtn");
    const lightModeBtn = document.getElementById("lightModeBtn");
    const chatDark = document.getElementById("chatDark");
    const chatLight = document.getElementById("chatLight");
    darkModeBtn.addEventListener("click",toggleColorTheme);
    lightModeBtn.addEventListener("click",toggleColorTheme);
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
    setTheme(theme);
  }

  function toggleColorTheme() {
    let theme = document.documentElement.getAttribute("data-theme");
    console.log(theme);
    if(theme == "dark"){
        theme = "light";
    } else {
        theme = "dark";
    }
   setTheme(theme);
  }

  function setTheme(theme){
    console.debug("switching theme to "+theme);
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        lightModeBtn.style.display = "block";
        darkModeBtn.style.display = "none";
        chatDark.style.display = "inline";
        chatLight.style.display = "none";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightModeBtn.style.display = "none";
        darkModeBtn.style.display = "block";
        chatDark.style.display = "none";
        chatLight.style.display = "inline";
      }
  }
  
  detectColorScheme();