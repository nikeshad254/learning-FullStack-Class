let xhr = new XMLHttpRequest();

xhr.onreadystatechange =  function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let data = JSON.parse(this.responseText)[0];
        document.write(JSON.stringify(data));
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
