let str = " ";
let buttons = document.querySelectorAll(".cal-btn");
Array.from(buttons).forEach((numbers) => {
    numbers.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            document.querySelector('input').value = str;
        }

        else if (e.target.innerHTML == 'AC') {
            str = "  ";
            document.querySelector('input').value = str;
        }

        else {
            console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }

    })
})