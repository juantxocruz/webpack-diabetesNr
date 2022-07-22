# Webpack 5 Diabetes Insurance calculator
Webpack 5 Diabetes Calculator NacionalRe


Patologías
Género
Edad
Tipo de diabetes
Antigüedad de la diabetes
Peso
Altura
IMC
Tabaco y alcohol
Presión arterial
Insulina
Hemoglobina
Colesterol


Cálculo inicial de los recargos
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
   <li><a href="#desarrollo">Desarrollo</a></li>
    <li>
      <a href="#calculadora-de-diabetes">Calculadora de diabetes</a>
      <ul>
        <li><a href="#introducción">Introducción</a></li>
        <li><a href="#pasos">Pasos</a></li>
        <li><a href="#validación-del-formulario">Formulario</a></li>
         <li><a href="#variables-principales">Variables principales</a>
            <ul>
                <li><a href="#patalogías">Patologías</a></li>
                <li><a href="#género">Género</a></li>
                <li><a href="#edad">Edad</a></li>
                <li><a href="#tipo-de-diabetes">Tipo de diabetes</a></li>
                 <li><a href="#antigüedad-de-la-diabetes">Antigüedad de la diabetes</a></li>
                 <li><a href="#peso">Peso</a></li>
                <li><a href="#altura">Altura</a></li>
                <li><a href="#IMC">IMC</a></li>
                <li><a href="#tabaco-y-alcohol">Tabaco y alcohol</a></li>
                <li><a href="#presión-arterial">Presión arterial</a></li>
                <li><a href="#insulina">Insulina</a></li>
                <li><a href="#hemoglobina">hemoglobina</a></li>
                <li><a href="#colesterol">Colesterol</a></li>
            </ul>
         </li>
          <li><a href="#cálculo-inicial-de-los-recargos">Cálculo inicial de los recargos</a>
            <ul>
                <li><a href="#alcohol">Alcohol</a></li>
                <li><a href="#colesterol">Colesterol</a></li>
                <li><a href="#hipertensión">Hipertensión</a></li>
                <li><a href="#índice-de-masa-muscular">Índice de masa muscular</a></li>
                 <li><a href="#tensión">Tensión</a></li>
                  <li><a href="#tabaco">Tabaco</a></li>
            </ul>
         </li>
         </li>
      </ul>
    </li>
    <li><a href="#traducción">Traducción</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#referencias">Referencias</a></li>
    <li><a href="#contactos">Contactos</a></li>
  </ol>
</details>


<!-- DESARROLLO -->

# Desarrollo
Las calculadoras han sido desarrolladas con los lenguajes HTML, CSS y Javascript con la ayuda del empaquetador de módulos [WebPack 5](https://github.com/webpack/webpack).
Webpack se define como un empaquetador de módulos (un bundler en la jerga habitual) pero que hace muchísimas cosas más:

- Gestión de dependencias
- Ejecución de tareas
- Conversión de formatos
- Servidor de desarrollo
- Carga y uso de módulos de todo tipo (AMD, CommonJS o ES2015)


> Webpack se puede considerar como un Task Runner muy especializado en el procesamiento de unos archivos de entrada para convertirlos en otros archivos de salida, para lo cual utiliza unos componentes que se denominan loaders.


## Instalación

- Entrar en la raiz de la carpeta e instalar las dependencias.

```bash
cd 20220119 VidaNr
npm install
```

- Abrir el proyecto en el navegador

```bash
npm start
```


- Construir para producción

```bash
npm run build:nacionalRe
```

## Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.




<!-- DIABETES -->
# Calculadora de diabetes

## Introducción
Esta aplicación interactiva calcula los recargos de los seguros de fallecimiento, invalidez, accidente e incapacidad para diabeticos atendiendo a las observaciones realizadas según el tipo de diabetes, la antigüedad de su aparición, la edad, el índice de masa muscular, el nivel de tabaco, la ingesta de alcohol, los niveles de tensión arterial y los niveles de hemoglobina, insulina y colesterol.



## Pasos
Para realizar los cálculos, estos serían los pasos principales en orden de realización:

- VALIDACIÓN DEL FORMULARIO: Las campos del formularios son: age, gender, diabetes, yearsDiabetes, weight, height, IMC, cigarretes, cigars, pipes, wines, beers, spirits, sytolic, diastolic, insulin, hemoglobin, cholesterol.
- CALCULO DE LAS VARIABLES PRINCIPALES: Las variables finales que calculamos con estos datos son: 
age, imc, tobacco, alcohol, tension, hemoglobin, cholesterol.
- CALCULO  DE LOS RECARGOS: Una vez recogidas estas variables, tenemos que calcular los recargos para:

<p align="right">(<a href="#top">Subir</a>)</p>

## Validación del formulario
El primer paso sería la validación de las entradas del formulario. 
El formulario es un documento creado en HTML con unos mínimos ajustes de CSS e interactividad realizada con Javascript.

![formulario diabetesNr][formulario diabetesNr]

## Variables principales
- Todos los campos del formulario son obligatorios.
- Los campos para Tabaco y Alcohol están rellenados por defecto con el valor 0.
- Todos los campos tienen un mensaje de alerta ('Campo obligatorio') en el caso de que no estén rellenos.
- El botón de Calcular no se activa hasta que todos los campos sean correctos.
- El teclado tiene desactivado la tecla ENTER para que no corran los campos si se pulsa.


### Patologías
Si el individuo ha pacecido alguna de estas patologías, se descarta cualquier tipo de cálculo.
- Retinopatía
- Neuropatía
- Enfermedad coronaria (Angina, I.A.M.)
- Enfermedad renal asociada
- Enfermedad arterial periférica
- Accidente cerebrovascular
- Ingreso hace menos de 6 meses por una complicación

Si el usuario pone que sí, aparece el mensaje "Cualquiera de estas patologías no permiten asegurar ningún riesgo".
### Género
Dos inputs excluyentes del tipo Radio: Hombre y mujer.
Esta varible será luego importante para calcular distintas patologías.
Es un campo obligatorio.

### Edad
Un input de tipo Date.

- La fecha no puede ser nunca mayor que el día en el que estamos.
"La fecha seleccionada no puede ser mayor que la fecha actual: Por favor, asegúrese de que la fecha es correcta".

- La edad debe estar en un rango entre 13 y 69 años.
"Atención: Fecha fuera de rango".

```bash
date >= 13 && date <=69
```

- Es un campo obligatorio: "La edad debe ser mayor de 12 y menor de 70. Tarificación cancelada".



### Tipo de diabetes
Dos inputs excluyentes del tipo Radio: tipo I y tipo II .
Es un campo obligatorio.

### Antigüedad de la diabetes
Input de tipo Number.
Es un campo obligatorio.

- Valor por defecto: 0.
- Los años que han pasado desde el diagnóstico de la diabetes.


### Peso
Input de tipo Number.

- Cifra en kilos sin decimales.
- El peso debe ser mayor de 32 kilos.

```bash
weight > 32
```
Es un campo obligatorio: "El peso debe ser mayor de 32 kilos. Faltan datos impresindibles".

### Altura
Input de tipo Number.

- Cifra en centímetros sin decimales.
- La altura debe ser mayor de 120 centímetros.

```bash
height > 120
```
Es un campo obligatorio: "La altura introducida es muy baja. Campo obligatorio".
### IMC
Cálculo directo.
La altura la convertimos a metros y se multiplica por dos.

Peso / ((altura / 100) * 2)

```bash
    w = Number(cm) / 100;
   _imc = (Number(_weight) / (Number(w) * Number(w))).toFixed(2);
```


- Si el índice de masa muscular en menor de 20. se aplicará el color azul a la cifra.

```bash
   if (val < 20) {
        input.classList.add("blue");
        return false;
    }
```


- Si el IMC está en comprendido entre 20 y 28, se aplicará el color verde a la cifra.

```bash
   if (val >= 20 && val <= 28) {
        input.classList.add("green");
        return false;
    }
```

- Si el IMC es mayor de 28 se aplicará el color rojo.





### Tabaco y alcohol
Inputs de tipo Number.

- Cifras sin decimales y siempre positivas.
- Por defecto, se asigna 0.

### Presión arterial
Inputs de tipo Number.

- Debe introducirse una toma (sistólica y diástolica).


- Las tomas sistólica deben estar en el rango 65-145.
```bash
systolic >= 65 && systolic <=145
```
- Las tomas diastólicas deben estar en el rango 45-95.
```bash
diastolic >= 45 && diastolic <=95
```

- La diferencia entre la media sistólica y la media diástolica debe estar compensada:
La diferencia entre la sistólica y la diastólica debe ser mayor o igual de 20.
No debe dejar pasar el cálculo si la tensión está descompensada.

Tarificación cancelada"
'La diferencia entre la tensión sistólica y la tensión diástolica es menor de 20 y, por tanto, está muy descompensada. Tarificación cancelada.';
'Por favor, asegúrese de que la cifra es correcta para poder realizar la tarificación.'




```bash
systolic - diastolic >= 20
```

- Si la toma sistólica en mayor de 145 o menor de 65, se aplicará el color rojo a la cifra.



```bash
 if (systolic > 145 || systolic < 65) {
        input.classList.add("red");
        return false;
    }
```


- Si la toma sistólica en mayor de 131 , se aplicará el color azul a la cifra.

```bash
  if (systolic > 131) {
        input.classList.add("blue");
        return false;
    }
```

- Para la toma sistólica, en otros casos, se aplicará el color verde.


- Si la toma diastólica en mayor de 95 o menor de 45, se aplicará el color rojo a la cifra.

```bash
   if (diastolic > 95 || diastolic < 45) {
        input.classList.add("red");
        return false;
    }
```


- Si la toma diastólica en mayor de 80 , se aplicará el color azul a la cifra.

```bash
  if (diastolic > 80) {
        input.classList.add("blue");
        return false;
    }
```

- Para la toma diastólica, en otros casos, se aplicará el color verde.

- Si la toma sistólica es menor de 65: "Tensión sistólica muy baja. Tarificación cancelada".

- Si la toma sistólica es mayor de 145: "Tensión sistólica muy alta. Tarificación cancelada".

- Si la toma diastólica es menor de 45: "Tensión diastólica muy baja. Tarificación cancelada".

- Si la toma diastólica es mayor de 95: "Tensión diastólica muy alta. Tarificación cancelada".




### Insulina
Inputs excluyentes del tipo Radio con las distintas franjas.

- Hasta 25 unidades día
- Más de 25 unidades días

### Hemoglobina

Inputs excluyentes del tipo Radio con las distintas franjas.

- Menos de 7,0: +0
- de 7,0 a 7,5: 025
- de 7,6 a 8,0: +50
- de 8,1 a 9,0: +75
- de 9,1 a 10: +100
- Más de 10: rechazar (+999)
### Colesterol
Inputs excluyentes del tipo Radio con las distintas franjas.
Miligramos por decilitro.

- Hasta 200: +0
- de 200 a 250: +25%
- de 251 a 275: +50%
- de 276 a 300: +75%
- Más de 300: Rechazar


## Cálculo inicial de los recargos

### Edad 
La edad real se utiliza en todos los cálculos.

### Tipo de diabetes y edad del individuo

Según la edad del individuo y el tipo de diabetes se establecen los siguientes cálculos:

- Diabetes Tipo 1 y 2: Vida


```bash
// Diabetes Tipo 1 y tipo 2: Vida
if (type === 't1') {
        if (age <= 19) {
            result += 0;
        }
        if (age > 19 && age <= 24) {
            result += 250;
        }
        if (age > 24 && age <= 29) {
            result += 200;
        }
        if (age > 29 && age <= 40) {
            result += 150;
        }
        if (age > 40) {
            result += 100;
        }
    }
    if (type === 't2') {
        if (age <= 29) {
            result += 200;
        }
        if (age > 29 && age <= 39) {
            result += 150;
        }
        if (age > 39 && age <= 49) {
            result += 75;
        }
        if (age > 49) {
            result += 25;
        }
    }
```


- Diabetes Tipos 1 y y 2: Invalidez y accidente.

```bash
// Diabetes Tipo 1 y tipo 2: Invalidez y accidente.
if (type === 't1') {
        result += 999;
    }
    if (type === 't2') {
        if (age <= 39) {
            result += 999;
        }
        if (age > 39 && age <= 49) {
            result += 100;
        }
        if (age > 49) {
            result += 25;
        }
    }
```


- Diabetes Tipo 1 y tipo 2: Garantías ILT

No hay tabla de recargos para ILT (incapacidad laboral temporal). 
Se entiende que no suma (o que suma 0) para todas las tarifas.


- Tablas:

[diabetes_edad_tipo_1_vida.csv](docs/diabetes_edad_tipo_1_vida.csv).

[diabetes_edad_tipo_2_vida.csv](docs/diabetes_edad_tipo_2_vida.csv).



![diabetes_edad_vida][diabetes_edad_vida]


### Diabetes y antigüedad

Según la antigüedad de la diabeted y el tipo de diabetes se establecen los siguientes cálculos:

- Diabetes Tipo 1: Vida, invalidez y accidentes

[diabetes_tiempo_tipo_1_vida.csv](docs/diabetes_tiempo_tipo_1_vida.csv).

- Diabetes Tipo 2: Vida, invalidez y accidentes:

[diabetes_tiempo_tipo_2_vida.csv](docs/diabetes_tiempo_tipo_2_vida.csv).

El siguiente cuadro es para la tarificación de Vida, invalidez y accidentes dependiendo de la fecha de diagnóstico.
![diabetes_tiempo_vida][diabetes_tiempo_vida]



- Diabetes Tipo 1: ILT

[diabetes_tiempo_tipo_1_ILT.csv](docs/diabetes_tiempo_tipo_1_ILT.csv).


- Diabetes Tipo 2: ILT:

[diabetes_tiempo_tipo_2_ILT.csv](docs/diabetes_tiempo_tipo_2_ILT.csv).

El siguiente cuadro es para la tarificación de ILT dependiendo de la fecha de diagnóstico.
![diabetes_tiempo_ILT][diabetes_tiempo_ILT]


### Recargos imc

### Recargos tensión arterial

### Recargos alcohol

### Recargos tabaco

### Recargos hemoglobina

### Recargos insulina

### Recargos colesterol


<!-- MISCELANEA -->

# Traducción

Las calculadoras de diabetes y de riesgos se pueden obtener en dos idiomas: inglés y castellano.
La calculadora de esperanza de vida no se ha traducido, ya que las tablas no corresponden a la población anglosajona. Por tanto, en la versión inglés, no aparece el resultado de la esperanza de vida.
Sobre un único código, la aplicación recoge una variable (key) desde la URL que transmite el lenguaje (ES o EN) que se aplicará a las distintas variables del documento HTML.
Es decir, existe un diccionario al que la aplicación consulta la traducción de una determinada variable.

- [Diccionario VidaNr](docs/vidaNR_dictionary.csv).
- [Diccionario Diabetes](docs/diabetes_dictionary.csv).

En catellano:
```bash
http://localhost:8080/?lang=ES

http://davinci.nacionalre.es/nacionalRe-vidaNr/build/?lang=es

```

En inglés:
```bash
http://localhost:8080/?lang=EN

http://davinci.nacionalre.es/nacionalRe-vidaNr/build/?lang=en
```


<p align="right">(<a href="#top">Subir</a>)</p>

# Licencia

Todos los derechos reservados.

Copyright 2022 Nacional de Reaseguros S.A. All Rights Reserved.


```bash
This project is Copyright (C) 2022 Nacional de Reaseguros S.A., all rights reserved.
```
<p align="right">(<a href="#top">Subir</a>)</p>


# Referencias
- Metodología para el cálculo de esperanzas de vida en salud. [Tabla de vida con múltiples decrementos](https://www.ine.es/daco/daco42/discapa/meto_evld.pdf).
- Boletín Oficial del Estado. [PASEM2010](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2012-9776).
- [Unespa, PASEM2010](https://www.unespa.es/main-files/uploads/2017/06/Tablas-mortalidad-PASEM2010.pdf)
- Ministerio de Asuntos Económicos y Transformación Digital, [Tablas biométricas sectoriales](http://www.dgsfp.mineco.es/es/Regulacion/DocumentosRegulacion/V2_Resolucio%CC%81n%20Tablas%20biome%CC%81tricas%20para%20firma%20v4%2020201216%20FINAL%20(002).pdf).


<p align="right">(<a href="#top">Subir</a>)</p>

# Contactos

- Equipo de **[Davinci](http://davinci.nacionalre.es/)** NacionalRe.
- Miguel Ángel Pinilla Lebrato: Responsable de Selección de Riesgos Nacional de Reaseguros S.A. <mpl@nacionalre.es>
- Juan Ignacio Rupérez: Reponsable de informática, NacionalRe. <jir@nacionalre.es>.
- Paloma Velasco Gómez: NacionalRe. <pvg@nacionalre.es>
- Eduardo Cruz: Project Manager, **[Visual Thinking, Comunicación y Creatividad](https://www.visualthinking.es/)**. <eduardo@visualthinking.es>.
- Juantxo Cruz: Web Development. **[juantxocruz.com](https://juantxocruz.com/)**. [@juantxocruz](https://twitter.com/juantxocruz). <jcruz16@gmail.com>

Project Link: [https://github.com/juantxocruz/webpack-diabetesNr](https://github.com/juantxocruz/webpack-diabetesNr)


<p align="right">(<a href="#top">Subir</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[formulario diabetesNr]: img/diabetesNR-form.png
[result diabetesNr]: img/diabetesNR-result.png
[diabetes_edad_vida]: img/diabetes_edad_vida.png
[diabetes_tiempo_vida]: img/diabetes_tiempo_vida.png
[diabetes_tiempo_ILT]: img/diabetes_tiempo_ILT.png



