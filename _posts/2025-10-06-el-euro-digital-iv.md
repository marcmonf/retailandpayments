---
layout: post
title: "El Euro Digital: ¿moneda de libertad o instrumento de control? (IV)"
date: 2025-10-06 05:00:00 +0000
categories: ['Euro Digital']
image: "assets/img/ai-generated-8488761_1280.jpg"
permalink: /el-euro-digital-iv/
---


<p>Este va a ser largo, coleguis. Llego al ecuador de esta serie de artículos.</p>



<p>Hoy cruzo el ecuador. Gracias por seguir aquí. Prometo ser claro y algo impertinente. En mi línea, vamos.</p>



<p>El Euro Digital es una herramienta que, sin duda, va a cambiar nuestras vidas, en muchos aspectos para mal, puesto que no va a representar ninguna ventaja ante las soluciones que a día de hoy están vivas.</p>



<p>Si te perdiste alguna de las anteriores entregas, te dejo enlaces <a href="https://retailandpayments.com/el-euro-digital-i/" target="_blank" rel="noreferrer noopener">aquí a la primera</a>, <a href="https://retailandpayments.com/el-euro-digital-ii/" target="_blank" rel="noreferrer noopener">aquí a la segunda</a> y <a href="https://retailandpayments.com/el-euro-digital-iii/" target="_blank" rel="noreferrer noopener">aquí a la tercera entrega</a>. </p>



<p>Veréis, recientemente estuve en el evento de medios de pago que más me gusta de España, que es el Secure Payments organizado por IFAES. Os dejo enlace <a href="https://securepaymentsid.ifaes.com/" target="_blank" rel="noreferrer noopener nofollow">a su página</a> para que veáis de qué se trata.</p>



<p>En él, se trataron muchísimos temas, relacionados con experiencias de pago, blockchain, seguridad en el pago, apps bancarias, etc. Escuché algunas de las ponencias (el don de la ubicuidad no lo tengo, de momento) y en ellas escuché complacencia, pero no mucha reticencia sobre el Euro Digital. </p>



<p>Lo que sí pude vislumbrar es desconocimiento. Mucho. Aunque me gustó el tema que se trató en la charla de Wallet Wars, en la Sala Mastercard.</p>



<p>Es normal, el 95% de la gente quiere que la dejen en paz, (porcentaje sacado de la manga) y después, hay un 5% de gente que sí, se informa, se involucra y se genera una opiión en un sentido o en otro. De ese 5%, aquellos que no siguen la corriente guay, cool, la corriente que es acorde al discurso imperante, pues prefieren callarse y no generar polémica por aquello de no enfrentarse. </p>



<p>Y lo entiendo. </p>



<p>Prefieren vivir en unas circunstancias de tranquilidad, de estar a gusto con su jardín y sus plantitas antes que ponerse a enfrentarse y demostrar que el de enfrente está equivocado, o no. </p>



<p>Y tengo muy poco que decir a eso. No puedo más que respetar la postura no beligerante de muchos.</p>



<p>Sin querer polemizar mucho más, os paso a mi atalaya y os pongo, como siempre, mi disclaimer habitual para que no confundamos las cosas de confundir. </p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em></p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Aspectos técnicos y programabilidad</h2>



<p>Más allá de las consideraciones políticas, filosóficas o económicas, el funcionamiento práctico del euro digital depende de una serie de decisiones técnicas. </p>



<p>Hoy mi turra va sobre las especificaciones conocidas (y las que están en discusión): la arquitectura, las funcionalidades como la programabilidad o los pagos offline, y su comparación con criptomonedas y <em>stablecoins</em> existentes.</p>



<h2 class="wp-block-heading">Arquitectura básica</h2>



<p>Vale, entremos en harina.<br>Porque todo esto del euro digital suena muy etéreo hasta que uno se pregunta: <em>“pero, técnicamente, ¿cómo demonios va a funcionar esto?”</em></p>



<p>Pues bien, el BCE ha optado por lo que llaman un modelo híbrido. No será un sistema único y cerrado, sino algo así como una red de “dominios” que se reparten tareas. Sus los resalto en negrita para que os quedéis con ellos:</p>



<h4 class="wp-block-heading">Eurosistema</h4>



<p>En el <strong>dominio del Eurosistema</strong> estará el corazón del inventillo: una plataforma gestionada directamente por el BCE que regsitrará y liquidará las transacciones. Vamos, el gran libro de cuentas, pero digital y vigilado con lupa. Ese núcleo se encargará de cosas como la liquidación de pagos, la gestión de identidades (los famosos alias), la detección de fraude y toda la parte seria de la infraestructura. Todo esto, además, estará disponible mediante APIs para que otros puedan conectarse.</p>



<h4 class="wp-block-heading">Intermediarios</h4>



<p>Luego está el <strong>dominio de los intermediarios</strong>. Ahí entran en juego los bancos comerciales y las entidades de pago supervisadas, que serán quienes se relacionen directamente con los usuarios. Cada uno podrá ofrecer su propia interfaz (una app, una tarjeta, lo que sea) para que tú y yo usemos el euro digital (bueno, yo si puedo no lo usaré). </p>



<h4 class="wp-block-heading">Usuarios</h4>



<p>Y finalmente está el <strong>dominio del usuario</strong>: el nuestro. Aquí es donde operaremos con nuestro monedero digital de euros, instalado en el móvil o cualquier otro dispositivo. Ese monedero podría venir de nuestro banco habitual o incluso de una entidad pública como Correos (sí, suena curioso, pero está sobre la mesa). Este monedero se conectará con la infraestructura central del BCE a través de esos intermediarios.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/ai-generated-8488761_1280.jpg" alt="euro digital" class="wp-image-2533" style="width:605px;height:auto"/></figure>



<p>En otras palabras: no tendremos una cuenta directa en el BCE. No habrá un login en la web del banco central para mirar el saldo. Habrá una capa intermedia, manejada por los proveedores de servicios de pago, que seguirán siendo el rostro visible del sistema. Y esto no es casual: el BCE quiere aprovechar la red y el conocimiento de los bancos, en lugar de competir con ellos de frente.</p>



<p>Además, el diseño busca que el sistema sea interoperable a nivel europeo. Ojo, me se entienda: quien dice busca, dice te pongo una pistola en el pecho para que sea interoperable.</p>



<p>Da igual si estás en España, Alemania o Finlandia: cualquier euro digital debería funcionar con cualquier proveedor, igual que ahora con SEPA. Para eso, el BCE y <a href="https://www.ecb.europa.eu/press/intro/news/html/ecb.mipnews250409.es.html" target="_blank" rel="noreferrer noopener nofollow">los bancos centrales están creando un rulebook común</a>, un libro de reglas que todos deberán cumplir.</p>



<p>Este rulebook lleva gestándose desde 2023, con grupos de trabajo donde participan tanto los bancos centrales nacionales como la industria. Ya van por el tercer informe, y el Consejo de Gobierno del BCE ha ido aprobando las decisiones clave. En julio de 2025, el BCE anunció que estaban “avanzando en las reglas del esquema”, y que decenas de actores del mercado ya estaban probando casos de uso reales en una plataforma de innovación.</p>



<p>Dicho en plata: están montando el esqueleto de lo que podría ser el futuro sistema de pagos europeo, pieza a pieza, con los bancos dentro del juego desde el principio.</p>



<h3 class="wp-block-heading">Pagos offline y tokenización</h3>



<p>Y aquí viene una de las partes más jugosas del euro digital:<a href="https://www.bde.es/f/webbe/GAP/Secciones/SalaPrensa/ComunicadosBCE/NotasInformativasBCE/24/presbce2024-64.pdf" target="_blank" rel="noreferrer noopener"> los pagos offline.</a><br>Sí, has leído bien: pagar sin conexión a internet.</p>



<p>Los de fuera del ecosistema de medios de pago pueden estar asombrados con esta capacidad. Los de dentro del ecosistema lo miramos y decimos, algo que ya existe, no te flipes. Recuerdo cómo se les ha llenado la boca a todos los de los aplausos con carné durante el apagon, defendiendo la implantación del Euro Digital por esta capacidad.</p>



<p>Silencio incómodo.</p>



<iframe width="560" height="315" src="https://www.youtube.com/embed/NDnVJ_G2vyU?si=uG8oBW7Gr0d7apY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<p>La idea es que dos personas puedan intercambiar euros digitales sin que nadie —ni el banco, ni el BCE, ni tu operador móvil— tenga que validar la transacción en ese mismo instante. Algo así como cuando le das a alguien un billete de 20 €: el dinero cambia de manos y punto.</p>



<p>¿Cómo se consigue eso en digital? Pues con lo que llaman tokens. Pequeñas unidades de valor almacenadas localmente en tu móvil o tarjeta, guardadas dentro de un chip seguro.</p>



<p>Cuando dos dispositivos compatibles se acercan (Bluetooth, NFC, o lo que toque), uno envía un token firmado al otro. El saldo del que paga baja, el del que recibe sube. Todo esto sin pasar por ningún servidor central.</p>



<p>Después, cuando cualquiera de los dos vuelve a conectarse, el sistema sincroniza los movimientos y actualiza el libro central. O quizá ni eso, si hablamos de pagos anónimos dentro de ciertos límites.</p>



<p>El BCE lo explicó así de claro: “en los pagos offline, solo el ordenante y el benfeiciario conocerán los datos personales de la operación.” Aunque claro, los comunicados oficiales siempre suenan mejor que la realidad..</p>



<p>Vamos, que aspiran a lograr un nivel de <s>privacidad similar al efectivo</s> privacidad. Y ojo, esto no es una utopía. De hecho, Worldline ya desarrolló un prototipo funcional en el que dos móviles podían transferirse euros digitales entre sí sin conexión. Funciona. Otra cosa es cómo.</p>



<p>Claro que esa privacidad tiene su letra pequeña. El BCE no quiere que el anonimato total sirva para lavar dinero o financiar actividades ilegales, <a href="https://www.ecb.europa.eu/euro/digital_euro/timeline/profuse/shared/pdf/ecb.degov240411_item3updateofflinedigitaleuro.en.pdf" target="_blank" rel="noreferrer noopener nofollow">así que pondrán límites por importe</a>. Por ejemplo, pagos offline de hasta 50 €, o quizá un máximo de 500 € almacenables sin conexión. A partir de ahí, todo pasaría al modo online con trazabilidad completa.</p>



<p>Sabe a descafeinado, a comida de hospital.</p>



<h4 class="wp-block-heading">Dinero portátil</h4>



<p>Esto de los tokens también tiene otro encanto: introduce la idea de dinero portátil, casi físico. En lugar de simples apuntes en una base de datos, tendríamos pequeñas “fichas digitales” que podrías llevar encima, incluso dentro de dispositivos conectados (imagina un coche o un reloj con su propio saldo).</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/coin-9165490_1280.jpg" alt="euro digital en la wallet" class="wp-image-2534" style="width:564px;height:auto"/></figure>



<p>Pero ojo con los riesgos.<br>Si alguien copia un token y lo usa dos veces, tenemos un doble gasto. Y si pierdes el móvil, podrías perder el dinero almacenado localmente, como si se te cayera la cartera al río. Por eso se está estudiando usar chips criptográficos tipo SIM o elementos seguros del móvil, e incluso copias de seguridad cifradas para evitar pérdidas definitivas.</p>



<p>En el fondo, el BCE está caminando sobre una cuerda floja: ofrecer suficiente privacidad como para que el euro digital se sienta como efectivo… sin que eso abra la puerta a delitos o fugas de control. No sé, Rick...</p>



<p>Y lo cierto es que este equilibrio entre seguridad y privacidad será uno de los mayores retos técnicos del proyecto. Porque si el sistema offline falla (o se filtra una vulnerabilidad), toda la credibilidad del euro digital se tambalea.</p>



<p>Vamos, que el BCE quiere que puedas pagar un café en una cabaña perdida de los Alpes sin cobertura. Pero también quiere dormir tranquilo sabiendo que nadie está clonando billetes digitales en serie.</p>



<h4 class="wp-block-heading">Sobre la vulnerabilidad</h4>



<p>Aquí tengo que romper una lanza en favor de este proyecto. </p>



<p>Veréis, esto del Euro Digital se ha orquestado mediante empresas alrededor que van desarrollando el temita. Si esto hubiera sido un 100% responsabilidad de la gente del BCE y tal, pues ya os comento yo los resultados. </p>



<p>Peor lo cierto es que quien está desarrollando esto son gente bastante profesional (de los que luego podemos discutir acerca de los incentivos, y eso). Gente que tiene un objetivo, que trabaja con la tecnología que existe a día de hoy y que puede conseguir capas de seguridad que son bastante potables. Aunque es evidente que aquí, seguro, seguro, solo hay 2 cosas: muerte e impuestos.</p>



<h2 class="wp-block-heading">Programabilidad: qué se permite y qué no</h2>



<p>Este punto da para que nos veamos en un ring.</p>



<p>Da para debate, y de los buenos. </p>



<p>Porque cada vez que alguien menciona “programar dinero”, a muchos se les encienden todas las alarmas. El BCE, por su parte, lo repite una y otra vez: “<a href="https://www.ecb.europa.eu/euro/digital_euro/faqs/html/ecb.faq_digital_euro.es.html" target="_blank" rel="noreferrer noopener nofollow">El euro digital <strong>no será programable</strong>.</a>” Sus lo pongo en negrita para que no diga nadie que no resalto lo que dicen los <s>mentirosos</s> del BCE.</p>



<p>Y lo dicen con todas las letras. Pero… (porque siempre hay un “pero”) eso no significa que no pueda automatizar pagos.</p>



<p>Voy a explicarlo con calma. (Paciencia y saliva) </p>



<p>Lo que el BCE quiere evitar es que un tercero, un gobierno, una empresa, quien sea, pueda decirte en qué puedes o no puedes gastar tu dinero. Eso sería un suicidio político. (¿La fiscalía de quién depende?) Ahora bien, lo que sí quieren permitir es que tú puedas decidir cómo se mueve tu dinero.</p>



<p>Por ejemplo:</p>



<ul class="wp-block-list">
<li>Que programes un pago mensual de tu suscripción a Netflix</li>



<li>Que un comercio emita un cobro que solo se ejecute si tú antes recibiste un reembolso</li>



<li>O que una nevera inteligente pague automáticamente cuando se queda sin leche (sí, esto está en los papers, y no, no es broma)</li>
</ul>



<p>Es decir, el BCE no quiere imponer condiciones. Quiere que los usuarios, usease, tú, yo, las empresas, puedan crear reglas automáticas por voluntad propia.</p>



<p>En el fondo, esto no difiere tanto de lo que ya hacen los bancos con las domiciliaciones o las apps fintech con pagos recurrentes. La diferencia es que el euro digital será pan-europeo y nativo digital, y eso abre la puerta a nuevas integraciones, sobre todo con el Internet de las Cosas.</p>



<p>Imagínate, tu coche eléctrico con saldo propio que paga el peaje o la recarga sin que tengas que sacar la tarjeta. O tu lavadora que liquida un servicio de mantenimiento cuando detecta un fallo. (Blade Runner, Matrix. ¡¡Marcos, flipao!!</p>



<h3 class="wp-block-heading">La programabilidad impuesta</h3>



<p>Hasta ahí todo bien, ¿verdad, queridos lectores?</p>



<p>El problema viene cuando entramos en la otra cara de la moneda: <a href="https://euranetplus-inside.eu/es/el-euro-digital-preocupa-en-medio-de-una-incomprension-generalizada/" target="_blank" rel="noreferrer noopener nofollow">la programabilidad impuesta</a>.</p>



<p>Porque claro, si técnicamente se puede programar dinero para que haga algo, también se puede programar para que no lo haga. Y ahí empiezan los escalofríos.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/euro-8498057_1280.png" alt="te vigilan con el euro digital" class="wp-image-2535" style="width:520px;height:auto"/></figure>



<p>El ejemplo más temido: ¿Y si un día un gobierno decide limitar lo que puedes comprar?</p>



<p>“Por tu bien”, claro. Si es que eres un disidente </p>



<p>Imagina que en 2030 la UE decide implementar un presupuesto de carbono. No, imagínatelo de verdad, que no estamos tan lejos, amigo mío. Has alcanzado tu cuota mensual de CO₂, y al intentar pagar gasolina o carne roja, tu monedero digital te lanza un “transacción rechazada”.</p>



<p>¿Ciencia ficción? Ojalá. En China, con el yuan digital, esto ya se ha probado: <a href="https://bfsi.economictimes.indiatimes.com/news/policy/digital-currency-yuan-comes-with-an-expiry-date-spend-or-it-will-vanish/82059471" target="_blank" rel="noreferrer noopener nofollow">dinero con fecha de caducidad o uso restringido a ciertos productos</a>. Oficialmente, el BCE dice que eso no pasará en Europa. Pero como bien apuntan voces críticas —desde economistas hasta tecnólogos como Enrique Dans—, <em>si la herramienta existe, la tentación también</em>.</p>



<p>Aunque sobre esto último hay controversia, ya que <a href="https://www.econ.iastate.edu/ask-an-economist/why-would-chinas-central-bank-want-issue-digital-yuan-expiration-date" target="_blank" rel="noreferrer noopener nofollow">hay quien dice que el Yuan Digital no tiene fecha de caducidad y que lo que sí lo tiene son unos vouchers emitidos por gobiernos locales</a>. Mismo perro, distinto collar, pero vale. </p>



<p>Por eso muchos insisten en que estas líneas rojas deben blindarse por ley y por diseño técnico. Nada de saldos que caduquen. Nada de restricciones forzosas.</p>



<p>Y por supuesto, nada de intereses negativos impuestos por decreto.</p>



<p>El BCE ha prometido que el euro digital no se usará para penalizar ahorros ni para remunerar saldos. En teoría, siempre tendrá interés 0 %, aunque no se descarta aplicar comisiones simbólicas a cuentas con volúmenes muy altos. Una forma elegante de decir “no te guardes aquí todos tus ahorros”.</p>



<p>Así que sí: el euro digital podrá hacer cosas inteligentes, pero no debería <strong>pensar por ti</strong>.</p>



<p>O al menos, eso dicen hoy. Porque ya sabemos cómo funciona esto: las buenas intenciones suelen durar… hasta que llega la próxima crisis.</p>



<h2 class="wp-block-heading">Especificaciones adicionales y tecnología</h2>



<p>Llegados a este punto, toca bajar a tierra y mirar los cables del sistema.<br>Porque, más allá de las promesas de modernidad, el euro digital tiene que cuadrar técnicamente con algo muy sencillo: cada euro digital vale un euro real. Ni más ni menos.</p>



<p>Esto significa que cada unidad emitida será canjeable 1:1 con el euro tradicional, y representará un pasivo directo del BCE. <a href="https://www.ecb.europa.eu/euro/digital_euro/progress/html/ecb.deprp202507.es.html" target="_blank" rel="noreferrer noopener nofollow">Dicho de otro modo: si tienes euros digitales, tu dinero está literalmente en el balance del banco central, no en el de tu banco de toda la vida</a>.</p>



<p>¿Y qué implica eso?<br><a href="https://www.ecb.europa.eu/euro/digital_euro/report/html/index.es.html" target="_blank" rel="noreferrer noopener nofollow">Que si el BCE crea nuevos euros digitales</a> (por ejemplo, para repartir una ayuda pública), la base monetaria crece. Y si, en cambio, la gente convierte efectivo o depósitos en formato digital, el balance global apenas cambia. Es contabilidad pura y dura.</p>



<p>Luego está el gran dilema técnico: ¿usará el BCE blockchain o un sistema clásico de base de datos central? Pues… todo apunta a lo segundo.</p>



<p>Durante los prototipos se probaron ambas cosas, pero el consenso interno parece claro: una blockchain pública es innecesaria (y poco práctica) para procesar millones de pagos al día.<br>Al final, el euro digital será probablemente un sistema centralizado y permisionado, es decir, con control exclusivo del BCE y unos pocos nodos nacionales verificando transacciones.</p>



<p>El propio Fabio Panetta <a href="https://www.ecb.europa.eu/press/key/date/2022/html/ecb.sp220516~454821f0e3.en.html" target="_blank" rel="noreferrer noopener nofollow">lo dijo sin rodeos</a>: “Las tecnologías digitales, los hábitos de pago cambiantes y la carrera por el dominio de los pagos están poniendo a prueba la complementariedad entre el dinero público y el privado, que durante largo tiempo ha sido una piedra angular de nuestro sistema monetario.”</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/euros-5632480_1280.jpg" alt="euros programables" class="wp-image-2536" style="width:563px;height:auto"/></figure>



<p>En realidad, el modelo se parecerá más a TIPS, la plataforma del BCE para pagos instantáneos SEPA. TIPS ya funciona 24/7, liquida operaciones en segundos y tiene una fiabilidad bastante decente. El euro digital heredará esa lógica: pagos minoristas, inmediatos, sin depender de mineros ni blockchains exóticas.</p>



<h3 class="wp-block-heading">Seguridad Cibernética</h3>



<p>Exacto, porque si hablamos de un sistema con cientos de millones de monederos y acceso directo al BCE… el incentivo para hackearlo es de otro planeta. El sistema llamando a los hackers como la basura a las ratillas.</p>



<p>El diseño incluirá autenticación robusta (probablemente a través de la EUDI Wallet, la nueva identidad digital europea), cifrado extremo a extremo de las órdenes de pago y redundancias para resistir caídas o ataques.</p>



<p>El susto de 2025, cuando el sistema Target2 se vino abajo durante horas, dejó al BCE con la ceja levantada. Muchos se preguntaron: ¿y si algo así pasa cuando el dinero de medio continente depende de esto?</p>



<p>El BCE lo sabe, y por eso insitse en que el euro digital se parecerá más a TIPS (que ha aguantado bien los picos) que a T2.<br>Aun así, están siendo prudentes: la idea es desplegarlo por fases, para no saturar la infraestructura ni arriesgar un fallo masivo en el día uno.</p>



<p>Traduzco a llano:</p>



<ul class="wp-block-list">
<li>No, no será blockchain pura.</li>



<li>Sí, estará 100 % controlado</li>



<li>Y sí, el BCE quiere que funcione sin que lo notes, como Bizum pero a escala continental</li>
</ul>



<p>Porque al final, el éxito del euro digital no dependerá de los discursos técnicos, sino de algo más simple: que funcione, siempre, sin hacer ruido.</p>



<h2 class="wp-block-heading">Cierro aquí, que hay lío</h2>



<p>Después de todo este viaje técnico, político y filosófico, me quedo con una sensación clara: el euro digital es una especie de malabarista sobre la cuerda floja. </p>



<p>Tiene que innovar, pero sin romper nada. Modernizar el sistema financiero, pero sin asustar a los bancos. Y sobre todo, ganarse la confianza de la gente, que no es poca cosa.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/motive-2336374_1280.jpg" alt="te vigilan cada movimiento euro digital" class="wp-image-2537" style="width:520px;height:auto"/></figure>



<p>El diseño actual busca ese punto medio casi imposible. Por un lado, introduce cosas que no son nuevas: pagos instantáneos, opción offline, algo de programabilidad “light”.</p>



<p>Por otro, se agarra a los pilares clásicos del dinero soberano: curso legal, estabilidad, control público.</p>



<p>¿La promesa? Que funcione como el efectivo, pero con la comodidad de lo digital. Y que tú ni notes la diferencia.</p>



<p>En teoría, si el BCE lo hace bien, un pago con euro digital debería ser tan fluido como pagar con Bizum, Apple Pay o Twint, pero sin depender de bancos comerciales ni de Big Tech. Un sistema europeo, público, interoperable. Suena bonito, ¿verdad?</p>



<p>Ahora bien, todo dependerá de la ejecución técnica. Porque un solo fallo gordo, una caída prolongada, un hackeo, una brecha de privacidad, y la confianza se esfuma. Y con ella, el proyecto entero.</p>



<p>Por eso el BCE está siendo meticuloso. Lento, incluso. Está probando, iterando, invitando a empresas a participar en los componentes clave: detección de fraude, alias, pagos offline…<br>Ahí están Worldline, Nexi, CaixaBank, Amazon, EPI, y varias fintech europeas más metidas hasta el fondo. </p>



<p>La idea es que, cuando esto vea la luz, funcione sin sobresaltos desde el primer día.</p>



<p>¿Y qué pasa con las stablecoins privadas? Pues que el BCE las tiene en el radar, claro. La regulación MiCA abrió la puerta a que haya stablecoins en euros emitidas por entidades supervisadas. Pero las autoridades no quieren que el futuro del dinero europeo dependa de empresas privadas o extranjeras. Prefieren una alternativa pública, controlada, “a prueba de quiebras”.</p>



<p>En el fondo, el euro digital nace para responder a la innovación sin perder el control. Para decir: “también sabemos hacer tecnología, pero bajo nuestras reglas”.</p>



<p>Y ahí está la paradoja. Si logran ese equilibrio (eficiencia sin rigidez, privacidad sin opacidad, innovación sin descontrol) el euro digital podría ser un éxito.<br>Pero si se les va la mano con el control o fallan en la experiencia de usuario, se quedará en un bonito experimento de laboratorio.</p>



<p>Yo, por ahora, me quedo mirando con curiosidad y mucho de escepticismo. Porque si lo hacen bien, el euro digital no se notará: pagarás, recibirás dinero, y todo fluirá. Y si se nota demasiado… entonces, probablemente, algo habrá salido mal.</p>



<p>Gracias por leerme, gracias por tu tiempo.</p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
