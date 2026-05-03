---
layout: post
title: "Orquestación de pagos. Me confieso: estaba equivocado"
date: 2025-09-08 18:02:17 +0000
categories: ['Payments & Fintech']
image: "assets/img/sorry-will-ferrel.gif"
permalink: /orquestacion-de-pagos/
---


<p>Lo confieso sin anestesia: en 2023 publiqué <a href="https://retailandpayments.com/payment-orchestration-nuevo-guru/" target="_blank" rel="noreferrer noopener">un artículo</a> en el que dije que la orquestación de pagos no era para tanto y que una buena pasarela con smart routing te hacía el apaño. Hoy vuelvo, saco la fregona y limpio lo que dije. No porque entonces mintiera, sino porque me faltaba perspectiva y, sobre todo, datos de campo de los últimos dos años. Un orquestador de pagos de verdad no es “una pasarela con enchufes”. Es un cerebro con motor de reglas que decide cómo autenticar, por dónde autorizar, cuándo reintentar y con qué credencial, para aceptar más y mejor. Y sí, también para pagar menso y dormir más.</p>



<p>No me duele reconocer que estaba equivocado. Este blog nació con el espíritu de divulgar conocimiento, pero también de aprender por el camino. No se trata de pontificar, sino de hormesis real, no sobre espalda ajena, sino sobre la mía propia. </p>



<p>Hoy te cuento qué es de verdad un orquestador, por qué no compite con las pasarelas sino que las gobierna, y cómo un algoritmo casero, bien parido sube la autenticación, baja el fraude y, sobre todo, te da control.</p>



<p>Pero antes, como siempre, mi disclaimer habitual, amigos: </p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em></p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Mi metedura de pata: dónde fallé al escribir sobre orquestación</h2>



<p>Vamos a empezar fuerte, fustigándome a dos manos.</p>



<p>En aquel artículo sostuve que la orquestación era poco más que <strong>smart routing</strong>, que muchas pasarelas ya tenían, y que la diferencia práctica era poca. Hoy me muerdo la lengua. Sí, varias pasarelas han incorporado <strong>routing inteligente</strong> y optimización (Worldline, Checkout, Stripe). Pero la <strong>naturaleza</strong> de la orquestación es otra: <strong>neutralidad</strong>, <strong>motor de reglas del merchant</strong>, <strong>portabilidad del dato</strong> y <strong>capacidad de componer servicios</strong> (fraude, 3DS, tokens de red, A2A, wallets) como si fueran piezas de Lego. La pasarela <strong>procesa</strong>; la orquestación <strong>dirige</strong>.</p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="/assets/img/sorry-will-ferrel.gif" alt="orquestación de pagos" class="wp-image-2299" style="width:572px;height:auto"/></figure>



<p>En corto: confundí herramienta con <strong>plataforma de decisión</strong>. Me quedé en la tubería y obvié el <strong>cerebro</strong>.</p>



<h2 class="wp-block-heading">¿Qué es la orquestación de pagos y por qué no es una pasarela?</h2>



<p><strong>Pasarela de pago (gateway)</strong>: interfaz técnica para enviar transacciones a un procesador/adquirente, gestionar medios de pago y devolver respuestas. Algunas evolucionan con funciones de optimización.</p>



<p><a href="https://primer.io/blog/what-is-payment-orchestration-and-how-can-it-maximize-payment-efficiency" target="_blank" rel="noreferrer noopener"><strong>Orquestador de pagos</strong>:</a> cuando hablamos de orquestación de pagos, hablamos de una capa agnóstica y multi-proveedor que integra PSPs, adquirentes, 3DS, fraude, tokenización de red, métodos alternativos, A2A, etc., y aplica una política dinámica basada en datos para decidir qué hacer con cada transacción: ruta primaria, fallback, si pido 3DS o solicito exención, qué token uso, cuándo reintento y por dónde.</p>



<p>Punto clave: <a href="https://trimplement.com/blog/2024/02/payment-orchestration-layer-definition-benefits/" target="_blank" rel="noreferrer noopener">la orquestación de pagos <strong>no es</strong> un conector gordo</a>. Es gobernanza + decisiones + telemetría.</p>



<p>¿Vale? Change my mind</p>



<p>Y change my mind de verdad, es decir, este artículo es un change my mind más grande que el Santiago Bernabéu, así que no me digáis que soy cerril y que no cambio de opinión. </p>



<h2 class="wp-block-heading">La orquestación de pagos como cerebro del checkout</h2>



<p>Qué es lo que yo creo que es un orquestador de pagos. </p>



<p>Ojo, ojito que aquí me meto en un berenjenal de los tochos, de los épicos. Me meto en la ciénaga donde murió Artax. Sí, amigo sí, así de old somos. </p>



<p>Toma, un gif para que saques el pañuelo conmigo:</p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="/assets/img/artax-i-love-you.gif" alt="orquestación de pagos, la historia interminable" class="wp-image-2301" style="width:548px;height:auto"/></figure>



<p>Vamos al turrón: </p>



<p>Así funciona la orquestación de pagos en la vida real: imagina el checkout como una pista de despegue y cada pago como un avión nervioso. La pasarela te abre la valla y te deja rodar por el único camino que tiene creado. El orquestador, en cambio, dirige la torre de control: decide qué pista, a qué velocidad, con qué grado tienes que ajustar los flaps y si conviene esperar quince segundos para evitar turbulencias. No es romanticismo; es ingeniería aplicada a cada maldito milisegundo.</p>



<p>Lo he visto en vivo hace 2 años con un piloto que se hizo en un merchant alemán. Te comes 3h de caída y ves el valor del failover. </p>



<h3 class="wp-block-heading">Ingesta del dato</h3>



<p>Para mí empieza con la <strong>ingesta</strong>: el cliente elige tarjeta, wallet, BNPL o transferencia A2A y tú recoges el dato. No cualquier dato, sino uno normalizado. Traduzco: dejas de hablar “stripeano”, “adyeniano” o “worldlinés” y pasas a hablar un idioma común. Ahí ya puedes enriquecer: BIN, país emisor, tipo de tarjeta, canal (card-present, card-not-present), riesgo estimado, dispositivo. Nada de “me lo manda el PSP y yo ya tal”. Lo tuyo es tener criterio antes de levantar el teléfono al proveedor.</p>



<h3 class="wp-block-heading">Tokenización</h3>



<p><a href="https://corporate.visa.com/content/dam/VCOM/corporate/solutions/documents/visa-token-ebook.pdf" target="_blank" rel="noreferrer noopener">Lo de los tokens, niño</a>. Llega la parte que separa a los chavales de los adultos: <strong>tokenización de verdad</strong>. Sí, puedes vivir con un token de pasarela. Y sí, saldrás en las fotos de fin de curso. Pero si quieres aprobar la selectividad, entras en tokens de red. Te sirven para dos cosas muy terrenales: reducir exposición y empujar la tasa de autorización donde duele, en el borde entre emisor y adquirente. ¿Funciona siempre? No. ¿Funciona mucho más que el llorar? También.</p>



<p>Yo he visto con estos ojitos que Dios me ha dado, como activar los tokens de red hacía que subiera la tasa de aprobación. En el caso concreto al que me refiero, subió 2 puntos de golpe. Nadie entendía nada, solo que la caja sonaba "clin, clin"...</p>



<h3 class="wp-block-heading">El motor de reglas</h3>



<p>Con los datos en su sitio, asoma el <strong>motor de reglas</strong>. Aquí no hablo de un Excel con “si BIN empieza por 41, manda a adquirente A”. Hablo de estrategia. Piensa en pesos y prioridades que cambian según el contexto: importe bajo, emisor doméstico, histórico de fraude limpio, latencia buena hoy… y ruta a adquirente barato con probabilidad alta. Cambia el contexto a cross-border B2B con corporativa y ancho de banda regular y tu orquestador no tiembla: mueve fichas. No improvisa; decide.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/conductor-5157153_1280.jpg" alt="orquestación de pagos, el director de orquesta" class="wp-image-2305" style="width:562px;height:auto"/></figure>



<p>En la prcatica, el cerebrito dinámico es un sistema vivo que aprende y se ajusta con cada transacción procesada. </p>



<h3 class="wp-block-heading">El salvavidas</h3>



<p>El capítulo que más salva carritos es el de <strong><a href="https://www.emvco.com/emv-technologies/3-D-secure/" target="_blank" rel="noreferrer noopener">3DS dinámico y exenciones SCA</a></strong>. Me tatuaría “ni todo sí, ni todo no”. Lo repito: orquestar 3DS no es “ponerlo siempre” ni “quitárselo siempre”. Si tu riesgo te lo permite, pides TRA. Si es low value, no fricciones. Si es MIT, no hagas teatro. Si huele a problema, sube a challenge y listo. El cliente no nota magia; solo nota que su pago pasa. Y tú duermes sin chargebacks sorpresa.</p>



<p>¿Qué me dices?¿Cómo se te queda el body?</p>



<p>Pues ahí es donde voy yo con que estaba equivocado con esto de la orquestación de pagos. </p>



<p>¿Cae un proveedor? Failover vivo. Nada de “hemos abierto un ticket”. El orquestador desvía tráfico mientras el proveedor tose. ¿Que el adquirente va lento pero responde? Tu política puede aguantar p95 de 400 ms, pero no p99 de 1,2 s. Lo sueltas y vuelves cuando respire. Lo mismo con reintentos: no hay reintento religioso cada X segundos, hay reintento inteligente según error, ventana y probabilidad de éxito. Lo de las constelaciones y tal lo dejamos para otro blog.</p>



<p><em>Me se perdone</em> con lo de las constelaciones a aquellos que van a estos saraos. </p>



<p>Remata con observabilidad. Un orquestador sin métricas es un DJ sordo. Tienes que ver, por cada ruta y por cada emisor, qué sube tu auth rate, dónde añades fricción, cuánto te cuesta de verdad el aprobado y a cuánto asciende tu peaje en latencia. Con esos cuadros, las discusiones dejan de ser “me gusta Adquirente B” y pasan a “Adquirente B funciona mejor con estas corporativas en Alemania los martes por la tarde”. Ese nivel de aburrimiento estadístico es el que paga las nóminas.</p>



<h2 class="wp-block-heading">Por qué esto no es “lo mismo pero más caro” que una pasarela</h2>



<p>Una pasarela optimizada es un gimnasio con máquinas buenas. Un orquestador es el entrenador que te programa la rutina, te mide, te cambia el plan cuando te lesionas y te obliga a calentar cuando tú querías saltarte el día de piernas. La neutralidad importa: la pasarela empuja su stack; el orquestador gobierna <strong>tu</strong> stack. La diferencia parece filosófica hasta que tu tasa de autorización sube dos puntos y el CFO te pregunta por qué no lo hiciste antes.</p>



<p>La clave no está en tener más conectores, sino en tener política. Política de costes, de latencias, de riesgo, de experiencia, de disponibilidad. Si un proveedor falla, no llamas al proveedor: cambias de ruta y al proveedor le llamas después. Si el emisor ama los tokens de red, los usas. Si te penaliza por usarlos en ciertos flujos, cambias. La pasarela puede darte parte de esto. El orquestador te lo da sin pedir permiso.</p>



<h2 class="wp-block-heading">Por qué estaba equivocado en esto de la orquestación de pagos</h2>



<p>Me equivoqué porque vi a varias pasarelas sacar “smart routing” y pensé “pues ya está”. Spoiler: no estaba. El routing dentro de una pasarela es útil, pero vive dentro del jardín de la pasarela. Cuando quieres mover tierra, el jardín se queda pequeño. La orquestación de pagos te deja decidir con criterios que no están atados a la hoja de ruta de un proveedor y con datos que no se evaporan si cambias de casa. La frontera no está en el feature, está en quién manda.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/mistake-1966448_1280.jpg" alt="orquestación de pagos, me equivoqué" class="wp-image-2306" style="width:559px;height:auto"/></figure>



<p>Dejadme que me equivoque y dejadme que os lo diga, que esto me hace humano. O humanoide, al menos. :)</p>



<h2 class="wp-block-heading">Ventajas y retos reales de la orquestación de pagos</h2>



<p>Lo bueno primero. Si mueves bien el cóctel de reglas, tokens de red y 3DS con cabeza, aparecen puntos<strong> </strong>porcentuales de mejora reales. No son milagros. Lo bastante para cambiar la P&amp;L. La resiliencia también se nota: un proveedor se cae y tu operación no sale en el telediario. El time-to-market baja porque la siguiente wallet o método A2A se enchufa en días, no en meses. Y el dato por fin es tuyo, con reporting comparable entre proveedores.</p>



<p>Ahora el precio de la fiesta. Complejidad: gobiernas algo poderoso. Si no pones orden, tendrás reglas contradictorias, latencias por encima de lo razonable y un runbook que nadie entiende. Latencia: una capa mal diseñada es una piedra en el zapato; una bien hecha es un calcetín térmico. Y compliance: más piezas, más papeleo. Si te asusta el GDPR, mejor no mires la matriz de transferencias. Esto no es para cobardes. Es para gente que quiere medir y decidir.</p>



<h3 class="wp-block-heading">SCA sin dogmas y 3DS sin liturgia</h3>



<p>A ver si consigo explicar bien esto, porque mi cabecita da para lo que da.</p>



<p>El Reglamento es claro y a la vez no. Te deja exenciones, pero te exige cabeza. La orquestación de pagos buena hace lo que muchos manuales predican y pocos aplican: pedir la exención correcta cuando puedes y <strong>subir el listón</strong> cuando debes. Eso no lo resuelve un “toggle de 3DS”. Lo resuelve tu historial de fraude, tus límites TRA, la higiene de tus datos y la valentía de activar el challenge cuando toca. El cliente agradece pagar sin circo. El emisor agradece que juegues a ganar, no a trampear.</p>



<h3 class="wp-block-heading">La arquitectura que funciona en la vida real</h3>



<p>Si esperabas un diagrama con flechas, te lo debo. </p>



<p>Te lo cuento: pones una capa de ingesta que no escupe formatos raros, sino un contrato de datos decente. Encima, un vault que no te encadena, con soporte de tokens de red cuando dan rentabilidad y de PAN tokens cuando no. El motor se define con reglas claras y auditables, no con arte arcano escondido en lambdas olvidadas. El orquestador 3DS entiende PSD2, no la sufre. El router habla con varios proveedores sin favoritismos y el observability te cuenta la verdad aunque no te guste. Todo eso, protegido y con procesos de seguridad que no son un PDF firmado: son procesos vivos. Y sí, edge donde convenga. No porque quede moderno, sino porque la latencia manda.</p>



<h2 class="wp-block-heading">¿Cuándo te basta una pasarela y cuándo necesitas orquestar?</h2>



<p>A ver, si me estás leyendo con sueño, perdone usted la chapa, querido lector. Ya acabamos, como cuando vas al dentista. </p>



<p>Si vendes en dos países, con dos métodos y no te quita el sueño un rato de caída, la pasarela te hace feliz. Te quita complejidad y a correr. Si tu realidad incluye cinco países, varios rails, seasonality loca, picos de tráfico, CFO mirando el coste como un halcón y un comité preguntando por <strong>resiliencia</strong>, entonces necesitas orquestar. No por postureo. Por supervivencia. Y existe el camino intermedio: arrancar en pasarela y migrar a orquestación a medida que el ROI canta. </p>



<p>Cantar, canta.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/switch-3297900_1280.jpg" alt="switch orquestación de pagos" class="wp-image-2307" style="width:561px;height:auto"/></figure>



<p>La orquestación de pagos solo existe si la puedes medir. No hablo de un “creo que subió”. Hablo de ratio de autorización incremental por emisor y país después de activar tokens de red, de fricción 3DS comparada con fraude y disputas por canal, de coste efectivo por cada mil transacciones según ruta, de latencia p95/p99 que no te truquea el checkout, de tasa de failover que explica por qué ayer no te explotó Twitter. Si tus dashboards no enseñan esto, estás haciendo coreografías, no orquestación.</p>



<p>¡Que están muy bien, ojo! Yo he visto niños que bailan genial y hacen unas coreografías que son una auténtica maravilla. </p>



<p>Ahora, amigo, ¿cómo desplegar sin perder amigos ni pelo? Aquí viene la fiesta. </p>



<h3 class="wp-block-heading">Como migrar con éxito</h3>



<p>La implementación elegante no es épica; es metódica. Primero, inventario honesto: qué tienes, qué te falta y qué sobra. Luego, objetivos con números, no con adjetivos: cuántos puntos quieres subir, cuánto quieres bajar en coste, qué latencia vas a tolerar. El primer set de reglas debe ser corto y con puntería. Nada de escribir El Quijote en YAML. Después, A/B real, no amagos. Muestras, ventanas, significancia. Privacidad mirada a la cara, con DPIA y base jurídica clara. Y un runbook de incidentes que cualquiera puede ejecutar a las tres de la mañana sin llamar al gurú. Cada mes, revisión de reglas. Si no matas reglas viejas, acabas rezando a una estatua muy bonita. </p>



<p>Acabo de mirar hacia atrás. Disculpadme porque veo que me he calentado. </p>



<h2 class="wp-block-heading">Epílogo sincero</h2>



<p>Yo también me enamoré del “mi pasarela ya hace routing, gracias”. Era cómodo. Era menos trabajo. También era menos control. El día que dejé de pedir permiso y empecé a decidir, los pagos dejaron de ser un agujero negro y pasaron a ser un sistema gobernado. No es glamuroso. Es mejor: da dinero, quita sustos y te devuelve el mando.</p>



<p>La orquestación de pagos es más compleja, pero paga la factura. Si el checkout es la pista y tus clientes quieren despegar, tu trabajo no es abrir la valla. Es dirigir la torre. Y hacerlo con reglitas vivas, datos honestos y cero misticismo.</p>



<p>Ya está, prometo que no me meto más metáforas de aviones. Por el momento.</p>



<p>Queridos lectores, fin del sermón.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
