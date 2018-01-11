const hogGifs = () => {
  fetch('http://api.giphy.com/v1/gifs/random?api_key=lQzLqWXktAE007Z80dvEUNCkbGrTTF06&tag=pigs')
  .then(resp => resp.json())
}



//HELPER METHOD

// function getHogGif(json){
//   return json.data.image_url
// }

export default hogGifs
