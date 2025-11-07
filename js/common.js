/* [반응형] header 햄버거 메뉴 클릭(터치) 시 카테고리 등장 */
const hamburgerMenu = document.querySelector('.header_wrap .hamburger_menu');
const header = document.querySelector('.header_wrap header');
const coverBlackView = document.querySelector('.header_wrap .cover_black_viewport');
console.log(hamburgerMenu, header, coverBlackView);

hamburgerMenu.addEventListener('click',function(){
    header.style.left = '0';
    header.style.transition = '0.5s';
    coverBlackView.style.display = 'block';
    hamburgerMenu.style.display = 'none';
})

hamburgerMenu.addEventListener('click', (e)=>{
    e.preventDefault();
})

coverBlackView.addEventListener('click',function(){
    header.style.left = '-300px';
    coverBlackView.style.display = 'none';
    hamburgerMenu.style.display = 'block';
})