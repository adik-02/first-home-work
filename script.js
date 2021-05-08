alert ('здраствуйте! здесь вы должны ввести имена и возраст своих 10 друзей ')
var user1a = prompt ('введите имя 1 друга ');
var user1b = +prompt ('введите его возраст');
var user2a = prompt ('введите имя 2 друга ');
var user2b = +prompt ('введите его возраст');
var user3a = prompt ('введите имя 3 друга ');
var user3b = +prompt ('введите его возраст');
var user4a = prompt ('введите имя 4 друга ');
var user4b = +prompt ('введите его возраст');
var user5a = prompt ('введите имя 5 друга ');
var user5b = +prompt ('введите его возраст');
var user6a = prompt ('введите имя 6 друга ');
var user6b = +prompt ('введите его возраст');
var user7a = prompt ('введите имя 7 друга ');
var user7b = +prompt ('введите его возраст');
var user8a = prompt ('введите имя 8 друга ');
var user8b = +prompt ('введите его возраст');
var user9a = prompt ('введите имя 9 друга ');
var user9b = +prompt ('введите его возраст');
var user10a = prompt ('введите имя 10 друга ');
var user10b = +prompt ('введите его возраст');
const users = {
  'user1':{
      name :( user1a),
      age : ( user1b)
  },
  'user2':{
      name :( user2a),
      age : ( user2b)
},
  'user3':{
      name :( user3a),
      age : ( user3b)
},
  'user4':{
    name :( user4a),
    age : ( user4b)
},
  'user5':{
    name :( user5a),
    age : ( user5b)
},
  'user6':{
    name :( user6a),
    age : ( user6b)
},
  'user7':{
    name :( user7a),
    age : ( user7b)
},
  'user8':{
    name :( user8a),
    age : ( user8b)
},
  'user9':{
    name :( user9a),
    age : ( user9b)
},
  'user10':{
    name :( user10a),
    age : ( user10b)
}
}
console.log('Вот ваш список друзей:');
for (const key in users) {
   console.log(users[key]);
    }
