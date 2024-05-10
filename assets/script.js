 const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;

//j'importe les deux flèches
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

//j'importe les éléments HTML qui vont être modifié à chaque évènement
const tagLine = document.querySelector("#banner p");
const bannerImg = document.querySelector(".banner-img");

//je met les function click dans les eventListener (elles seront anonymes)
arrow_left.addEventListener('click', () => { 
	index--;
	//console.log(index);
	if(index < 0) {index=slides.length - 1};
	tagLine.innerHTML = slides[index].tagLine;
	bannerImg.src= slides[index].image;
	//console.log(slides[index])
	updateBulletPoints
});

arrow_right.addEventListener('click', () => {
	index++;
	//console.log(index);
	if(index === 4) {index=0};
	tagLine.innerHTML = slides[index].tagLine;
	bannerImg.src= slides[index].image;
	//console.log(slides[index])
	updateBulletPoints
});

//je déclare l'élément dans lequel les dots vont se multiplier
const bullet_points = document.querySelector('.dots');

//je duplique les dots
slides.forEach( () => {
    const bullet = document.createElement('span');
    bullet.classList.add('dot');
    bullet_points.appendChild(bullet);
});

updateBulletPoints( () => {
    bullets.forEach((bullet, i) => {
        if (i === index) {
            bullet.classList.add('_selected');
        }
    });
});