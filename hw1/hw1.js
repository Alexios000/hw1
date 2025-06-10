


const menu_donna = document.querySelector('#donna');
menu_donna.addEventListener("mouseover", hover);
const menu_hover = document.querySelector('.Menu_hover');
menu_hover.addEventListener("mouseover", hover);

function hover(){
menu_hover.style.display = "flex";  
}


menu_donna.addEventListener("mouseleave", hover_out);
menu_hover.addEventListener("mouseleave", hover_out);

function hover_out(){
menu_hover.style.display = "none";  
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

const images = [
    'immagini saldi/Costume mare standard fit.jpeg', 'immagini saldi/Polo arancione logo.jpeg', 'immagini saldi/Sneaker semplici con logo.jpeg',
    'immagini saldi/Camicia primaverile donna.jpeg', 'immagini saldi/Borsa con logo.jpeg', 'immagini saldi/Espadrillas in pelle con plateau.png',
    'immagini saldi/T-shirt bambino con logo.jpeg', 'immagini saldi/Abito primaverile bambina.jpeg', 'immagini saldi/Cappello con visiera bambino.jpeg'
  ];

  const prices = [
    '19.99€', '29.99€', '49.99€',
    '39.99€', '59.99€', '59.99€',
    '19.99€', '29.99€', '9.99€'
  ];

  const names = [
    'Costume mare standard fit', 'Polo arancione logo', 'Sneaker semplici con logo',
    'Camicia primaverile donna', 'Borsa con logo', 'Espadrillas in pelle con plateau',
    'T-shirt bambino con logo', 'Abito primaverile bambina', 'Cappello con visiera bambino'
  ];
  
  const leftButton = document.getElementById('left_button');
  const rightButton = document.getElementById('right_button');
  
  

  let SetNum = 0;

  const DocImgs=['saldi1', 'saldi2', 'saldi3'];
  
  
function ChangeImages_saldi_right() { 
    
    SetNum = (SetNum + 1) % 3;
    const currentIndex = SetNum * 3;
  

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];

    }
  
   
   
}




function ChangeImages_saldi_left() {

    SetNum = (SetNum + 2) % 3;

    const currentIndex = SetNum * 3;
  

   
    

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];
      }

}

leftButton.addEventListener('click', ChangeImages_saldi_left);
  rightButton.addEventListener('click', ChangeImages_saldi_right);

function CreateModal(event){
    const modal = document.getElementById('modal');
    const Modimage = document.createElement('img');
    Modimage.src = event.currentTarget.src;
    modal.appendChild(Modimage);
    modal.classList.remove('Hidden');
    modal.style.top=window.scrollY + "px";
    document.body.classList.add('noscroll');
}


function CloseModal(){
    const modal = document.getElementById('modal');
    modal.classList.add('Hidden');
    document.body.classList.remove('noscroll');
    modal.innerHTML = '';
}

  
  const imgSaldi1= document.getElementById('saldi1').querySelector('img');
  imgSaldi1.addEventListener('click', CreateModal);
  const imgSaldi2= document.getElementById('saldi2').querySelector('img');
  imgSaldi2.addEventListener('click', CreateModal);
  const imgSaldi3= document.getElementById('saldi3').querySelector('img');
  imgSaldi3.addEventListener('click', CreateModal);

  const close = document.getElementById('modal');
  close.addEventListener('click', CloseModal);
  
 

function CreateDashB() {
    const dash = document.getElementById('dashB');
    dash.classList.remove('Hidden'); 
    isLogged = sessionStorage.getItem('Logged');
    console.log('Valore di Logged:', isLogged);

   

            
            if (isLogged === 'true') {  
                const accessoEffettuato = document.getElementById('logged');
                accessoEffettuato.classList.remove('Hidden');
                document.body.classList.add('Noscroll');
                console.log("L'utente è loggato");
            } else {
                const slide = document.getElementById('dash_log');
                slide.classList.remove('Hidden');
                slide.classList.add('Translate');
                document.body.classList.add('Noscroll');
            };

            
        
}



function CloseDashB(event) {
    if (event.target === event.currentTarget) {
        
        const dash = document.getElementById('dashB');
        dash.classList.add('Hidden');
        document.body.classList.remove('Noscroll');

        const slide = document.getElementById('dash_log');
        slide.classList.add('Hidden');
        slide.classList.remove('Translate');

        const accessoEffettuato = document.getElementById('logged');
        accessoEffettuato.classList.add('Hidden');

    }
}




    const dashCreate = document.getElementById('utente');
    dashCreate.addEventListener('click', CreateDashB);
    const dashClose = document.getElementById('dashB');
    dashClose.addEventListener('click', CloseDashB);
    dashClose.addEventListener('click', Close_registration);

function Dash_registration(){
    const dash_log = document.getElementById('dash_log');
    dash_log.classList.add('Hidden');
    dash_log.classList.remove('Translate');
    const dash_reg = document.getElementById('dash_register');
    dash_reg.classList.remove('Hidden');
    dash_reg.classList.add('Translate');
}

const dash_reg_button = document.getElementById('dash_log_register_button');
    dash_reg_button.addEventListener('click', Dash_registration);

    function Close_registration(event){
      if (event.target===event.currentTarget){
      const dash_reg = document.getElementById('dash_register');
      dash_reg.classList.add('Hidden');
      dash_reg.classList.remove('Translate');
      const dash = document.getElementById('dashB');
      dash.classList.add('Hidden');
      document.body.classList.remove('Noscroll');
      }
}


    

function getLocation() {
      
  fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const lat = data.latitude;
        const lon = data.longitude;
        const Pos = L;
        const map = Pos.map('map').setView([lat, lon], 13);

      Pos.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      Pos.marker([lat, lon]).addTo(map)
        .bindPopup('Sei qui!')
        .openPopup();
    })
    .catch(err => console.error("Errore nella geolocalizzazione:", err));
}
  
  window.onload = getLocation;
      
    

function login() {
  const email = document.getElementById('emailLog').value;
  const password = document.getElementById('passwordLog').value;

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  fetch('login.php', {
    method: 'POST',
    body: formData 
  })
  .then(response => response.json())
  .then(responseData => {
    if (responseData.status === 'success') {
      sessionStorage.setItem('Logged', 'true');
      console.log('Login riuscito');
      window.location.reload(true);
    } else {
      console.error('Errore nel login: ' + responseData.message);
    }
  })
  .catch(error => {
    console.error('Errore nella richiesta fetch:', error);
  });
}



const login_button = document.getElementById('log_button');
login_button.addEventListener('click', login);


function logout() {
  fetch('logout.php')
    .then(response => {
      if (response.ok) {
        sessionStorage.removeItem('Logged'); 
        console.log('Logout riuscito');
        window.location.reload(true);  
      } else {
        console.error('Errore nel logout: ' + response.statusText);
      }
    })
    .catch(error => {
      console.error('Errore nella richiesta fetch:', error);
    });
}



const logout_button = document.getElementById('logout_button');
logout_button.addEventListener('click', logout);

function signup(event) {
  console.log("signup");
  event.preventDefault();  
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  fetch('signup.php', {
    method: 'POST',
    body: formData 
  })    
  .then(response => response.text())  
  .then(responseText => {
    if (responseText.includes("Registrazione avvenuta con successo")) {
      sessionStorage.setItem('Logged', 'true');
      
      console.log( sessionStorage.getItem('Logged'));
      console.log('Registrazione riuscita'); 
    } else {
      console.error('Errore nella registrazione: ' + responseText);
    }
  })
  .catch(error => {
    console.error('Errore nella richiesta fetch:', error);
  });
}

const signup_button = document.getElementById('register_button');
signup_button.addEventListener('click', signup);



document.getElementById("uomo").addEventListener("click", function() {
    window.location.href = "Abbigliamento_uomo/Abbigliamento_uomo.php";
  }); 



  document.getElementById("shop").addEventListener("click", function() {
    if (sessionStorage.getItem('Logged') === 'true') {
      window.location.href = "Carrello/Carrello.php";
    } else {
      window.location.href = "hw1.php";
    }

  }); 



