burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist');
rightnav=document.querySelector('.rightNav');

burger.addEventListener('click',()=>
{
 navbar.classList.toggle('hnav');
 rightnav.classList.toggle('vclass');
 navlist.classList.toggle('vclass')
});


