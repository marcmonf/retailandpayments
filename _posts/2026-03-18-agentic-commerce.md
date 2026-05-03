---
layout: post
title: "Mi abuela no sabe qué es el Agentic Commerce"
date: 2026-03-18 07:37:04 +0000
categories: ['Payments &amp; Fintech']
image: "/assets/img/03/reaxionlab-ecommerce-1706103_1280-1024x1024.png"
permalink: /agentic-commerce/
---


<p>Hoy os vengo a hablar del Agentic Commerce.</p>



<p>Sí, eso de lo que nadie está hablando. Eso que a tu abuela ahora mismo, como a la mía, la inquieta sobremanera. "<em>Casi nah</em>"</p>



<p>He estado un tiempecito parado y pronto llegarán novedades sobre qué me deparará el futuro. Stay tunned en mi linkedin y sus enteraréis. Estoy muy ilusionado con lo que se viene por delante. </p>



<p>Pero hoy, os vengo a hablar de un conceptillo que está generando una mención en todos los informes de pagos que salen, como por ejemplo el <a href="https://www.worldpay.com/en/agentic-commerce-report" type="link" id="https://www.worldpay.com/en/agentic-commerce-report" target="_blank" rel="noreferrer noopener">Worldpay Agentic Commerce Report</a>. </p>



<p>Vosotros sois muy jóvenes, pero, ¿os acordáis de cuando teníamos que meter los 16 dígitos de nuestra tarjeta para pagar? Qué tiempos aquellos. Rezar para estar pagando en entorno seguro y esperar el pedido como quien espera el autobús en diciembre. </p>



<p>Bueno, pues eso, queridos lectores, se está quedando en el olvido, se está quedando en la prehistoria. Ojo, esto no significa que los ecommerce no lo tengan o que empiecen a prescindir de ello. Guardad las pistolas que no os he dicho eso. </p>



<p>Hoy vengo a hablaros de algo que suena a película de ciencia ficción pero que ya está aquí: el Agentic Commerce. Sí, esa movida donde la IA no solo te recomienda un par de zapatillas, sino que las busca, las compara, las paga y te las trae a casa sin que muevas un dedo. </p>



<p>O casi.</p>



<p>Y coleguis, o lo entendemos o nos vamos a quedar como mi abuela con el bizum, sin entender para qué sirve. (Contexto: mi abuela vive en un entorno rural y no tiene ni móvil). </p>



<p>En este artículo os lo desmenuzo todo, desde qué porras es hasta cómo se implementa, quién pone qué y los riesgos que nos ponen los pelos de punta. Todo explicado como si estuviéramos en un afterwork con cañas, porque el mundo no está hecho solo de ingenieros, ¿vale?. Pero antes, disclaimer:</p>



<p><em><strong>Disclaimer</strong>: todas las opiniones y declaraciones vertidas en este blog representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa o negocio con quien tenga cualquier tipo de relación o colaboración.</em></p>



{% include buymeacoffee.html %}



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Qué es el Agentic Commerce: ¿es un avión? ¿un pájaro? ¿es una forma de comprar? ¿es un protocolo? ¿es una interacción?</h2>



<p>Imagina que estás en el sofá un domingo por la tarde y le dices a tu teléfono: “Oye, hazme la compra semanal para los cinco de casa, presupuesto 200 euros, que sea sano y que no se pase de 2000 calorías por cabeza”. Y el teléfono, en vez de darte una lista de productos, va, busca en el supermercado, compara precios, elige lo mejor, paga y te dice “pedido hecho, llega mañana”. Eso, hamijos, es el Agentic Commerce en su forma más pura.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/reaxionlab-ecommerce-1706103_1280-1024x1024.png" alt="El agentic commerce en una tienda ecommerce" class="wp-image-2686" style="width:506px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>No es un chatbot que te recomienda. No es solo una app. Es la IA convertida en tu comprador personal autónomo. Tú das la orden inicial (una sola vez), pones tus reglas (presupuesto, preferencias, límites) y el agente actúa por ti: busca, negocia, paga y cierra la compra.</p>



<p>En cristiano (no Ronaldo), hamijos, esto es tres cosas a la vez y te lo explico como si estuviéramos en el bar: es una forma nueva de comprar donde ya no tienes que abrir mil pestañas, es una interacción entre tú, la IA, la tienda y el que cobra el dinero, y al final es un puñado de protocolos técnicos que hacen que nadie te robe la tarjeta ni el agente se vuelva loco comprando tonterías. Imagina que le dices a tu pareja ‘haz la compra’ y ella te trae todo sin que muevas un dedo… pues eso, pero con IA.</p>



<h2 class="wp-block-heading">Cuál ha sido su evolución: desde dónde se inicia, quién es el precursor y cómo está funcionando ahora</h2>



<p>Todo empezó en septiembre de 2025 cuando OpenAI (los de ChatGPT) y Stripe anunciaron juntos el Agentic Commerce Protocol. Fue como el pistoletazo de salida: crearon un estándar abierto y gratuito para que los agentes de IA pudieran comprar de verdad. Stripe fue el primero en ponerlo en producción y en diciembre de 2025 lanzó su Agentic Commerce Suite: “un solo botón y tus productos aparecen directamente en ChatGPT”.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/lacasitadelaIA-1024x634.png" alt="El Agentic Commerce comprando" class="wp-image-2683" style="width:540px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>Visa y Mastercard se subieron rápido al carro. Visa con su Intelligent Commerce (ya hay pilotos en Latam) y Mastercard preparando el lanzamiento comercial para finales de 2026. El precursor claro es esa dupla OpenAI + Stripe.</p>



<p>Pero, ¿cómo está funcionando en la vida real? Hace semanas, cuando empecé a investigar para este artículo, me metí en X.com y flipé con lo que la gente estaba diciendo. El debate está que arde.</p>



<p>Un dev llamado @shafu0x lo resumió perfecto: “Los agentes van a gastar online, x402 reemplaza las claves API, las stablecoins son el dinero de los agentes, cada agente necesitará una wallet… crypto + IA por fin se juntan”. Otros hablan de que “esto valdrá miles de millones pronto” y que las suscripciones tradicionales se van a morir.</p>



<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Agentic Commerce is here!<br><br>Most people don’t see it yet.<br><br>But AI agents are about to become the biggest economic actors on the internet.<br><br>🧵</p>&mdash; shafu (@shafu0x) <a href="https://twitter.com/shafu0x/status/2027196153712763119?ref_src=twsrc%5Etfw">February 27, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



<p>John Collison de Stripe (en un post de a16z) decía que esto democratiza el descubrimiento: “Puedes encontrar marcas pequeñas directamente en una charla con ChatGPT y comprar al instante”. En X hay quien ya prueba tiendas Shopify con “Agentic Storefronts” y cuenta que las ventas “zero-click” son reales.</p>



<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">John Collison says agentic commerce will transform how consumers spend, shifting clunky keyword-based shopping to seamless in-chat experiences:<br><br>“It could be quite a democratizing force because you could lead to discovery of lesser known brands.”<br><br>“The product that you discovered… <a href="https://t.co/LQR6fHyD8g">pic.twitter.com/LQR6fHyD8g</a></p>&mdash; a16z (@a16z) <a href="https://twitter.com/a16z/status/2014780335343755706?ref_src=twsrc%5Etfw">January 23, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



<p>Pero también hay críticas honestas: algunos dicen que aún es “brittle” (frágil, para los de la LOGSE, como yo), que OpenAI ha tirado un poco atrás con el Instant Checkout y que muchos “frameworks agentic” son solo envoltorios de Stripe con LLM. En resumen: nació como estándar abierto en 2025, Stripe lo llevó a la práctica primero y en 2026 ya hay gente comprando de verdad… aunque todavía con dientes de leche. En mi artículo anterior sobre el protocolo AP2 de Google ya os avisé de que Visa venía fuerte… pues bien, ya está aquí.</p>



<h2 class="wp-block-heading">Qué cosas son necesarias para implementar el Agentic Commerce: quién se moja y por qué</h2>



<p>Vamos a ver, aquí viene la parte que nadie explica y que nos está reventando a todos la cabeza. Leed esto bien, con atención:</p>



<p>No basta con que el que cobra (es decir, nosotros, el PSP), esté preparado. No. Las dos partes tienen que currar para que todo funcione. Sus lo explico, para mis queridos niños de Miliki:</p>



<p>Imagina que eres dueño de una tienda de ropa online. Si solo el PSP (Stripe, Adyen o quien sea) implementa los pagos seguros, el agente de IA no puede ni crear el carrito ni ver tu stock. Se queda hablando solo. Por eso el merchant también tiene que preparar su tienda para que el agente entre, navegue y hable con ella.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/ignartonosbg-visa-6947134_1280-1024x683.jpg" alt="El Agentic Commerce con VISA Shared Payment Tokens" class="wp-image-2684" style="aspect-ratio:1.4992888417882142;width:541px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>Es responsabilidad compartida, hamijos: el agente es como un intermediario que necesita que la tienda le dé los precios y el stock reales y que el PSP le deje pagar sin líos. Si falta uno, todo se para en seco.</p>



<h2 class="wp-block-heading">Va, y cómo funciona todo esto por detrás</h2>



<p>Vamos a imaginarlo juntos, paso a paso, porque la mayoría de la gente aún no lo ha visto en acción.</p>



<p>Estás en casa y le dices al agente (en ChatGPT o donde sea): “Cómprame una camiseta en la tienda X por menos de 30 euros”.</p>



<p>Pues el bicho primero te pide permiso una sola vez con tus límites, luego busca en la tienda como Dios manda (sin raspar como un bot loco), monta el carrito, te pregunta si te mola o decide él si tus reglas están claras, le dice al que cobra ‘venga, cobra ya’ y zas, el paquete viene para casa. Todo en segundos. Y tú sigues siendo el jefe: si te arrepientes, revocas el permiso y punto. Sin magia negra, solo reglas claras y conexiones seguras. ¿Ves? Fácil.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/deltaworks-artificial-intelligence-7768524_1280-1024x682.jpg" alt="AI y su temazo" class="wp-image-2687" style="width:598px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>Todo en segundos. Tú sigues siendo el jefe: puedes revocar el permiso cuando quieras. No hay magia negra, solo reglas claras y conexiones seguras.</p>



<p>Hasta aquí todo clarinete, ¿verdad? Vamos con lo que son los aspectos técnicos, de los cuales hablé un poco en un par de artículos anteriores, que son <a href="https://retailandpayments.com/visa-inteligencia-artificial-stablecoins/" type="link" id="https://retailandpayments.com/visa-inteligencia-artificial-stablecoins/" target="_blank" rel="noreferrer noopener">este</a> y <a href="https://retailandpayments.com/protocolo-ap2-de-google/" type="link" id="https://retailandpayments.com/protocolo-ap2-de-google/" target="_blank" rel="noreferrer noopener">este otro</a>. </p>



<h2 class="wp-block-heading">Lo de los protocolos, los aspectos técnicos</h2>



<p>Para que esto funcione de verdad hay varios ladrillos técnicos. Os los cuento como si os estuviera explicando en la cocina.</p>



<p>El primero y más importante es el Agentic Commerce Protocol (ACP). Es un estándar abierto y gratuito que crearon OpenAI y Stripe. Podéis verlo <a href="https://docs.stripe.com/agentic-commerce/protocol" type="link" id="https://docs.stripe.com/agentic-commerce/protocol" target="_blank" rel="noreferrer noopener">aquí</a>. Básicamente es el idioma común que permite que el agente hable con la tienda. La tienda solo tiene que poner cuatro botones técnicos (llamados endpoints): uno para crear el carrito, otro para actualizarlo, otro para cobrar y otro para cancelar. Se hace con conexiones normales de internet seguras. Shopify ya lo tiene fácil; si tienes tienda propia, necesitas un programador que lo añada a tu tienda de manera sencilla.</p>



<p>Luego está el Intelligent Commerce de Visa, que es su versión del mismo rollo pero con más foco en tokens y seguridad. Lo podéis ver <a href="https://developer.visa.com/capabilities/visa-intelligent-commerce" type="link" id="https://developer.visa.com/capabilities/visa-intelligent-commerce" target="_blank" rel="noreferrer noopener">aquí</a>. Muy parecido, pero pensado para que los agentes paguen con tarjetas Visa de forma segura.</p>



<p>Dentro del ACP está el Delegated Payment Spec, que es la regla de cómo el agente pasa tu tarjeta de forma segura sin que OpenAI la guarde. Lo explican <a href="https://developers.openai.com/commerce/specs/payment/" type="link" id="https://developers.openai.com/commerce/specs/payment/" target="_blank" rel="noreferrer noopener">aquí</a>. En mi artículo anterior sobre el protocolo AP2 de Google ya lo mencioné como el futuro que Visa estaba preparando.</p>



<p>El truco mágico dentro de todo esto son los Shared Payment Tokens. Son códigos temporales que solo sirven para esa compra concreta, ese importe y esa tienda. Así nadie puede robar tu tarjeta completa. ¿Por qué existen? Para que sea seguro y cumpla todas las normas sin complicar la vida a nadie.</p>



<p>Y sí, la tienda tiene que exponer esos cuatro endpoints. Es como poner cuatro puertas seguras para que el agente entre. Cualquiera con un programador medio puede hacerlo. No es ciencia espacial.</p>



<h2 class="wp-block-heading">Riesgos: hablemos de riesgos del Agentic Commerce</h2>



<p>Pero, ¿hay que adaptar el riesgo? ¿Toca la parte de PCI y compliance? ¿Se toca la arquitectura de mi PSP o de mi ecommerce?</p>



<p>Sí, todo se toca y hay que adaptarlo sí o sí, porque si no, el desastre está servido.</p>



<p>El riesgo y el fraude cambian completamente: los sistemas antiguos miraban cómo movías el ratón. Ahora no hay ratón. Hay que usar señales del agente (metadatos, límites del token). Stripe ya lo hace con su herramienta Radar adaptada. Mira que me jode esto...</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/me-roban-los-datos-agentic-commerce-1024x791.png" alt="me roban los datos agentic commerce" class="wp-image-2688" style="aspect-ratio:1.2945794302501987;width:526px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>El tema PCI y compliance también se mueve: con los Shared Payment Tokens bien usados, no se amplía el alcance de las normas de seguridad de tarjetas. Pero tienes que llamar a un auditor (un QSA) para confirmarlo. Mejor prevenir que curar. Recomendación de la casa, pero, your call. </p>



<p>Y la arquitectura de tu tienda: si era pensada para humanos, ahora tiene que ser rápida, con respuestas instantáneas y conexiones automáticas. Si tu tienda es antigua, toca tocarla un poco. No es opcional.</p>



<h3 class="wp-block-heading">¿Hay más riesgos?</h3>



<p>Chi.</p>



<p>Te pueden robar el agente mediante phising, prompt injection, etc. Puede gastar tu dinero sin que te enteres. Es un riesgo que ya existía con humanos, pero ahora de una manera diferente. </p>



<p>A ver, no existía el prompt injection, pero sí el robo de credenciales. Nusésimexplicu. </p>



<p>Va, y ¿quién paga si la lía? El agente compra la talla equivocada, un producto caducado o algo que no querías. ¿Quién asume el chargeback o la devolución? ¿Tú como cliente? ¿El merchant? ¿El PSP? ¿OpenAI? Hoy por hoy no hay ley clara. Esto es lo que más discute la gente: ¿quién es responsable cuando una IA decide por ti? </p>



<p>Escala de grises.</p>



<p>Cositas Europeas: el tema de la RGPD y tal. El agente manda muchos más datos de ti que tú cuando interactúas en Shein. El agente manda mucho más contexto al merchant (tus preferencias, dieta, presupuesto, historial…). Puedes estar compartiendo más información personal de la que crees. Se complica el tema de los datos por este punto. Ya llegará alguien en Europa a poner puertas al campo, tranquilidad. </p>



<p>PSD3 viene en camino, pero ahora mismo hay un vacío legal. Si pasa algo gordo, los reguladores pueden meter mano fuerte después. Yo veo ahora mismo esta parte del Agentic Commerce como el Salvaje Oeste de los pagos. </p>



<p>Y luego uno que no se menciona, que son los fallos en cadena. Si Open AI, Stripe o el PSP tienen una caída, un Outage que decimos en tecnología, todo se debe parar. Pero, ¿y si el agente alucina y se producen miles de compras erróneas? Aquí hay un temita. </p>



<h2 class="wp-block-heading">¿Cómo se combate la alucinación de las IAs en el Agentic Commerce?</h2>



<p>Aquí viene la parte chunga pero honesta, y lo explico para gente como yo pueda entenderlo. Las IAs (los modelos de lenguaje grandes) no entienden nada. Son máquinas que predicen la siguiente palabra basándose en patrones de todo lo que han leído en internet. Como un loro superdotado que ha memorizado millones de libros pero no sabe lo que dice.</p>



<p>En el Agentic Commerce esto puede pasar: el agente alucina un precio que ya no existe, elige la talla equivocada porque malinterpretó tu orden o compra algo que no querías porque el patrón le dijo “esto suele gustar a gente como tú”.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/tylijura-ai-generated-9776380_1280-771x1024.jpg" alt="la IA alucinando" class="wp-image-2689" style="width:349px;height:auto"/></figure>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<p>¿Cómo se combate? Con reglas duras y claras desde el principio (máximo 30 euros, solo esta tienda), con un paso de confirmación humana en compras importantes, con la tienda verificando el stock y el precio real, y con capas extra de confianza que están probando algunos devs. No es magia, es control + reglas + un poco de sentido común humano.</p>



<h2 class="wp-block-heading">¿Y el modo agente de Chat GPT?</h2>



<p>¿El modo agente de Chat GPT no sería como esto? Sí y no. </p>



<p>Es decir, tú puedes decirle mediante un prompt, utilizando el modo agente que te haga un plan de comidas de máximo 2000kcal diarias, que idee las recetas adecuadas a esto para una semana en un plan de 3 comidas diarias y que navegue para seleccionar los distintos alimentos en la web de Mercadona y te haga la compra de ello. </p>



<p>Chat GPT abrirá un escritorio, se pondrá a navegar, irá seleccionando los alimentos que ha ideado para tu plan de comidas, lso irá metiendo al carrito, peeeeeero, como Mercadona no tiene implementado el Agentic Commerce Protocol (ACP), es decir, no tiene implementado el Delegated Payment Spec ni tiene habilitados los endpoints ni soporta los Shared Tokens (que yo sepa, ojo), puede hacer todo esto, pero cuando llegue a la página de pago se va a quedar ahí y te va a decir, coge tú el timón de la nave y paga, que yo no puedo. </p>



<p>¡¡Qué es un triunfo que haga todo esto!! Que sí, pero eso lo hace Open AI con su modo agente. Claude también tiene algo parecido cuando le metes una extensión en Chrome o Perpléxity con su navegador, Comet. Pero no pueden pagar por sí mismos. Requieren intervención humana.</p>



<p>Entodavía no, como decía el difunto Robe en Buscando una Luna. Hala, os pongo la canción para cerrar.</p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/q9IjQAef8VI?si=iazkWBHwA6ukGLPT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<h2 class="wp-block-heading">Cierro esto del Agentic Commerce</h2>



<p>El Agentic Commerce es el futuro, sí, pero de momento no es ni gratis, ni automático. Requieren que todos los actores del pago, PSPs, Merchants y el resto de coleguitas se mojen, protocolos abiertos y cuidadito con las alucinaciones. Si lo implementas bien, tendrás éxito y todos cantaremos la canción que os acabo de poner. </p>



<p>Si no, los equipos de Chargeback van a tener curro. Carritos fantasma y devoluciones masivas.</p>



<p>Recuerda que todo esto lo hago for the fun. Si me quieres invitar a un café y hablarlo conmigo, siempre disponible. Y me refiero a un café de verdad, no al botón que pongo debajo. Que también, oye, no pongo pegas, pero yo soy más de contacto humano.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
