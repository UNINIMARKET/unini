const listCategory = document.querySelectorAll('main li > a');
console.log(listCategory)

function listCategoryRemove (){
    listCategory[0].classList.remove ('active');
    listCategory[1].classList.remove ('active');
    listCategory[2].classList.remove ('active');
    listCategory[3].classList.remove ('active');
    listCategory[4].classList.remove ('active');
    listCategory[5].classList.remove ('active');
    listCategory[6].classList.remove ('active');
    listCategory[7].classList.remove ('active');
}

listCategory[0].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[0].classList = 'active';
})
listCategory[1].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[1].classList = 'active';
})
listCategory[2].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[2].classList= 'active';
})
listCategory[3].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[3].classList= 'active';
})
listCategory[4].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[4].classList= 'active';
})
listCategory[5].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[5].classList= 'active';
})
listCategory[6].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[6].classList= 'active';
})
listCategory[7].addEventListener('click',function(){
    listCategoryRemove();
    listCategory[7].classList= 'active';
})