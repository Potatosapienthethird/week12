const clickMeButton = document.querySelector(".click.me");

function handleClickMeButton(event)
{
    alert("You Clicked!");
}

clickMeButton.addEventListener("click", changeBGColor);

function changeText()
{
    if (clickMeButton.textContent === "Click Me")

}
clickMeButton.addEventListener("click", changeText);

function createAddButton()
{
    const purplebutton = document.createElement("button")
    purplebutton.textContent = "Purple";
    purplebutton.addEventListener("mousemove", changeBGGreen);
    document.body.appendChild(purpleButton)
}
clickMeButton.addEventListener("click", changeText)
function createAddPara() {
    const para = document.createElement("p");
    para.textContent = "My para";
    para.addEventListener("mouseover", changeBGGreen);
    document.body.appendChild(para)
}
clickMeButton.addEventListener("click", createAddPara);

function changeBGGreen(event)
    event.target.classList.add("green-background")