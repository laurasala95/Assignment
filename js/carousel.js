class Carousel {
    // CREATING THE CONSTRUCTOR TO DISPLAY THE CAROUSEL
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
        this.containerCardsArrows = this.div.querySelector(".container-cards-arrows");
        this.containerCards = this.div.querySelector(".container-cards");
        this.arrowRight = this.div.querySelector(".arrow-right");
        this.arrowLeft = this.div.querySelector(".arrow-left");
        this.arrowListener();
    }

    // DISPLAYING CAROUSELS
    displayCarousel() {
        const div = document.createElement('div');
        div.className = 'carousel-container';
        div.innerHTML = `
            <div class="icon"><i class="material-icons">${this.icon}</i></div>
            <div class="description">
                <h4 class="title">${this.title}</h4>
                <p class="subtitle">${this.subtitle}</p>
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
                title: 'Title 1',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=2",
                type: 'playlist',
                duration: 1000,
                title: 'Title 2',
                cardinality: 'collection'
            },
            {
                image: "https://picsum.photos/200/300?random=3",
                type: 'playlist',
                duration: 2300,
                title: 'Title 3',
                cardinality: 'collection'
            },
            {
                image: "https://picsum.photos/200/300?random=4",
                type: 'news',
                duration: 4600,
                title: 'Title 4',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=5",
                type: 'playlist',
                duration: 1500,
                title: 'Title 5',
                cardinality: 'collection'
            },
            {
                image: "https://picsum.photos/200/300?random=6",
                type: 'other',
                duration: 800,
                title: 'Title 6',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=7",
                type: 'news',
                duration: 1600,
                title: 'Title 7',
                cardinality: 'single'
            },
            {
                image: "https://picsum.photos/200/300?random=8",
                type: 'playlist',
                duration: 2400,
                title: 'Title 8',
                cardinality: 'collection'
            },
            {
                image: "https://picsum.photos/200/300?random=9",
                type: 'video',
                duration: 3600,
                title: 'Title 9',
                cardinality: 'single'
            }
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
                <div class="single-card" id=${item.cardinality}>
                    <div class="image">
                        <img src="${item.image}" />
                    </div>
                    <div class="type">
                        <p>${item.type}</p>
                    </div>
                    <div class="duration">
                        <p>${this.convertDuration(item.duration)}</p>
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

    // CONVERTING SECONDS TO HOURS AND MINUTES
    convertDuration (seconds){
        let hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);

        return hours+"h "+minutes+"m";
    }

    // HANDLING ARROWS CLICK
    arrowListener() {
        // LEFT ARROW
        this.arrowLeft.onclick = () => {
            this.containerCards.scrollLeft -= 230;
        }

        // RIGHT ARROW
        this.arrowRight.onclick = () => {  
            let previousValue = this.containerCards.scrollLeft;
            this.containerCards.scrollLeft += 230;   
            let nextValue = this.containerCards.scrollLeft; 
        }
    }

    // Scroll left
    scrollLeft(){   
        this.containerCards.scrollLeft-=230;          
    }

    // Scroll right
    scrollRight(){    
        let previousValue = this.containerCards.scrollLeft;
        this.containerCards.scrollLeft+=230;   
        let nextValue = this.containerCards.scrollLeft;   
    }
    
}

module.exports = {Carousel};

