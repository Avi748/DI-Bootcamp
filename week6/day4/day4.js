const allBooks = [{
    title: "Harry Potter 1",
    author: "JK R",
    img: "https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy_136678971_1190196747.coreimg.100.1285.png/1693924446949/7-hp-grandpre-refresh-deathlyhallows-sm.png",
    alreadyRead: true
    },
    {
    title: "Harry Potter 2",
    author: "JK R",
    img: "https://m.media-amazon.com/images/I/81gOJoEgVoL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: false
    }
];

const section = document.querySelector(".listBooks")

for(let book of allBooks){
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    const img = document.createElement("img")

    h2.innerText = book.title
    h3.innerText = book.author
    img.setAttribute("src", book.img);
    img.style.width = "100px"

    div.append(h2,h3,img);
    section.append(div)

    if(book.alreadyRead){
        h2.style.color = "red"
        h3.style.color = "red"
    }
}
