# 📘 README - Proyecto React: Página Personal y Restaurante

## 🧠 Introducción

React es una biblioteca de JavaScript creada por Facebook que facilita la construcción de interfaces de usuario interactivas. 

Es una herramienta de código abierto muy utilizada en el desarrollo de aplicaciones web modernas gracias a su eficiencia, flexibilidad y componentes reutilizables.

## 🎯 Objetivos del Proyecto

Este proyecto tiene como propósito:

✅ Comprender cómo desarrollar una aplicación utilizando React y React Router.

✅ Mejorar las habilidades de desarrollo web enfocándose en la interacción con formularios y almacenamiento local (localStorage).

✅ Fortalecer la lógica con JavaScript moderno.

✅ Aplicar validaciones personalizadas y trabajar en el diseño visual sin librerías externas.

## 🧩 Página Personal

✔️ Componente: Contact

Formulario para recoger datos como:

- Nombre (mínimo 3 caracteres)

- Correo electrónico

- Mensaje

Validación activa del campo nombre.

Los datos se almacenan en localStorage.

Redirecciona automáticamente a la página principal tras enviar el formulario.

🔗 Navegación con React Router

Enlace a:

- 🏠 Home

- 📬 Contact

- 💬 Componente adicional: About

## 🍽️ Página de Restaurante

✔️ Componente: Reserve

Formulario para reservas con los siguientes campos:

- Nombre (mínimo 3 caracteres)

- Fecha (no puede ser anterior al día actual)

- Hora (entre 10:00 y 22:00)

- Número de personas (entre 1 y 20)

Almacena los datos en localStorage.

Redirecciona automáticamente a Home.

🔗 Navegación con React Router

Enlace a:

- 🏠 Home

- 🍽️ Reserve

- 💬 Componente adicional: About

## 🌟 Extras Implementados

- 🎨 Mejora de diseño usando CSS puro (sin frameworks como Tailwind o Bootstrap).

- ✅ Validaciones en todos los formularios para evitar datos incorrectos o incompletos.

- 🔁 Navegación fluida entre vistas usando React Router.

## 🚀 Tecnologías Usadas

- React

- React Router DOM

- JavaScript (ES6+)

- HTML + CSS

- localStorage