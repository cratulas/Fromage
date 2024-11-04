# Fromage - Aplicación de Gestión de Quesos 🧀

Fromage es una aplicación web para la compra y administración de quesos de alta calidad. Esta aplicación incluye funcionalidades como registro de usuarios, carrito de compras, tracking de órdenes, modificación de perfil y administración de usuarios para un administrador.

---

## 🚀 Cómo Utilizar la Aplicación

1. **Clonar el repositorio**: Descarga o clona el repositorio de la aplicación.

2. **Abrir la aplicación**: Abre el archivo `index.html` en tu navegador. Asegúrate de que todos los archivos JavaScript y CSS necesarios se encuentren en las carpetas `js` y `css` respectivamente.

3. **Interfaz principal**:
   - La página principal muestra una selección de quesos y un botón para explorar la tienda.
   - Puedes registrarte o iniciar sesión con los usuarios predefinidos (detallados abajo) para acceder a funcionalidades personalizadas.

---

## 📋 Funcionalidades Principales

1. **Registro e Inicio de Sesión**:
   - Regístrate como un usuario nuevo o utiliza uno de los usuarios predefinidos.
   - Una vez autenticado, podrás ver contenido específico según tu rol (usuario o administrador).

2. **Tienda de Quesos** 🛒:
   - Explora una selección de quesos.
   - Agrega productos al carrito y visualiza el total de la compra.
   - Solo los usuarios logueados pueden agregar productos al carrito.

3. **Tracking de Órdenes** 📦:
   - Accede a la página de seguimiento para ver las órdenes.
   - Los administradores pueden ver todas las órdenes; los usuarios normales solo ven sus propias órdenes.
   - Cada orden puede visualizarse con un estado de "En preparación".

4. **Modificación de Perfil** 👤:
   - Los usuarios pueden modificar su información personal, como nombre, correo y contraseña.
   - La contraseña debe cumplir con ciertos criterios de seguridad (8 caracteres, una letra mayúscula, un número y un carácter especial).

5. **Recuperación de Contraseña** 🔑:
   - Ingresa tu correo para recibir instrucciones de recuperación.

6. **Panel de Administrador** 🛠️:
   - Los administradores tienen acceso a un panel especial para gestionar el contenido y las estadísticas de la tienda.

---

## 👤 Usuarios Predefinidos

Para facilitar las pruebas, la aplicación incluye los siguientes usuarios:

- **Administrador**:
  - **Correo**: `admin@example.com`
  - **Contraseña**: `admin123`
  - **Rol**: Administrador

- **Usuario Regular**:
  - **Correo**: `usuario@example.com`
  - **Contraseña**: `usuario123`
  - **Rol**: Usuario

Inicia sesión con alguno de estos usuarios para probar las funcionalidades y el acceso basado en roles.

---

## ⚙️ Tecnologías Utilizadas

- **HTML**: Estructura principal de la aplicación.
- **CSS**: Estilos personalizados y responsivos.
- **JavaScript**: Funcionalidad de la aplicación, uso de `localStorage` para almacenar datos de usuario y órdenes.
- **Bootstrap**: Framework CSS para diseño responsivo y estilizado de componentes.

---

## 📝 Notas Adicionales

- **Almacenamiento de Datos**: La aplicación usa `localStorage` para almacenar datos de usuario y órdenes de manera temporal.
- **Requisitos de Contraseña**: Al modificar la contraseña, asegúrate de que cumple con los criterios de seguridad (mínimo 8 caracteres, una letra mayúscula, un número y un carácter especial).

---

## 📧 Soporte

Para cualquier duda o comentario, contáctanos a soporte@fromage.com.

**¡Gracias por probar Fromage!** 🧀
