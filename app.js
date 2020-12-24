const correctAnswers = ['D','C','B','B','A','D','A','A','D','B'];

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

const paras = document.querySelectorAll('.questions')
const headings = document.querySelectorAll('h2')
const heading = headings[1]
const background = document.querySelector('.mainBackground')


function showAnswers(output){
paras[0].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Jingle Bells </span>"
paras[1].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Poo on a stick </span>"
paras[2].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Odin </span>"
paras[3].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Germany </span>"
paras[4].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: 36 meters</span>"
paras[5].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Donald Duck </span>"
paras[6].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Ghosts of Christmas Past, Present, and Yet to Come </span>"
paras[7].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: A cabbage and a turnip </span>"
paras[8].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: A wattle </span>"
paras[9].innerHTML += "<br><span style='color: #32CD32; font-weight: bold;'> Answer: Grapes </span>"
background.style.backgroundColor = "#8b0000"
if(output >50){
heading.innerHTML = "Well done Santa would be pleased!"} else {heading.innerHTML = "Well that's not very christmassy"}
};




form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });

    scrollTo(0,0);
    result.classList.remove('d-none');

    
    let output = 0;
    const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer)
        showAnswers(output)
    } else{
        output++
    }
    }, 30);

})

