const navList = [
    {title: "Home", link: "/WSOA3029A_1860489/index.html"},
    {title: "About", link: "/WSOA3029A_1860489/about/index.html"},
    {title: "Blog", link: "/WSOA3029A_1860489/blog/index.html"},
    {title: "Visualisations", link: "/WSOA3029A_1860489/visualisations/index.html"}
]

const createList = () => {
    let sec = document.createElement('section');
    for (let item of navList){
        let a = document.createElement('a');
        a.className = 'nav-element';
        a.innerText = item.title;
        a.href = item.link;
        //a.className = "nav-list";
        sec.appendChild(a);
    }
    return sec;
};

//may return to this at later stage. Code to populate the header.
//const createHeader = () => {
//    const header = document.createElement('header');
//    const h1 = document.createElement("h1");
//    h1.innerText = "Mbeki's Swing";
//    let img = document.createElement('img');
//    img.src = "/header.jpg";
//    img.alt = "Image of a person playing the double bass.";
//    img.width = "400";
//    img.height = "341";
//    const nav = document.createElement('nav');
//    const backButton = document.createElement('button');
//    backButton.type = "button";
//    backButton.className = "back";
//    backButton.innerText = "Back";
//
//    //append to header
//    header.appendChild(h1);
//    header.appendChild(img);
//    header.appendChild(nav);
//    header.appendChild(backButton);
//};

//createHeader();
const nav = document.querySelector('nav');
const ul = createList();
nav.appendChild(ul);