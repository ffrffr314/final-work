const reviewBlocks = document.querySelectorAll('.review');
const colors = [
    {
        bColor: "#feea0e",
        sColor: "#feea0e",
    },
    {
        bColor: "#14d814",
        sColor: "#14d814",
    },
    {
        bColor: "#ff0014",
        sColor: "#ff0014",
    },
];

for (let i = 0; i < reviewBlocks.length; i++) {
    reviewBlocks[i].setAttribute("style", `--b-color: ${colors[i].bColor}; --s-color: ${colors[i].sColor}`);
    const stars = reviewBlocks[i].querySelector('.stars');
    for (let j = 0; j < 5; j++) {
        stars.innerHTML += createSVGStar(colors[i].sColor);
    }
}


function createSVGStar(color) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
        <path d="M12.198 0L15.568 7.437L23.8 8.292L17.651 13.742L19.368 21.708L12.198 17.64L5.028 21.708L6.746 13.743L0.597 8.292L8.828 7.437L12.198 0Z" fill=${color} />
    </svg>
    `
}

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const reviews = document.querySelector('.reviews__blocks');
let position = 0;

arrowLeft.addEventListener('click', () => {
    if (position > -400 * (reviewBlocks.length - 1))
        position -= 400;
    reviews.style.left = position + "px";
})
arrowRight.addEventListener('click', () => {
    if (position < 0) {
        position += 400;
        reviews.style.left = position + "px";
    }
})

const start = document.querySelector('.get-started');
const floydFurniture = document.querySelector('.floyd-furniture');

start.addEventListener('click', () => {
    floydFurniture.scrollIntoView({ behavior: "smooth" });
});