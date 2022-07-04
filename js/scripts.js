
const changeThemeBtn = document.querySelector("#change-theme");

//Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load Light or Dark Mode
function loadDarkMode() {
    const darkMode= localStorage.getItem("dark");
    if(darkMode){
        toggleDarkMode()
}}
loadDarkMode();
changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");
    //save or remove dark moode
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    } else {
        localStorage.removeItem("dark");
    }
})

