function IncrementScore(id) {
    userscore = document.getElementById("Score").innerHTML
    
    var clickedpicture = document.getElementById(id)
    let clickstate = clickedpicture.getAttribute("data-clicked");

    scoreasint = parseInt(userscore)

    if (id.includes("egg") && clickstate=="False") {
        scoreasint += 1;
        if (scoreasint == 8) {
            alert("You Win!!")
        }
        clickedpicture.setAttribute("data-clicked", "True")
    } else if (id.includes("carrot") && clickstate=="False") {
        clickedpicture.setAttribute("data-clicked", "True")
        scoreasint -= 1;
    }

    document.getElementById("Score").innerHTML = scoreasint
    
    eggnumber = id
    egg = document.getElementById(eggnumber)
    egg.style.opacity = 1;    
}

