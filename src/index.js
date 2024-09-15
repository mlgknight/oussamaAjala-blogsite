const viewMore = document.getElementById("view-more");
const hiddenCards = document.querySelectorAll(".hidden-cards");

viewMore.addEventListener("click", viewMoreCards);

function viewMoreCards() {

    
    hiddenCards.forEach(card => {
        card.classList.toggle('hidden-cards');
        
    });

    const isViewMore = viewMore.innerHTML.includes("View Less");

    if (isViewMore){
        viewMore.innerHTML = `<h3 id="view-more" class="view-more">View More</h3>`
    } else {
        viewMore.innerHTML = `<h3 id="view-more" class="view-more">View Less</h3>`
    }

}

