const box = document.querySelector("box")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const button = document.querySelector("button")

const getquote =async () =>{
    const takefatch =await fetch("https://quotable.io/random")
    const syncfetch = await takefatch.json()
    // console.log(syncfetch)

    const quote = syncfetch.content;
    const auth = syncfetch.author;

    h1.innerText = quote;
    p.innerText = auth;


}
button.addEventListener("click",getquote)