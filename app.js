var form = document.getElementById("myForm")



form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").Value// we add.value to extract the value.

    var originalName = search.split(' ').join(' ') //Removes the space btn your search name

document.getElementById("result").innerHTML = ""


    fetch("https://api.github.com/users/"+originalName)
    .then((results) => results.json())// returns the results
    .then((data) => { // RETURNS THE DATA

        console.log(data) // U CAN CHECK BY PUTTING IN DATA TO SEE IF ITS WORKING

        document.getElementById('result').innerHTML = `
        <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/>
        `

    })
})