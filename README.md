# Santidad de la Obra

Texto de **Alberto Cruz**, escrito en **2002**, con ocasión de los cincuenta años de la Escuela de Arquitectura y Diseño.

Este repositorio reúne una edición digital comparada del cuaderno manuscrito. Su propósito es facilitar la lectura y el cotejo del texto con las imágenes escaneadas, manteniendo a la vista la relación entre escritura y página.

## Lectura

Abre [index.html](index.html) en un navegador. No hace falta instalar dependencias, compilar archivos ni iniciar un servidor. Mantén la estructura de carpetas para que se carguen las imágenes, los estilos y el ajuste de escala.

Cada una de las 87 parejas presenta la imagen del manuscrito a la izquierda y su transcripción a la derecha, en marcos del mismo tamaño. En pantallas pequeñas se puede desplazar horizontalmente la pareja para consultar ambos lados. Las imágenes se cargan progresivamente durante la lectura.

La transcripción usa bloques `<pre class="pag">` para conservar los saltos de línea, las sangrías, los espacios y una aproximación a la disposición de cada página. El texto no se redistribuye como un párrafo continuo. La imagen sigue siendo la referencia para consultar la caligrafía, los dibujos y las relaciones espaciales que la transcripción no puede reproducir por completo.

## Archivos

- `index.html`: las imágenes y transcripciones, ordenadas por página.
- `assets/img/pag-001.jpg` a `pag-087.jpg`: imágenes JPG derivadas de los escaneos.
- `assets/css/estilos.css`: composición de las parejas, colores y tipografía.
- `assets/js/lectura.js`: ajuste de la escala de las transcripciones al ancho disponible.
- `favicon.svg` y `favicon.png`: icono del sitio.

La tipografía es **Red Hat Mono**, cargada desde Google Fonts. Requiere conexión para descargarse; si no está disponible, se utiliza una fuente monoespaciada del sistema. Los estilos se pueden modificar en el archivo CSS sin cambiar el contenido transcrito. Para trasladar el sitio, copia la carpeta completa.

## Nota editorial

Se conserva el orden de las fuentes disponibles. La página 58 se incorporó a partir del escaneo correcto recuperado, con su transcripción correspondiente. El PDF consultado conserva en esa posición una repetición de la página 48; esta edición utiliza la página 58 recuperada, sin reconstruir contenido ni alterar la página 48.

## Derechos

Los derechos y la licencia de la obra y de esta edición están pendientes de definición. Este repositorio no establece una licencia abierta de reproducción o reutilización.
