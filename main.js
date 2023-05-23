const btn = document.getElementById('btn')
const animeContainer = document.querySelector('.anime-container')
const animeImg = document.querySelector('.anime-img')
const animeName = document.querySelector('.anime-name')




btn.addEventListener('click', async function () {
    try {
        btn.disabled = true
        btn.innerText = "Loding..."
        animeName.innerHTML = "Updating..."
        animeImg.src = "spinner.svg"
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btn.disabled = false
        btn.innerHTML = "Get Anime"
        animeContainer.style.display = "block"
        animeImg.src = data.url
        animeName.innerText = data.artist;

    } catch (error) {
        console.log(error)
        btn.disabled = false
        btn.innerHTML = "Get Anime"
        animeName.innerHTML = "An error happen, please try again later!"
    }
})
