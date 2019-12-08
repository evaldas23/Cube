

document.querySelector('.home').addEventListener('click', () => {
  cubes = document.querySelectorAll('.cube');

Array.from(cubes).forEach(cube => cube.style.transform = 'rotateY(90deg)') //transform nodeList to array
})

document.querySelector('.aboutUs').addEventListener('click', () => {
   cubes = document.querySelectorAll('.cube');

  Array.from(cubes).forEach(cube => cube.style.transform = 'rotateY(180deg)')
})

document.querySelector('.ourTeam').addEventListener('click', () => {
  cubes = document.querySelectorAll('.cube');

  Array.from(cubes).forEach(cube => cube.style.transform = 'rotateY(270deg)')
})

document.querySelector('.services').addEventListener('click', () => {
  cubes = document.querySelectorAll('.cube');

  Array.from(cubes).forEach(cube => cube.style.transform = 'rotateY(360deg)')
})