
## E-Commerce Backend Application

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up
* The following shows the API Get routes for categories . products and tags with in Insomnia.

![Screenshot 2022-03-26 004006](https://user-images.githubusercontent.com/94930434/160217736-e32b0531-975a-4153-92d6-43f101dcbe27.png)
![Screenshot 2022-03-26 004044](https://user-images.githubusercontent.com/94930434/160217737-ec2dcb6d-92b6-4f45-a6f4-d88411319165.png)
![Screenshot 2022-03-26 003916](https://user-images.githubusercontent.com/94930434/160217738-7f2ec7eb-e798-4daf-adcb-6e32f527024e.png)
# Demo Link 
 Walkthrough video  : https://youtu.be/PbPplBWGuRU
# Installation

```md

1- Clone the Repository.
2- Create a file name ".env" to the root folder.
3- Add to ".env" file DB_NAME='database name' , DB_USER='your username' , DB_PW='your password'.
4- Run npm install in the terminal.
5- Run npm run seed.
6- Run Node your server file name .js.
```

# Contact 

Email - hassanmahdi58@gmail.com
Github - https://github.com/hassanmahdi58

