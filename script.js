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

