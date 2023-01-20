const theme = [
    {
        "img_box_color": "rgb(224, 20, 76)",
        "main_bg_color": "rgb(255, 151, 193)",
        "sidebar_color": "rgb(255, 88, 88)",
        "image": ["Illya_img/Night_view.jpg","Illya_img/on.png","Illya_img/pokemon.jpg","Illya_img/illya 2.jpg"],
        "caption": ["Night city","Yukata","Pokemon","😍"]
    },
    {
        "img_box_color": "#137a7f",
        "main_bg_color": "#86cecb",
        "sidebar_color": "#e12885",
        "image": ["miku_img/miku_ocean.jpg","miku_img/miku_smile.jpg","miku_img/miku_smol.jpg","miku_img/miku_vamp.jpg"],
        "caption": ["Water","😂","cute","(㇏(•̀ᵥᵥ•́)ノ)"]
    },
    {
        "img_box_color": "rgb(24, 20, 7)",
        "main_bg_color": "rgb(55, 11, 153)",
        "sidebar_color": "rgb(25, 88, 88)",
        "image": ["miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg"],
        "caption": ["Water","😂","cute","(㇏(•̀ᵥᵥ•́)ノ)"]
    },
    {
        "img_box_color": "rgb(24, 20, 7)",
        "main_bg_color": "rgb(55, 11, 153)",
        "sidebar_color": "rgb(25, 88, 88)",
        "image": ["miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg"],
        "caption": ["Water","😂","cute","(㇏(•̀ᵥᵥ•́)ノ)"]
    },
    {
        "img_box_color": "rgb(24, 20, 7)",
        "main_bg_color": "rgb(55, 11, 153)",
        "sidebar_color": "rgb(25, 88, 88)",
        "image": ["miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg","miku_img/miku_ocean.jpg"],
        "caption": ["Water","😂","cute","(㇏(•̀ᵥᵥ•́)ノ)"]
    }
];


//option menu
const $ = document.getElementsByClassName.bind(document);
const opt = $("option_btn");
const card = $("images_box_card");
for (let i=0;i<opt.length;i++){
    opt[i].onclick = function () {
        $("active")[0].classList.remove("active");
        this.classList.add("active");
        document.documentElement.style.setProperty("--main_bg_color",theme[i].main_bg_color);
        document.documentElement.style.setProperty("--img_box_color",theme[i].img_box_color);
        document.documentElement.style.setProperty("--sidebar_color",theme[i].sidebar_color);
        for(let j=0;j<card.length;j++){
            card[j].children.item(0).src = theme[i].image[j];
            card[j].children.item(1).innerHTML = theme[i].caption[j];
        }
    }
}

function showpopup(){
    let popup_lap = document.getElementById("popup");
    popup_lap.style.visibility = "visible";
}
function closepopup(){
    let popup_lap = document.getElementById("popup");
    popup_lap.style.visibility = "hidden";
}


