# Instalación y configuración de MySQL

## 1. Instalación MySQL Server

### 1.1 Instalación en Ubuntu

#### 1.1.1 Actualizar paquetes disponibles

Abrir un terminal y ejecutar:

```shell script
sudo apt update
```

Nos solicitará la contraseña de nuestro usuario de Linux, y se la proporcionaremos

```shell script
[sudo] contraseña para nombre-de-usuario:
```

El sistema descargará una lista de ficheros de internet, cuando termine nos mostrará
`Leyendo lista de paquetes... Hecho` y nos dejará escribir de nuevo en el terminal.

A continuación actualizamos los paquetes instalados

```shell script
sudo apt upgrade
```

#### 1.1.2 Instalar MySQL Server

Desde un terminal ejecutamos

```shell script
sudo apt install mysql-server
```

El sistema comprobará qué ficheros debe descargarse de internet y nos pedirá que le confirmemos que deseamos instalarlo

```shell script
Se utilizarán 242 MB de espacio de disco adicional después de esta operación.
¿Desea continuar? [S/n] S
```

Pulsamos **S** para indicarle que si.  
Se descargará los ficheros de internet y los instalará.  
Cuando termine nos permitirá escribir de nuevo en el terminal.

### 1.2 Instalación en MacOS

Primero debemos instalar [Homebrew](https://brew.sh/) abriendo un terminal y ejecutando

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

El comando anterior es todo en una sola línea.

Después de tenerlo instalado ejecutamos los siguientes comandos por orden esperando que acabe el anterior:

```shell
brew install mysql
brew tap postinstall mysql
brew services start mysql
```

### 1.3 Instalación en Windows

Buscar en google `mysql download windows`
Descargamos el archivo grande para no depender de internet en el momento de la instalación
Una vez descargado procedemos a la instalación, click boton derecho y `Ejecutar como administrador`
En `Choosing a Setup Type`escogemos el tipo de instalación `Developer Default` y damos`Next`.
En `Check Requirements` damos`Execute`. A medida que va avanzando nos abrirá otras ventanas de instalación donde debemos `Aceptar las condiciones` y le damos a `Install`.
Puede ser que se quede sin instalar `MySQL for Visual Studio` y `Connector/Python`, aun así le damos a `Next`
Se nos abrirá una ventana de `MySQL Installer` avisando de los que antes no se instalaron y le damos a `Yes`.

En `Installation` le damos a `Execute`, cuando haya acabado y tenga todos los check en verde, le damos a `Next`.
En `Product Configuration`debe salir todo como`Ready to configure`y damos`Next`
En`Type and Networking`no tocamos nada y damos`Next`.
En`Authentication Method`marcamos`Use legacy Authentication Method(retain MySQL 5.x Compatibility)`y damos`Next`.
En`Accounts and Roles`le ponemos`root`como contraseña del usuario`root` y damos`Next`.
En`Windows Service` damos`Next`.
En `Sever File Permissions` damos`Next`.
En `Apply Configuration` damos `Execute` y cuando esté todo listo `Finish`.

Sale de nuevo `Product Configuration` y damos`Next`.
En `MySQL Router Configuration` damos`Finish`.

Vuelve a salir `Product Configuration` y damos`Next`.
En `Connect To Server` aparece marcado algo parecido a `MySQL Server 8.0.32`. Tenemos que poner `root` en `User name` y `root` en `Password`, le damos a `Check` y nos debería aparecer en verde `Connection succeeded` al lado de `MySQL Server 8.0.32` y damos`Next`.
En `Apply Configuration` damos `Execute` y cuando esté todo listo `Finish`.

Otra vez `Product Configuration` y damos`Next`.
En `Installation Complete` dejamos marcado `Start MySQL Workbench after setup` y `Start MySQL Shell after setup` y damos `Finish`

En la ventana de `MySQL Workbench` que nos abre saltamos al paso `3.2 Configuración de la conexión a la base de datos` de este documento.

### 1.4 Comprobar que se ha instalado. Estado y versión

#### 1.4.1 Comprobar estado del servicio

Para comprobar que el servicio de MySQL está en ejecución ejecutaremos:

```shell script
  sudo service mysql status
```

Si estamos en una terminal nueva nos pedirá la contraseña de nuestro usuario del sistema operativo para tener permisos de administrador, la introducimos y pulsamos intro.

Debería mostrar algo similar a:

```shell script
● mysql.service - MySQL Community Server
     Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2021-01-12 12:00:00 CET; 1min 30s ago
   Main PID: 1234 (mysqld)
     Status: "Server is operational"
      Tasks: 38 (limit: 2281)
     Memory: 1.1G
     CGroup: /system.slice/mysql.service
             └─1234 /usr/sbin/mysqld
```

Para salir de la visualización de estado pulsaremos `q`.

#### 1.4.2 Comprobar versión

En una terminal ejecutaremos

```shell script
mysql --version
```

Si el proceso de instalación ha ido bien se debería mostrar una línea similar a:

```shell script
mysql Ver 8.0.22-0ubuntu0.20.10.2 for Linux on x86_64 ((Ubuntu))
```

Si no da error todo va bien.

### 1.5 Cambiar la contraseña del usuario root (NO OBLIGATORIO EN WINDOWS)

MySQL tiene un usuario de administración que se llama `root`.  
Lo primero que vamos a hacer es asignarle como contraseña `root`

```shell script
sudo mysql -u root -p
```

Si estamos en una terminal nueva nos pedirá la contraseña de nuestro usuario del sistema operativo para tener permisos de administrador, la introducimos y pulsamos intro.

Se ejecuta el comando y nos pedirá la contraseña del usuario `root`.

Windows, tienen que poner la contraseña que puso durante la instalación.
Linux y Mac, dan `Enter` porque durante la instalación no se puso ninguna contraseña al usuario `root`.

Ya estais dentro del servidor de `mysql`
Ahora ejecutais este comando

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'root';
```

Os debería responder algo como esto:

```sql
Query OK, 0 rows affected (0,02 sec)
```

Escribis `exit`, ejecutais y estais fuera de `mysql`

### 1.6 Establecer configuración de seguridad inicial(NO WINDOWS)

Este comando nos abrirá un asistente para configurar la seguridad de MySQL.
Lo que hace es desactivar el acceso remoto al usuario `root`, eliminar la base de datos de test y desactivar el acceso anónimo.

En un terminal ejecutar

```shell script
sudo mysql_secure_installation
```

Si estamos en una terminal nueva nos pedirá la contraseña de nuestro usuario del sistema operativo para tener permisos de administrador, la introducimos y pulsamos intro.

Os pide la contraseña del usuario`root`, hemos puesto root.

```shell script
Securing the MySQL server deployment.

Enter password for user root:
```

Nos pregunta si queremos instalar el plugin de validación de contraseñas, le decimos que no y pulsamos `Enter`. Decimos que no para poder usar una contraseña sencilla. En un entorno real debería activarse.

```shell script
VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: n
```

Acto seguido nos preguntará si deseamos cambiar la contraseña del usuario `root`.
Linux y Mac, le decimos que si y le ponemos de contraseña `root`.
Windows, le decimos que no.

```shell script
Using existing password for root.
Change the password for root ? ((Press y|Y for Yes, any other key for No) :
```

Finalmente nos relizará unas preguntas sobre seguridad, le diremos a todo que si: `y`

```shell script
Remove anonymous users: y
Disallow root login remotely: y
Remove test database and access to it: y
Reload privilege tables now: y
```

Al finalizar el asistente se mostrará por pantalla `All done!` y nos devolverá al terminal.

## 2. Permisos de acceso (DESDE TERMINAL o WORKBENCH)

En esta sección estableceremos los permisos de acceso para dos usuarios:

- `root` cuya contraseña será `root`
- Crearemos un nuevo usuario `demo`, cuya contraseña será `password`.

Con el usuario `demo` es con el que haremos las prácticas.

### 2.1 Permisos de acceso para root

Desde un terminal ejecutar:

```shell script
sudo mysql -u root -p
```

Os pedirá una password que es 'root', la que pusisteis en el paso anterior.

Si todo va bien tanto en Linux como en Mac se abrirá una _consola de MySQL_, lo sabemos porque la línea comieza por `mysql>`.

En la consola de MySQL las sentencias terminan con `;`  
Si dejamos una sentencia a medio escribir y pulsamos intro mysql no sabe que la sentencia ha terminado.
Siempre hay que poner el `;` para que mysql ejecute el código.  
Cuando MySQL ejecuta una sentencia siempre indica el resultado de la misma, nosotros nos fijaremos en que
ponga `Query OK`, independientemente del número de tuplas que se hayan visto involucradas.

Esto abrirá un _bash_ SQL, ahí ejecutar(la primera linea solo si se quiere cambiar el password de `root`):

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
```

```sql
FLUSH PRIVILEGES;
```

En ambos casos nos debería de responder algo como esto:

```sql
Query OK, 0 rows affected (0,02 sec)
```

Ya hemos terminado de ejecutar sentencias de MySQL, para salir escribiremos `exit`

Para finalizar comprobamos que podemos acceder a MySQL con el usuario root, escribiremos:

```shell
mysql -u root -p
```

Nos pedirá la contraseña y si todo ha ido bien entrará en la consola de MySQL.
Escribiremos `exit` para salir.

```sql
mysql> exit
Bye
```

### 2.2 Crear el usuario 'demo'

Desde un terminal accederemos con el usuario `root` (Su contraseña es `root`):

```shell script
mysql -u root -p
```

Desde la consola de MySQL ejecutaremos las siguientes sentencias:

```sql
CREATE USER 'demo'@'localhost' IDENTIFIED BY 'password';
```

```sql
GRANT ALL PRIVILEGES ON *.* TO 'demo'@'localhost';
```

```sql
FLUSH PRIVILEGES;
```

Ya hemos terminado de ejecutar sentencias de MySQL, para salir escribiremos `exit`

Finalmente comprobaremos que nuestro usuario `demo` se puede conectar.

```shell
mysql -u demo -p
```

Y si todo ha ido bien entrará en la consola de MySQL.
Escribiremos `exit` para salir.

```mysql-sql
mysql> exit
Bye
```

## 3. MySQL Workbench (NO WINDOWS)

Instalaremos y configuraremos el cliente de MySQL

### 3.1 Instalación de MySQL Workbench

Para instalar MySQL Workbench vamos a la librería de software de ubuntu "Ubuntu Software" que podemos encontrar en nuestras aplicaciones y buscamos la aplicación escribiendo en el buscador "workbench". La instalamos y después de instalada pulsamos en el botón permisos y marcamos que tenga permisos para leer y guardar contraseñas.

También podemos instalar la aplicación desde terminal usando estes dos comandos:

```shell
sudo snap install mysql-workbench-community
sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service
```

### 3.2 Configuración de la conexión a la base de datos

Iremos desde, el escritorio de Linux, a: `Aplicaciones`, Seleccionaremos `Todas` (en las parte de abajo),
y pulsaremos sobre `MySQL Workbench`. Esto abrirá una aplicación de escritorio.

Boton derecho sobre `Locale instance 3306` y click en `Edit Connection`, se podría cambiar el `Connection Name` y guardar la `Password` haciendo click en `Store in Keychain`. Si aqui da un error seguimos los pasos del archivo `AppArmorError.md`

Si queremos añadir una instancia para otro usuario, pulsaremos en el `+` que está a la derecha de `MySQL Connections` y cubriremos con los siguientes datos

```shell
Conection name: Example
Hostname: 127.0.0.1
Port: 3306
User: demo
Password: (pulsamos en el botón Store in Keychain y la introducimos)
```

Finalmente pulsaremos sobre `Test connection`. y si todo ha ido bien se mostrará una ventana emergente que pondrá `Successfully made the MySQL connection`

## 4. Desinstalar

En caso de que queramos eliminar MySQL:

```shell
sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
sudo apt-get autoremove -y
sudo apt-get autoclean

sudo rm -rf /etc/mysql
sudo rm -rf /var/lib/mysql
```

**CUIDADO:** No ejecutar si no se está seguro  
En ocasiones pueden quedar ficheros relacionados con MySQL después de la desinstalación.  
Con el siguiente comando localizaremos cualquier fichero que comience por `mysql`.  
**OJO:** ¡Puede haber ficheros que usan otras aplicaciones que comiencen por mysql!

```shell
sudo find / -iname 'mysql*'
```

**PELIGRO:** Sólo ejecutar si realmente estamos seguros de lo que hacemos.  
Con esta sentencia eliminamos todos los resultados anteriores.
Nota: Si solamente queremos borrar unos ficheros en particular tendremos que eliminarlos manualmente.

```shell
sudo find / -iname 'mysql*' -exec rm -rf {} \;
```

## 5. Instalar Postman

Ir al enlace `https://learning.postman.com/docs/getting-started/installation-and-updates/`

## 6. Instalar yEd Graph Editor

### 6.1 Descargar el instalador

Ir al enlace `https://www.yworks.com/products/yed/download#download`

### 6.2 Instalar

En Linux, una vez descargado le vamos a dar permisos de ejecución al archivo con:

```shell
chmod +x yEd-3.23.1_with-JRE15_64-bit_setup.sh
```

Para instalarlo para todos los usuarios ejecutamos:

```shell
sudo ./yEd-3.23.1_with-JRE15_64-bit_setup.sh
```

Le damos `Next` hasta el final
