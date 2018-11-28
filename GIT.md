## Hands On 1

0. Configurar git (global)

$ git config --global user.email "TU CORREO ELECTRONICO"
$ git config --global user.name "TU NOMBRE"

1. Crear un nuevo repositorio git

$ git init

2. Primer commit

$ git add .
$ git commit -m 'First commit'

3. Ver cambios actuales

$ # Luego de cambiar el archivo app/views/issues/index.html
$ git status
$ git diff

4. Agregar un nuevo cambio

$ # Luego de cambiar un archivo
$ git add app/views/issues/index.html
$ git commit -m 'Chage issues page title'

5. Ver versiones anteriores

$ # Ver todas las versiones
$ git log

$ # Ver todas las versiones y los cambios en los archivos
$ git log -p

## Hands On 2

1. Crear un "branch" para una nueva funcionalidad

$ git branch change-title
$ git checkout change-title

2. Cambio un archivo y creo un commit

$ # Luego de cambiar un archivo
$ git add app/views/issues/index.html
$ git commit -m 'Chage issues page title'

2. Ver versiones actuales

$ git log

3. Vuelvo al branch principal, "master" y no veo el cambio

$ git checkout master
$ git log

4. Combinar cambios de un branch en "master"

$ git merge change-title
$ git log

## Pull / Push

$ # Get changes from github (for master branch)
$ git pull origin master

$ # Send our changes to github (for foo branch)
$ git push origin foo
