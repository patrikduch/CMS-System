npm install typings --global
typings install --save mysql2

# SEQUELIZE QUERING

https://stackoverflow.com/questions/35445849/sequelize-findone-latest-entry

https://github.com/sequelize/sequelize/issues/7840

# MAX STRING DATA TYPE FOR SEQUELIZE

https://stackoverflow.com/questions/45937174/how-to-define-an-nvarcharmax-field-with-sequelize/45945889

# WORKING WITH MODELS

https://sequelize.org/master/manual/typescript.html
https://sequelize.org/master/manual/typescript.html
https://github.com/RobinBuschmann/sequelize-typescript-example

# DEBUGGER

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

# Promise

https://github.com/koajs/koa/issues/1305
https://github.com/koajs/koa/issues/1305

https://github.com/ZijianHe/koa-router/issues/257

# KOA

https://raygun.com/blog/koa-vs-express/

https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/

https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/

# KOA CORS

https://github.com/koajs/cors

# Sequelize

Je objektivně relační mapper (ORM). Jedná se o third party npm balíček.

static getInstance() {
return new Sequelize('bachelorproject', 'admin', '007kokot', {
dialect: 'mysql',
dialectModule: require('mysql2'),
host: '193.105.159.179'
});
}

# Migrace

inicializování migrací

sequelize init

vytvoření modelu

sequelize model:create --name ProjectDetail --attributes name:string

vytvoření nové migrace

sequelize migration:generate projectdetail --name initial-data2

Zahození poslední migrace
sequelize db:migrate:undo

Zahození všech migrací
sequelize db:migrate:undoall

https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

Řazení (order by)
https://github.com/sequelize/sequelize/issues/4553

Mazání v migracích
http://www.innovaedge.com/2015/11/04/bulk-insertbulk-delete-in-sequelize-migrations/

Joiny
https://stackoverflow.com/questions/30052254/sequelize-include-where-filtering-by-a-parent-model-attribute

Mazání / Přidávání attributů
https://stackoverflow.com/questions/46357533/how-to-add-delete-new-columns-in-sequelize-cli

# ŠIFROVÁNÍ

https://github.com/shaneGirish/bcrypt-nodejs/issues/80
https://stackoverflow.com/questions/29320201/error-installing-bcrypt-with-npm

# ZASÍLÁNÍ EMAILU

yarn add nodemailer nodemailer-sendgrid-transport

# KOMPILACNI PROBLEMY

Terser-webpack plugin

https://github.com/sidorares/node-mysql2/issues/1016

Can't find Python executable "python" after installing

npm install --global --production windows-build-tools

https://github.com/felixrieseberg/windows-build-tools/issues/56

"use strict";

module.exports = {
up: (queryInterface, Sequelize) => {
return Promise.all([
queryInterface.addColumn(
{ tableName: "Feature" },

        "moduleId",
        {
          type: Sequelize.INTEGER,
          references: {
            model: "Module",
            key: "id"
          }
        }
      )
    ]);

},

down: (queryInterface, Sequelize) => {
/_ Reverting commands _/

    return Promise.all([
      queryInterface.removeColumn(
        "Feature", // name of Source model
        "moduleId" // key we want to remove
      )
    ]);

}
};
'

# GENERIC REPOSITORY

https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/

# API DOC

npm i apidoc

https://www.npmjs.com/package/apidoc

https://www.webpagetest.org/result/200113_0A_7ba17e03c7504247460a17fe57927e99/

# UNIT TESTY

https://stackoverflow.com/questions/54139158/cannot-find-name-describe-do-you-need-to-install-type-definitions-for-a-test

# TEST-COVERAGE

nyc
https://www.npmjs.com/package/nyc

# IMG UPLOADS

https://github.com/aheckmann/gm/issues/455
