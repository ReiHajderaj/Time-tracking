// geting all the link elements from the document to variables
let day = document.querySelector('.dayopen');
let week = document.querySelector('.weekopen');
let month = document.querySelector('.monthopen');

let templets = document.querySelectorAll('.templet');


// the catagories elements
let dayly = document.querySelectorAll('.dayly');
let weekly = document.querySelectorAll('.weekly');
let monthly = document.querySelectorAll('.monthly');


// all the butons will have the same functions just different in the display factor
let display = (add,rem1,rem2,show,not1,not2) =>{

    // styling the ancors depending on how they are pressed
    add.classList.add('strfade')
    rem1.classList.remove('strfade')
    rem2.classList.remove('strfade')


    // ading the elements when ancor is clicked
    for (let i = 0; i < templets.length; i++){
        templets[i].classList.add('show');
    };

    for (let i = 0; i < show.length; i++){
        show[i].classList.add('show');
    };

    for (let i = 0; i < not1.length; i++){
        not1[i].classList.remove('show');
    };

    for (let i = 0; i < not2.length; i++){
        not2[i].classList.remove('show');
    };
};

// handeling the events of each button and displaying data
day.onclick = function(){ 
    display(day,week,month,dayly,weekly,monthly);
};

week.onclick = function(){ 
    display(week,day,month,weekly,dayly,monthly);
};


month.onclick = function() {
    display(month,week,day,monthly,weekly,dayly);
};