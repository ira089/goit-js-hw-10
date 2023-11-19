console.log('чаокаока');
import { funFetchBreeds } from './cat-api';
import { funFetchCatByBreed } from './cat-api';
import axios from 'axios';

// let arrBreeds = [];

const refs = {
  selectCheck: document.querySelector('.breed-select'),
  loadingData: document.querySelector('.loader'),
  errData: document.querySelector('.error'),
  container: document.querySelector('.cat-info'),
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
    console.dir(...data);
    console.dir({ ...data });
    // console.log({ ...data.name });

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
const beng = 'beng';
funFetchCatByBreed(beng).then(dataQ => {
  console.log(dataQ);
  //   console.log(dataQ.breeds);
});

function showFirstBreed() {}

// function showBreedImage(index) {}

// let imgCat = dataImg[index].image.url;
// console.log(imgCat);

// function createMarkup(arr) {
//   return arr
//     .map(      ( poster_path, release_date, original_title, vote_average )  => `
//              <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//                <div class="cat-info-text">
//                   <h2>${original_title}</h2>
//                  <p> ${release_date}</p>
//                   <h3> ${vote_average}</h3>
//                   <p> ${release_date}</p>
//                </div>

//     )    .join('');
//     }
function createMarkup(arr) {
  return arr
    .map(
      () => `<img src="https://api.thecatapi.com/v1/images/search?breed_ids=${catId}" alt="${name}" />
                  <div class="cat-info-text">
                   <h2>${name}</h2>
                  <p> ${description}</p>
                    <h3>Temperament</h3>
                    <p> ${temperament}</p>
               </div>`
    )
    .join('');
}
