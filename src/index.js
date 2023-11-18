console.log('чаокаокащ');
import { funFetchBreeds } from './cat-api';
import { funFetchCatByBreed } from './cat-api';
import axios from 'axios';

// let arrBreeds = [];

const refs = {
  selectCheck: document.querySelector('.breed-select'),
  loadingData: document.querySelector('.loader'),
  errData: document.querySelector('.error'),
};
console.dir(refs.selectCheck);
refs.selectCheck.addEventListener('change', onChange);

function onChange(evt) {
  console.log(evt);

  const changeEvt = evt.target.textContent;
  console.log(changeEvt);
}

console.log(funFetchBreeds());

funFetchBreeds()
  .then(data => {
    // console.log(data);
    dataImg = data.filter(img => img.image?.url != null);

    // console.log(dataImg);

    for (let i = 0; i < dataImg.length; i++) {
      const breed = dataImg[i];
      let option = document.createElement('option');
      if (!breed.image) {
        continue;
      }
      option.value = i;
      option.innerHTML = `${breed.name}`;
      refs.selectCheck.append(option);
    }
    showFirstBreed(0);
    //написать функцию - показывать первую породу по умолчанию
  })
  .catch(error => console.log(error));

console.log(funFetchCatByBreed());

funFetchCatByBreed().then(dataQ => {
  console.log(dataQ);
  //   console.log(dataQ.breeds);
});

function showFirstBreed() {}

// function showBreedImage(index) {}

// let imgCat = dataImg[index].image.url;
// console.log(imgCat);

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//              <div class="cat-info">
//                <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//                <div class="cat-info-text">
//                   <h2>${original_title}</h2>
//                  <p> ${release_date}</p>
//                   <h3> ${vote_average}</h3>
//                   <p> ${release_date}</p>
//                </div>
//               </div>`
//     )
//     .join('');
// }
