
//#abc > span + div.ccc > h1.a.b.c      - это CSS селектор(выборка типа)

//special.innerHTML = 'sassa';

//let special = document.getElementById('special');
//console.dir(special);

/*
let special = document.getElementsByTagName('p');


for(let i = 0; i < special.length; i++){
special[i].classList.add('alert');
special[i].classList.add('alert-success');
};



console.dir(special);
*/

/* один
let tag = document.querySelector('#special + p');

tag.innerHTML = 'Hello';
*/

/* ВСЕ!!!

let tag = document.querySelectorAll('p');

tag.innerHTML = 'Hello';

*/
/*
let live = document.getElementsByTagName('p');
let static = document.querySelectorAll('p');
console.log(live);
console.log(static);
special.remove();
console.log(live);
console.log(static);
*/
/*
setTimeout(()=>{
let tag = special;
    special.remove();
console.dir(tag);},
2000)
*/
/*  создание и добавление в DOM нового тега, но это устарело
let newTag = document.createElement('p');
newTag.innerHTML = 'Hello world';
newTag.classList.add('alert');
newTag.classList.add('alert-danger');
let parent = document.querySelector('#column-one');
parent.appendChild(newTag);
*/
/*
let newTag = document.createElement('p');
newTag.innerHTML = 'Hello world';
newTag.classList.add('alert');
newTag.classList.add('alert-danger');
let h4 = document.querySelector('#column-one > h4');
h4.insertAdjacentElement('afterend', newTag);
*/



let users = ['Ivan', 'Elena', 'Olga'];
let h4 = document.querySelector('#column-two > h4');
/*
users = users.map( item =>{
    h4.insertAdjacentHTML('afterend', `<p class="alert 
        alert-info">
        Hello ${item}
        </p>`); 
})
*/
/*  или
users.forEach(item => {
h4.insertAdjacentHTML('afterend', `<p class="alert 
        alert-info">
        Hello ${item}
        </p>`); 
});
*/
/****  ЭТО НЕ РАБОТАЕТ
users = users.map( item =>{
    h4.insertAdjacentHTML('afterend', `<p class="alert 
        alert-info">
        Hello ${item}
        </p>`); 
});
users = users.join('');
h4.insertAdjacentHTML('afterend', users);
*/
