// // fetch('/json/data.json')
//     .then((response) => response.json())
//     .then((items) => {
//         console.log(items);
//         let project1 = items[0]
//     })

fetch('data.json')
.then(function (response) {
  return response.json();
})
.then(function(data) {
  console.log(data)

 let p1Heading = document.getElementById('p1heading')
 p1Heading.innerHTML = data[0].name
 let p1Image = document.getElementById('p1image')
 p1Image.src = data[0].img
 let p1Desc = document.getElementById('p1desc')
 p1Desc.innerHTML = data[0].desc

 let p2Heading = document.getElementById('p2heading')
 p2Heading.innerHTML = data[1].name
 let p2Image = document.getElementById('p2image')
 p2Image.src = data[1].img
 let p2Desc = document.getElementById('p2desc')
 p2Desc.innerHTML = data[1].desc

 let p3Heading = document.getElementById('p3heading')
 p3Heading.innerHTML = data[2].name
 let p3Image = document.getElementById('p3image')
 p3Image.src = data[2].img
 let p3Desc = document.getElementById('p3desc')
 p3Desc.innerHTML = data[2].desc
});

const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const contactForm = document.getElementById("contactForm");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.style.display = "none";
});


// darkmodebutton.addEventListener('click', () => {
//   const nav = document.querySelector('nav')
//   nav.style.backgroundColor = 'black';
//   nav.style.color = 'white';
//   const navlogo = document.getElementById('navlogo');
//   navlogo.style.color = 'white';
//   const navlink1 = document.getElementById('navlink1');
//   navlink1.style.color = 'white';
//   const navlink2 = document.getElementById('navlink2');
//   navlink2.style.color = 'white';
//   const navlink3 = document.getElementById('navlink3');
//   navlink3.style.color = 'white';
//   const navlink4 = document.getElementById('navlink4');
//   navlink4.style.color = 'white';

//   const homemaincontent = document.getElementById('homemaincontent');
//   homemaincontent.style.backgroundColor = '#808080';
//   const hometext = document.getElementById('hometext')
//   hometext.style.color = 'white';

//   const body = document.querySelector('body');
//   body.style.backgroundColor = '#444444';
//   const abouttitle = document.getElementById('abouttitle');
//   abouttitle.style.color = 'white';
//   const aboutmaintext = document.getElementById('aboutmaintext');
//   aboutmaintext.style.color = 'white';

//   const projects = document.getElementById('projects')
//   projects.style.backgroundColor = '#a9a9a9'
//   const projectstitle = document.getElementById('projectstitle');
//   projectstitle.style.color = 'white';

//   const project1 = document.getElementById('project1')
//   project1.style.backgroundColor = '#444444'
//   project1.style.color = 'white'

//   const project2 = document.getElementById('project2')
//   project2.style.backgroundColor = '#444444'
//   project2.style.color = 'white'

//   const project3 = document.getElementById('project3')
//   project3.style.backgroundColor = '#444444'
//   project3.style.color = 'white';

//   const contactcontainer = document.getElementById('contactcontainer');
//   contactcontainer.style.backgroundColor = '#808080';
//   contactcontainer.style.color = 'white';

//   const foot = getElementById('foot')
//   foot.style.backgroundColor = 'white'

//   darkmodebutton.style.css = 'white'
//   lightmodebutton.style.css = 'white'
// })

//   lightmodebutton.addEventListener('click', () => {
//   const nav = document.querySelector('nav')
//   nav.style.backgroundColor = 'white';
//   nav.style.color = 'black';
//   const navlogo = document.getElementById('navlogo');
//   navlogo.style.color = 'black';
//   const navlink1 = document.getElementById('navlink1');
//   navlink1.style.color = 'black';
//   const navlink2 = document.getElementById('navlink2');
//   navlink2.style.color = 'black';
//   const navlink3 = document.getElementById('navlink3');
//   navlink3.style.color = 'black';
//   const navlink4 = document.getElementById('navlink4');
//   navlink4.style.color = 'black';

//   const homemaincontent = document.getElementById('homemaincontent');
//   homemaincontent.style.backgroundColor = '#f5f4f4;';
//   const hometext = document.getElementById('hometext')
//   hometext.style.color = 'black';

//   const body = document.querySelector('body');
//   body.style.backgroundColor = '#white';
//   const abouttitle = document.getElementById('abouttitle');
//   abouttitle.style.color = 'black';
//   const aboutmaintext = document.getElementById('aboutmaintext');
//   aboutmaintext.style.color = 'black';

//   const projects = document.getElementById('projects')
//   projects.style.backgroundColor = '#a9a9a9'
//   const projectstitle = document.getElementById('projectstitle');
//   projectstitle.style.color = 'black';

//   const project1 = document.getElementById('project1')
//   project1.style.backgroundColor = '#444444'
//   project1.style.color = 'white'

//   const project2 = document.getElementById('project2')
//   project2.style.backgroundColor = '#444444'
//   project2.style.color = 'white'

//   const project3 = document.getElementById('project3')
//   project3.style.backgroundColor = '#444444'
//   project3.style.color = 'white';

//   const contactcontainer = document.getElementById('contactcontainer');
//   contactcontainer.style.backgroundColor = '#808080';
//   contactcontainer.style.color = 'white';

//   const foot = getElementById('foot')
//   foot.style.backgroundColor = 'white'
// })



