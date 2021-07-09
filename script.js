class HashStorageClass{
    constructor() {
        this.obj = {};
    }
    
    addValue(key, value) {
        this.obj[key.slice(0, key.length)] = value;
    }

    getValue(key) {
        if(key in this.obj) {
            return this.obj[key.slice(0, key.length)];
        } else {
            return undefined;
        }
    }

    deleteValue(key) {
        if(key in this.obj) {
            delete this.obj[key.slice(0, key.length)];
            return true;
        } else {
            return false;
        }
    }

    getKeys() {
        let arr = [];

        for (let key in this.obj) {
            if (key === "addValue" || key === "getValue" || key === "deleteValue" || key === "getKeys") continue;
            arr.push(key);
        }
        return arr;
    }
}
  
const drinkStorage = new HashStorageClass();

const btnAdd = document.querySelector(".btn__add");
const btnGet = document.querySelector(".btn__get");
const btnDel = document.querySelector(".btn__del");
const btnKeys = document.querySelector(".btn__keys");

btnAdd.addEventListener("click", function(){
    let x = "";
    do {
        x = prompt("Введите название добавляемого напитка:", "Например, Маргарита");
    } while (!x || Number(x) === 0);

    let y1 = confirm("Этот напиток алкогольный?");
    if (y1) {
        y1 = "Алкогольный напиток.";
    } else {
        y1 = "Безалкогольный напиток.";
    }
    let y2 = "";
    do {
        y2 = prompt("Введите рецепт приготовления:");
    } while (!y2 || Number(y2) === 0);
    y = y1 + " Рецепт: " + y2;
  
    drinkStorage.addValue(x, y); 
});

btnGet.addEventListener("click", function(){
    let x = "";
    do {
        x = prompt("Введите название напитка:", "Например, Маргарита");
    } while (!x || Number(x) === 0);
    
    if (drinkStorage.getValue(x) === undefined) {
        alert("Данный напиток отсутствует в хранилище!");
    } else {
        alert("Напиток - " + x + ". Информация о напитке - " + drinkStorage.getValue(x)); 
    }
});

btnDel.addEventListener("click", function(){
    let x = "";
    do {
        x = prompt("Введите название удаляемого напитка:", "Например, Маргарита");
    } while (!x || Number(x) === 0);
    
    if (drinkStorage.deleteValue(x)) {
        alert("Напиток удален!");
    } else {
        alert("Напиток не найден в хранилище!"); 
    }
  }); 

btnKeys.addEventListener("click", function(){
    if(drinkStorage.getKeys().length === 0){
        alert("Хранилище пусто!");
    } else {
        alert(drinkStorage.getKeys());
    }
}); 