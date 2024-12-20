document.addEventListener("DOMContentLoaded", () => {
    const priceElement = document.getElementById('price');
    const image = document.getElementById('image');
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    let price = 250; // Starting price value
    const step = 50; // Price increment/decrement step
    const date = getNewDate();

    console.log(date);

    // Funkce pro aktualizaci obrázku podle ceny
    function updateImage() {
        const imageUrl = `https://api.paylibo.com/paylibo/generator/czech/image?compress=false&size=440&accountNumber=4611090023&bankCode=0800&amount=${price}&currency=CZK&vs=${date}&message=str%C3%A1nka`;
        image.src = imageUrl;
    }

    // Funkce pro aktualizaci ceny
    function updatePrice() {
        priceElement.textContent = `${price} Kč`;
    }

    // Funkce pro získání aktuálního data ve formátu ddmmyyyy
    function getNewDate() {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        const year = today.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return day + '' + month + '' + year;
    }

    // Funkce pro validaci a nastavení ceny
    function setPriceFromInput() {
        let inputValue = priceElement.textContent.replace(' Kč', '').trim();
        inputValue = inputValue.replace(/[^0-9]/g, ''); // Omezí znaky na čísla
        if (inputValue === '') {
            price = 50; // Pokud je prázdný, nastaví na 50
        } else {
            price = parseInt(inputValue);
            if (price < 50) {
                price = 50;
            } else if (price > 500) {
                price = 500;
            }
        }
        priceElement.textContent = `${price} Kč`;
        updateImage();
    }

    // Event listeners pro tlačítka
    decreaseButton.addEventListener('click', () => {
        if (price - step >= 50) {
            price -= step;
            updateImage();
            updatePrice();
        }
    });

    increaseButton.addEventListener('click', () => {
        if (price + step <= 500) {
            price += step;
            updateImage();
            updatePrice();
        }
    });

    // Event listener pro změnu hodnoty v contenteditable elementu
    priceElement.addEventListener('input', (event) => {
        // Omezí zadání pouze čísel
        let inputValue = event.target.textContent.replace(' Kč', '').replace(/[^0-9]/g, '');
        if (inputValue.length <= 5) { // Omezí délku na 5 znaků
            event.target.textContent = inputValue + ' Kč';
        } else {
            event.target.textContent = inputValue.substring(0, 5) + ' Kč';
        }
    });

    // Event listener pro Enter nebo kliknutí mimo pole
    priceElement.addEventListener('blur', setPriceFromInput);
    priceElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            setPriceFromInput();
        }
    });

    // Inicializace obrázku a ceny při načtení stránky
    updateImage();
    updatePrice();

    const burger = document.getElementById('burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');  // Přepne stav pro burger menu
    navLinks.classList.toggle('active'); // Zobrazí/skryje menu
});

});
