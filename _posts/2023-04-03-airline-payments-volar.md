---
layout: post
title: "Airline Payments: un desconocido que te hace volar"
date: 2023-04-03 09:41:35 +0000
categories: ['Payments &amp; Fintech']
image: "/assets/img/04/aircraft-1362586_1280-1024x646.jpg"
permalink: /airline-payments-volar/
---


<p><em>"El individuo que no se interesa por sus semejantes es quien tiene las mayores dificultades en la vida y causa las mayores heridas en los demás. De esos individuos surgen todos los fracasos humanos."</em><br>Alfred Adler - Qué debe significar la vida para usted.</p>



<p>Supongo que os habréis dado cuenta de qué va a tratar el artículo de hoy. Sí, sobre travel payments, y más concretamente de Airline Payments: un desconocido que te hace volar.</p>



<p>Te hace volar porque tiene un entramado de conexiones distintas a las del retail que consigue que las aerolineas reciban correctamente el dinero de los clientes finales metiendo a otros actores de por medio.</p>



<p>Le tengo especial cariño a este sector. A día de hoy no me dedico al sector de Airline Payments dentro de mi trabajo, pero el cariño viene porque me dediqué 7 años de mi vida al sector de la aviación. Mi padre se ha jubilado como empleado de este sector y tengo parte de mi familia que aún vive de él. Hoy este artículo va por ellos. </p>



<p>¿Os gustaría leer algo así esta vez? Vamos a por ello. </p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em>.</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Airline Payments: un desconocido que te hace volar</h2>



<p>Os preguntaréis, pero bueno, ¿tan diferente son los pagos en el sector de las aerolineas como para que tengamos que explicar cómo funcionan? </p>



<p>Chi.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/aircraft-1362586_1280-1024x646.jpg" alt="Airline Payments: un desconocido que te hace volar. Avión. Airplane" class="wp-image-1350" width="501" height="315"/></figure>



<p>Le tengo especial cariño a este sector. A día de hoy no me dedico al sector de Airline Payments dentro de mi trabajo, pero el cariño viene porque me dediqué 7 años de mi vida al sector de la aviación. Mi padre se ha jubilado como empleado de este sector y tengo parte de mi familia que aún vive de él. </p>



<p>¿Por qué es tan diferente este sector con respecto al resto? Porque dentro de la ecuación de cardholder, merchant, gateway, adquirente, esquema y emisor, metemos un actor más: las agencias de viajes. Si aún tienes dudas sobre quién hace qué dentro del ecosistema de pagos, te recomiendo que leas estos dos artículos de Retail &amp; Payments en los que lo explico: <a href="https://retailandpayments.com/pago-con-tarjeta-i/" target="_blank" rel="noreferrer noopener">aquí</a> y <a href="https://retailandpayments.com/pago-con-tarjeta-ii-acquiring-red-de-tarjetas-y-banco-emisor/" target="_blank" rel="noreferrer noopener">aquí</a>.</p>



<p>Sí amigos, las agencias de viajes tienen un papel fundamental en este sector. ¿Por qué? Porque las agencias de viajes tienen la tarea de comunicarse con las Aerolineas para realizar las reservas de viajes en nombre de los clientes finales. </p>



<p>Es decir, los clientes finales reservan un billete de avión de Madrid a Londres y son las agencias de viajes las que comunican con Iberia para decirle, tengo este pasajero, te reservo un vuelo para él. </p>



<p>Para entender un poco el tipo de agencias de viajes que existen, os dejo <a href="https://www.entornoturistico.com/como-se-clasifican-las-agencias-de-viajes/" target="_blank" rel="noreferrer noopener">este artículo</a> que explica bien la diferencia entre agencias de viajes mayoristas, minoristas, emisoras, receptoras, virtuales, físicas, etc.</p>



<p>Los Airline Payments tienen una funcionalidad especial que es desconocida y te hace volar, porque es la responsable de comunicarse con las aerolineas para realizar una cosa que se llama settlement o liquidación. Hablemos pues del Billing Settlement Plan (BSP) o del Airlines Reporting Corporation (ARC).</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=amu&banner=1TG1YA3XXZ1SP0S9MM82&f=ifr&linkID=b20cb85630a1052a231284260a58466d&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<h2 class="wp-block-heading">Billing Settlement Plan. Airlines Reporting Corporation</h2>



<p>Los sistemas BSP o ARC dependen de la región donde operen. En concreto, el ARC es la plataforma que utilizan las aerolíneas de Estados Unidos. El BSP es la plataforma que utilizan el resto de aerolíneas del mundo. Actualmente la utilizan más de 370 aerolineas en 180 países para realizar la liquidación de los pagos. </p>



<p>Las aerolíneas que se encuentran conectadas a las plataformas de BSC y ARC, permiten que las agencias de viajes emitan billetes en su nombre, con sus upgrades y extras para el viaje. </p>



<h3 class="wp-block-heading">IATA</h3>



<p>Para que todo esto tenga sentido, tiene que haber una organización por detrás que se encargue de armonizarlo. Y aquí llega IATA, que para quien no sepa qué es, <a href="https://acrosslogistics.com/blog/iata-asociacion-internacional-de-transporte-aereo" target="_blank" rel="noreferrer noopener">aquí</a> dejo un enlace que lo explica. Básicamente es la Asociación Internacional del Transporte Aereo.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/airport-2373727_1280-1024x682.jpg" alt="" class="wp-image-1356" width="506" height="337"/></figure>



<p>IATA otorga una acreditación a las agencias de viajes a través de las cuales pueden emitir billetes de avión usando el Billing Settlement Plan. Para las empresas de Estados Unidos la acreditación recibe el nombre de IATAN, que es quien conecta con el ARC.</p>



<h3 class="wp-block-heading">BSP y ARC en detalle</h3>



<p>Airline Payments: un desconocido que te hace volar. Y es un desconocido porque estos dos sistemas son ampliamente desconocidos para aquellos que, incluso dentro de los pagos, no han tratado nunca con esta parte del ecosistema. </p>



<p>Lo que en realidad hacen BSP y ARC es hacerle la vida más fácil a las aerolineas. Son plataformas de facturación electrónica que a su vez, realizan la liquidación y pagos a cada una de las aerolíneas desde los bancos de los agentes de viajes. </p>



<p>Tanto BSP como ARC son agregadores, actúan como un único punto de encuentro entre todos los actores involucrados en el pago en el sector de Airline Payments. Son mecanismos de compensación. </p>



<p>Si estos dos mecanismos no existieran, sería un problemón para las agencias de viajes, que se verían obligadas a establecer conexiones independientes con cada una de las aerolíneas para realizar la reserva y pago de los billetes de avión. </p>



<p>¿Y cómo se llega al BSP o ARC? Simple, a través de un GDS o Global Distribution System. ¿Y esos quienes son? Son agregadores de reservas de viajes. Para que nos entendamos, Amadeus o Sabre. Son intermediarios entre las agencias de viajes y las aerolineas, cadenas hoteleras, etc. </p>



<p>Merece capítulo aparte. Volvamos al BSP.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=audiblees&banner=11P7E7RYFWTMDE1A5Y82&f=ifr&linkID=945ef907d41895aa935c4e7809896a8e&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<h3 class="wp-block-heading">Flujo de las peticiones</h3>



<ol>
<li>Un agente de viajes inicia una solicitud de un vuelo que ve que a un cliente le interesa. Comunica con un GDS, que a su vez comunica con ARC o BSP dependiendo de si la aerolinea opera en Estados Unidos o en el resto del mundo. </li>



<li>Acto seguido, se produce el pago y se produce el flujo normal del pago a través de los esquemas VISA, Mastercard, Amex, Discover, etc.</li>



<li>En ese momento, BSP reporta pago satisfactorio al GDS que se comunica con la aerolínea y emite una solicitud definitiva de reserva de billete. </li>



<li>La Aerolínea confirma el billete definitivo a GDS, que lo confirma al ARC o BSP y a su vez se lo confirma a la Agencia de Viajes para emitir el billete a su cliente, que es el que viajará definitivamente. </li>
</ol>



<p>Sencillo, ¿no?</p>



<p>Al final del día, se producen los movimientos de dinero en las cámaras de compensación de los sistemas BSP y ARC.  Las Agencias de Viajes emiten la remesa al sistema bancario del BSP y ARC y éstos distribuyen el dinero hacia las aerolíneas en función de las reservas realizadas.</p>



<p>Este escenario descrito, puede ser distinto por un pequeño detalle. Un adquirente.</p>



<h3 class="wp-block-heading">El papel de los adquirentes en los Airline Payments</h3>



<p>Los adquirentes suelen estar enfocados en este tipo de pagos porque suelen ofrecer una conexión con los sistemas de BSP y ARC para realizar ese settlement. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/travel-5219496_1280-1024x657.jpg" alt="" class="wp-image-1357" width="539" height="345"/></figure>



<p>Los mayores adquirentes del mundo, como Worldpay, Worldline, Elavon, etc. suelen tener equipos dedicados a este tipo de pagos para ofrecer el mayor valor añadido a sus clientes. </p>



<p>De todo el flujo anteriormente descrito, la diferencia viene porque quien realiza todo el procesamiento de pagos con VISA, Mastercard, Discover, AMEX, etc. es el adquirente. Y, por otro lado, en vez de ser el sistema bancario de BSP y ARC quien realiza lo que se llama la liquidación y compensación, es papel del adquirente distribuir el dinero entre las distintas aerolíneas en función de las reservas realizadas. </p>



<h2 class="wp-block-heading">Conclusión </h2>



<p>Sobre Airline Payments, hay algunas cosas más en las que se pueden profundizar, como son los NDC o New Distribution Capability, que no es más que un protocolo de comunicación creado por IATA para establecer las comunicaciones de manera armonizada entre las Aerolíneas, los GDS y las Agencias de Viajes, fundamentalmente. </p>



<p>En este artículo no quiero quitaros más tiempo del necesario, queridos lectores, dado que quizás para muchos este es un nuevo aspecto dentro de los pagos que no conocíais y no conviene saturaros que si no, dejáis de leer mi blog. </p>



<p>Quizás ahora, tras leerme, entendéis el título del artículo: Airline Payments: un desconocido que te hace volar.</p>



<p>Gracias por leerme, gracias por tu tiempo. </p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
