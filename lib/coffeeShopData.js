import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
    accessKey: 'KMwCQ_W5ShcOWrbtn1WlZSPyCgG-6GIo1iwYsC35who'
  });
const getPhotos = async () => {
    const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    perPage: 30
  });
  //console.log(photos)
}
  

export const getCoffeeShopUrl = (query, near) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&near=${near}`
}

export const fetchCoffeeStores = async() => {
    
        getPhotos();
    
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "fsq35BiLsppl6g+bhpPDAFLk77QxPzppncfpit+h6/o+LP0="
        }
      };
      
        const response = await fetch(getCoffeeShopUrl('coffee', 'dallas%2Ctx'), options)
        const data = await response.json()
        console.log(data)
        return data.results;
    
    
        
        //.catch(err => console.error(err));
}