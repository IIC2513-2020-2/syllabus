# Proyecto Semestral - Entrega 6

Fecha límite: 30 de noviembre, 23:59 hrs.

# Introducción

¡Y llegamos a la última entrega! Luego de esta entrega la aplicación debe quedar completa de acuerdo a los objetivos planteados inicialmente.

Aunque tendrán algunos días para completar o pulir algunos detalles que les puedan quedar, con miras a la demo final (que se detallará en los días previos a la fecha límite de la entrega) tienen que considerar que, **además de los objetivos específicos de esta entrega, se evaluará el ítem "Entrega Final" del proyecto, que incluye la evaluación técnica de su aplicación, la documentación del proyecto y el producto final en sí, lo cual es parte importante (50%) de la nota final de su proyecto**.

Pueden revisar el detalle de cada uno de los puntos de la "Entrega Final" en el [enunciado del proyecto](../#entrega-final).

## Trabajo a realizar

En esta entrega se espera:

* Que incorporen **algún servicio REST a elección**, el cual debe ser consumido usando la API que el proveedor de la misma publique. Es importante que la elección vaya en línea con el servicio que presta su aplicación, agregándole valor a la misma.
* Que **ofrezcan una API REST** que pueda ser utilizada por otras aplicaciones. Mediante esta API deben ofrecer al menos un 33% de la funcionalidad disponible manualmente en su aplicación. Aunque no es una exigencia, se premiará con un bonus a quienes construyan, además, una pequeña aplicación que pruebe la API que ofrecen.

Parte de la funcionalidad de su aplicación es accesible sólo para ciertos usuarios o depende del usuario que esté interactuando con la aplicación. En el contexto de la API que su aplicación debe ofrecer, esto lo pueden simplificar creando "manualmente" (y de manera aleatoria) un *accessToken* que identifique a cada usuario, y que sea exigido por su aplicación al momento de realizar ciertas operaciones. Esto significa que, en lugar de entregar como parámetro un *userId*, entregarán un cierto *accessToken* que permitirá a su aplicación saber a qué usuario se refieren, sin directamente especificarlo. Alternativamente pueden usar JSON Web Tokens.

Cualquier duda general sobre el trabajo a realizar pueden consultarla en el [foro del curso](../../../../#foro). Cualquier duda particular sobre su proyecto, pueden consultarla directamente a su ayudante.

**Nota importante**: tengan presente que la idea es consumir una API REST mediante _requests_ generados por ustedes en su aplicación (ya sea desde Node.js o desde el cliente con JavaScript). Esto significa que algo como agregar un "botón de Twitter", o un contador de _tweets_ o _likes_ o insertar un mapa de Google y agregarle marcadores no se considera como "consumir una API REST". Si quieren agregar algo así naturalmente pueden hacerlo y puede que le agregue valor a su entrega final, pero no se considerará cumpliendo los requisitos de esta entrega.

## Forma de entrega

La aplicación debe quedar instalada en Heroku. El código debe quedar disponible en su repositorio Github. Además, **deben incluir un archivo "documentation.pdf"** en su mismo repositorio con la documentación de su proyecto.

## Trabajo en Equipo

Recuerden trabajar en equipo. Esta entrega es muy importante para que no lo hagan!

## Evaluación

Esta entrega generará dos _outputs_ respecto a evaluaciones: por una parte, se evaluará como cualquier otra entrega anterior, pero con énfasis en la funcionalidad solicitada en esta entrega en particular. Pero además, esta entrega es lo que se considerará para evaluar tanto funcionalidad de su aplicación como todos los aspectos técnicos de la misma: el código, arquitectura, modelo de datos, robustez, etc. En este sentido, la documentación entregada tiene alta relevancia. Recuerden que esta última evaluación es lo que generará la nota "Entrega Final" de su proyecto, **50% de la nota del proyecto del curso**. La otra mitad será el promedio de todas las entregas parciales (6 entregas) realizadas durante el semestre.
