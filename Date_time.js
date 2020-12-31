// //linked to console.html

// const now = new Date()

// console.log(now)

// console.log(now.getFullYear());
// console.log(now.getMonth()); //0 based 
// console.log(now.getDate()); //day of month not 0 based
// console.log(now.getDay()); //Monday = 1, Tuesday = 2 not 0 based
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// //timestamp
// //is the number of millisecs since
// //1st January 1970
// console.log(now.getTime());
// //is useful for comparisons

// //convert to string
// console.log(now.toDateString());




// const before = new Date('November 15 2020 9:00:00');

// const diff = now - before;
// console.log(diff)

// const days = Math.round(diff/1000/60)/60/24;

// console.log(`num of days since before = ${days}`)


const clock = document.querySelector('.clock');

const tick = () => {
    const midnight = new Date('January 01 2021 0:00:00')
    const rightnow = new Date();

    const timeLeft = midnight - rightnow

    convTime = new Date(timeLeft)

    const hrs = convTime.getHours();
    const mins = convTime.getMinutes();
    const secs = convTime.getSeconds();
    const milli = convTime.getMilliseconds();

    const html = `

    <span>${hrs}hrs</span>
    <span>${mins}mins</span>
    <span>${secs}sec</span>
    <span>${milli}ms</span>`

    clock.innerHTML = html;
};

setInterval(tick, 10);