
# RegEx Viewer

Aplicacion que sirve para visualizar y probar expresiones regulares, puedes utilizar todos los caracteres y flags, con visualizacion de coincidencias al momento.


## Instalacion e inicio

Para instalar todas las dependencias e iniciar el servidor escribe los siguientes comandos:

```bash
  npm install
  npx expo start
```
## Uso

En la aplicacion se encuentran tres inputs

- Regular Expression: Tu expresion regular a testear.

- Flags: Flags especificas para la expresion

- Text: La cadena de texto en la que se probara la expresion regular.

Simplemente modifique los campos de acuerdo a su preferencia.

## Principales librerias

```bash
  react-navigation
```
Libreria de navegacion.


```bash
  expo-file-system
```
Libreria para poder descargar y guardar archivos de manera local.

```bash
  zustand
```
Libreria que se encarga del manejo global de datos entre archivos.
## Arquitectura

Se empleo una arquitectura CLEAN + MVVM + Feature First + Atomic Design, en donde se divide por features o funcionalidades, y dentro de estos, se realiza un CLEAN + MVVM.

```bash
  features/
  └── visualizer/
       ├── data/
       │     └── models/
       ├── domain/
       │     └── usecases/
       ├── presentation/
       │     ├── atoms/
       │     ├── molecules/
       │     ├── organisms/
       │     ├── screens/
       │     └── viewmodels/
```
## Autor

Proyecto hecho por:

- Daniel Chi

Para la materia:

- Certificación en Software