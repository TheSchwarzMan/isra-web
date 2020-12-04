window.onload = function()
{
    const IMG = 
          [
              '../img/1.jpg',
              '../img/2.jpg',
              '../img/3.jpg'
          ];
    
    let currentPosition = 0;
    let $labelBack = document.querySelector('#back');
    let $labelNext = document.querySelector('#next');
    let $image = document.querySelector('#image');
    let intervale;
    
    function nextImage()
    {
        if(currentPosition >= IMG.length - 1)
            currentPosition=0;
        else
            currentPosition++;
        
        renderImage();
    }
    
    function backImage()
    {
        if(currentPosition <=0)
            currentPosition = IMG.length - 1;
        else
            currentPosition--;
        
        renderImage();
    }
    
    function renderImage()
    {
        $image.style.backgroundImage = `URL(${IMG[currentPosition]})`;
    }
    
    $labelNext.addEventListener('click', nextImage);
    $labelBack.addEventListener('click', backImage);
    
    renderImage();
}
