---
layout: post
title: "¿Tengo que hablarle a mi pareja de la ISO 20022?"
date: 2025-08-22 09:05:26 +0000
categories: ['Payments &amp; Fintech']
image: "/assets/img/08/Change-my-mind-Crowder-Meme-edited.png"
permalink: /hablarle-pareja-iso-20022/
---


<p>No, no tienes que hablarle a tu pareja de la ISO 20022, porque ya vengo yo a explicarte qué es esto de la ISO 20022 y qué cambia próximamente.</p>



<p>Os traigo nuevo artículo con traducción simultánea de tecnicismos, contexto regulatorio y el estilo fresco que esperábais. Así, podremos convertir a cualquiera de “no entiendo ni papa” a experto de barra de bar en ISO 20022 – y sin perder el buen rollo.</p>



<p>Hoy voy a intentar que, en este afterwork de los pagos que me he montado, destriparos un poco los tecnicismos y hacer del compliance un planazo. Sí alguna vez has oído a colegas soltar perlas del estilo, “Ya viene la ISO 20022”, “Ojo con el NAK”, “En noviembre nos cortan los MTs” y tú también has pensado en cambiar de grupo de whatsapp, hoy te voy a hacer de traductor. </p>



<p>Puedes haber pensado en cambiar de grupo de whatsapp en estos casos por dos motivos: por tíos peñazo que no tienen otra cosa que comentar y, porque se ponen a hablar con unos jeroglíficos que ríete tú de Cleopatra. </p>



<p>Tranquilo, hoy te lo cuento todo y no, no vas a tener que hablarle a tu pareja de la ISO 20022, a menos que quieras empezar a ser visto como la persona más aburrida del mundo a sus ojos. Sí después de leer mi artículo, aún te quedan dudas, te recomiendo que visites la página de Swift, en el que te permiten descargarte el libro: ISO 20022 for Dummies tras un breve registro. El enlace <a href="https://www.swift.com/es/node/302666" target="_blank" rel="noreferrer noopener">aquí</a>.</p>



<p>Pero antes, como siempre, mi disclaimer habitual:</p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em></p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">¿Qué narices son los mensajes MT y MX?</h2>



<p>Voy a intentar explicarlo de manera sencilla.</p>



<p><strong>Mensajes MT</strong>: o “Message Type”, son los códigos que usan los bancos para enviarse pagos e instrucciones por la red SWIFT (la superautopista mundial de los pagos internacionalísimos).</p>



<p>Imagina una hoja de Excel súper rígida, con campos limitados, poco dato y encima muy críptico. Ejemplos famosos: el MT103 (orden de pago internacional) y el MT202 (instrucción de banco a banco). Estos mensajes molaban… en 1985. Y ojo que esa década y la siguiente han sido las mejores de la historia reciente. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/Change-my-mind-Crowder-Meme-edited.png" alt="Tengo que hablarle a mi pareja de la ISO 20022" class="wp-image-2101" style="width:636px;height:auto"/></figure>



<p></p>



<p><strong>Mensajes MX</strong>: aquí ya jugamos en Champions. Son mensajes basados en XML (como si el Excel dejara de ser una tabla y se volviera un Ferrari configurable). Tienen más campos, todo bien estructurado y mucho espacio para info relevante: nombres, direcciones detalladas, propósito del pago… No sólo “te pago”, sino “te pago y te explico LA VIDA”. </p>



<p>Ejemplos clave: pacs.008 (transferencia de crédito) y pacs.009 (transferencia interbancaria de importe alto).</p>



<h2 class="wp-block-heading">La regulación y por qué toca ponerse las pilas</h2>



<p>A ver, yo lo entiendo. Nos dedicamos a este mundillo la gente friki, porque tener que hablarle a tu pareja de la ISO 20022 es un dilema en el que ninguno queremos vernos.</p>



<p>No es que te lo diga yo porque quiero verte sudar, lo manda la madre de todos los pagos: SWIFT, que junto con la gente del Banco Central Europeo (que maneja el cotarro de la Eurozona con TARGET2), el Banco de Inglaterra (y su CHAPS, su rail VIP para pagos en libras) y los colegas de Fedwire en USA están cambiando la norma del juego.</p>



<p>Te explico primero a grandes rasgos qué es eso de la ISO 20022:</p>



<p>• ISO 20022: Es el estándar internacional publicado por la Organización Internacional de Normalización (ISO, la de las normas de todo tipo), que ahora toca a todos los pagos internacionales con ganas de futuro. Y lo siento, pero es obligatorio para pagos cross-border desde el 22 de noviembre de 2025. Si quieres enrollarte con TARGET2, CHAPS, Fedwire o cualquier banco serio, necesitas hablar MX o te quedas fuera del fiestón.</p>



<h2 class="wp-block-heading">¿Qué narices son TARGET2 y CHAPS? ¿Y por qué hablan tanto de ellos?</h2>



<p><br><strong>TARGET2</strong>: Imagina el Wallapop de los bancos centrales, pero en serio: es el sistema a través del cual los pagos de gran importe en euros se mueven entre bancos en la Eurozona. Si tu transacción es de “alto standing” y en euros, seguro pasa por aquí. Desde 2023, sólo habla ISO 20022… o sea, MX</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/assets/img/meme-5-1024x576.jpg" alt="LA ISO 20022 te generará un problema con tu actual infraestructura si no te preparas" class="wp-image-2119" style="width:520px;height:auto"/></figure>



<p><strong>CHAPS</strong>: Es la hermana guay de TARGET2 pero en Reino Unido, y en libras. Pagos gordos, instantáneos y cero margen para despistes. También se ha pasado al MX porque a los británicos los retos no les asustan.</p>



<p>Ponemos la lupa en los palabras raros (¡glosario mega-útil al rescate!)</p>



<h2 class="wp-block-heading">Saco mi lupa y la pongo en los palabras raros (glosario útil to the rescue)</h2>



<p><strong>NAK</strong>: No es una burla ni un emoji, es el “Negative Acknowledgment”. SWIFT te lo manda cuando tu mensaje no le mola (vamos, que lo rechaza porque algo no cuadra… y sí, fastidia mucho).</p>



<p><strong>pacs.008 / pacs.009</strong>: “Payment Clearing and Settlement”. El 008 es para transferencias de cliente a cliente, el 009 para transferencias entre bancos. Ambos ya sólo existen en versión MX, el idioma de los modernos.</p>



<p><strong>pain.001 / pain.002</strong>: “Payment Initiation”. El pain.001 es el fichero con el que una empresa le manda al banco sus pagos pendientes; el pain.002 son las respuestas (rollo: OK, NOK o arregla esto) que el banco devuelve.</p>



<p><strong>FINplus / CBPR+</strong>: FINplus es el “carril rápido” de SWIFT para transportar mensajes MX por todo el mundo. CBPR+ es la comunidad de bancos, coordinada por SWIFT, que han dicho “sí quiero” al ISO 20022 en pagos cross-border.</p>



<p><strong>UETR</strong>: “Unique End-to-End Transaction Reference”. El número de serie de tu pago, el DNI de la transacción, para que NO se pierda el rastro vayas donde vayas.</p>



<p><strong>camt.053</strong>: “Cash Management”. Es el super-extracto bancario, el fichero que te resume todas las entradas y salidas en tu cuenta, pero versión detallada, vitaminada y MX.</p>



<p><strong>Fedwire</strong>: Es el gran “wire” americano. Si haces pagos de alto valor en USD, seguro vas a pasar por aquí. Y sí, desde julio 2025 sólo acepta MX, nada de mensajes ochenteros.</p>



<h2 class="wp-block-heading">¿Por qué ahora y no en 2041, por ejemplo?</h2>



<p>Porque esta gente estaba hasta el gorro de hacer malabares con datos incompletos, mensajes truncados y pérdida de info en el pago. Y lo han puesto claro: a partir del 22 de noviembre de 2025, te toca hablar MX, o SWIFT te pone la cruz, te manda el NAK y encima te cobra si quieres parches temporales (eso de la in-flow translation es un rescate que pagas caro desde enero 2026).</p>



<p>Además, tanto Europa (con TARGET2) como UK (con CHAPS) como USA (con Fedwire) ya han apretado el botón: el futuro es ISO 20022, y el futuro es ya.</p>



<h2 class="wp-block-heading">Los efectos mariposa de ISO 20022: cuando dices “es solo un cambio de formato” y luego lloras</h2>



<p>¿Cómo afecta esto a cada uno de los stakeholders del ecosistema de medios de pago? Voy a ir cubriendo uno a uno para que se me entienda y podáis coger esto como una guía para el futuro.</p>



<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/GZLbwO_Y1_Q?si=86iz6vVKCGNXNWLQ
</div></figure>



<h3 class="wp-block-heading">Para adquirentes (los que pagan a comercios y sueñan con conciliaciones rápidas):</h3>



<p>• Se acabaron los mensajes planos y truncados. Ahora puedes meter referencias, direcciones, propósitos y hasta excusas del cliente. Todos los pagos cross-border que hagas pasan por MX y, si insistes en MT te rechazan el pago (NAK) o te ponen en lista de espera (pagando, claro)</p>



<p>• El camt.053 será tu biblia para extractos y conciliaciones. ¿Recuerdas la frustración de que el abono no cuadre? Eso va a cambiar… si haces bien los deberes.</p>



<p>• Si aún quieres traducción de MT a MX “en caliente”, ve ahorrando. A partir de enero 2026, SWIFT te lo cobra y encima perderás la mitad de la gracia del nuevo dato rico.</p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="/assets/img/04e3d46278badf22d5d0a1209fae8f6d.jpg" alt="" class="wp-image-2111" style="width:532px;height:auto"/></figure>



<h3 class="wp-block-heading">Para emisores (los que envían pagos y quieren compliance top):</h3>



<p>• Si tus sistemas siguen pidiendo solo “nombre y IBAN” en plan minimalista, prepárate para rechazos. Los pacs.008 y los pain.001/002 quieren propósito de pago, direcciones completas y referencias únicas (el UETR ese, que es el santo y seña del tracking mundial).</p>



<p>• Si haces pagos grandes en USA, desde julio 2025 tus mensajes tienen que ser MX o directamente se los come una trituradora digital cortesía de Fedwire.</p>



<p>• Tus equipos de compliance te van a querer: menos falsos positivos, mejor screening y más argumentos cuando venga el auditor.</p>



<h3 class="wp-block-heading">Para pasarelas, routers, PSPs y DJ’s de los pagos digitales:</h3>



<p>• Olvídate de los mappings de andar por casa. CBPR+ y FINplus solo quieren MX puro. Si te da por traducir, pon en el roadmap una hucha para las facturas de SWIFT.</p>



<p>• Si tus clientes quieren saber dónde está su pago, el UETR y el camt.053/054 son tus nuevos bff. Por fin podrás explicar “por qué mi dinero aterrizó en Kazajistán antes que en Roma” con autoridad y sin drama.</p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="/assets/img/Confused-Seth-Meyers-GIF-by-Late-Night-with-Seth-Meyers.gif" alt="" class="wp-image-2116" style="width:378px;height:auto"/><figcaption class="wp-element-caption">Tus dineros aterrizando en Kazajistán</figcaption></figure>



<p>• El margen de error se acabó: los NAK van a volar, así que más te vale tener un playbook (manual de crisis) para errores y reintentos.</p>



<h2 class="wp-block-heading">El escuadrón que te salva el pellejo: ¿Quién tiene que mover ficha internamente?</h2>



<p>No estás solo, amigo, tranquilo. Hay más coleguis que tienen que mover el esqueleto y ponerse a bailar a ritmo del nuevo éxito reguetonero: “muéveme el ISO 20022”. Y esos compañeros son los que van a hacer posible que esto tenga color, vida y sentido.</p>



<p>• <strong>CTO/Lead de Tech</strong>: oh yeah, CTOs, llegó vuestro momento. A brillar. Serán los encargados de hacer Upgrade de cores, motores, pipelines y testeo a muerte.</p>



<p>• <strong>Head de Compliance &amp; AML</strong>: crearán en el seno de la compañía nuevas reglas, screening con info rica y menos sustos regulatorios.</p>



<p>• <strong>Financiero y Contabilidad</strong>: os tocará crear nuevos extractos, remittance info como no la soñabas, y menos conciliaciones a mano. Un sueño húmedo. </p>



<p>• <strong>Operaciones</strong>: a vosotros se os encomienda la labor de realizar playbooks de incidentes y el training para que nadie entre en pánico cuando vea un NAK.</p>



<p>• <strong>Producto y Atención al Cliente: </strong>Comunicación molona y empatía extra: muchos clientes no sabrán de qué va esto. Spoiler alert: ahora sí lo sabrán. </p>



<p>¿Lo habéis leído? Yo tampoco. Ventas no está aquí involucrado. Ni debe estarlo. Tomar nota para luego no venir a meternos el dedito en el ojo, que nos conocemos.</p>



<p>Te aviso, esto requiere coordinación, comunicación entre departamentos, colaboración etc. Es un problema perfecto para CPSers. Cómo, ¿que no sabes lo que es el Complex Problem Solving? <a href="https://retailandpayments.com/complex-problem-solving-medios-pago/" target="_blank" rel="noreferrer noopener">Aquí te lo explico</a>.</p>



<h2 class="wp-block-heading">En resumen</h2>



<p>• MT = mensajería de la época de “Lluvia de Estrellas”; MX = reggaetón, más ritmo, más info, y compliance bailando a tu son.</p>



<p>• Regulación internacional: SWIFT, Banco Central Europeo, Banco de Inglaterra, Federal Reserve… todos apuntan a ISO 20022. Y desde el 22 de noviembre de 2025, ir por el carril rápido ya no es sueño, es obligación.</p>



<p>• Si no te subes, NAK, recargo y drama. Si quieres ahorrar, agilidad, y ventaja, MX y amigos.</p>



<p>• Los de sistemas, compliance, operaciones y producto… todos a bordo. Esto no lo saca uno solo.</p>



<p>¿Listo para migrar? Te veo en la pista de baile de ISO 20022. Si necesitas traducción simultánea de más tecnicismos, tráete un par de cafés y seguimos descifrando el código.</p>



<p>No tengáis miedo, <a href="https://retailandpayments.com/ia-disruptor-mundo-conocido/" target="_blank" rel="noreferrer noopener">apoyaos en la IA</a> todo lo que podáis para que vuestro trabajo sea más fácil, pero no para que os lobotomice y perdáis vuestro espíritu crítico y capacidad de razonar. </p>



<p>Ahora dime, crees que tienes que hablarle a tu pareja de la ISO 20022? </p>



<p>Todos los detalles de nuestra amiga la ISO 20022 los tenéis <a href="https://www.iso20022.org/" target="_blank" rel="noreferrer noopener">en su página web</a>.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
