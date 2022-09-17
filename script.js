
let students = [
    {name:"Yehia",
     check1:5,
     check2:7 ,  
    },

    {
    name:"Henri",
    check1:5,
    check2:6,
    },

    {
        name:"Felipe",
        check1:10,
        check2:9,
    }
]

students.push(
    {name:"Arthur",
    check1:5,
    check2:7 
}   
)



for(let student of students){

    let result = (Number(student.check1) + Number(student.check2)) / 2;
    let average = result > 7

if(average){
    alert("Parabens " + student.name + " deve ter colado tenho certeza mas sua media foi de " + result)
} else {
    alert("Voce foi Horrivel! " + student.name + " sua media foi de "+ result)
};
    
}


