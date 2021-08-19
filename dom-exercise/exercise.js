// Element Manipulation
//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
const judul = document.getElementById('judul');
judul.innerHTML = 'COHORT 1 DOJOBOX'
judul.style.color = 'blue';



//element.style.<property> --> mengubah style dari elemen yang dipilih.
const sectionA = document.getElementById('a');
sectionA.style.background = 'black';

const par1 = document.getElementsByClassName('p1')[0];
par1.style.color = 'white';
const par2 = document.getElementsByClassName('p2')[0];
par2.style.color = 'white';
const par3 = document.getElementsByClassName('p3')[0];
par3.style.color = 'yellow';





