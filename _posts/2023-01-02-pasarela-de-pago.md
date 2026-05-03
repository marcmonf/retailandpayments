---
layout: post
title: "¿No sabes lo que es una pasarela de pago?"
date: 2023-01-02 09:00:00 +0000
categories: ['Diccionario Retail', 'Payments & Fintech']
image: "assets/img/que-es-una-pasarela-de-pago.jpg"
permalink: /pasarela-de-pago/
---


<p><em>"Solo el que intenta lo absurdo es capaz de conseguir lo que parecía imposible" <br></em>Miguel de Unamuno</p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em>.</p>



<p>Antes de más, te deseo un feliz Año Nuevo 2023. </p>



<p>En muchos de los artículos que hay escrito acerca de lo que es una pasarela de pago, se tiende a confundir lo que es una pasarela de pago con un proveedor de pagos unificado. </p>



<p>Nada más lejos de la realidad. Son cosas distintas. </p>



<p>Es cierto que un proveedor de pagos unificado tiene una pasarela de pago integrada, pero hay más chicha por cortar. </p>



<p>Veamos</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Qué es una pasarela de pago</h2>



<p>Una pasarela de pago es un software que conecta un terminal de pago (TPV), bien físico o bien virtual, con un banco adquirente o un procesador de pagos. </p>



<p>Así de simple. Hala, ya he terminado el artículo. </p>



<p>No, en serio, sigamos que el 28 de diciembre ya pasó.</p>



<p>Si no sabes lo que es un adquirente, te dejo un artículo <a href="https://retailandpayments.com/adquirencia/" target="_blank" rel="noreferrer noopener">aquí </a>en el que explico qué es eso de la adquirencia. </p>



<p>Antes de seguir, comentarte que en inglés se las llama Gateway a las pasarelas de pago. Son lo mismito una cosa y otra.</p>



<p>Comunmente llaman pasarelas de pago a empresas que han ido surgiendo al calor del crecimiento del pago online y al pago vinculado al ecommerce. </p>



<p>A ver, sí y no. Me explico:</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=amu&banner=1TG1YA3XXZ1SP0S9MM82&f=ifr&linkID=b20cb85630a1052a231284260a58466d&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Esas empresas, que luego mencionaré, son empresas que sí, que tienen una pasarela de pagos para poder mandar el mensajito en el formato adecuado para que se produzca la liquidación del pago y el dinero se quite de la cuenta del emisor de la tarjeta y se deposite en la cuenta del merchant. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/que-es-una-pasarela-de-pago.jpg" alt="Que es una pasarela de pago" class="wp-image-1213" width="534" height="356"/></figure>



<p>Correcto, peeeeeeero, esas empresas, en un 90% (porcentaje totalmente inventado y aleatorio, pero aproximado), no ofrecen los servicios de pasarela de pago como un producto único, sino que el servicio que ofrecen es de cobertura del 100% del proceso de pago.</p>



<p>Veámoslo con detalle. </p>



<h3 class="wp-block-heading">Pasarela de pago como producto</h3>



<p>Como mencionaba antes, las pasarelas de pago son esas piezas de software que se encargan de transportar el mensaje desde el terminal de pago (físico o virtual) y entregarlo al adquirente o al procesador de pagos y, por ende, de recibir el mensaje de vuelta con el resultado de la transacción.</p>



<p>Va a ser una lectura de unos minutos, pero vas a entender perfectamente qué es una pasarela de pago tras leer este artículo. Garantizado.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/garantizado.jpg" alt="qué es una pasarela de pago" class="wp-image-1214" width="242" height="182"/></figure>



<p>Dentro de esa explicación, tenemos varias cosas a analizar, que son, primero, dónde está alojada esa pieza de software, segundo, cómo se comunican el terminal (TPV) y la pasarela y, por último, cómo se comunican el adquirente y la pasarela.</p>



<p>Cuando hablo de pieza de software, estoy hablando de un software as a service, principalmente alojado en Data Centers que se comunican a través de VPN, MPLS o internet puro.</p>



<h4 class="wp-block-heading">Certificaciones</h4>



<p>El terminal y la pasarela se entienden entre sí porque pasan unas certificaciones entre sí que validan que la comunicación entre ellos es cifrada, standard y adecuada a normativa. </p>



<p>La pasarela y el adquirente se entienden entre sí porque la pasarela pasa un proceso de certificación con el adquirente que asegura que las comunicaciones que se producen son las que marca la normativa vigente.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=audiblees&banner=11P7E7RYFWTMDE1A5Y82&f=ifr&linkID=075ef50d297ac8b79c0d4b6a04b34239&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Bien, ya tenemos las dos partes con las que se comunica la pasarela, que son el terminal de pago y el adquirente (o con el procesador de pagos). </p>



<p>Ahora pongámonos en situación: ¿cuántos terminales de pago distintos existen? Me refiero a físicos en este caso. ¿Cuántos adquirentes y procesadores de pagos existen? Una barbaridad en ambos casos. Sobre terminales de pago hablo <a href="https://retailandpayments.com/las-3-empresas-mas-grandes-de-tpvs/" target="_blank" rel="noreferrer noopener">aquí</a> y <a href="https://www.elconfidencial.com/economia/2022-07-31/espana-enganchada-pagar-tarjeta-edad-oro_3468176/#:~:text=Los%20dat%C3%A1fonos%20ya%20eran%20imprescindibles,por%20encima%20del%2027%25%20anual." target="_blank" rel="noreferrer noopener">aquí</a>.</p>



<p>Pues para que una pasarela sea un producto y poder ofrecerse como un servicio único, necesita una interconexión brutal con diferentes terminales de pago (TPVs) y diferentes adquirentes. </p>



<p>Y ¿eso existe? Sí, de hecho hay algunas empresas que lo ofrecen, por ejemplo, <a href="https://es.worldline.com/es/home.html" target="_blank" rel="noreferrer noopener">Worldline</a> y de manera global, además. </p>



<h5 class="wp-block-heading">Conclusión</h5>



<p>De lo que estoy hablando en esta parte del artículo, es de la pasarela de pago como producto vendido de manera independiente a cualquier otra tipología de servicio del pago, esto es, la contratación de la pasarela de pago como servicio único.</p>



<h3 class="wp-block-heading">Pasarela de pago como un servicio integrado</h3>



<p>Como decía al principio del artículo, la mayor parte de lo que vas a encontrar por internet sobre las pasarelas de pago, te hablan de empresas que ofrecen el servicio de pago integral, desde el terminal de pago físico hasta la adquirencia. </p>



<p>Pretendo con mi artículo que tengas claro qué es una pasarela de pago para poder diferenciar bien esos servicios que prestan los PSP (payment service provider).</p>



<p>Puedes leer en esas diferentes páginas que te intentan explicar lo que es una pasarela de pago, que nombran empresas como PayPal, Stripe, Square, Apple Pay, Checkout.com, etc. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/e-commerce-2897798_1920.png" alt="qué es una pasarela de pago" class="wp-image-1215" width="300" height="300"/></figure>



<p>Estas empresas proveen de servicios de pago integrales (en el caso de Apple Pay es más complicado, ya que ni siquiera hace de adquirente, tan solo es un contenedor de tarjetas tokenizadas); y llevan dentro de su producto una pasarela de pago para conectar el terminal de pago (TPV) con el adquirente, que además son ellos mismos en la mayor parte de las ocasiones. </p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=primevideo&banner=0MC4AN2A96KXVJAYZD82&f=ifr&linkID=e8718bfb92fbd3049a0825322f8fc6ec&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Es decir, que la pasarela conecta su terminal con su adquirente y no sale de la propia red del proveedor de servicios. </p>



<p>Generalmente, este tipo de empresas tienen que realizar menos certificaciones externas dado que se apoyan en las redes de los esquemas (VISA, Mastercard, AMEX, etc.) para liquidar los pagos y establecer la comunicación con el emisor de la tarjeta. </p>



<p>Una vez certificado por el esquema, no tienen que certificar los bancos emisores en cuestión porque la comunicación la realizan los esquemas. </p>



<p>¿Es peor? No, es diferente, simplemente. Tiene algunas ventajas y algunas desventajas.</p>



<p>¿Ventajas? Las soluciones son sencillas de integrar y suelen tener todo bajo control en temas de fraude, blanqueo de capitales, ciberseguridad, etc. </p>



<p>¿Desventajas? El precio. Suelen ser soluciones más caras, pero no por ello tienen que ser mejores, ojo. Pueden tener un precio más elevado y aún así tener un soporte de atención al cliente nefasto. </p>



<h3 class="wp-block-heading">Características obligatorias de una pasarela de pago</h3>



<p>Las pasarelas de pago gestionan el envío del mensaje al adquirente, como ya he dicho en varias ocasiones dentro de este artículo, pero, ¿qué mas?</p>



<p>Por ir un poco más al detalle, en <a href="https://retailandpayments.com/pago-estados-unidos/" target="_blank" rel="noreferrer noopener">este artículo</a> en el que hablo sobre cómo funciona el pago en Estados Unidos, dije que la característica única válida para mí para que sea considerada así, es <strong>que haga al merchant independiente del adquirente</strong>. </p>



<p>Maticemos esto para que no haya lugar a equívocos. </p>



<p>Ya he explicado arriba que las pasarelas de pago pueden ser un producto comercializado aparte o un producto integrado en la solución de pago contratada. Pero existir, existe en ambos casos. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/ecommerce-2140604_1280.jpg" alt="pasarela de pago" class="wp-image-1219" width="438" height="191"/></figure>



<p>¿La diferencia? En el primer caso llegas a un acuerdo con el proveedor de la pasarela y realizas la integración de la pasarela únicamente, pero después necesitas llegar a un acuerdo con el adquirente y comunicarle al proveedor de la pasarela quién va a ser tu adquirente para que lo configure (recordemos que la pasarela tiene que estar certificada por el adquirente en cuestión).</p>



<p>En el segundo caso integras la solución de pago y la pasarela está ahí, sin pagar a distintos proveedores sino a uno solo por todo el proceso de pago.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=pw&banner=0EY4WWAVQJ8VYDJQHT02&f=ifr&linkID=2b82991c49c2caf7d9e16d8172680889&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Por eso, el valor añadido que proporciona una pasarela es <strong>que el merchant sea totalmente independiente del adquirente</strong>, es decir, que si mañana las condiciones que le presenta el adquirente no le convencen, pueda cambiarlo sin necesidad de migrar toda la infraestructura de pago ya montada previamente. </p>



<h4 class="wp-block-heading">Funciones básicas de la pasarela</h4>



<p>Espero que poco a poco se vaya entendiendo qué es una pasarela de pago. Si no, adelante, dejadme un comentario e intento explicarme mejor.</p>



<p>Podríamos comenzar diciendo que es fundamental que la pasarela de pago cuente con certificación PCI DSS Level 1, que es la más alta calificación de seguridad otorgada por el organismo que vela por la seguridad en el pago. Si no sabes quién es el PCI SSC, te dejo un <a href="https://retailandpayments.com/por-que-visa-mc-unionpay-mandan/" target="_blank" rel="noreferrer noopener">aquí</a> artículo en el que lo explico.</p>



<p>Para que el terminal de pago (TPV) pueda comunicarse con la pasarela, éste necesita saber cuánto tiene que cobrarle al cliente que va a pagar. Para ello, dentro de las pasarelas de pago existe un plugin que conecta el terminal (TPV) con el software de caja (POS Software) para que se comunique la caja con el terminal de pago.</p>



<p>Por otro lado, la pasarela de pago ofrece siempre un backoffice que da acceso a las transacciones que ha procesado. Ese backoffice sirve fundamentalmente para que los departamentos de contabilidad y tesorería de las empresas puedan realizar una conciliación correcta de todos los pagos electrónicos que ha recibido el merchant. </p>



<p>Como otra funcionalidad básica, la pasarela tiene que ser capaz de enrutar a distintos adquirentes, los pagos en función de reglas de enrutamiento predefinidas. Por ejemplo, quiero que las tarjetas extranjeras las procese el adquirente A, las tarjetas corporativas las procese el adquirente B y el resto de tarjetas las procese el adquirente C. Esto es una funcionalidad que tiene que tener una pasarela. </p>



<h4 class="wp-block-heading">Métodos de pago</h4>



<p>Por último, la pasarela de pago tiene que estar adecuada a todas las tipologías de pago existentes, tanto pago con tarjeta, pagos A2A, pagos con distintas tecnologías (banda magnética, chip EMV, contactless), pagos BNPL (Buy Now Pay Later), pagos con los diferentes esquemas existentes, e incluso, pagos con criptomonedas.</p>



<h3 class="wp-block-heading">Funcionalidades extra de las pasarelas de pago</h3>



<p>Como buen producto que procesa pagos, es necesario que tenga algunas funcionalidades extra para complementar el pago. </p>



<p>Me estoy refiriendo, por ejemplo, a que la pasarela sea capaz de programar pagos recurrentes; que pueda gestionar devoluciones administrativas (devoluciones sin estar el cliente presente); que pueda gestionar el cambio de divisa (DCC por sus siglas en inglés); que se puedan personalizar los informes de transacciones en función de diferentes filtros; tokenización de tarjetas; posibilidad de vincular nuevos métodos de pago como pago por QR, y sobre todo, que tenga una función de omnicanalidad, es decir, que pueda ser una pasarela que sirva para el entorno presencial y web.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=pw&banner=14DTPEETRQ9KEY0RSKR2&f=ifr&linkID=ebd0847d29883c58384ee302259efd5b&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<h3 class="wp-block-heading">Conclusión</h3>



<p>Tras leer este artículo espero que veas claro qué es una pasarela de pago.</p>



<p>Como resumen, podemos decir que las pasarelas de pago son esos canales de comunicación existentes con los adquirentes que transportan la transacción de manera segura y, además, proporcionan una infraestructura de pago que, en algunos casos, puede aportarnos el gran valor añadido de hacernos libres de operar con distintos adquirentes.</p>



<p>Como siempre, déjame en comentarios tu parecer para poder seguir aportando contenido de valor en la comunidad de todos los que nos dedicamos al Retail y al Pago.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail &amp; Payments</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
