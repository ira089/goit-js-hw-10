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
  // console.log({ evt });

  const selectedId = evt.currentTarget.value;
  console.log(selectedId);

  funFetchCatByBreed(selectedId).then(data => {
    console.log(data);
    refs.container.innerHTML = createMarkup(data);
  });
}

console.log(funFetchBreeds());

funFetchBreeds()
  .then(data => {
    console.dir(...data);
    console.dir({ data });
    dataImg = data.filter(img => img.image?.url != null);
    for (let i = 0; i < dataImg.length; i++) {
      const breed = dataImg[i];
      let option = document.createElement('option');
      if (!breed.image) {
        continue;
      }
      option.value = breed.id;
      option.innerHTML = breed.name;
      refs.selectCheck.append(option);
    }

    // console.log(dataImg);

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

function createMarkup(arr) {
  const breeds = arr[0].breeds;
  const imageUrl = arr[0].url;
  return breeds
    .map(
      ({
        name,
        temperament,
        description,
        id,
      }) => `<img src="${imageUrl}" alt="${name}" />
                  <div class="cat-info-text">
                   <h2>${name}</h2>
                  <p> ${description}</p>
                    <h3>Temperament</h3>
                    <p> ${temperament}</p>
               </div>`
    )
    .join('');
}
