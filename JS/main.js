//Блок заданий по String 

console.log("Первое Задание")
//Первое Задание
const StringLength = (str1, str2) => {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
};

console.log(StringLength('My string!', 'My String'));
console.log(StringLength('My string', 'My String!'));
console.log(StringLength('My string', 'My String'));

console.log("Второе Задание")
//Второе Задание
const upperText = () => {
    const name = "my String";
    const result = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(result);
};

upperText();
console.log("Третье Задание")
//Третье Задание
function vowels(a) {
    const vowelsList = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
    let i = 0;

    for(let vowel of a) {
        if(vowelsList.includes(vowel)){
            i++;
        }
    }
    return i;
}
console.log(vowels("Привет,это строка"))

console.log("Четвертое Задание")
//Четвертое Задание

const Spam = (str) => {
    const spamStr = str.toLowerCase();
    return spamStr.includes('скидка') || spamStr.includes('бесплатно') || spamStr.includes('акция');
};

console.log(Spam('Вам доступна скидка на продукт')); 
console.log(Spam('Бесплатный только сыр в мышеловке'));
console.log(Spam("Акция на обувь"));
console.log(Spam("Для вас сегодня все бесплатно"));
console.log(Spam("Это обычное сообщение.")); 


console.log("Пятое Задание")
//Пятое Задание

function reduction(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength -1) + '…' : str;
  }

  console.log(reduction("Hello World", 6))

console.log("Шестое Задание")
  //Шестое Задание

  function palindrome(str) {
            strReverse = str.split('').reverse().join('');
        if (strReverse == str) {
            return 'True';
        } else {
            return 'False';
        }
    }

  console.log(palindrome('казак'));
  console.log(palindrome('шалаш'));
  console.log(palindrome('самолёт'));
  console.log(palindrome('вертолёт'));

console.log("Седьмое Задание")
  //Седьмое Задание

  function words() {
    const str = 'Простой текст!'
    const words = str.split(' ').join();
    for (const i of words) {
        console.log(i.length)
    }
}

words()

console.log("Восьмое Задание")
  //Восьмое Задание

  const longest = (names) => names.reduce((Name1, Name2) => 
    Name1.length > Name2.length ? Name1 : Name2, 
"");

console.log(longest(["Виталя", "Аркадий", "Андрей"]));


  console.log("Девятое Задание")
  //Девятое Задание

  function lengthword(str) {
    const word = str.split(/\s+/);
    let sumWord = word.length;
    let Str1 = str.trim();
    let sumLetter = Str1.length;
    let result = sumLetter / sumWord

    return result;
  }

  console.log(lengthword("Ян","Юра","Андрей"))

  console.log("Десятое Задание")
  //Десятое Задание
  
  const findCharacterIndices = (str, char) => {
    const indices = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i); 
            count++; 
        }
    }

    console.log(`Индексы символа '${char}':`, indices);
    console.log(`Количество вхождений символа '${char}':`, count);
};

findCharacterIndices("Привет, мир!", "и");
findCharacterIndices("JavaScript", "a");
findCharacterIndices("Тестовая строка", "т");
findCharacterIndices("Hello, world!", "z");


//Блок заданий по Object


console.log("Первое Задание")
//Первое Задание
 
let person = {
    name: "Jhon",
    age: 23,
    city: "ST.Peterburg"
}

console.log(person.name)
console.log(person.age)
console.log(person.city)

console.log("Второе Задание")
//Второе Задание
 
let car = {
    make: "BMW",
    model: "M4 Competition",
    year: 2013
}

car.year = 2024;

console.log(car.year)

console.log("Третье Задание")
//Третье Задание

let book = {
    title: "TH",
    author: "BlueBerry"
}
book.publishedYear = true;

console.log(book)

console.log("Четвертое Задание")
//Четвертое Задание

let student = {
    name: "Petr",
    grade: 5,
    age: 25
}
delete student.age;

console.log(student)

console.log("Пятое Задание")
//Пятое Задание

const product = {
    id: 1,
    name: 'Книга',
    price: 200
};

function checkPrice(product) {
    if ('price' in product) {
        console.log("Свойство 'price' существует в объекте.");    } else {
        console.log("Свойство 'price' не существует в объекте.");
    }
}

checkPrice(product);
checkPrice({id: 2, name: 'Телефон'}); 

console.log("Шестое Задание")
//Шестое Задание

const fruits = {
    apple: 2,
    banana: 3,
    orange: 5,
    mango: 4
};

for (const fruit in fruits) {
    console.log(`${fruit}: ${fruits[fruit]}`);
}

console.log("Седьмое Задание")
//Седьмое Задание

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1 }; 

for (const key in obj2) {
    if (mergedObject.hasOwnProperty(key)) {
        mergedObject[key] += obj2[key]; } else {
        mergedObject[key] = obj2[key];
    }
}

console.log(mergedObject);

console.log("Восьмое Задание")
//Восьмое Задание

const original = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

const copy = { ...original }; 

copy.age = 25;

console.log('Original:', original);
console.log('Copy:', copy);


console.log("Девятое Задание")
//Девятое Задание

let students = {
    name: "Alica",
    age: 25,
    specialty: "Робототехника",
    items: {
        progarmers: {
            grade:5,
            watch:100,
        },
        
        biology: {
            grade:4,
            watch:80,
        },

        tehnology: {
            grade: 5,
            watch:50,
        }

    }
}

function properties(obj){
    let i = 0;

    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            i++;
            if (typeof obj[key] === 'object' && obj[key] !== null){
                i += properties(obj[key]);
            }
        }
    }
    return i;
}

const totalProperties = properties(students);
console.log(totalProperties);

console.log("Десятое Задание")
//Десятое Задание

let empty = {}

empty.name = "John";
empty.surname = "Smith";
empty.name = "Pete";
delete empty.name;

console.log(empty)

console.log("Одинадцатое Задание")
//Одинадцатое Задание

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
 let sum = 0;

 for(let key in salaries){
    sum += salaries[key];
 }

 console.log(`Сумма всех зарплат: ${sum}`)