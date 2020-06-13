function myFunction() {
  document.getElementById("demo").style.color = "blue";
}


///////////////////////////////////////////////////////
// -------------------- read txt file--------------

var path1 = "p1/yangshen/qijue/2.txt";

function readTextFile_1(path, callback) {
    var client = new XMLHttpRequest();
    client.onreadystatechange = function() {
        if (client.readyState == 4) {
            // The request is done; did it work?
            if (client.status == 200) {
                // ***Yes, use `xhr.responseText` here***
                callback(client.responseText);
            } else {
                // ***No, tell the callback the call failed***
                callback(null);
            }
        }
    };
    client.open("GET", path);
    client.send();
}

function handleFileData(fileData) {
    if (!fileData) {
        // Show error
        return('error');
    }
    // Use the file data
}

// Do the request
function r1() {readTextFile_1(path1, handleFileData);}

function readTextFile_2(p) {
    return fetch(p).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status); // Rejects the promise
        } else {
          //alert(response.text())
        }
    }).then(data => {
    $('#to_change').html(data);})
}

function r2() {readTextFile_2(path1)}

////////////
//////////////////////////////////////////////////////////
