front-end Angular in https://github.com/gilmaresende/cursos-angular/tree/master/Meteus%20Battisti%20-%20Curso%20Angular%2013/moments

npm init adonis-ts-app@latest .

#lucid seria o JPA
npm i @adonisjs/lucid

#configurar lucid
node ace configure @adonisjs/lucid

#criar Models, Moment is the name of modal
node ace make:model Moment -m

#criar cntroller
node ace make:controller Moment

#update database com models
node ace migration:run

#gerador de id?
npm i uuid

#rodar projeto
node ace serve
