---
layout: post
title: "Pago con tarjeta (I). Merchant y Pasarela de Pago"
date: 2020-09-24 11:45:00 +0000
categories: ['Payments &amp; Fintech']
permalink: /pago-con-tarjeta-i/
---


<p>- ¿Cuánto es?<br>- Son 15€ por favor.<br>- Te pago con tarjeta, ¿de acuerdo?<br>- Claro, acerca o introduce la tarjeta en el terminal</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2020/09/undraw_credit_card_payment_12va-1024x785.png" alt="" class="wp-image-647" width="260" height="199"/></figure>



<p>Así es nuestro día a día desde hace años. El pago con tarjeta ha ido creciendo hasta hacerse un hueco importante en nuestras vidas. <br>Para mí hay dos cosas en esto que me parecen apasionantes:</p>



<ol>
<li>El flujo de la transacción </li>



<li>Cómo evoluciona a medida que pasa el tiempo y se sigue creando valor para todas las partes que intervienen</li>
</ol>



<p>Quizás debería haber llamado a esta entrada “Pago electrónico”, ya que a día de hoy pagamos con el teléfono, con el reloj, o incluso con una tarjeta prepago sin soporte físico.<br>Espero que después de leer este artículo, muchas de tus dudas queden disipadas.</p>



<p>¿Te suenan las palabras procesador, adquirente, emisor, red de tarjetas, pasarela de pago o merchant?<br>Son las distintas partes que pueden llegar a estar presente en todo el flujo del pago electrónico.</p>



<p>Haciendo un breve resumen ocurriría tal que así:</p>



<ol>
<li>Merchant manda una petición a su banco adquirente por 15€</li>



<li>Banco adquirente recibe la petición de 15€</li>



<li>Las comunicaciones se mandan a través de una pasarela de pago</li>



<li>El banco adquirente comunica con la red de tarjetas (VISA, AMEX,...)</li>



<li>Red de tarjetas comunica con el banco emisor de la misma y le dice: ¿tienes 15 euritos por aquí para mí?</li>



<li>El banco emisor de la tarjeta contesta, sí, aquí tienes</li>



<li>Se invierte el flujo de todo esto y el merchant recibe la confirmación de que los 15€ han sido cobrados de la cuenta</li>
</ol>



<p>Todo esto es, en resumidas cuentas lo que ocurre cuando se efectúa un pago con tarjeta o similar (teléfono, smartwatch, etc.)<br>Comenzamos por el primero</p>



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="marcmonf" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>



<p class="has-medium-font-size"><strong>¿Qué es un merchant?</strong></p>



<p>Un merchant es el punto de venta, el establecimiento donde tiene lugar la transacción. El número merchant es el número que le da el banco adquirente al punto de venta para poder identificarse a la hora de hacer la transacción. <br>En España, el canal de conveniencia o proximidad, que es aquel canal que no pertenece a una cadena grande, es decir, la tienda de barrio, los bancos en España lo tienen muy trillado. Aunque parece que algo está cambiando en el panorama con el nacimiento de plataformas como Adyen, Stripe o incluso PAYCOMET, aunque esta última depende del Banco Sabadell.</p>



<p>El número merchant es un número que viaja en la transacción electrónica para identificar al punto de venta. De esta manera, cuando la transacción es aceptada, se sabe a qué cuenta tiene que ir el dinero (menos las comisiones de los intermediarios).</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2020/09/undraw_business_shop_qw5t-1024x825.png" alt="" class="wp-image-644" width="323" height="260"/></figure>



<p class="has-medium-font-size"><strong>¿Qué es una pasarela de pago?</strong></p>



<p>La pasarela de pago, también conocida como gateway es el servicio por el cual se conectan el terminal de pago, donde se introduce la tarjeta (físico o virtual) y el banco adquirente. <br>En lineas generales, la pasarela lo que hace es leer los datos de la tarjeta de pago, cifrarlos y mandarlos a través de una conexión web al banco adquirente, que a su vez comunica con las red de tarjetas y ésta con el banco emisor para que la transacción se produzca. <br>La pasarela de pago recibirá la respuesta del banco emisor a través del banco adquirente diciendo OK si se puede producir la transacción o KO si no puede producirse. (¿Hay dinero para pagar, o no hay dinero?)</p>



<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://retailandpayments.com/wp-content/uploads/2020/09/credit-2257536-1024x799.png" alt="" class="wp-image-646" width="325" height="253"/></figure>



<p>Parece sencillo, ¿verdad? Pues tampoco lo es tanto. Los mensajes que se envían a través de la pasarela de pago tienen que cumplir una normativa que se llama PCI DSS y <a data-type="URL" data-id="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en" href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en" target="_blank" rel="noreferrer noopener">PSD2</a>. Ahora es la PSD2, pero antes estaba vigente la <a href="https://ec.europa.eu/info/business-economy-euro/banking-and-finance/consumer-finance-and-payments/payment-services/payment-services_en" target="_blank" rel="noreferrer noopener">PSD</a>. PSD significa Payments Service Directive.<br>Esta directiva tiene como misión hacer que los pagos sean más eficientes y más seguros de cara tanto al consumidor como al comerciante. De esto, hablaré en otro artículo e iré desgranando la PSD2 para que sepamos de qué va esto de la regulación en los pagos.</p>



<p>Siguiendo con el tema de las pasarelas de pago, tengo que decir que es de las cosas que más me gusta dentro del flujo de un pago. Veréis, en España, la estructura está bastante copada por los bancos. La mayor parte de los pagos pasan por Redsys porque es la solución de procesamiento que los bancos ofrecen. Redsys es la solución de pasarela y procesamiento que los bancos dan porque Redsys es una compañía, cuyo <a data-type="URL" data-id="http://www.redsys.es/quienes-somos.html" href="http://www.redsys.es/quienes-somos.html" target="_blank" rel="noreferrer noopener">accionariado es de los bancos</a>.<br>Esto ha generado una situación de cuasi monopolio pero que ha ido mejorando con el paso del tiempo. La aparición en escena de los ecommerce (Woocommerce, Magento, Prestashop, Shopify, etc.) ha creado una necesidad que han satisfecho tanto los NeoBancos como las nuevas plataformas de pago. Dedicaré un artículo más adelante a hablar de las plataformas de pago como Adyen, Stripe, Paypal, etc. Será muy divertido analizar porqué estas plataformas han conseguido saltarse a los bancos típicos para procesar los pagos.</p>



<figure class="wp-block-image size-large"><img src="https://retailandpayments.com/wp-content/uploads/2020/09/plataformas-de-pago-1-1024x300.png" alt="" class="wp-image-652"/></figure>



<p>Y hasta aquí la primera entrega. En el siguiente artículo de pago con tarjeta hablaré de acquiring o adquirentes y de la red de tarjetas (schemes).</p>



<p>Espero vuestro feedback en comentarios. </p>



<p>Gracias por leerme, gracias por tu tiempo. </p>



<p>Retail&amp;Payments</p>



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="marcmonf" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>



<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
