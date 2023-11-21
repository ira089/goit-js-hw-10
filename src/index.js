import { funFetchBreeds } from './cat-api';
import { funFetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

// import axios from 'axios';

const refs = {
  selectCheck: document.querySelector('.breed-select'),
  loadingData: document.querySelector('.p-loader'),
  errData: document.querySelector('.error'),
  container: document.querySelector('.cat-info'),
};

refs.selectCheck.addEventListener('change', onChange);

function onChange(evt) {
  refs.loadingData.classList.remove('display-none');
  refs.selectCheck.classList.add('display-none');
  refs.container.classList.add('display-none');

  const selectedId = evt.currentTarget.value;
  // console.log(selectedId);

  funFetchCatByBreed(selectedId)
    .then(data => {
      // console.log(data);
      refs.container.innerHTML = createMarkup(data);
    })
    .catch(_error => Notify.failure(refs.errData.textContent))
    .finally(() => {
      refs.loadingData.classList.add('display-none');
      refs.selectCheck.classList.remove('display-none');
      refs.container.classList.remove('display-none');
    });
}

funFetchBreeds()
  .then(dataImg => {
    // dataImg = data.filter(img => img.image?.url != null);
    for (let i = 0; i < dataImg.length; i++) {
      const breed = dataImg[i];
      let option = document.createElement('option');
      // if (!breed.image) {
      //   continue;
      // }
      option.value = breed.id;
      option.textContent = breed.name;
      refs.selectCheck.append(option);
    }
    // new SlimSelect({
    //   select: refs.selectCheck,
    // });
  })
  .catch(_error =>
    // refs.errData.classList.remove('display-none');
    Notify.failure(refs.errData.textContent)
  );

function createMarkup(arr) {
  const breeds = arr[0].breeds;
  const imageUrl = arr[0].url;
  return breeds
    .map(
      ({
        name,
        temperament,
        description,
      }) => `<img src="${imageUrl}" alt="${name}"/>
                  <div class="cat-info-text">
                   <h2>${name}</h2>
                  <p> ${description}</p>
                    <h3>Temperament</h3>
                    <p> ${temperament}</p>
               </div>`
    )
    .join('');
}
