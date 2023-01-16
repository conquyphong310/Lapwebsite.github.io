//option menu
const $ = document.getElementsByClassName.bind(document);
const opt = $("option_btn");
for (let o of opt){
    o.onclick = function () {
        
        $("active")[0].classList.remove("active");
        this.classList.add("active");
    }
}
