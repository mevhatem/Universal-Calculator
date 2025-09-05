const textbox = document.querySelector("#yazi");
const buttons = document.querySelectorAll(".buton:not(#equal):not(#clear)");
const equalbtn = document.querySelector("#equal");
const clearbtn = document.querySelector("#clear");

buttons.forEach(buton => {
    buton.addEventListener("click", () => {
        const value = buton.dataset.value || buton.innerText;
        textbox.value += value;
    });
});

equalbtn.addEventListener("click", () => {
    try{
        const sonuc = eval(textbox.value);
        textbox.value = sonuc;
    }
    catch{
        textbox.value = "Geçersiz İfade";
        textbox.classList.add("error");
        

        setTimeout(() => {
            textbox.value = "";
            textbox.classList.remove("error")
        }, 1000);
    }
});

clearbtn.addEventListener("click", () => {
    textbox.value = "";
})

