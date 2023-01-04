import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
  apiKey: "AIzaSyBuHYHTd6PZ12IjCKt1t5pXbJeAeq4fJUk"
}

const loader = new Loader(apiOptions);

loader.then(() => {
  console.log('Maps JS API Loaded');
});