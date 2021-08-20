//events handler
const p3 = document.getElementsByClassName('p3')[0];

function ubahWarna(){
    p3.style.backgroundColor='orange'
}

p3.onclick = ubahWarna;

const p1 = document.getElementsByClassName('p1')[0];

function ubahFont(){
    p1.style.fontFamily='calibri'
}

p1.onclick = ubahFont;

//addEventListener()

const p4 = document.querySelector('#b p');

p4.addEventListener('click', 
    function(){
        const pBaru = document.createElement('p');
        //membuat tulisan
        const tulisan = document.createTextNode('ini paragraf baru');
        //simpan tulisan ke paragraph
        //node.appendChild()
        pBaru.appendChild(tulisan);
        //cara menampilkan ke document adalah dengan menambahkan pBaru ke sectionA
        const sectionA = document.getElementById('b');
        sectionA.appendChild(pBaru);
    }
)

const button = document.querySelector('#c button');

button.addEventListener('click',
    function(){
        const ubahWarnaContainer = document.getElementById('container');
        ubahWarnaContainer.style.backgroundColor = 'blue';
        const bgSection = document.querySelector('#container section');
        bgSection.style.backgroundColor = 'white';
    }
)

