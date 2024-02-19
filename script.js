const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});


document.addEventListener('DOMContentLoaded', function() {
  var mainImage = document.getElementById('mainImage');
  var modal = document.getElementById('myModal');
  var closeModal = document.getElementById('closeModal');
  var modalImages = modal.getElementsByTagName('img');

  mainImage.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  for (var i = 0; i < modalImages.length; i++) {
      modalImages[i].addEventListener('click', function() {
          mainImage.src = this.src;
          modal.style.display = 'none';
      });
  }
});





document.addEventListener('DOMContentLoaded', function() {
  var arrow = document.getElementById('arrow');
  arrow.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace
      window.location.href = 'index.html'; // Redirige a index.html
  });
});






const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}





function changeLanguage(lang) {
  const pageTitle = document.getElementById('page-title');
  const welcomeText = document.getElementById('welcome-text');

  switch (lang) {
    case 'es':
    extrasTitulo.textContent = 'EXTRAS'; 
    tituloFooter.textContent = 'Sobre nosotros'; 
    descripcionFooter.textContent = 'Los apartamentos del bosque son dos casetas de piedra adosadas, situadas en un espacio de finca familiar a 400 metros en coche del pueblo de Ribes de Freser. También hay acceso a pie por dos senderos que en 8 minutos nos acercan al pueblo. Estaréis rodeados de montaña y bosque, por lo que las vistas son espectaculares.'; 
    preguntaFooter.textContent = '¿Tienes una pregunta?'; 
    bannerPromocional.textContent = 'Vive una experiencia única en medio de la naturaleza. Apartamentos a pocos minutos de Ribes de Freser.';
    inicio.textContent = 'Inicio';
    servicios.textContent = 'Servicios';
    habitaciones.textContent = 'Habitaciones';
    extras.textContent = 'Extras';
    encuéntranos.textContent = 'Encuéntranos';  
    serviciosTitulo.textContent = 'SERVICIOS';  
    servicios1.textContent = 'Aquí tu mascota es más que bienvenida! Entendemos lo importante que es para ti que tu compañero peludo disfrute de unas vacaciones tan especiales como las tuyas.'; 
    servicios2.textContent = 'Nuestro hotel ofrece una amplia y refrescante piscina, diseñada para que puedas relajarte y disfrutar al máximo.S'; 
    servicioActividadesExtras.textContent = 'Actividades extras'; 
    servicios3.textContent = 'A solo 400 metros del encantador pueblo de Ribes de Freser, disfrute de una ubicación excepcional rodeado por majestuosas montañas y exuberantes bosques.'; 
    servicios4.textContent = 'Contamos con un conveniente parking asegurándote un lugar cercano y seguro para estacionar tu vehículo.'; 
    apartamentos1.textContent = 'APARTAMENTOS'; 
    titulo1_1.textContent = 'La Cabaña del bosque'; 
    descripcion1_1.textContent = 'Apartamento entero'; 
    descripcion1_2.textContent = 'Terraza'; 
    descripcion1_3.textContent = 'La Cabaña del bosqe ofrece vistas a la montaña y alojamiento con terraza y balcón a unos 50 km de la catedral de Vic. El establecimiento se encuentra a 7,4 km de la estación de esquí de Vall de Núria y ofrece piscina exterior de temporada y aparcamiento privado gratuito.Este apartamento dispone de 1 dormitorio, cocina con nevera y microondas, TV de pantalla plana, zona de estar y baño con ducha. Se proporcionan toallas y ropa de cama.'; 
    descripcion1_4.textContent = 'Por Noche'; 
    titulo1_2.textContent = 'Los Apartamentos del bosque'; 
    descripcion2_1.textContent = 'Apartamento entero'; 
    descripcion2_2.textContent = 'Terraza'; 
    descripcion2_3.textContent = 'Los apartamentos del bosque se encuentran en Ribes de Freser y ofrece piscina exterior de temporada, jardín, WiFi gratuita y vistas a la piscina. Ofrece acceso a un balcón y aparcamiento privado gratuito. El apartamento cuenta con 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana vía satélite, zona de comedor, cocina totalmente equipada y terraza con vistas a la montaña. En el establecimiento hay un punto de venta de forfaits. En las inmediaciones se puede esquiar.'; 
    descripcion2_4.textContent = 'Por Noche'; 
    titulo1_3.textContent = 'La Glorieta'; 
    descripcion3_1.textContent = 'Apartamento privado en edificio'; 
    descripcion3_2.textContent = 'Torreón con vistas a la montaña'; 
    descripcion3_3.textContent = 'La Glorieta es un loft con torreon y buenas vistas que se encuentra en Ribes de Freser y ofrece piscina al aire libre y vistas a la montaña. Se encuentra a 7,4 km de la estación de esquí de Vall de Núria y ofrece jardín y aparcamiento privado gratuito. El apartamento consta de 1 dormitorio, sala de estar, cocina totalmente equipada con nevera y cafetera y baño con ducha y artículos de aseo gratuitos. Se proporcionan toallas y ropa de cama.'; 
    descripcion3_4.textContent = 'Por Noche';  
    titulo1_4.textContent = 'El Petit Estudi'; 
    descripcion4_1.textContent = 'Apartamento privado en edificio'; 
    descripcion4_2.textContent = 'TV con servicio de streaming'; 
    descripcion4_3.textContent = 'Este pequeño apartamento esta situado en una hermosa finca rodeada de bosque, con piscina y diversos rincones donde adorarás pasear y perderte. El Petit Estudi, tal como su nombre dice, es un pequeño apartamento situado en la parte alta de la gran casa de estilo modenista que ocupa la finca. El apartamento incluye 1 dormitorio y cocina con nevera, microondas y cafetera. Se proporcionan toallas y ropa de cama. Su espacio esta dividido por un lado dormitorio y baño, y el otro sala de estar, cocina y comedor. El apartamento consta de 1 dormitorio, sala de estar, cocina totalmente equipada con nevera y cafetera y baño con ducha y artículos de aseo gratuitos. Se proporcionan toallas y ropa de cama.';
    descripcion4_4.textContent = 'Por Noche'; 
     break;
    case 'ca':
    extrasTitulo.textContent = "EXTRES";
    tituloFooter.textContent = "Sobre nosaltres";
    descripcionFooter.textContent = "Els apartaments del bosc són dues casetes de pedra adossades, situades en un espai de finca familiar a 400 metres en cotxe del poble de Ribes de Freser. També hi ha accés a peu per dos senders que en 8 minuts ens acosten al poble. Estareu envoltats de muntanya i bosc, pel que les vistes són espectaculars.";
    preguntaFooter.textContent = "¿Tens alguna pregunta?";
    bannerPromocional.textContent = "Viure una experiència única en mig de la natura. Apartaments a pocs minuts de Ribes de Freser.";
    inicio.textContent = "Inici";
    servicios.textContent = "Serveis";
    habitaciones.textContent = "Habitacions";
    extras.textContent = "Extres";
    encuéntranos.textContent = "Troba";
    serviciosTitulo.textContent = "SERVEIS";
    servicios1.textContent = "Aquí la teva mascota és més que benvinguda! Entenem la importància que té per a tu que el teu company pelut gaudeixi d'unes vacances tan especials com les teves.";
    servicios2.textContent = "El nostre hotel ofereix una àmplia i refrescant piscina, dissenyada perquè puguis relaxar-te i gaudir al màxim.";
    servicioActividadesExtras.textContent = "Activitats extres";
    servicios3.textContent = "A només 400 metres del xarmant poble de Ribes de Freser, gaudeix d'una ubicació excepcional envoltat de majestuoses muntanyes i boscos exuberants.";
    servicios4.textContent = "Disposem d'un conveniente parking assegurant-te un lloc proper i segur per estacionar el teu vehicle.";
    apartamentos1.textContent = "APARTAMENTS";
    titulo1_1.textContent = "La Cabaña del bosc";
    descripcion1_1.textContent = "Apartament sencer";
    descripcion1_2.textContent = "Terrassa";
    descripcion1_3.textContent = "La Cabaña del bosc ofereix vistes a la muntanya i allotjament amb terrassa i balcó a uns 50 km de la catedral de Vic. L'establiment es troba a 7,4 km de l'estació d'esquí de Vall de Núria i ofereix piscina exterior de temporada i aparcament privat gratuït. Aquest apartament disposa d'1 dormitori, cuina amb nevera i microones, TV de pantalla plana, zona d'estar i bany amb dutxa. Es proporcionen tovalloles i roba de llit.";
    descripcion1_4.textContent = "Per Nit";
    titulo1_2.textContent = "Els Apartaments del bosc";
    descripcion2_1.textContent = "Apartament sencer";
    descripcion2_2.textContent = "Terrassa";
    descripcion2_3.textContent = "Els apartaments del bosc es troben a Ribes de Freser i ofereixen piscina exterior de temporada, jardí, WiFi gratuïta i vistes a la piscina. Ofereix accés a un balcó i aparcament privat gratuït. L'apartament compta amb 1 dormitori, 1 bany, roba de llit, tovalloles, TV de pantalla plana via satèl·lit, zona de menjador, cuina totalment equipada i terrassa amb vistes a la muntanya. A l'establiment hi ha un punt de venda de forfaits. A les rodalies es pot esquiar.";
    descripcion2_4.textContent = "Per Nit";
    titulo1_3.textContent = "La Glorieta";
    descripcion3_1.textContent = "Apartament privat en edifici";
    descripcion3_2.textContent = "Torreón amb vistes a la muntanya";
    descripcion3_3.textContent = "La Glorieta és un loft amb torreó i bones vistes que es troba a Ribes de Freser i ofereix piscina a l'aire lliure i vistes a la muntanya. Es troba a 7,4 km de l'estació d'esquí de Vall de Núria i ofereix jardí i aparcament privat gratuït. L'apartament consta d'1 dormitori, sala d'estar, cuina totalment equipada amb nevera i cafetera i bany amb dutxa i articles de tocador gratuïts. Es proporcionen tovalloles i roba de llit.";
    descripcion3_4.textContent = "Per Nit";  
    descripcion4_1.textContent = "Apartament privat en edifici";
    descripcion4_2.textContent = "TV amb servei d'streaming";
    descripcion4_3.textContent = "Aquest petit apartament està situat en una bella finca envoltada de bosc, amb piscina i diversos racons on estimaràs passejar i perdre't. El Petit Estudi, tal com el seu nom diu, és un petit apartament situat a la part alta de la gran casa d'estil modernista que ocupa la finca. L'apartament inclou 1 dormitori i cuina amb nevera, microones i cafetera. Es proporcionen tovalloes i roba de llit. El seu espai està dividit per una banda dormitori i bany, i l'altre sala d'estar, cuina i menjador. L'apartament consta d'1 dormitori, sala d'estar, cuina totalment equipada amb nevera i cafetera i bany amb dutxa i articles de tocador gratuïts. Es proporcionen tovalloes i roba de llit.";
    descripcion4_4.textContent = "Per Nit";
      break;
    case 'fr':
      extrasTitulo.textContent = 'SUPPLÉMENTS';
      tituloFooter.textContent = 'À propos de nous';
      descripcionFooter.textContent = 'Les appartements de la forêt sont deux chalets en pierre attenants, situés sur une propriété familiale à 400 mètres en voiture du village de Ribes de Freser. Il y a également un accès à pied par deux sentiers qui nous amènent au village en 8 minutes. Vous serez entourés de montagnes et de forêt, offrant ainsi des vues spectaculaires.';
      preguntaFooter.textContent = 'Vous avez une question ?';
      bannerPromocional.textContent = 'Vivez une expérience unique au cœur de la nature. Appartements à quelques minutes de Ribes de Freser.';
      inicio.textContent = 'Accueil';
      servicios.textContent = 'Services';
      habitaciones.textContent = 'Chambres';
      extras.textContent = 'Suppléments';
      encuéntranos.textContent = 'Où nous trouver';
      serviciosTitulo.textContent = 'SERVICES';
      servicios1.textContent = 'Ici, votre animal de compagnie est plus que bienvenu ! Nous comprenons à quel point il est important pour vous que votre fidèle compagnon passe des vacances aussi spéciales que les vôtres.';
      servicios2.textContent = 'Notre hôtel propose une piscine spacieuse et rafraîchissante, conçue pour que vous puissiez vous détendre et en profiter au maximum.';
      servicioActividadesExtras.textContent = 'Activités Supplémentaires';
      servicios3.textContent = "À seulement 400 mètres du charmant village de Ribes de Freser, profitez d'un emplacement exceptionnel entouré de majestueuses montagnes et de forêts luxuriantes.";
      servicios4.textContent = "Nous disposons d'un parking pratique, vous garantissant une place proche et sécurisée pour garer votre véhicule.";
      apartamentos1.textContent = 'APPARTEMENTS';
      titulo1_1.textContent = 'La Cabane de la Forêt';
      descripcion1_1.textContent = 'Appartement entier';
      descripcion1_2.textContent = 'Terrasse';
      descripcion1_3.textContent = "La Cabane de la Forêt offre une vue sur la montagne et un hébergement avec une terrasse et un balcon à environ 50 km de la cathédrale de Vic. La propriété se trouve à 7,4 km de la station de ski de Vall de Núria et propose une piscine extérieure saisonnière ainsi qu'un parking privé gratuit. Cet appartement comprend 1 chambre, une cuisine avec réfrigérateur et micro-ondes, une télévision à écran plat, un coin salon et une salle de bains avec douche. Des serviettes et du linge de lit sont fournis.";
      descripcion1_4.textContent = 'Par Nuit';
      titulo1_2.textContent = 'Les Appartements de la Forêt';
      descripcion2_1.textContent = 'Appartement entier';
      descripcion2_2.textContent = 'Terrasse';
      descripcion2_3.textContent = "Les appartements de la forêt se situent à Ribes de Freser et proposent une piscine extérieure saisonnière, un jardin, une connexion WiFi gratuite ainsi que des vues sur la piscine. Ils offrent l'accès à un balcon et un parking privé gratuit. L'appartement compte 1 chambre, 1 salle de bains, du linge de lit, des serviettes, une télévision par satellite à écran plat, un coin repas, une cuisine entièrement équipée et une terrasse avec vue sur la montagne. Il y a un point de vente de forfaits de ski sur place. Le ski est possible dans les environs.";
      descripcion2_4.textContent = 'Par Nuit';
      titulo1_3.textContent = 'La Glorieta';
      descripcion3_1.textContent = 'Appartement privé dans un bâtiment';
      descripcion3_2.textContent = 'Tour avec vue sur la montagne';
      descripcion3_3.textContent = "La Glorieta est un loft avec une tour et de belles vues situé à Ribes de Freser, offrant une piscine extérieure ainsi que des vues sur la montagne. Il se trouve à 7,4 km de la station de ski de Vall de Núria et propose un jardin ainsi qu'un parking privé gratuit. L'appartement se compose de 1 chambre, d'un salon, d'une cuisine entièrement équipée avec réfrigérateur et cafetière, ainsi que d'une salle de bains avec douche et articles de toilette gratuits. Des serviettes et du linge de lit sont fournis.";
      descripcion3_4.textContent = 'Par Nuit';
      titulo1_4.textContent = 'Le Petit Studio';
      descripcion4_1.textContent = 'Appartement privé dans un bâtiment';
      descripcion4_2.textContent = 'TV avec service de streaming';
      descripcion4_3.textContent = "Ce petit appartement est situé sur une belle propriété entourée de forêt, avec une piscine et divers coins où vous aimerez vous promener et vous perdre. Le Petit Studio, comme son nom l'indique, est un petit appartement situé dans la partie supérieure de la maison de style moderniste qui occupe la propriété. L'appartement comprend 1 chambre ainsi qu'une cuisine avec réfrigérateur, micro-ondes et cafetière. Des serviettes et du linge de lit sont fournis. Son espace est divisé d'un côté avec une chambre et une salle de bains, et de l'autre côté avec un salon, une cuisine et une salle à manger. L'appartement se compose de 1 chambre, d'un salon, d'une cuisine entièrement équipée avec réfrigérateur et cafetière, ainsi que d'une salle de bains avec douche et articles de toilette gratuits. Des serviettes et du linge de lit sont fournis.";
      descripcion4_4.textContent = 'Par Nuit';
      break;
    case 'en':
      extrasTitulo.textContent = 'EXTRAS';
      tituloFooter.textContent = 'About us';
      descripcionFooter.textContent = 'The forest apartments are two attached stone cottages, located on a family estate 400 meters by car from the town of Ribes de Freser. There are also two paths that lead to the town on foot in 8 minutes. You will be surrounded by mountains and forest, so the views are spectacular.';
      preguntaFooter.textContent = 'Do you have a question?';
      bannerPromocional.textContent = 'Live a unique experience in the middle of nature. Apartments just minutes away from Ribes de Freser.';
      inicio.textContent = 'Home';
      servicios.textContent = 'Services';
      habitaciones.textContent = 'Rooms';
      extras.textContent = 'Extras';
      encuéntranos.textContent = 'Find Us';
      serviciosTitulo.textContent = 'SERVICES';
      servicios1.textContent = 'Here your pet is more than welcome! We understand how important it is for you that your furry companion enjoys a vacation as special as yours.';
      servicios2.textContent = 'Our hotel offers a spacious and refreshing pool, designed for you to relax and enjoy to the fullest.';
      servicioActividadesExtras.textContent = 'Extra Activities';
      servicios3.textContent = 'Just 400 meters from the charming town of Ribes de Freser, enjoy an exceptional location surrounded by majestic mountains and lush forests.';
      servicios4.textContent = 'We have a convenient parking lot, ensuring you a close and safe place to park your vehicle.';
      apartamentos1.textContent = 'APARTMENTS';
      titulo1_1.textContent = 'The Forest Cabin';
      descripcion1_1.textContent = 'Entire apartment';
      descripcion1_2.textContent = 'Terrace';
      descripcion1_3.textContent = 'The Forest Cabin offers mountain views and accommodation with a terrace and balcony about 50 km from Vic Cathedral. The property is 7.4 km from Vall de Núria Ski Resort and offers a seasonal outdoor pool and free private parking. This apartment has 1 bedroom, a kitchen with a fridge and microwave, a flat-screen TV, a seating area, and a bathroom with a shower. Towels and bed linen are provided.';
      descripcion1_4.textContent = 'Per Night';
      titulo1_2.textContent = 'The Forest Apartments';
      descripcion2_1.textContent = 'Entire apartment';
      descripcion2_2.textContent = 'Terrace';
      descripcion2_3.textContent = 'The forest apartments are located in Ribes de Freser and offer a seasonal outdoor pool, garden, free WiFi, and pool views. It provides access to a balcony and free private parking. The apartment has 1 bedroom, 1 bathroom, bed linen, towels, a flat-screen satellite TV, a dining area, a fully equipped kitchen, and a terrace with mountain views. There is a ski pass sales point on the premises. Skiing is possible in the surroundings.';
      descripcion2_4.textContent = 'Per Night';
      titulo1_3.textContent = 'La Glorieta';
      descripcion3_1.textContent = 'Private apartment in building';
      descripcion3_2.textContent = 'Tower with mountain views';
      descripcion3_3.textContent = 'La Glorieta is a loft with a tower and good views located in Ribes de Freser, offering an outdoor pool and mountain views. It is 7.4 km from Vall de Núria Ski Resort and offers a garden and free private parking. The apartment consists of 1 bedroom, a living room, a fully equipped kitchen with a fridge and coffee maker, and a bathroom with a shower and free toiletries. Towels and bed linen are provided.';
      descripcion3_4.textContent = 'Per Night';
     titulo1_4.textContent = 'El Petit Estudi';
     descripcion4_1.textContent = 'Private apartment in building';
     descripcion4_2.textContent = 'TV with streaming service';
     descripcion4_3.textContent = 'This small apartment is located on a beautiful estate surrounded by forest, with a pool and various corners where you will love to walk and get lost. El Petit Estudi, as its name suggests, is a small apartment located on the upper part of the modernist style house that occupies the estate. The apartment includes 1 bedroom and a kitchen with a fridge, microwave, and coffee maker. Towels and bed linen are provided. Its space is divided on one side with a bedroom and bathroom, and on the other side with a living room, kitchen, and dining area. The apartment consists of 1 bedroom, a living room, a fully equipped kitchen with a fridge and coffee maker, and a bathroom with a shower and free toiletries. Towels and bed linen are provided.';
     descripcion4_4.textContent = 'Per Night';
      break;
    default:
      break;
  }
}
