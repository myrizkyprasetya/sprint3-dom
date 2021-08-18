// Element Manipulation
//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
const judul = document.getElementById('judul');
judul.innerHTML = 'MYRP.id'

//element.style.<property> --> mengubah syle dari elemen yang dipilih.
const par1 = document.getElementById('p1');
par1.style.color = 'red';
judul.style.color = 'orange';

//element.setAttribute() --> menambahkan attribute pada HTML.
const jojo = document.querySelector('#b ul li:nth-child(1)');
jojo.setAttribute('id', 'jojo');

const mentor = document.querySelector('#b p');
mentor.setAttribute('href', 'http://facebook.com');

//element.classList --> memanipulasi kelas

//classList.add() --> menambah kelas baru
jojo.classList.add('jojo');

//classList.remove() --> menghilangkan kelas yang ada
jojo.classList.remove('jojo');

//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
// jojo.classList.toggle('jojo');
//classList.contains() --> mengetahui kelas tertentu.
// const cek = jojo.classList.contains('abcddd');
//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.

// Node Manipulation
//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()