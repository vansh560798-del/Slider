let slides = [
    {
        image: "https://images.pexels.com/photos/39633212/pexels-photo-39633212.jpeg?_gl=1*feewjl*_ga*MTQ0NzQ2OS4xNzk0ODExNzEz*_ga_8JE65Q40S6*czE3OTQ4MTE3MTIkbzEkZzEkdDE3OTQ4MTE3NjMkajkkbDAkaDA",
        title: "Iceland",
        descritpion: "A picturesque Icelandic church with a red roof amidst a blooming lupine meadow and lush hills." 
    },
    {
        image: "https://images.pexels.com/photos/11991514/pexels-photo-11991514.jpeg?_gl=1*k0njbn*_ga*MTQ0NzQ2OS4xNzk0ODExNzEz*_ga_8JE65Q40S6*czE3OTQ4MTE3MTIkbzEkZzEkdDE3OTQ4MTIxNTUkajM5JGwwJGgw",
        title: "Querétaro,Mexico",
        descritpion: "Aerial view of scenic rural fields and hills at twilight in Querétaro, Mexico." 
    },
    {
        image: "https://images.pexels.com/photos/1412218/pexels-photo-1412218.jpeg?_gl=1*1cen3uk*_ga*MTQ0NzQ2OS4xNzk0ODExNzEz*_ga_8JE65Q40S6*czE3OTQ4MTE3MTIkbzEkZzEkdDE3OTQ4MTIzNzIkajU5JGwwJGgw",
        title: "United Kingdom",
        descritpion: "Breathtaking view of a mountainous landscape with moody skies and natural scenery." 
    },
    {
        image: "https://images.pexels.com/photos/8511536/pexels-photo-8511536.jpeg?_gl=1*bz37yk*_ga*MTQ0NzQ2OS4xNzk0ODExNzEz*_ga_8JE65Q40S6*czE3OTQ4MTE3MTIkbzEkZzEkdDE3OTQ4MTI2NjIkajE5JGwwJGgw",
        title: "Cagayan Valley,Philippines",
        descritpion: "Tranquil dirt road with puddles at golden hour in Cagayan Valley, Philippines." 
    },
    {
        image: "https://images.pexels.com/photos/34924711/pexels-photo-34924711.jpeg?_gl=1*bo75f5*_ga*MTQ0NzQ2OS4xNzk0ODExNzEz*_ga_8JE65Q40S6*czE3OTQ4MTE3MTIkbzEkZzEkdDE3OTQ4MTMwMDMkajQ1JGwwJGgw",
        title: "Osaka,Japan",
        descritpion: "Capture the beauty of the iconic Shitennoji Temple pagoda set against a vibrant blue sky in Osaka, Japan." 
    }
]

let currentIndex = 0;

const slider = document.getElementById("slider");
const slideElement = document.querySelector(".slide");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let autoSlideTimer = null;

function showSlide(){
    let slide = slides[currentIndex];

    document.getElementById("slideImage").src = slide.image;
    document.getElementById("slideTitle").textContent = slide.title;
    document.getElementById("slideDescription").textContent = slide.descritpion;

    slideElement.classList.remove("fade-in");

    void slideElement.offsetWidth;

    slideElement.classList.add("fade-in");
}

function nextSlide(){
    if(currentIndex < slides.length - 1){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    showSlide();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function prevSlide(){
    if(currentIndex > 0){
        currentIndex--;
    }
    else{
        currentIndex = slides.length - 1;
    }
    showSlide();
}

function startAutoSlide(){
    if(autoSlideTimer !== null){
        return;
    }
    autoSlideTimer = setInterval(nextSlide, 3000)
}

function stopAutoSlide(){
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
}

slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);

showSlide();

startAutoSlide();