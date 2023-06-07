window.addEventListener('load', function(){
    let uno = document.querySelector('#r1');
    let dos = document.querySelector('#r2');
    let tres = document.querySelector('#r3');
    let cuatro = document.querySelector('#r4');
    let cinco = document.querySelector('#r5');
    let btn = document.querySelector('#btn-submit')
    let text = document.querySelector('#text-rating')
    let option;

    uno.addEventListener('click', function () {
        uno.classList.add ('rating-selected') ;
        option = 1;
        dos.classList.remove('rating-selected')
        tres.classList.remove('rating-selected')
        cuatro.classList.remove('rating-selected')
        cinco.classList.remove('rating-selected')
    })
    dos.addEventListener('click', function () {
        dos.classList.add ('rating-selected') ;
        option = 2;
        uno.classList.remove('rating-selected')
        tres.classList.remove('rating-selected')
        cuatro.classList.remove('rating-selected')
        cinco.classList.remove('rating-selected')
    })
    tres.addEventListener('click', function () {
        tres.classList.add ('rating-selected')
        option = 3;
        uno.classList.remove('rating-selected')
        dos.classList.remove('rating-selected')
        cuatro.classList.remove('rating-selected')
        cinco.classList.remove('rating-selected')
    })
    cuatro.addEventListener('click', function () {
        cuatro.classList.add ('rating-selected')
        option = 4;
        uno.classList.remove('rating-selected')
        dos.classList.remove('rating-selected')
        tres.classList.remove('rating-selected')
        cinco.classList.remove('rating-selected')
    })
    cinco.addEventListener('click', function () {
        cinco.classList.add ('rating-selected')
        option = 5;
        uno.classList.remove('rating-selected')
        dos.classList.remove('rating-selected')
        tres.classList.remove('rating-selected')
        cuatro.classList.remove('rating-selected')
    })

    btn.addEventListener('click', function(e){
        e.preventDefault();
        console.log(option);
        if(option)
            {
                text.innerHTML = `<p>You selected ${option} out of 5</p>`;
                document.querySelector('#rating-container').style.display = "none";
                document.querySelector('#thank-container').style.display = "flex";
            }else{
                alert("Debe seleccionar un valor")
            }
    })

})