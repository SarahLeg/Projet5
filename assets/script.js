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

//je déclare l'index à 0 (non pas à 1 car premier élément du tableau=0)
let index = 0;

//je déclare les deux flèches (depuis leurs classes) que je nomme arrow_left et arrow_right
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

//je déclare les éléments... (depuis l'id #banner en précisant l'élément p)
const tagLine = document.querySelector("#banner p");
//(et depuis la classe .banner-img)
const bannerImg = document.querySelector(".banner-img");
//...qui vont être modifié à chaque évènement (reprit les noms du tableau)

//je met les function click dans les eventListener (elles seront anonymes)
arrow_left.addEventListener('click', () => {
	index--;
	//console.log(index);
	if(index < 0) {index=slides.length - 1};
	tagLine.innerHTML = slides[index].tagLine;
	bannerImg.src= slides[index].image;
	//console.log(slides[index]);
	updateBulletPoints();
});

arrow_right.addEventListener('click', () => {
	index++;
	//console.log(index);
	if(index === 4) {index=0};
	tagLine.innerHTML = slides[index].tagLine;
	bannerImg.src= slides[index].image;
	//console.log(slides[index]);
	updateBulletPoints();
});

//je déclare l'élément dans lequel les dots vont se multiplier (la div qui a la classe .dots)
const bullet_points = document.querySelector('.dots');

//je duplique les dots (foreach pour chaque élément du tableau slides)
slides.forEach( () => {
	//je crée un span nommé bullet
    const bullet = document.createElement('span');
	//bullet à qui j'attribue la classe dot (existe dans le CSS pour ça)
    bullet.classList.add('dot');
	//que j'insère dans bullet_points (déclaré plus haut)
    bullet_points.appendChild(bullet);
});

//je déclare les points comme chaque .dot de bullet_points
const bullets = bullet_points.querySelectorAll('.dot');

function updateBulletPoints () {
	//
    bullets.forEach((bullet, i) => {
		bullet.classList.remove('dot_selected');
        if (i === index) {
            bullet.classList.add('dot_selected')
        };
    });
};

//je l'invoque aussi ici pour que index=0 soit selected au chargement de la page, pas uniquement au click
updateBulletPoints();