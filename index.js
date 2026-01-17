let btn_no = document.getElementById("no");

btn_no.addEventListener('mouseover',() => {
    let x=Math.floor(Math.random()*300-200);
    let y=Math.floor(Math.random()*300-200);
    console.log(`translate(${x},${y})`);
    btn_no.style.transform=`translate(${x}px,${y}px)`;
});

btn_no.addEventListener('click',() => {
    let x=Math.floor(Math.random()*300-200);
    let y=Math.floor(Math.random()*300-200);
    console.log(`translate(${x},${y})`);
    btn_no.style.transform=`translate(${x}px,${y}px)`;
});

let btn_yes = document.getElementById('yes');

btn_yes.addEventListener('click', () => {

    document.getElementsByClassName('ONE')[0].style.display='none';
    document.getElementsByClassName('TWO')[0].style.display="flex";

    setTimeout(() => {
        document.getElementsByClassName('TWO')[0].style.display="none";
        document.getElementsByClassName('THREE')[0].style.display="flex";
    },2000)


});

