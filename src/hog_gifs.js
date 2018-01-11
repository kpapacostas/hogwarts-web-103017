const hogGifs = () => {
  const params = {
          "method": "GET",
          "mode": 'no-cors',
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }

  fetch('http://api.giphy.com/v1/gifs/random?api_key=lQzLqWXktAE007Z80dvEUNCkbGrTTF06&tag=pigs', params)
    .then(resp => resp.json())
}



//HELPER METHOD

// function getHogGif(json){
//   return json.data.image_url
// }

export default hogGifs
