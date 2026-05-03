---
layout: post
title: "Pago con tarjeta (II). Adquirente, Red de Tarjetas y Banco Emisor"
date: 2020-09-29 18:15:00 +0000
categories: ['Payments &amp; Fintech']
image: "assets/img/Fernando_Arrabal_El_Milenarismo-1.gif"
permalink: /pago-con-tarjeta-ii/
---


<p>Volvemos a la carga. Esta es la segunda entrega de cómo se procesa un Pago con tarjeta o pago digital.<br>En la <a href="https://retailandpayments.com/pago-con-tarjeta-i/">primera entrega</a> hablamos del esquema general, de qué es un Merchant y una Pasarela de Pago.</p>



<p>En esta segunda entrega, con la que espero que quede cerrado y explicado todo el flujo de pago con tarjeta o pago digital, hablaremos de acquiring, de la red de tarjetas y del banco emisor.</p>



<p class="has-medium-font-size"><strong>Acquiring o adquirencia</strong></p>



<p>Hablemos de acquiring. El acquiring va a llegaaaaar...</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/Fernando_Arrabal_El_Milenarismo-1.gif" alt="" class="wp-image-670" width="341" height="195"/></figure>



<p>El banco adquirente es la entidad financiera que proporciona el número merchant, tiene capacidad para otorgar esos números a los puntos de venta. El acquiring o adquirencia lo lleva a cabo el Banco Adquirente y es el proceso por el cual se comunica la transacción desde el merchant hasta la red de tarjetas. Es decir, el proceso que da el número de merchant al punto de venta, la recepción de la transacción por parte de la pasarela de pago y el envío a la red de tarjetas (VISA, Mastercard, Amex, Diners Club...). <br>También se involucra en el proceso contrario, es decir, en la recepción de la respuesta por parte de la red de tarjetas y se encarga de mandar esa respuesta al punto de venta.</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/ecommerce-2140604_1280.jpg" alt="" class="wp-image-679" width="332" height="144"/></figure>



<p>En este proceso, el Banco adquirente se comunica con la red de tarjetas , para que se comunique con el banco emisor de la tarjeta y haga la verificación de si hay fondos y se encarga de pedírselos en caso de que esos fondos sean suficientes para el pago que se pretende realizar. En España, los bancos adquirentes son prácticamente todos los bancos comerciales, que a su vez subcontratan a un procesador de pagos para que haga todo este proceso de comunicación entre el merchant y la red de tarjetas.</p>



<p>Entre medias, no podemos olvidar que la pasarela de pago ha cifrado esos datos para que no sean visibles a cualquier bichito que pueda estar en el backend leyendo todo lo que viaja entre las APIs.  </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/artificial-intelligence-2167835.jpg" alt="" class="wp-image-678" width="329" height="219"/></figure>



<p>Realmente, en el acquiring es donde se produce la magia, donde se le dice al punto de venta que va a cobrar, me explico: es el que va a recibir los fondos del banco emisor de la tarjeta y el que adquiere el compromiso de pagar esos fondos al merchant, descontando previamente su comisión. <br>Las comisiones que los adquirentes proporcionan a los merchant, ya llevan incluidos esos costes de la pasarela, de la red de tarjetas y del procesador. Básicamente el merchant recibe el dinero ya limpio en su cuenta, sin temor a tener que pagar ningún fee extra. </p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<p class="has-medium-font-size"><strong>Red de tarjetas</strong></p>



<p>Dos palabras: son necesarias.</p>



<p>Por mucho que quieras quitar de la ecuación a VISA, Mastercard, Union pay, etc., son necesarias. Son las que están conectando el pago entre el adquirente y el banco emisor. Tienen todo el poder del mundo. Tanto es así, que hay quien dice que son el impuesto al consumo mundial. </p>



<p>Las redes de tarjetass o "<em>Card Schemes</em>" son las empresas que están detrás de todo procesando el pago de las tarjetas de débito, crédito o prepago que se usan para pagar en los comercios. </p>



<p>Han montado un sistema que es genial, puedes ir con un trocito de plástico de España a Australia y pagar con ese trocito de plástico en apenas segundos. No hace falta que lleves Dólares Australianos encima. No hace falta que llames al banco en el momento del pago para que te autorice. No hace falta que esperes un día para que se le confirme al punto de venta que tienes dinero. </p>



<p>Quiero pagar. <br>Ya está, hecho. <br>Ya has pagado 15AUD por un libro en Sydney mientras las personas que trabajan en tu banco en España duermen plácidamente. ¿No me diréis que no es maravilloso? Hace 50 años se lo cuentas a tus abuelos y no te creen. (Depende también de quién fueran tus abuelos. Los míos eran campesinos y pastores, de ahí el símil)</p>



<p>En otro artículo, hablaré de la historia de las tarjetas de crédito, cuál es su origen y cómo han ido evolucionando.</p>



<p>A ver, es verdad que podemos ir a pagar a Australia y que nuestra tarjeta no funcione. Ahí sí vas a tener que llamar al del banco a decirle que mire a ver si la tarjeta tiene configurados algunos bloqueos como los pagos fuera del país. O si vamos a Portugal a pagar con una tarjeta de débito, un problemón. Llevad tarjeta de crédito o efectivo. </p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/american-express-89024.jpg" alt="" class="wp-image-683" width="377" height="236"/></figure>



<p>Las ventajas de las que disponen tienen que ver con la posición dominante y el alto grado de aceptación en todo el mundo. Como decía anteriormente, puedes pagar con una tarjeta VISA o Mastercard, por poner dos ejemplos, en la otra parte del mundo sin problema. Y eso significa que el comercio en el que estás pagando en el otro lado del mundo acepta el mismo tipo de tarjeta que la gasolinera de tu barrio, no hay diferencias. Ambos merchant van a mandar la transacción de la misma manera a la red de tarjetas, que la va a procesar con el banco emisor, viendo si hay fondos y mandando la respuesta al adquirente, no sin antes cobrar por ello. </p>



<p>Prácticamente todas las instituciones financieras del mundo están conectadas con estos dos gigantes. Más de 40 millones de establecimientos aceptan una tarjeta de crédito como medio de pago. 40 millones. Más.</p>



<p>¿Y qué pasa con American Express? Sólo hablas de VISA y Mastercard, ¿y dejas de lado a AMEX, que es otra de las más conocidas?<br>Bueno, hay más redes de tarjetas: Union Pay, Diners Club, JCB, Discover, y algunas más locales. AMEX tiene una particularidad y es que ellos mismos son el banco emisor, pero lo analizaremos en otro artículo. Si no, se me acaban las ideas rápido</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="/retailandpayments/assets/img/wallet-908569.jpg" alt="" class="wp-image-689" width="384" height="256"/></figure>



<p>En síntesis, las redes de tarjetas reciben la transacción desde el banco adquirente, la procesan (identifican qué tarjeta es, si es VISA, Mastercard; si es prepago, débito o crédito; si es del banco A, o del banco B) y la mandan al banco emisor de esa tarjeta, reciben la verificación de que hay fondos, y piden congelarlos para asegurar el pago y se lo comunican al adquirente. El adquirente después les da el ok y la red de tarjetas le dice al emisor que retire los fondos para entregárselos al adquirente. Y por todo ello, cobra un fee. Pequeño, pero un fee pequeño sobre 50.000 millones de transacciones, pues es un fee muy interesante.</p>



<p class="has-medium-font-size"><strong>Banco emisor</strong></p>



<p>Nuestro banco. Y cada día el de más gente. Sin querer hacer publicidad, ojo. Es el banco que emite la tarjeta. La institución financiera que tiene la promesa de pago con el cliente que realiza la transacción. <br>Los bancos, tienen licencias de las redes de tarjetas para emitir éstas a nombre de los clientes para que puedan efectuar los pagos. Esas tarjetas que emiten, en función de la composición de los guarismos, determinan el tipo de tarjeta que se emite. </p>



<p>A nivel transaccional, reciben una petición de la red de tarjetas que les pregunta si hay fondos en la tarjeta del cliente (si es prepago, en la misma tarjeta; si es de crédito, se verifica que haya crédito; y si es débito, directamente se verifican si hay fondos suficientes en la cuenta). Una vez que responde, congela los fondos y cuando recibe el OK de la red de tarjetas, se los envía al banco adquirente. Así de sencillo. Fácil y para toda la familia. </p>



<p>Hay bancos que emiten sólo tarjetas de una determinada red y hay otros que emiten de más de una. Depende de los contratos y de la estrategia del banco, ya que hay unos fees por detrás que cobran por todo esto. (Aquí todo el mundo se lleva un fee menos yo).</p>



<p>Pues ya estaría. No me digáis que no lo hemos hecho sencillo, rápido y ameno de leer. O sí, decídmelo. Debajo tenéis un formulario para ponerme lo mucho que os ha encantado este post. <br>O decidme otra cosa, pero que sea bonita.</p>



<p>Gracias por leerme, gracias por tu tiempo. </p>



<p>Retail&amp;Payments</p>



{% include buymeacoffee.html %}



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<p><br></p>
