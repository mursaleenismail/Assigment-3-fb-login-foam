function register() {
    var first = document.getElementById('firstname');
    var Sur = document.getElementById('surename');
    var conf = document.getElementById('confidential');
    var pass = document.getElementById('password');
    var dayselect = document.getElementById('day');
    var monthselect = document.getElementById('month');
    var yearsselect = document.getElementById('years');
    var selectedDay = dayselect.value;
    var selectedMonth = monthselect.value;
    var selectedYears = yearsselect.value;
   
    
    console.log(first.value)
    console.log(Sur.value)
    console.log(conf.value)
    console.log(pass.value)
    console.log(selectedDay)
    console.log(selectedMonth)
    console.log(selectedYears)

}
