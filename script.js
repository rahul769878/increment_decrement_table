function addValue() {
    let inputValue = document.getElementById("inputValue").value;

    let checkedValue = document.querySelectorAll("input:checked");

    let allElements = document.getElementsByClassName("numbers");

    for (let index = 0; index < allElements.length; index++) {
        let check = allElements[index].parentElement.getElementsByTagName("input")[0].checked;

        if (check || checkedValue.length == 0) {
            allElements[index].innerHTML = parseInt(allElements[index].innerHTML) + parseInt(inputValue);
        }
    }
}

function increValue(type) {
        let v = parseInt(type.parentElement.parentElement.querySelector(".numbers").innerHTML);
        type.parentElement.parentElement.querySelector(".numbers").innerHTML = v + 1;
    }

    function decreValue(type) {
        let v1 = parseInt(type.parentElement.parentElement.querySelector(".numbers").innerHTML);
        type.parentElement.parentElement.querySelector(".numbers").innerHTML = v1 - 1;
    }
    







