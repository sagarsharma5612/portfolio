var typed = new Typed(".typed", {
    strings: ["Sagar Sharma","Coder", "Web Designer", "Reactjs", "Programmer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
  


const p_btns = document.querySelector('.p-btn')

const p_img_elem = document.querySelectorAll('.img-overlay')

p_btns.addEventListener('click',(e) =>{
  const pbtn = e.target;
  console.log(pbtn);



    const btn_num = pbtn.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.btn-${btn_num}`)

    p_img_elem.forEach((value) => value.classList.add('p_img_not_active'))

    img_active.forEach((value) => value.classList.remove('p_img_not_active'))

})










  
  
  
  