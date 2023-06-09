//Build XMLHTTPRequest Object
//Step 1: to setup our request

let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);

//Step 2: create a function to deal wiht the response when it is done
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.write("Hello User your are fine");
    console.log(xhr.readyState, xhr.status);
  }
};

//Step 3: Open and Send our request
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
