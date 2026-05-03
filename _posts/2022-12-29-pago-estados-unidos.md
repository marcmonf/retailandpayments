---
layout: post
title: "Cómo funciona el pago en Estados Unidos"
date: 2022-12-29 15:50:35 +0000
categories: ['Payments & Fintech']
image: "assets/img/interac_canada.jpg"
permalink: /pago-estados-unidos/
---


<p><em>“Cuando pones fe, esperanza y amor, juntos puedes criar niños positivos en un mundo negativo”</em><br>Zenón de Citio, fundador de la escuela del Estoicismo.</p>



<p><strong>Disclaimer:</strong><em><strong>&nbsp;</strong>todas las opiniones y declaraciones vertidas en este blog, representan únicamente mis opiniones y para nada vinculan a ninguna entidad, empresa, o negocio con quien tenga cualquier tipo de relación o colaboración</em>.</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<h2 class="wp-block-heading">Cómo funciona el pago en Estados Unidos</h2>



<p>El ecosistema de pagos en Estados Unidos es un sistema complejo que involucra a una variedad de actores, desde bancos y empresas de tarjetas de crédito hasta empresas de tecnología financiera y proveedores de servicios de pago.</p>



<p>Tiene diferencias para con el sistema de pagos de Europa, donde parece que todo está armonizado y orquestado por los esquemas locales. </p>



<p>Mi objetivo al acabar este artículo, es que tengas una pequeña idea de cómo funciona el pago en Estados Unidos.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=pw&banner=0EY4WWAVQJ8VYDJQHT02&f=ifr&linkID=6d51517388483844d6da7b173f37c224&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<h2 class="wp-block-heading">Quién hace qué</h2>



<p>En Estados Unidos cada adquirente va por su cuenta y no existe una armonización de estándares. Cada banco tiene su propio protocolo.</p>



<p>Los protocolos y normativas de seguridad están siendo impuestas por las marcas (VISA, Mastercard, AMEX, etc.), por lo que poco a poco van introduciendo más y más el pago con chip EMV o contactless. </p>



<p>Existe regulación que protege al consumidor, pero en mi humilde opinión, falta armonización. Hay muchas redes que no están conectadas directamente entre sí a través de un armonizador, sino que se utilizan diferentes conexiones indirectas y diferentes redes para hacer la liquidación y compensación de cada movimiento financiero electrónico, bien sea a través de cheques, tarjetas de crédito, movimientos en cajeros, etc. </p>



<p>Es por eso, generalmente, el motivo por el que el pago en Estados Unidos es bastante más caro que en Europa, desde el punto de vista del merchant. </p>



<p>Dentro de todo este ecosistema, tenemos involucradas muchas partes, tales como Card Schemes (o esquemas), Adquirentes, Pasarelas de Pago, procesadores de pagos e ISOs. Veamos quién está detrás de cada uno de estos grupos. </p>



<h3 class="wp-block-heading">Card Networks (esquemas)</h3>



<p>Ya hablé en un <a href="https://retailandpayments.com/por-que-visa-mc-unionpay-mandan/" target="_blank" rel="noreferrer noopener">artículo anterior</a> de quiénes son los que parten el bacalao en esto de los esquemas de tarjetas. Por supuesto en Estados Unidos cobran gran importancia porque la mayor parte de los esquemas nacieron en Estados Unidos. El caso de Diners, Discover, VISA, Mastercard, American Express o incluso <a href="https://www.interac.ca/en/" target="_blank" rel="noreferrer noopener">Interac</a>, un esquema propio enfocado en Canadá, realmente. </p>



<p>Interac nació como una red que interconectaba los Cajeros Automáticos de Canadá y poco a poco fue cobrando más importancia en los pagos electrónicos, pagos A2A, o pagos a contactless través del smartphone. </p>



<figure class="wp-block-image aligncenter size-full is-resized"><img src="/retailandpayments/assets/img/interac_canada.jpg" alt="Cómo funciona el pago en Estados Unidos" class="wp-image-1181" width="407" height="272"/></figure>



<p>Los bancos en Canadá suelen emitir tarjetas co-branded, es decir, que pueden funcionar con dos esquemas. Estos esquemas son Interac por un lado y VISA o Mastercard por otro. La tarjeta se comportará como una tarjeta Interac cuando el merchant se encuentre conectado con la red de Interac y, se comportará como una VISA o una Mastercard cuando la red Interac no esté presente en el merchant. </p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=pw&banner=14DTPEETRQ9KEY0RSKR2&f=ifr&linkID=dfcafd1b7dac2a36004ff68b082c6c17&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Dentro de estos actores también hay hueco para esquemas extranjeros como JCB o Union Pay. </p>



<p>Estas redes cobran importancia al conectar emisores con adquirentes, tanto nacionales como internacionales y tienen mucha presencia en este país. Por eso, cuando pretendo explicar cómo funciona el pago en Estados Unidos, estas empresas aún siguen siendo predominantes en la ardua tarea de la liquidación y compensación diaria. </p>



<p>Por una cuestión de costumbre, dado que los esquemas predominantes nacieron en Estados Unidos, los bancos, como emisores de la mayor parte de tarjetas, siguen confiando y apoyándose en las redes de los esquemas para la interconexión y tramitación del pago. </p>



<h4 class="wp-block-heading">Redes locales en Estados Unidos</h4>



<p>Yo he identificado 3 redes principales en Estados Unidos. </p>



<p>Por un lado tenemos a STAR. Fue comprada por First Data en 2003 y luego adquirida por Fiserv. Cubre una gran red de ATMs y el pago fundamentalmente en el vertical de QSR (Quick Service Restaurant).</p>



<p>Luego está ACCEL, que, adivinad a quién pertenece. Exacto, a Fiserv también. Fue probablemente la primera red de pagos del país, enfocada en primer lugar en los ATMs (Automatic Teller Machine o Cajero Automático), y fue introduciendo poco a poco algunas novedades como en 2014 las transacciones con el chip EMV, o los pagos a través del smartphone en 2016. Crearon también una red local en Canadá a la que llamaron "The Exchange Network".</p>



<p>Por último, el mayor competidor de STAR y ACCEL podemos decir que es Pulse, una compañía adquirida por Discover en 2005. Nació como una red de ATMs cuya tecnología se basaba en la antigua TYME (Take Your Money Everywhere). En 1985 lanza Pulse Pay, para que los merchant pudieran aceptar pagos electrónicos. Esta red, ofrece fundamentalmente la tarjeta Discover Debit, que, a la hora de pagar en establecimientos, es más barata de procesar para los merchant.</p>



<p>Hay algunas otras pero son menos importantes, como Interlink o VISA Readylink. Ambas forman parte de VISA y no las identifico yo como una red de pagos local pura, salvo que alguien que tenga más conocimiento me corrija, cosa que me encanta que ocurra porque aprendo muchísimo recibiendo feedback. </p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=amu&banner=1TG1YA3XXZ1SP0S9MM82&f=ifr&linkID=1aa38dd742c8bb3858c1dd29ddede190&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Sigamos pues con los adquirentes.</p>



<h3 class="wp-block-heading">Adquirentes</h3>



<p>Adquirente, adquiriente, llamémoslos como queramos. La palabreja que utilizamos en inglés es "Acquirer". </p>



<p>Estos son los que se encargan de darle la capacidad de aceptar pagos electrónicos a los establecimientos. Los que convierten el mensaje de comunicación en dinero contante y sonante en la cuenta del merchant.</p>



<p>Según el último Nilson Report, que es el informe sobre los pagos más completo y generalizado del mundo, dentro de los mayores adquirentes del mundo podemos encontrar que en el Top 5, 4 de ellos son de Estados Unidos.</p>



<p>Antes de continuar con el ranking, te dejo un artículo anterior que escribí en el que hablaba sobre qué es eso de la adquirencia. Puedes verlo <a href="https://retailandpayments.com/adquirencia/" target="_blank" rel="noreferrer noopener">aquí</a>.</p>



<p>Este sería el ranking:</p>



<p>1º Worldpay (FIS Global) (USA)<br>2º JP Morgan (USA)<br>3º Sberbank (RUS)<br>4º Fiserv<br>5º globalpayments</p>



<p>Todas estas empresas tienen en común que prácticamente controlan la mayor parte del pago que se procesa en Estados Unidos, con permiso de Bank of America. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/statue-of-liberty-gd876231e0_1920.jpg" alt="como funciona el pago en Estados Unidos payments usa" class="wp-image-1185" width="437" height="285"/></figure>



<p>Lo curioso o diferente con respecto al pago en Europa, es que la mayor parte de estos adquirentes ofrecen soluciones end to end o soluciones all-in-one, es decir, que ellos proveen de todos los servicios de pago a los diferentes merchant. </p>



<p>Desde el terminal, cuenta de empresa con número de comercio, hasta la pasarela de pago y adquirencia. Con esto más o menos tenemos una pequeña idea de cómo funciona el pago en Estados Unidos. </p>



<p>Pero sigamos profundizando un poco más.</p>



<h3 class="wp-block-heading">Procesadores de pagos</h3>



<p>Algunas compañías utilizan infraestructuras de terceros para poder procesar los pagos con tarjeta. Esto significa que en vez de montar una infraestructura compleja de pagos y conectarla a su vez con las distintas redes existentes, se sirven de una empresa que ya tiene montada toda esa infraestructura y conectan sus sistemas a ella o bien, integran el sistema del procesador en sus sistemas para hacerlo todo más fácil. </p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=primevideo&banner=0MC4AN2A96KXVJAYZD82&f=ifr&linkID=980aadb9931d10d8997cda10467ca0fe&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Los procesadores de pagos se encargan de obtener la autorización de los pagos hechos con tarjetas de crédito y débito. Son los que dan la orden a los bancos emisores de la tarjeta en cuestión, para que retire los fondos de la cuenta asociada y les dicen a qué adquirente y número de comercio deben ir los fondos. El adquirente se encarga luego de pagar al merchant en la cuenta designada en función de la información que el procesador de pagos le dio en la transacción cifrada. </p>



<p>Un ejemplo claro de un procesador de pagos es <a href="https://www.securepaymentsystems.com/" target="_blank" rel="noreferrer noopener">Secure Payment Systems</a>. </p>



<p>Lamentablemente ya no hay tantos procesadores de pagos independientes, dado que muchos de ellos han sido adquiridos por empresas más grandes, como el caso de WePay, que fue adquirida por J.P. Morgan, o el caso de Braintree, que fue comprada por PayPal.</p>



<h3 class="wp-block-heading">ISOs</h3>



<p>ISO es el acrónimo de Independent Sales Organization. </p>



<p>Las ISOs son empresas que fundamentalmente tienen una relación con los bancos adquirentes y con los esquemas, de forma que revenden la solución de adquirencia de un banco a cambio de una comisión. </p>



<p>Las ISOs no están exentas de un registro y de pasar por un proceso de validación y aprobación por el banco adquirente en cuestión, aunque el responsable último del manejo del dinero del merchant es el banco adquirente y no la ISO. </p>



<p>Estas también deben pasar por ese mismo proceso de inscripción y validación por parte de los esquemas. De hecho, ISO es el término con el que las denomina VISA, mientras que MasterCard las denomina MSP. </p>



<p>¿Qué sentido tiene todo este tinglado de organizaciones? Pues básicamente se trata de ir mitigando riesgos y responsabilidades. Antes comenté que el responsable del manejo de los fondos del merchant es el adquirente y eso es correcto, pero el riesgo sí se reparte. Me estoy refiriendo al riesgo frente al fraude o al pago offline, etc. </p>



<p>Como ejemplos de Independent Sales Organization tenemos <a href="https://www.creditcardprocessing.com/" target="_blank" rel="noreferrer noopener">CreditCardProcessing.com</a>, <a href="https://www.flagshipmerchantservices.com/" target="_blank" rel="noreferrer noopener">Flagship</a>, <a href="https://nuvei.com/" target="_blank" rel="noreferrer noopener">Nuvei</a>, o <a href="https://www.versapay.com/" target="_blank" rel="noreferrer noopener">VersaPay</a>, entre otros muchos. </p>



<p>Con esto nos vamos acercando un poco más a entender cómo funciona el pago en Estados Unidos.</p>



<h3 class="wp-block-heading">Gateway o pasarela de pago</h3>



<p>Vamos a la chicha, al turrón, a los protagonistas, a los que para mí son el actor más importante dentro del ecosistema de pagos: las pasarelas de pago o Gateways.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/new-york-1071162_1920.jpg" alt="como funciona el pago en Estados Unidos" class="wp-image-1189" width="467" height="278"/></figure>



<p>Mucha gente tiene mucha confusión sobre lo que es y lo que no es una pasarela de pago. Es muy importante entenderlo para poder identificar bien quién es y quién no es Gateway.</p>



<p>Una pasarela de pago es una pieza de software que tiene como objetivo enrutar un pago desde un merchant, bien in-store, bien online, hacia el adquirente encargado de procesar el pago. </p>



<p>La característica que, para mí, es la única válida en cuanto a identificar si se es pasarela de pago o no, es si dicha pasarela te hace independiente de tu adquirente como merchant. Esto es, que si tienes una infraestructura de pago montada con una pasarela, cambias del adquirente X al adquirente Y y no tienes que modificar dicha infraestructura, entonces sí, estamos hablando de una pasarela de pago. Si por el contrario, el hecho de cambiar de adquirente te hace reintegrar tu infraestructura de pago, entonces no es una pasarela, es un proveedor de pagos. </p>



<h4 class="wp-block-heading">Pero entonces, ¿qué hace una pasarela de pago?</h4>



<p>Voy a matizar esto un poco más para que se entienda bien.</p>



<p>Las pasarelas de pago necesitan pasar por procesos de certificación, igual que los terminales de pago, para poder trabajar con los distintos bancos adquirentes. El banco adquirente de turno tiene que certificar la pasarela para validar que las comunicaciones entre ambos actores son seguras y se pueden producir sin ningún problema. </p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=audiblees&banner=11P7E7RYFWTMDE1A5Y82&f=ifr&linkID=a377cd8afdf79f06543cbfcc14bed1e3&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Una vez que ocurre esta certificación, el papel de la pasarela de pago es doble:</p>



<ol>
<li>Enrutar el pago hacia el adquirente del merchant</li>



<li>Ofrecer un listado de las transacciones diarias en un formato legible para la ayuda en la conciliación financiera de todas esas transacciones</li>
</ol>



<p>Una pasarela de pago conecta un terminal de pago físico o virtual con un banco adquirente o un procesador. </p>



<p>De todas formas, no tardando mucho tendréis un artículo sobre qué es una pasarela de pago en mi blog y podemos discutir y abrir este melón tan maravilloso.</p>



<p>Ejemplos de Gateways que podamos encontrar, ya pocas, pero quedan algunas como Worldline, Opayo (ahora parte de Elavon) o Digital River son algunos ejemplos.</p>



<h3 class="wp-block-heading">Regulación</h3>



<p>En cuanto a la regulación, Estados Unidos tiene un problema, y es que tiene demasiados entes regulando el sistema financiero. </p>



<p>En realidad, hay dos entes que están uno por encima del otro, que son los que más tienen que decir sobre pagos, a saber, la Reserva Federal y el Gobierno de cada Estado en cuestión. </p>



<p>Se trata de un sistema un tanto fragmentado, que a veces genera la duda de quién tiene que regular qué, lo que hace que acotar el fraude y el blanqueo de dinero sea un poco más complicado.</p>



<p>Por enumerarlas, tenemos:</p>



<ol>
<li><a href="https://www.federalreserve.gov/" target="_blank" rel="noreferrer noopener">Reserva Federal</a>: define la política monetaria del país y regula a los bancos. Es como el Banco Central Europeo, para los neófitos</li>



<li><a href="https://www.occ.gov/index.html" target="_blank" rel="noreferrer noopener">Oficina de auditoría de la moneda</a>: supervisa a los bancos y a las instituciones de crédito</li>



<li><a href="https://ncua.gov/" target="_blank" rel="noreferrer noopener">National Credit Union Administration</a>: regula a las uniones de crédito  </li>



<li><a href="https://www.fdic.gov/" target="_blank" rel="noreferrer noopener">Federal Deposit Insurance Corporation</a>: agencia que asegura el dinero de los depósitos, como el Fondo de Garantía de Depósitos nuestro</li>



<li><a href="https://www.sec.gov/" target="_blank" rel="noreferrer noopener">Security and Exchange Comission</a>: asegura la transparencia en las compañías listadas en bolsa y regula los mercados financieros</li>
</ol>



<p>Todos estos organismos son los encargados de regular al sector financiero. </p>



<p>Ojo, que hay más cositas, como los organismos encargados de la protección al consumidor o los que velan por que no se produzca blanqueo de capitales, que es lo que ellos llamaron <a href="https://www.fincen.gov/resources/statutes-regulations/usa-patriot-act" target="_blank" rel="noreferrer noopener">USA Patriot Act</a>, debajo de la Financial Crimes Enforcement Network. Este organismo fue el que en 2001 introdujo el KYC en Estados Unidos. </p>



<p>¿Véis la cantidad de organismos que tratan sobre el pago?¿Se entiende que haya una nebulosa en cuesiones regulatorias sobre el pago en Estados Unidos?</p>



<h3 class="wp-block-heading">Diferentes métodos y tecnologías de pago</h3>



<p>Para entender cómo funciona el pago en Estados Unidos, hay que hacer también un repaso a las tecnologías de pago y los métodos de pago que se usan en el país. </p>



<p>Sin quedarnos en la tarjeta de crédito o débito, Estados Unidos es un país en el que el ecosistema de pagos aún usa una tecnología de banda magnética en las tarjetas o MagStripe (<a href="https://retailandpayments.com/por-que-visa-mc-unionpay-mandan/" target="_blank" rel="noreferrer noopener">aquí </a>explico algunas de las tecnologías que se usan en el pago actualmente) y no ha sido hasta 2015 cuando el chip y el contactless se han ido introduciendo de manera masiva en el país. </p>



<p>Pero yendo más en profundidad, en Estados Unidos no se paga únicamente con tarjeta de crédito o débito. Hay otros métodos de pago usados como puedan ser el eCheck y el pago ACH. </p>



<p>El eCheck es un método de pago electrónico que se usa para pagar online y que se procesa a través de la red ACH. (Ahora os explico lo que es la red ACH). Para usar un cheque electrónico el usuario tiene que dar un número de chequera de la que tirar de fondos que está asociada a un número de banco y el nombre al que está asociada la cuenta. Con esos datos, la red ACH es capaz de procesar un pago. </p>



<h4 class="wp-block-heading">Red ACH</h4>



<p>¿Qué es esto de la red ACH? ACH son las siglas de Automatic Clearing House, que no es más que una cámara de compensación que se encuentra conectada con bancos y entidades de crédito para que se puedan producir pagos inmediatos. En <a href="https://www.nacha.org/content/what-is-ach" target="_blank" rel="noreferrer noopener">su página</a> ellos ponen el ejemplo de que cuando recibes tu nómina al levantarte por la mañana un viernes, eso es un pago ACH. </p>



<p>(Esto último tiene sentido dado que en Estados Unidos mucha gente cobra semanalmente y no mensualmente.) </p>



<p>Es una red de pagos utilizada sobre todo por las empresas para hacer pagos, bien de una empresa de seguros a un proveedor médico, de un cliente a un proveedor, de una empresa a sus trabajadores, etc.</p>



<p>Pero ojo, que con la pandemia y la reducción del uso del cheque, hay ya muchas empresas que están saliendo en el ecosistema de pagos que están utilizando la red ACH para realizar pagos P2P entre sus usuarios.</p>



<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=prime_video&banner=1WM3P83JBRAEDHZ74YR2&f=ifr&linkID=e778612a75a9cfe7fb4ddad24ea9a348&t=marcmonf0c-21&tracking_id=marcmonf0c-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>



<p>Dejo aquí un enlace en el que podéis ver el volumen que mueven anualmente y quiénes son los usuarios de esta red para más información. <a href="https://www.nacha.org/content/ach-network-volume-and-value-statistics" target="_blank" rel="noreferrer noopener">Enlace a ACH</a>.</p>



<p><em>Nota: ACH sería algo parecido a lo que en Europa llamamos SEPA</em></p>



<h4 class="wp-block-heading">Resto de tecnologías</h4>



<p>El resto de las tecnologías que se usan son las conocidas, pagos contactless, pagos EMV, pagos a través del teléfono o del smartwatch.</p>



<p>El método de pago que más perspectiva de crecimiento tiene en los próximos 5 años es el pago a través del smartphone (mobile payments) y del smartwatch. </p>



<figure class="wp-block-image aligncenter size-large"><img src="/retailandpayments/assets/img/payments-type-FED.png" alt="cómo funciona el pago en Estados Unidos" class="wp-image-1193"/></figure>



<h3 class="wp-block-heading">Conclusión</h3>



<p>Como veis, hay muchos actores implicados y es necesario ir muy al detalle para entender cómo funciona el pago en Estados Unidos. Se trata de un país muy grande, con mucha tipología diferente de usuarios, comercio y necesidades, por eso las oportunidades son enormes en un país en el que cada actor parece que ha puesto el foco en lo que consideraba que tenía que reparar, pero no en armonizar todo esto. </p>



<p>El primer armonizador que armonice, buen armonizador será.</p>



<p>Gracias por leerme, gracias por tu tiempo. </p>



<p>Retail &amp; Payments</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
