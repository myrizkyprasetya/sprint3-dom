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
// jojo.classList.add('jojo');

//classList.remove() --> menghilangkan kelas yang ada
// jojo.classList.remove('jojo');

//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
jojo.classList.toggle('jojo');

//classList.contains() --> mengetahui kelas tertentu.
// const cek = jojo.classList.contains('abcddd');

//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.
jojo.classList.replace('jojo', 'yippii');



// Node Manipulation
//document.createElement()
//document.createTextNode()
//node.appendChild() --> disimpan diakhir parent
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()

//untuk menambahkan paragraph baru dengan membuat elemen dulu
const pBaru = document.createElement('p');
//membuat tulisan
const tulisan = document.createTextNode('ini paragraf baru');
//simpan tulisan ke paragraph
//node.appendChild()
pBaru.appendChild(tulisan);
//cara menampilkan ke document adalah dengan menambahkan pBaru ke sectionA
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



//Contoh untuk menambahkan list baru ditengah-tengah
const listBaru = document.createElement('li');
const isiList = document.createTextNode('Yasifa');

listBaru.appendChild(isiList);

const tempatList = document.querySelector('#b ul');

const listAlif = tempatList.querySelector('li:nth-child(2)');

tempatList.insertBefore(listBaru, listAlif);

//menghapus element
//define dulu elementnya
const hapusElement = document.getElementsByTagName('a')[0];
//perintah menghapus element
sectionA.removeChild(hapusElement);


//cara mereplace element
//buat element baru berupa h2
const h2 = document.createElement('h2');
//buat node text ke h2
const tulisanH2 = document.createTextNode('Para Mentor');
//gabungkan node text ke h2
h2.appendChild(tulisanH2);
//element yg akan kita replace di define dulu
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
//perintah replace element
sectionB.replaceChild(h2, p4);