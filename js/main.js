



/*  1- Создайте функцию, которая определяет, возможно ли разделить пирог честно, учитывая эти три параметра:
Общее количество ломтиков.
Количество получателей.
Сколько ломтиков получает каждый.*/

        // function equalSlices(total, people, each) {
        //     return  people * each <= total
        //  }
        //  console.log(equalSlices(11, 5, 2));
        //  console.log(equalSlices(11, 5, 3));


// 2- task

        // function nSidedShape(n) {
        //     	const obj = {
        //     		1: "circle",
        //     		2: "semi-circle",
        //     		3: "triangle",
        //     		4: "square",
        //     		5: "pentagon",
        //     		6: "hexagon",
        //     		7: "heptagon",
        //     		8: "octagon",
        //     		9: "nonagon",
        //     		10: "decagon",
        //     	}
        //     	return obj[n]
        //     }
        //     console.log(nSidedShape(3));
        //     console.log(nSidedShape(1));
        //     console.log(nSidedShape(9));



/*3.Привет; Привет, мир; Мир
Напишите функцию, которая принимает целое число и:
Если число кратно 3, вернуть "Hello".
Если число кратно 5, вернуть "World".
Если число кратно и 3, и 5, вернуть "Hello World".*/
    
        // function helloWorld(num) {
        // 	if (num % 3 == 0 && num % 5 == 0) {
        // 		return "Hello World";
        // 	} else if (num % 3 == 0) {
        // 		return "Hello";
        // 	} else if (num % 5 == 0) {
        // 		return "World";
        // 	}
        // }
        // console.log(helloWorld(3))
        // console.log(helloWorld(5))
        // console.log(helloWorld(15))


// 4- Объем пиццы

        // function volPizza(radius, height) {
        // 	return Math.round(radius*radius*height*Math.PI)	
        // }
        // console.log(volPizza(1, 1))
        // console.log(volPizza(7, 2))
        // console.log(volPizza(10, 2.5))


// 5- Сумма больше пяти

        // function sumFive(arr) {
        // 	let sum = 0
        // 	for (let i=0; i<arr.length; i++){
        // 		if(arr[i]>5){
        // 		sum += arr[i] 
        // 		}
        // 	}
        // 	return sum
        // }
        // console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
        // console.log(sumFive([1, 2, 3, 4]));
        // console,log(sumFive([10, 12, 28, 47, 55, 100]));



// 6.Пробелы между каждым символом

    // function spaceMeOut(str) {
    // 	return str.split('').join(' ')
    // }
    // console.log(spaceMeOut("space"));
    // console.log(spaceMeOut("far out"));
    // console.log(spaceMeOut("elongated musk"));



// 7.Дан массив целых чисел, определить, является ли сумма его элементов четной или нечетной.


        // function evenOrOdd(arr) {
        // 	let  sum=0
        // 	for(let i=0; i<arr.length; i++){
        // 		sum+=arr[i]
        // 	}
        // 	if(sum%2==0){
        // 	return "even"
        // 	}
        // 	return "odd"
        // }
        // console.log(evenOrOdd([0]))
        // console.log(evenOrOdd([1]))
        // console.log(evenOrOdd([]))
        // console.log(evenOrOdd([0, 1, 5]))




// 8 Напишите две функции:

//toInt(): Функция для преобразования строки в целое число.
//toStr(): Функция для преобразования целого числа в строку.

        // function toInt(str) {
        // 	return parseInt(str)
        // }

        // function toStr(int) {
        // 	return int.toString()
            
        // }
        // console.loga(toInt("77"))
        // console.log(toInt("532"))
        // console.log(toStr(77))
        // console.log(toStr(532))




// 9.Создайте функцию, которая принимает массив и возвращает сумму всех чисел в массиве.

        // function getSumOfItems(arr) {
        //     let  sum=0
        //     for(let i=0; i<arr.length; i++){
        //          sum+=arr[i]
        //       }
        //   return sum;
        // }
        // console.log(getSumOfItems([2, 7, 4]))
        // console.log(getSumOfItems([45, 3, 0]))
        // console.log(getSumOfItems([-2, 84, 23]))

    

// 10. Создайте функцию, которая будет помещать первый аргумент, символ, между каждым словом второго аргумента, строки.

        // function add(char, str) {
        // 	return str.split(' ').join(char);
        // }
        // console.log(add("R", "javascript is fun"));
        // console.log(add("#", "hello world!"));
        // console.log(add("#", " "));


// 11.Напишите функцию, которая принимает два числа и возвращает результат, если их нужно сложить, 
//вычесть, умножить или разделить, чтобы получить 24. Если ни одна из операций не может дать 24, верните null.

        // function operation(num1, num2) {
        // 	if (num1 + num2 == 24) {return "added"}
        // 	if (num1 - num2 == 24) {return "subtracted"}
        // 	if (num1 * num2 == 24) {return "multiplied"}
        // 	if (num1 / num2 == 24) {return "divided"}
        // 	return null
        // }
        // console.log(operation(15, 9));
        // console.log(operation(26, 2));
        // console.log(operation(11, 11));
        // console.log(operation(8, 3));
        // console.log(operation(48, 2));


// 12. Вам даны два числа aи b. Создайте функцию, которая возвращает следующее число, которое больше aи bи делится на b.

        // function divisibleByB(a, b) {
        // 	let sum = 0;
        // 	for(let i = 0; i < b; i++) {

        // 		if((a + i) % b === 0) {
        // 			sum += a + i;
        // 		}
        // 	}
        // 	return sum
        // }
        // console.log(divisibleByB(17, 8))
        // console.log(divisibleByB(98, 3))
        // console.log(divisibleByB(14, 11))

// 13.Деструктурирующее присвоение (игнорирование значений)

        // writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8]
        // let [first, ,,,,,,last] = [1, 2, 3, 4, 5, 6, 7, 8]

// 14.Создайте функцию, которая вычисляет расстояние, которое должен пройти Джеймс, чтобы вернуться домой.

        // function distanceHome(arr) {
        // 	let sum = 0;
        // 	for ( let i = 0; i < arr.length; i++){
        // 		sum += arr[i]; 
        // 	}
        // 	return Math.abs(sum);
        // }
        // console.log(distanceHome([2, 4, 2, 5]))
        // console.log(distanceHome([-1, -4, -3, -2]))
        // console.log(distanceHome([3, 4, -5, -2]))

// 15.Создайте функцию, которая принимает три числа в качестве 
//аргументов и возвращает значение, trueесли это треугольник, а falseесли нет.

        // function isTriangle(a, b, c) {
        // 	if ((a + b > c) && (b + c > a) && (a + c > b)) {
        // 		return true;
        // 	}
        // 	return false;

        // }
        // console.log(isTriangle(2, 3, 4))
        // console.log(isTriangle(3, 4, 5))
        // console.log(isTriangle(4, 3, 8))

/* 16.Вы наняли трех программистов и (надеюсь) платите им. 
Создайте функцию, которая принимает три числа (почасовая 
заработная плата каждого программиста) и возвращает 
разницу между самым высокооплачиваемым программистом и самым низкооплачиваемым.*/

        // function programmers(one, two, three) {
        // 	let max = Math.max(one,two,three);
        // 	let min = Math.min(one,two,three);
        // 	return max - min;
        // }
        // console.log(programmers(147, 33, 526))
        // console.log(programmers(33, 72, 74))
        // console.log(programmers(1, 5, 9))


// 17.Для заданного значения pH вернуть значение "alkaline"(больше 7), 
//"acidic"(меньше 7) или "neutral"(7). Возврат, "invalid"если заданное значение меньше 0 или больше 14 .

        // function pHName(pH) {

        // 	if(pH < 0 || pH > 14){
        // 	return "invalid"
        // 	}
        // 	else if(pH > 7) {
        // 	return "alkaline"
        // 	}
        // 	else if(pH < 7) {
        // 		return "acidic"
        // 	}
        // 	return "neutral"
        // }
        // console.log(pHName(5));
        // console.log(pHName(8.7));
        // console.log(pHName(7));


// 18.Бурные аплодисменты

        // function countClaps(str) {
        // 	let cnt = 0;
        // 	for(let i=0; i<str.length; i++){
        // 		if(str[i] == "C"){
        // 			cnt++;
        // 		}
        // 	}return cnt;
        // }
        // console.log(countClaps("ClaClaClaClap!"));
        // console.log(countClaps("ClClClaClaClaClap!"));
        // console.log(countClaps("CCClaClClap!Clap!ClClClap!"));


// 19.Учитывая число, вернуть общую сумму этого числа, умноженную на каждое число от 1 до 10.

        // function multiSum(num,ten=10) {
        // 	let sum =0
            
        // 	for (let i = 1; i <= 10; i++){
        // 		sum += num * i
        // 	}
            
        // 	return sum;
        // }
        // console.log(multiSum(10))
        // console.log(multiSum(8))
        // console.log(multiSum(2))

// 20. Создайте функцию, которая принимает массив чисел и возвращает сумму его кубов.

        // function sumOfCubes(nums) {
        // 	let sum=0;
        // 	for(let i=0; i<nums.length; i++){
        // 		sum += nums[i] * nums[i] * nums[i];
        // 	}
        // 	return sum;
        // }
        // console.log(sumOfCubes([3, 4, 5]));
        // console.log(sumOfCubes([2]));
        // console.log(sumOfCubes([]));