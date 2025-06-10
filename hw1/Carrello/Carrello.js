

function caricaCarrello() {

    
    fetch('getCarrello.php') 
        .then(response => response.json())  
        .then(carrello => {
            
            const container = document.getElementById('carrello_articoli');  
            container.innerHTML = '';
            container.innerHTML = '<h1>Il tuo carrello</h1>';

            
            

            if (carrello.length > 0) {
                carrello.forEach(articolo => {
                    
                    const articoloDiv = document.createElement('div');
                    articoloDiv.classList.add('articolo');

                   
                    const immagineDiv = document.createElement('div');
                    immagineDiv.classList.add('immagine-articolo');
                    const immagine = document.createElement('img');
                    immagine.src = articolo.immagine;  
                    immagine.alt = articolo.nome;     
                    immagineDiv.appendChild(immagine);

                   
                    const informazioniDiv = document.createElement('div');
                    informazioniDiv.classList.add('info-articolo');

                    const nome = document.createElement('h2');
                    nome.textContent = articolo.nome; 
                    informazioniDiv.appendChild(nome);

                    const prezzo = document.createElement('p');
                    prezzo.textContent = "Prezzo: €" + articolo.prezzo;  
                    informazioniDiv.appendChild(prezzo);

                    const colore = document.createElement('p');
                    colore.textContent = "Colore: " + articolo.colore;  
                    informazioniDiv.appendChild(colore);

                    const taglia = document.createElement('p');
                    taglia.textContent = "Taglia: " + articolo.taglia;  
                    informazioniDiv.appendChild(taglia);

                    const quantita = document.createElement('p');
                    quantita.textContent = "Quantità: " + articolo.quantita; 
                    informazioniDiv.appendChild(quantita);

                   
                    articoloDiv.appendChild(immagineDiv);
                    articoloDiv.appendChild(informazioniDiv);

                
                    container.appendChild(articoloDiv);
                });
            } else {
                 const vuotoMessage = document.createElement('h2');
            vuotoMessage.textContent = 'Nessun articolo nel carrello';
            container.appendChild(vuotoMessage);
            informazioniDiv.remove();
                
                
            }
        })
        .catch(error => {
            console.error('Errore nel caricare il carrello:', error);
        });
}



  function genPayment() {
    const container = document.getElementById('info_payment');
    container.innerHTML = '';
    container.innerHTML = '<h1>Menu</h1>'; 
    let totale = 0;

    
    fetch('getCarrello.php')
        .then(response => response.json())
        .then(carrello => {
            
            

            const containerDiv = document.createElement('div');

            
            carrello.forEach(articolo => {
                const p = document.createElement('p');
                p.textContent = "Nome: " + articolo.nome + " - Colore: " + articolo.colore + " - Taglia: " + articolo.taglia + " - Prezzo: €" + articolo.prezzo + " x " + articolo.quantita + " (Quantità)";
                containerDiv.appendChild(p);
                totale += articolo.prezzo * articolo.quantita; 
            });

           
            const totaleP = document.createElement('p');
            totaleP.textContent = "Totale: €" + totale; 
            containerDiv.appendChild(totaleP);

            
            const pagamentoButton = document.createElement('button');
            pagamentoButton.classList.add('PaymentButton');
            pagamentoButton.textContent = 'Conferma Pagamento';
            containerDiv.appendChild(pagamentoButton);
            if(totale!=0) {
            container.appendChild(containerDiv);
            }
             else {
            const vuotoMessage = document.createElement('h2');
            vuotoMessage.textContent = 'Il carrello è vuoto';
            container.appendChild(vuotoMessage);
            containerDiv.remove();
        }

            
        })
        .catch(error => {
            console.error('Errore nel caricare il carrello:', error);
        });
}


window.onload = function() {
    caricaCarrello();
    genPayment();
};

