const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const aboutSection = document.querySelector('.about');



aboutSection.addEventListener('click',(e) =>{
    const id = e.target.dataset.id;
    // console.log(id);
    if(id){
        tabBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        contents.forEach(content => content.classList.remove('active'));
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})






