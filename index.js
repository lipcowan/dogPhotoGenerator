'use strict';

function getDogImage(breed,n) {
  fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/${n}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.message);
        }
        return response.json()
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Check your spelling and try again.'));
}

// first thoughts - we are getting multiple urls and it's currently breaking the display function

// .lowerCase()

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let imageIndexUrls = "";
  for ( let i=0; i < responseJson.message.length; i ++ ) {
    imageIndexUrls += `<img src="${responseJson.message[i]}" class="results-img">`;
  }

 $('.results-img').replaceWith(imageIndexUrls);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $("#breedName").val();
    let n = $("#integer").val();
    getDogImage(breed,n);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});