alert("welcome to demon lord's webpage")
try {
    // Code that might throw an error
    console.log("This is a debug message.");
} catch (error) {
    console.error("An error occurred: " + error.message);
}
// Example: Load content dynamically
function loadContent() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "index.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

