model = {
    items: []
}


view = {
    clearList: function(){
        document.getElementById("list").innerHTML = "";
    },

    addItem: function(){
        let inpItem = document.getElementById("inpItem");
        if( inpItem.value.length > 0){
            controller.addItem(inpItem.value);
        }
    },

    render: function(){
        this.clearList();
        if(model.items.length > 0){
            let list = document.getElementById("list");
            for(let i=0; i<model.items.length; i++){
                let li = document.createElement("li");
                // console.log(model.item[i].text);
                li.textContent = model.items[i];
                list.appendChild(li);
            }
        }
    }
}


controller = {
    init: function(){
        view.render();
    },

    addItem: function(){
        let item = document.getElementById("inpItem").value;
        model.items.push(item);
        document.getElementById("inpItem").value = "";
        view.render();
    }
}

controller.init();