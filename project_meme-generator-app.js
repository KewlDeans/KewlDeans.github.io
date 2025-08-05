// selecting the form
const form = document.querySelector('#meme-form');

// selecting the area where memes are placed
const gallery = document.querySelector('#meme-gallery')

//selecting each of the inputs
const pic = document.getElementById('picked-img'); // Where the url is getting pulled
const topTextInput = document.getElementById('top-text')
const btmTextInput = document.getElementById('bottom-text')

//---------------------------------------------------------
// submitting the form and sending memes to the bottom
form.addEventListener('submit', async function(e){
    e.preventDefault();

// Adding in a URL using an API
// https://dog.ceo/api/breeds/image/random Fetch!
// Getting the Dog image
    if (pic.value === ""){
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(response.data);
    
    //newMeme is the Meme Container
    const newMeme = document.createElement('div');
    newMeme.classList.add('dank-meme');

    //This is the image element being generated
    const memeImg = document.createElement('img')
    memeImg.src = response.data.message;
    memeImg.style.width = '100%' ;

   const topMemeText = document.createElement('div');
   topMemeText.textContent = topTextInput.value;
   topMemeText.classList.add('meme-text');
   topMemeText.setAttribute('id','top-text')

   const btmMemeText = document.createElement('div');
   btmMemeText.textContent = btmTextInput.value;
   btmMemeText.classList.add('meme-text');
   btmMemeText.setAttribute('id','btm-text')
      
   gallery.prepend(newMeme);

       // adds text and image to div area
    newMeme.appendChild(memeImg);
    newMeme.appendChild(topMemeText);
    newMeme.appendChild(btmMemeText);
    
    // Resets input box to blank
    // pic.value = '';
    topTextInput.value = '';
    btmTextInput.value = '';
}
else {
    
    //newMeme is the Meme Container
    const newMeme = document.createElement('div');
    newMeme.classList.add('dank-meme');

    //This is the image element being generated
    const memeImg = document.createElement('img')
    memeImg.src = pic.value;
    memeImg.style.width = '100%' ;

   const topMemeText = document.createElement('div');
   topMemeText.textContent = topTextInput.value;
   topMemeText.classList.add('meme-text');
   topMemeText.setAttribute('id','top-text')

   const btmMemeText = document.createElement('div');
   btmMemeText.textContent = btmTextInput.value;
   btmMemeText.classList.add('meme-text');
   btmMemeText.setAttribute('id','btm-text')
      
   gallery.prepend(newMeme);

       // adds text and image to div area
    newMeme.appendChild(memeImg);
    newMeme.appendChild(topMemeText);
    newMeme.appendChild(btmMemeText);
    
    // Resets input box to blank
    pic.value = '';
    topTextInput.value = '';
    btmTextInput.value = '';
}
});


//--------------------------------------------------------

// Deletes the meme
gallery.addEventListener ('dblclick', function(e) {
    const memeContainer = e.target.closest('.dank-meme')
    if (memeContainer);
        memeContainer.remove();
});

// Favorites the meme on and off
gallery.addEventListener ('click', function(e) {
    const memeContainer = e.target.closest('.dank-meme')
    if (memeContainer);
        memeContainer.classList.toggle('fav');
});

    