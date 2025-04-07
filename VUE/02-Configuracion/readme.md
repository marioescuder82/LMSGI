## 2. Configuración del entorno de desarrollo

### 2.1. Instalación de Node.js y npm
- **Node.js**: Es un entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor. Es esencial para trabajar con VueJS y otros frameworks modernos.
  - **Descarga e instalación**:
    1. Visita la [página oficial de Node.js](https://nodejs.org/).
    2. Descarga la versión recomendada para tu sistema operativo (LTS).
    3. Sigue las instrucciones de instalación.
- **npm**: Es el gestor de paquetes de Node.js, que permite instalar y gestionar dependencias. Se instala automáticamente con Node.js.
  - **Verificación de instalación**:
    - Abre una terminal y ejecuta los siguientes comandos:
      ```bash
      node -v
      npm -v
      ```
    - Esto mostrará las versiones instaladas de Node.js y npm.

### 2.2. Creación de un proyecto
- Ejecuta los siguientes comandos en la terminal:
	```bash
	npm init vue@latest
	cd <your-project-name>
	npm install
	npm run dev
	```
  

### 2.3. Estructura de un proyecto VueJS
- **Estructura básica**: Al crear un nuevo proyecto, Vue CLI genera una serie de archivos y carpetas:
  - **`node_modules/`**: Contiene todas las dependencias del proyecto.
  - **`public/`**: Contiene el archivo `index.html` y otros recursos estáticos.
  - **`src/`**: Contiene el código fuente de la aplicación:
    - **`main.js`**: Punto de entrada de la aplicación.
    - **`App.vue`**: Componente raíz de la aplicación.
    - **`components/`**: Carpeta para almacenar componentes reutilizables.
  - **`package.json`**: Archivo que contiene metadatos sobre el proyecto y las dependencias utilizadas.
  - **`vite.config.js`**: Archivo de configuración opcional para personalizar la configuración del proyecto.
