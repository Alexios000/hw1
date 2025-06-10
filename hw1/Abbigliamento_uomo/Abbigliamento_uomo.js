
document.addEventListener('DOMContentLoaded', () => {
  Url_uomo();
});



function Url_uomo() {
    const div_img = document.getElementById('immagini_abbigliamento_uomo');

    fetch('Get_url.php')
        .then(response => response.json())
        .then(prodotti => {

            prodotti.forEach(prodotto => {
                
                const prodottoDiv = document.createElement('div');
                prodottoDiv.style.textAlign = 'center'; 
                prodottoDiv.style.display = 'flex';
                prodottoDiv.style.flexDirection = 'column';
                prodottoDiv.style.justifyContent = 'center';
                prodottoDiv.style.alignItems = 'center';
                prodottoDiv.style.height = '100%';
                prodottoDiv.style.width = '100%';
                
               

                
          const img = document.createElement('img');
          img.src = prodotto.immagine;
          img.alt = prodotto.nome;
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          img.style.cursor='pointer';
          

                
          img.addEventListener('click', OpenModal);

                
           prodottoDiv.appendChild(img);

          img.setAttribute('data-id', prodotto.id);      
          img.setAttribute('data-nome', prodotto.nome);
          img.setAttribute('data-colore', prodotto.colore);
          img.setAttribute('data-taglia', prodotto.taglia);
          img.setAttribute('data-prezzo', prodotto.prezzo);


          console.log(prodotto.nome, prodotto.colore, prodotto.taglia, prodotto.prezzo, prodotto.quantita);

          const nomecontainer = document.createElement('div'); 
          nomecontainer.style.height= '15%';     
          const nome = document.createElement('p');
          nome.textContent = prodotto.nome;
          nome.style.fontFamily= 'Roboto Flex';
          nome.style.textAlign = 'center';
          nome.style.fontSize = '1.1rem';
          nome.style.margin = '0';
          nome.style.padding = '3vh 0 0 0';

          nomecontainer.appendChild(nome);
         
          

                
          prodottoDiv.appendChild(nomecontainer);

                
          div_img.appendChild(prodottoDiv);
            });
        })
        .catch(error => console.error(error));
}


function leggi(){
    about.classList.replace('Testo_about_hidden', 'Testo_about_visible');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Mostra meno";
    leggi_button.removeEventListener("click", leggi);
    leggi_button.addEventListener("click", leggi_meno);
}


function leggi_meno(){
    about.classList.replace('Testo_about_visible', 'Testo_about_hidden');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Leggi di più";
    leggi_button.removeEventListener("click", leggi_meno);
    leggi_button.addEventListener("click", leggi);
}

const leggi_button = document.querySelector("#button_leggi");
leggi_button.addEventListener("click", leggi);
const about = document.querySelector('.Testo_about_hidden');



function OpenModal(event) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.style.top = window.pageYOffset + 'px';
    
    const img = modal.querySelector("img");
    img.src = event.currentTarget.src;
    img.style.width = '70%';
    img.style.height = '70%';
    img.style.paddingTop = '2vh';
    img.style.objectFit = 'contain';
    
    document.body.style.overflow = 'hidden';

    const articolo_id = event.currentTarget.getAttribute('data-id');
    const nome = event.currentTarget.getAttribute('data-nome');
    const colore = event.currentTarget.getAttribute('data-colore');
    const taglia = event.currentTarget.getAttribute('data-taglia');
    const prezzo = event.currentTarget.getAttribute('data-prezzo');
    
    const text = document.getElementById("info_text");
    text.textContent = "Nome: " + nome + " - Colore: " + colore + " - Taglia: " + taglia + " - Prezzo: €" + prezzo;

    const add_button = document.getElementById("add_button");
    
    
    add_button.removeEventListener("click", handleAddCartClick);

    
    add_button.addEventListener("click", function() {
        handleAddCartClick(articolo_id);
    });
}


function handleAddCartClick(articolo_id) {
    console.log("Articolo ID:", articolo_id);
    AddCart(articolo_id);
}


function CloseModal() {
    const modal = document.getElementById("modal");

    const img = modal.querySelector("img");
    img.src = ""; 
    const text = document.getElementById("info_text");
    text.textContent = "";  

    img.removeAttribute('data-id');
    img.removeAttribute('data-nome');
    img.removeAttribute('data-colore');
    img.removeAttribute('data-taglia');
    img.removeAttribute('data-prezzo');
    
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}


function PreventClose(event) {
    event.stopPropagation();
}


const modal = document.getElementById("modal");
modal.addEventListener("click", CloseModal);

const modalContent = document.getElementById("modal_content");
modalContent.addEventListener("click", PreventClose);


function AddCart(articolo_id) {
    if (!articolo_id) {
        console.error("ID prodotto mancante!");
        return; 
    }

    const formData = new FormData();
    formData.append('articolo_id', articolo_id); 

    console.log("Sending:", {articolo_id}); 

    fetch("AddCart.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Errore:', error); 
    });
}

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "../hw1.php";
  }); 
