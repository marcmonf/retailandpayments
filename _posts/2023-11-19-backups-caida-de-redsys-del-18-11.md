---
layout: post
title: "Cómo solucionar la caída de Redsys del 18"
date: 2023-11-19 15:26:49 +0000
categories: ['Payments &amp; Fintech']
permalink: /backups-caida-de-redsys-del-18-11/
---


<p>La caída de Redsys del 18 de noviembre ha hecho mucho daño a muchos merchants. Toda españa vieron paralizado su negocio al no poder aceptar pagos con tarjeta. En este artículo, vamos a ver qué alternativas tenemos como merchant ante una eventual caída del adquirente/procesador. </p>



<p><em>"En medio de la dificultad, reside la oportunidad."</em><br>Albert Einstein.</p>



<p>Antes de nada, desear que Redsys, encuentre cuanto antes la causa raíz del problema que tuvieron el pasado día 18. No es plato de buen gusto para nadie cuando algo así ocurre. </p>



<p>Esto demuestra que todos, absolutamente todos los proveedores de tecnología que tienen elementos de comunicaciones como una de las claves del negocio, están expuestos ante cualquier incidencia, problemas de latencia, cuellos de botella, caídas de servidores, etc. Todos. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2023/11/street-sign-141396_1920-1024x774.jpg" alt="Caída de Redsys 18 noviembre. Alternativas. Backups" class="wp-image-1682" style="width:444px;height:auto"/></figure>



<p>Aquellos que somos motoristas, tenemos una frase para definir esto y, es que sólo existen dos tipos de motoristas: los que se han caído y los que se van a caer. </p>



<p>Pues en tecnología es lo mismo, sólo hay dos posibles situaciones: caídas pasadas o caídas futuras. Recordemos por ejemplo el caso de <a href="https://www.theregister.com/2023/09/11/square_dns/" target="_blank" rel="noreferrer noopener">Square, que por un problema con las DNSs estuvo más de 14h sin poder procesar pagos</a>.</p>



<p>Ya he leído algunos comentarios interesantes en los que algunos dicen: mi plataforma no se cae, tiene una disponibilidad psicodélico-maravillosa y no tenemos estos problemas. Es posible que por ahora no hayan ocurrido, pero tarde o temprano, a todos nos pasa.</p>



<p>También he leído que con Bitcoin esto no pasa. Es posible, pero BTC no permite el cálculo económico.</p>



<p>Perfecto, Marcos, pero ¿qué hacemos ante estas eventualidades?</p>



<p>Os cuento, pero como siempre, mi disclaimer habitual:</p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em></p>



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="marcmonf" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">La caída de Redsys del 18 de noviembre</h2>



<p>La caída de Redsys provocó reacciones de todo tipo en redes sociales y <a href="https://www.elmundo.es/economia/2023/11/18/6558baa1e4d4d879278b4578.html" target="_blank" rel="noreferrer noopener">en los principales medios de prensa del país</a>.</p>



<p>Huelga decir que el servicio que prestamos los que nos dedicamos a los pagos, se puede definir como un servicio algo ingrato, dado que se presume que siempre debe funcionar y, cuando no funciona, cualquiera que sea el motivo, evoca los sentimientos negativos más profundos en nuestro ser, como consumidores y como merchant. </p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2023/11/Logo-Redsys.jpg" alt="" class="wp-image-1679" style="width:343px;height:auto"/></figure>



<p>No puedes pagar con tarjeta y no llevas efectivo encima. La solución rápida sería llevar efectivo encima, sin duda, pero no fue tampoco una solución en el día de ayer cuando los cajeros automáticos bancarios tampoco funcionaban. Habría que ver si los cajeros de <a href="https://www.euroautomaticcash.es/es/index.html" target="_blank" rel="noreferrer noopener">Euro Automatic Cash</a> o <a href="https://www.euronetatms.es/" target="_blank" rel="noreferrer noopener">Euronet</a> funcionaban, cosa que desconozco a fecha de hoy.</p>



<p>Desde el lado del consumidor o merchant, ya sabemos la solución rápida que es el efectivo, pero, como merchant, ¿qué otras opciones nos quedan para continuar aceptando pagos con tarjeta en el caso de sufrir un problema como el de la caída de Redsys del 18 de noviembre? Veámoslos.</p>



<h2 class="wp-block-heading">Qué partes están implicadas en un pago</h2>



<p>Haciendo un breve repaso a quién tenemos involucrados en un proceso de pago, como expuse en <a href="https://retailandpayments.com/pago-con-tarjeta-i/" target="_blank" rel="noreferrer noopener">este artículo</a> y <a href="https://retailandpayments.com/pago-con-tarjeta-iI/" target="_blank" rel="noreferrer noopener">este otro artículo</a>, en un pago tradicional, como ya sabemos tenemos a las siguientes partes de manera muy muy resumida: </p>



<ul>
<li>Banco Emisor</li>



<li>Pasarela de pago</li>



<li>Banco Adquirente</li>



<li>Esquemas</li>
</ul>



<p>El cliente final introduce la tarjeta en el terminal de pago (o la acerca mediante EMV Contactless). Esa tarjeta está emitida por el banco emisor del cliente final. Aquí se produce la primera interacción.</p>



<p>El terminal de pago, lee los datos de la tarjeta, los cifra y manda la transacción del importe que sea (pongamos 100€) a través de la pasarela de pago al banco adquirente del merchant. </p>



<figure class="wp-block-image size-full"><img src="https://retailandpayments.com/wp-content/uploads/2023/01/Diagrama-Pagos-Locales.png" alt="Ciclo de un pago. " class="wp-image-1262"/></figure>



<p>El banco adquirente manda la transacción a los esquemas, VISA y Mastercard y estos se encargan de lanzarla al banco emisor de la tarjeta para recibir el OK o KO a la misma.</p>



<p>Posteriormente, la transacción viaja con el resultado de la aceptación al terminal de pago para decir si la transacción ha tenido lugar o no. </p>



<p>En este sentido, el esquema que tienen montados los bancos de España, omite uno de los pasos, actuando Redsys como esquema local sin necesidad de subir la transacción a VISA o Mastercard para aceptarla. Son los sistemas de Redsys los que se encargan de hacer de plataforma para el adquirente y el emisor en España para determinar si una transacción puede ser aceptada o no. </p>



<p>Esto es grosso modo lo que ocurre durante un proceso de pago.</p>



<h2 class="wp-block-heading">Dónde pueden ocurrir los fallos en un proceso de pago</h2>



<p>Fundamentalmente los problemas que pueden ocurrir son de comunicaciones. En cada uno de los nodos, puede haber una interrupción de la comunicación y no producirse el procesamiento del pago. </p>



<p>La caída de Redsys, según nos comentan, tuvo que ver con líneas de comunicación interna:</p>



<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Informamos que están solventadas las degradaciones de servicio de pagos de la última hora, exclusivamente vinculadas a las líneas de comunicación interna.</p>&mdash; Redsys (@Redsys_es) <a href="https://twitter.com/Redsys_es/status/1725878829703446946?ref_src=twsrc%5Etfw">November 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



<p>Siempre, siempre tiene que ver con problemas de comunicaciones: del terminal a la pasarela, de la pasarela al adquirente, del adquirente a los esquemas, de los esquemas a los emisores, o, incluso, del terminal a la propia red interna de la tienda del merchant. </p>



<p>Entonces, según el dónde esté el problema ¿dónde podemos incidir?</p>



<h2 class="wp-block-heading">Los distintos backups que podemos utilizar</h2>



<p>A continuación, analizamos los distintos casos que podemos tener de interrupción de la comunicación y qué medidas de protección podemos poner para seguir aceptando pagos con tarjeta. </p>



<h3 class="wp-block-heading">Si nos fallan las comunicaciones de la tienda (I)</h3>



<p>En el caso de que no tengamos red en la tienda (entendamos tienda en el sentido más amplio), tenemos una capacidad que la mayor parte de las pasarelas de pago permiten una configuración de transacciones Offline.</p>



<p>Dichas transacciones tienen lugar cuando el terminal y la tarjeta del emisor resuelven la transacción de manera autónoma sin necesidad de lanzar la transacción para ser aprobada online. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2023/11/Terminal-Gateway-Adquirente-1024x576.png" alt="Modo offline del terminal de pago. Caída de redsys 18 de noviembre" class="wp-image-1673" style="width:508px;height:auto"/></figure>



<p>Esas transacciones cumplen a la perfección con la normativa y los requisitos de PCI. Una vez el terminal de pago reestablece la comunicación con el exterior, lanza todas las transacciones que el mismo almacena en la memoria para su posterior aprobación. </p>



<p>Este modo es enteramente configurable por el merchant, determinando cuál es el tiempo que debe esperar hasta entrar en modo offline y cuántos intentos debe hacer hasta determinar que no es posible la comunicación. </p>



<p>Estas transacciones implican que el adquirente los está procesando en tiempo real. Es decir, que no hay una aprobación ni una verificación de los fondos en tiempo real. Esto significa que el merchant corre con el riesgo de un eventual rechazo de la transacción por el adquirente. </p>



<p>Para ello, los merchant suelen establecer ciertos límites para cada transacción que se procese en modo offline. </p>



<p>Como podréis sobreentender, el modo offline permite al negocio seguir procesando un volumen elevado de transacciones que, en algún caso, puede llegar a ser superior el 50-60% de las transacciones. </p>



<h3 class="wp-block-heading">Si nos fallan las comunicaciones de la tienda (II)</h3>



<p>La segunda parte tiene que ver con el acceso a internet de manera remota. </p>



<p>Por ir al grano, se trata de tener terminales de movilidad, es decir, que usen capacidades de conexión móvil en vez de comunicaciones de red tradicional de la tienda para establecer comunicación con la pasarela. </p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2023/11/Move5000.png" alt="terminal de pago de movilidad. Backup de movilidad ante caída de redsys 18 de noviembre" class="wp-image-1674" style="width:301px;height:auto"/></figure>



<p>Estos terminales pueden estar perfectamente integrados con el sistema de caja y recibir la petición de cobro directamente de este para cobrar como el resto de terminales fijos y no actuar como un terminal en modo stand alone (terminal sin integración con sistema de caja). </p>



<p>Estos terminales utilizarían la red 4G - 5G para lanzar las transacciones y tener una aprobación online del adquirente.</p>



<p>Otra alternativa de movilidad es utilizar tecnología SoftPOS para continuar aceptando pagos en caso de que la red de la tienda no esté disponible. </p>



<h3 class="wp-block-heading">Si nos falla el banco adquirente</h3>



<p>Este es el caso que hemos vivido con la caída de Redsys del pasado día 18 de noviembre. La comunicación con el adquirente no se puede producir porque está indisponible. </p>



<p>Para entender aquí el papel de Redsys, esta compañía es una empresa participada por <a href="https://canales.redsys.es/canales/ayuda/entidades.html" target="_blank" rel="noreferrer noopener">la mayor parte de los bancos de España</a> para externalizar los servicios tecnológicos de adquirencia y tener un procesador único para la interconexión bancaria. ¡Boom!</p>



<p>En este sentido, la caída de Redsys del día 18 de noviembre, supuso que no era posible procesar pagos cuando tu adquirente formaba parte del entramado de sociedades que pertenecen a Redsys. </p>



<h4 class="wp-block-heading">¿Qué hacemos entonces cuando el adquirente no está disponible?</h4>



<p>Sencillo: enrutar a otro adquirente. </p>



<p>- Es que es más caro - diréis algunos que os dedicáis a esto de los pagos. <br>Mi respuesta: - es más caro ingresar 0€ durante un periodo de 1-2h un sábado que pagar un porcentaje pequeño del pago - </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2023/11/Terminal-Gateway-Adquirente-1-y-2-1024x576.png" alt="caída de redsys del 18. Adquirente backup fallback acquiring" class="wp-image-1677" style="width:634px;height:auto"/></figure>



<p>Hagamos un sencillo ejercicio:</p>



<p>Pongamos que, en una tienda, por ejemplo un supermercado, un sábado a las 12 de la mañana, en cada hora hay 1.000 compradores. Cada uno va a hacer una compra media de 150€. Son 150.000€ de ventas. </p>



<p>Si no hay adquirente alternativo, no se procesan 150.000€ a la hora. Si son 2h, se pierden 300.000€ de venta. </p>



<p>Vamos a suponer que el adquirente local tiene una tasa de descuento del 0.30% del pago. Poniendo un sobrecoste del doble de tasa de descuento entre un adquirente local y uno alternativo que procese cross-border (<a href="https://retailandpayments.com/cross-border-payments/" target="_blank" rel="noreferrer noopener">aquí explico lo que es la adquirencia cross-border</a>), nos vamos a una tasa del 0.60%<strong>*</strong>. </p>



<p>Procesar esos 300.000€ con un adquirente alternativo nos ha costado 1.800€. Es decir, facturamos 298.200€. </p>



<p>Frente a los 0€ que ingresamos si no tenemos adquirente alternativo, yo lo veo. ¿Y vosotros?</p>



<p>Para esto, necesitamos que la pasarela de pago que usemos sea capaz de ejecutar un multienrutamiento a distintos adquirentes. Esta capacidad de poder disponer de un fallback acquiring no todas las pasarelas las tienen. Por tanto, es fundamental que el PSP que tengamos como proveedor tenga una capacidad como esta para poder asegurarnos que el pago seguirá funcionando ante una eventual caída del adquirente. </p>



<p class="has-small-font-size"><strong>*</strong>Tasa de descuento totalmente aleatorias y cogidas para realizar el business case. Cualquier parecido con la realidad es pura coincidencia. Las tasas de descuento de adquirencia suelen presentarse bajo el modelo ICH++ en el que los costes del intercambio bancario y del esquema son totalmente variables dependiendo de la tarjeta que se use para realizar el pago.</p>



<h2 class="wp-block-heading">Resumen para prevenir caídas como la de Redsys del 18 de noviembre</h2>



<p>Las distintas entidades con las que un merchant tiene contrato, generalmente son:</p>



<ul>
<li>Proveedor de internet</li>



<li>PSP </li>



<li>Adquirente</li>
</ul>



<p>Si fallan cualquier de estos siempre podremos por tanto emplear medidas de backup para continuar aceptando pagos y no tener pérdidas en el negocio por falta de comunicaciones con cualquiera de los actores involucrados. </p>



<p>Por tanto, si eres parte interesada, te recomiendo que hables con tu proveedor de pagos y empieces a emplear medidas de backup que te permitan continuar con el negocio funcionando y las caídas queden como bonitas anécdotas de lo que pudo salir mal pero al final no.</p>



<p>Una caída como la de Redsys del 18 de noviembre hace muy necesario que, como merchant, se planteen estos distintos escenarios. Especialmente en estas épocas en las que estamos donde cada venta cuenta. Mucho. </p>



<p>Y si tienes dudas, contacta conmigo, seguro que puedo ayudarte a emplear esas medidas de backup.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail&amp;Payments</p>



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="marcmonf" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
