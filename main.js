// Web Development - Final Project || BSIT 3-1 || Magno, Katherine | Nilooban, Nathaniel | Tegio, Irish
window.addEventListener("scroll", ()=>{
    document.querySelector(".Background").style.backgroundSize = `${window.scrollY * 1.8 + 1600}px`
    document.querySelector(".Background h1").style.opacity = `${(-window.scrollY + 300) * .004}`
})

// Function to redirect to the IIRF page
function redirect() {
    window.location.href="form.html";
}