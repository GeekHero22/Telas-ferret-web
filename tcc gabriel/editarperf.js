const inputFile = document.querySelector('#pictureinput');
const pictureimage = document.querySelector('.pictureimage');
const pictureimageTXT = 'Choose background image';
pictureimage.innerHTML = pictureimageTXT;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target
    console.log(inputTarget);
    const file = inputTarget[0];

     if(file){
    
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;
        
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('pictureimage');


            pictureimage.appendChild(img);

        reader.readAsDataURL(file );
    });
     else{
        pictureimage.innerHTML = pictureimageTXT;

     }
   // console.log(file);
};