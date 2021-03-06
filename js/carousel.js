class Carousel {
    // CREATING THE CONSTRUCTOR TO THE DISPLAY THE CAROUSEL
    constructor(options) {
        this.container = options.container;
        this.icon = options.icon;
        this.title = options.title;
        this.subtitle = options.subtitle;
        this.cards = [];
        this.div = document.getElementById(this.container);
        this.displayCarousel();
        this.fetchCards();
        this.displayCards();
        this.displayArrowsOnHover();
    }

    // DISPLAYING CAROUSELS
    displayCarousel() {
        const div = document.createElement('div');
        div.className = 'carousel-container';
        div.innerHTML = `
            <div class="icon"><i class="material-icons">${this.icon}</i></div>
            <div class="description">
                <h4 class="title">${this.title}</h4>
            </div>
        `;
        this.div.appendChild(div);
    }

    // CREATING DATA FOR THE CAROUSEL
    fetchCards() {
        this.cards.push(
            {
                image: "https://picsum.photos/200/300?random=1",
                type: 'video',
                duration: 3600,
                title: 'First Title',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=2",
                type: 'video',
                duration: 3600,
                title: 'First Title',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=3",
                type: 'video',
                duration: 3600,
                title: 'First Title',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=4",
                type: 'video',
                duration: 3600,
                title: 'First Title',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=5",
                type: 'video',
                duration: 3600,
                title: 'First Title',
                cardinality: 'single'
            },
        )
    }

    // DISPLAYING CARDS WITH FETCHED DATA
    displayCards() {
        const div = document.createElement('div');
        div.className = 'container-cards-arrows';
        let HTML = `
            <div class="arrow-left">
            <i class="material-icons custom">arrow_back</i>
            </div>
        `;
        HTML += '<div class="container-cards">'
        this.cards.forEach(item => {
           HTML += `
                <div class="single-card">
                    <div class="image">
                        <img src="${item.image}" />
                    </div>
                    <h5 class="title">${item.title}</h5>
                </div>
            `;
        });
        HTML += '</div>';
        HTML += `
            <div class="arrow-right">
                <i class="material-icons custom">arrow_forward</i>
            </div>
        `;
        div.innerHTML = HTML;

        this.div.appendChild(div);
    }


    
}

module.exports = {Carousel};

