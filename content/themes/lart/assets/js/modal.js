document.addEventListener("DOMContentLoaded", function() {
    const closeModalButtons = document.querySelectorAll("[data-close-button]")
    const articles = document.querySelectorAll("article.post")
    const overlay = document.getElementById("overlay")
    const themodal = document.querySelector('#modal');
    

    articles.forEach(art => {
        art.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            themodal.querySelector('.modal-title').innerHTML = art.querySelector('h2').innerHTML;
            themodal.querySelector('.post-date').innerHTML = art.querySelector('.post-date').innerHTML;
            themodal.querySelector('.modal-image').innerHTML = art.querySelector('figure').innerHTML;
            themodal.querySelector('.post-card-meta').innerHTML = art.querySelector('.post-card-meta').innerHTML;
            //themodal.querySelector('.done').innerHTML = art.querySelector('.done').innerHTML;
            themodal.querySelector('.price section strong').innerHTML = art.querySelector('.inner-data.price').innerHTML;
            themodal.querySelector('.done section').innerHTML = art.querySelector('.inner-data.done').innerHTML;


            modal.classList.add('active');
            overlay.classList.add('active');
        });

        let price = art.querySelector('.inner-data.price');
        let done = art.querySelector('.inner-data.done');

        if (price) {
            art.querySelector('.price section strong').innerHTML = price.innerHTML;
        };

        if (done) {
            art.querySelector('.done section').innerHTML = done.innerHTML;
        };

    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal")
            closeModal(modal)
        })
    })

    function closeModal(modal){
        if (modal == null) return
        modal.classList.remove("active")
        overlay.classList.remove("active")
    }
});