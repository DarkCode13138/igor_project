// const a = 10
// const b = 12
// let c = 32
// c += a;
// c = c + a;
// console.log(c)
//
// const fullAge = 30
// const birthYear = 1991
// const currentYear = 2022
// const isFullAge = currentYear - birthYear === fullAge;
//
//
// ///////////////////////
//
//
// const courseStatus = 'ready'
// if (courseStatus === 'ready') {
//     console.log("Course is ready");
// } else if (courseStatus === 'pending') {
//     console.log("Course is not ready")
// } else {
//     console.log('Course is Failed');
// }
//
// function calculateAge(year) {
//     return 2022 - year
// }
//
// function infoAbout(name, year) {
//     const age = calculateAge(year)
//     console.log('has name ' + name, 'Has years' + age);
// }
//
// infoAbout('Igor', 1991);
//
// ///////////////////////////////////
//
// const link = document.getElementById('js-link__el')
// setTimeout(() => {
//     addStyleTo(link, 'Практикуй')
// }, 2000)
//
// function addStyleTo(node, text) {
//     link.textContent = text
//     link.style.color = 'yellow'
//     link.style.backgroundColor = 'green'
//     link.style.textAlign = 'center'
// }
//
// link.onclick = function () {
//     if (link.style.color === 'yellow') {
//         link.style.color = 'darkblue'
//         link.style.backgroundColor = 'grey'
//     } else {
//         link.style.color = 'yellow'
//         link.style.backgroundColor = 'green'
//     }
//
// }
//
// ////////////////////////////////////////////////////
//
// const links = document.getElementById('js-link__el-2')
// setTimeout(() => {
//     styleToCss(links, 'Java Script')
// }, 2000)
//
// function styleToCss(into, text) {
//     into.textContent = text
//     into.style.color = 'red'
//     into.style.backgroundColor = 'black'
//     into.style.textAlign = 'center'
// }
//
// links.onclick = function () {
//     if (links.style.color === 'red') {
//         links.style.color = 'black'
//         links.style.backgroundColor = 'Yellow'
//     } else {
//         links.style.color = 'red'
//         links.style.backgroundColor = 'black'
//     }
// }
//
// /////////////////////////////////////////
//
// const box = document.getElementById('js-box');
// box.style.width = '500px';
// box.style.height = '200px';
// box.style.backgroundColor = 'blue';
// setTimeout(() => {
//     changeStyle(box, ('bye bye'.toUpperCase()), 'Black')
// }, 2000)
//
// function changeStyle(change, text, color) {
//     change.style.backgroundColor = 'red'
//     change.textContent = text
//     change.style.width = '100%'
//     change.style.height = '200px'
//     change.style.textAlign = 'center'
//     change.style.color = color
// }
//
// box.onclick = function () {
//     if (box.style.width === '100%') {
//         box.style.width = '200px'
//         box.style.margin = '0 auto'
//         box.style.borderRadius = '10px'
//
//     } else {
//         box.style.width = '100%'
//         box.style.borderRadius = '0px'
//     }
//
// }
// //////////////////////////////////////////////////////////
//
//
// const title = document.getElementById('js-title')
// title.style.fontSize = '60px'
// title.style.textAlign = 'center'
// title.style.color = 'brown'
// title.style.backgroundColor = 'green'
// setTimeout(() => {
//     changeStyleTitle(title, 'black', '80px')
// }, 2000)
//
// function changeStyleTitle(changeStyleCss, color, fontSize) {
//     changeStyleCss.style.color = color
//     changeStyleCss.style.fontSize = fontSize
//
// }
//
// title.onclick = function () {
//     if (title.style.backgroundColor === 'green') {
//         title.style.backgroundColor = 'black'
//         title.style.color = 'white'
//     } else {
//         title.style.backgroundColor = 'green'
//         title.style.color = 'black'
//     }
// }
// /////////////////////////////////
//
//
// const subTitle = document.getElementById('js-sub_title');
// subTitle.style.color = 'black'
// subTitle.style.backgroundColor = 'grey'
// subTitle.style.margin = ' 0 auto'
// subTitle.style.textAlign = 'center'
// subTitle.style.width = '500px'
// subTitle.style.fontSize = '100px'
//
//
// setTimeout(() => {
//     changeSubTitle(subTitle)
// }, 6000)
//
// function changeSubTitle(changeSub) {
//     changeSub.style.fontSize = '80px'
//     changeSub.style.backgroundColor = 'lightgrey'
//     changeSub.style.color = 'red'
// }
//
//
// subTitle.onclick = function () {
//     if (subTitle.style.color === 'red') {
//         subTitle.style.color = 'black'
//         subTitle.style.backgroundColor = 'red'
//
//     } else {
//         subTitle.style.color = 'red'
//         subTitle.style.backgroundColor = 'lightgrey'
//
//     }
// }
//
// ////////////////////////////////////////////////
//
// const footer = document.getElementById('js-footer');
// footer.style.color = 'red'
// footer.style.backgroundColor = 'green'
// footer.style.width = '50%'
// footer.style.margin = '0 auto'
// footer.style.fontSize = '80px'
//
// setTimeout(() => {
//     footerStyle(footer)
// }, 4000)
//
// function footerStyle(footerChange) {
//     footerChange.style.color = 'brown'
//     footerChange.style.textAlign = 'center'
// }
//
// footer.onclick = function () {
//     if (footer.style.color === 'brown') {
//         footer.style.color = 'red'
//         footer.style.backgroundColor = 'black'
//     } else {
//         footer.style.color = 'brown'
//         footer.style.backgroundColor = 'green'
//     }
// }
//
//
// const status = 'ready';
// if (status === 'ready') {
//     console.log('everything is ready');
// } else if (status === 'success') {
//     console.log('Everything is done');
// } else {
//     console.log('Everything is failed');
// }
//const subFooter = document.getElementById('js-subFooter');
// // subFooter.style.text = 'good bye'
// // subFooter.style.color = 'white'
// // subFooter.style.textAlign = 'center'
// // subFooter.style.backgroundColor = 'black'
// // subFooter.style.margin = '0 auto'
// // subFooter.style.width = '100%'
// // subFooter.style.height = '100px'
// // subFooter.style.fontSize = '50px'
// // subFooter.style.paddingTop = '20px'
// //
// // subFooter.addEventListener('dblclick', () => {
// //     if (subFooter.style.color === 'white') {
// //         subFooter.style.color = 'black'
// //         subFooter.style.backgroundColor = 'white'
// //     } else {
// //         subFooter.style.color = 'white'
// //         subFooter.style.backgroundColor = 'black'
// //     }
// // })
// //
// // /////////////////////////////////////////////////
// //
// // const subSubFooter = document.getElementById('js-yahoo');
// // subSubFooter.style.color = 'Red'
// // subSubFooter.style.fontSize = '50px'
// // subSubFooter.style.textAlign = 'center'
// // subSubFooter.style.backgroundColor = 'black'
// //
// // setTimeout(() => {
// //     changeStyle(subSubFooter)
// // }, 1000)
// //
// // function changeStyle(changeText) {
// //     changeText.style.color = 'grey'
// // }
// //
// // subSubFooter.addEventListener('dblclick', () => {
// //     if (subSubFooter.style.color === 'red') {
// //         subSubFooter.style.color = 'White'
// //         subSubFooter.style.backgroundColor = 'red'
// //     } else {
// //         subSubFooter.style.color = 'red'
// //         subSubFooter.style.backgroundColor = 'black'
// //     }
// // })
// //
// // const info = document.querySelector('.info');
// // info.style.color = 'Red'
// // info.style.fontSize = '100px'
// // info.style.textAlign = 'center'
// // changeStyle(info)
// //
// // function changeStyle(changeColor) {
// //     changeColor.style.color = 'Blue'
// // }
//
//
// // const name = 'Igor'
// // const age = 30
// //
// // function getAge() {
// //     return age
// // }
// //
// // const outPut = `my name is ${name} , and i am ${getAge >= 31 ? 'A' : 'D'} years old`; // тернарная логика
// // console.log(outPut);
// // /////////////////////////
// //
// //
// // const put = ` fg  gfg 12 490 -p[; `
// // console.log(put.length)
// //
// // /////////////////////////
// //
// //
// // const city = 'City'
// // console.log(city.toUpperCase())
// // console.log(city.toLowerCase())
//
// // const div = document.createElement("div");
// // div.classList.add('wrapper')
// // const body = document.body
// // body.appendChild(div)
// // const  header =document.createElement('h1')
// // header.textContent = 'Hello world'
// // div.insertAdjacentElement("beforebegin", header)
// // const ul = `
// //    <ul>
// //    <li>1</li>
// //    <li>2</li>
// //    <li>3</li>
// // </ul>`
// // div.innerHTML = ul
//
//
// //////////////////// События ////////////////
//
// // const button = document.querySelector('.button');
// // const buttonTwo = document.querySelector('.buttonTwo');
// // const handCLick = () => {
// //     console.log('click - 2 ')
// // }
// // button.addEventListener('click', handCLick);
// // buttonTwo.addEventListener('click', handCLick);
// // buttonTwo.removeEventListener('click', handCLick)
//
// // const buttons = document.querySelectorAll('button');
// // buttons.forEach(btn => {
// //     btn.addEventListener('click', function () {
// //         console.log('cliiiiiiick')
// //     })
// // })
//
// // const buttons = document.querySelectorAll('button');
// //
// // function handleCLick(event) {
// //     console.log(event.target)
// // }
// //
// // window.addEventListener('click', function () {
// //     console.log('Widows click')
// // })
// // buttons.forEach(button => {
// //     button.addEventListener('click', handleCLick)
// // })
// //
// //
// // const work = 'pending'
// // if (work === 'ready') {
// //     console.log('Work is ready')
// // } else if (work === 'pending') {
// //     console.log('Work is not ready')
// // } else {
// //     console.log('Work is not start')
// // }
// //
// //
// // const isReady = true // false
// // if (isReady) {
// //     console.log('All is ready')
// // } else {
// //     console.log('All not ready')
// // }
// //
// // const numbers = [1, 3, 4, 5, 2]
// // numbers.sort()
// // console.log(numbers)
// //
// // let a = '1'
// // let b = 1
// // let c = a + b
// // console.log(Number(a) + Number(b))
// // console.log(a == b)
// //
// // const person = 'programmer'
// // console.log(`Igor ist ${person}`)
// //
// //
// // function user(name) {
// //     console.log('Hello', name)
// // }
// //
// // user('Nelli')
// //
// // const info = function info(name) {
// //     console.log('Hello2', name)
// // }
// // info('Nelli2')
// //
// //
// // let client = 'cute'
// // console.log(`Nelli is ${client}`)
// //
// //
// // const name = 'Igor'
// // const age = 30
// //
// // function getAge() {
// //     return age
// // }
// //
// // const outPut = `my name is ${name} , and i am ${getAge >= 29 ? 'A' : 'D'} years old`; // тернарная логика
// // console.log(outPut);
// //
// //
// // let counter = 0
// // setInterval(function () {
// //     if (counter === 3) {
// //     } else {
// //         console.log(++counter)
// //     }
// // }, 1000)
// //
// //
// // const userName = function userName(nickname) {
// //     console.log('Nelli', nickname)
// // }
// // userName('Hammer31')
// //
// // function userLogin(Login) {
// //     console.log('password', Login)
// // }
// //
// // userLogin('my login')
// //
// // const titleText = document.getElementById('js-titleText');
// // titleText.style.fontSize = '50px'
// // titleText.style.color = 'red'
// // titleText.style.textAlign = 'center'
// // titleText.style.backgroundColor = 'white'
// //
// // titleText.addEventListener('click', () => {
// //     if (titleText.style.backgroundColor === 'white') {
// //         titleText.style.backgroundColor = 'black'
// //     } else {
// //         titleText.style.backgroundColor = 'white'
// //     }
// // })
// //
// // let num = 442
// // num = 'str'
// // console.log(num)
//
// // const name = 'Igor'
// // const age = 30
// //
// // function getAge() {
// //     return age
// // }
// //
// // function getName() {
// //     return name
// // }
//
// // const output = `My name is ${name} and i am ${age > 31 ? 'A' : 'B'} years old`
// // console.log(output.toUpperCase())
// // if (age === 30) {
// //     console.log(true)
// // } else {
// //     console.log(false)
// // }
//
// // const name = 'Igor'
// // console.log(name.length) /// length сколько символов в строке
// // console.log(name.charAt(2))  // Что находится на 2 индексе
// // console.log(name.indexOf('or')) // есть ли такие символы or
// // console.log(name.startsWith('Ig')) // начинается ли строка символом Ig
// // console.log(name.endsWith('r')) // заканчивается ли строка на R
// // console.log(name.repeat(2).toUpperCase()) //
// //
// // const string = '   password    '
// // console.log(string.trim())
// // console.log(string.trimRight())
// // console.log(string.trimLeft())
//
//
// // const buttons = document.querySelectorAll('button');
// //
// // function handleCLick(event) {
// //     console.log(event.target)
// // }
// //
// // window.addEventListener('click', function () {
// //     console.log('Widows click')
// // })
// // buttons.forEach(button => {
// //     button.addEventListener('click', handleCLick)
// // })
// //
// //
// // const work = 'pending'
// // if (work === 'ready') {
// //     console.log('Work is ready')
// // } else if (work === 'pending') {
// //     console.log('Work is not ready')
// // } else {
// //     console.log('Work is not start')
// // }
// //
// //
// // const isReady = true // false
// // if (isReady) {
// //     console.log('All is ready')
// // } else {
// //     console.log('All not ready')
// // }
// // let a = document.getElementById('btn')
// // setInterval(() => {
// //     a.style.backgroundColor = 'red'
// //     a.style.fontSize = '20px'
// // }, 3000)
// //
// // function colorChange() {
// //     if (a.style.backgroundColor === 'red') {
// //         a.style.backgroundColor = 'yellow'
// //     } else {
// //         a.style.backgroundColor = 'red'
// //     }
// // }
//
// // let btn = document.getElementById('button2')
// // btn.style.textAlign = 'center'
// // btn.style.backgroundColor = 'white'
// // btn.style.backgroundColor = 'Red'
// //
// // function changeStyle() {
// //     if (btn.style.backgroundColor === 'white') {
// //         btn.style.backgroundColor = 'black'
// //         btn.style.color = 'brown'
// //     } else {
// //         btn.style.backgroundColor = 'white'
// //         btn.style.color = 'Red'
// //     }
// // }
//
//
// // const isReady = false
// // if (isReady) {
// //     console.log('All is ready')
// // } else {
// //     console.log('All not ready')
// // }
// // console.log(typeof isReady)
//
// // isReady ? console.log('All is ready') : console.log('All not ready') // Тернарное выражение
//
//
// ////// function /////
//
// // function calculateAge(year) {
// //     return 2022 - year
// // }
// //
// // function infoAboutMe(name, year) {
// //     const age = calculateAge(year)
// //     if (age >= 0) {
// //         console.log('Its me')
// //     } else {
// //         console.log('its not me')
// //     }
// // }
// //
// // infoAboutMe('Igor', 2023)
//
//
// /////// Массивы //////
//
//
// // const colors = [ 'red' , 'yellow' , 'black']  //// 1 способ
// // const colors = new Array('red' , 'yellow' , 'black') /// Второй способ
// // console.log(colors)
// // console.log(colors[2])
// //
// // colors[4] = 'brown'
// // console.log(colors)
//
// ///// Циклы ////
//
// // for (let color = 0; color < colors.length; color++) {
// //     console.log(color)
// // }
//
// // const colors = ['red', 'yellow', 'black']
// // for (let color of colors) {
// //     console.log(color)
// // }
// //
// // const cities = ['berlin', 'Paris', 'London', 'Warsaw']
// // for (let city of cities) {
// //     console.log(city)
// // }
// //
// // const names = ['A', 'B']
// // for (name of names) {
// //     if (name === 'A' , 'B') {
// //         console.log('A')
// //     } else {
// //         console.log('D')
// //     }
// //     console.log(names)
// // }
// //
// // //// Обьекты
// //
// // const person = {
// //     name: 'Igor',
// //     lastName: 'Tereshko',
// //     birthAge: 1991,
// //     languages: ['Eng', 'DE', 'PL', 'RU'],
// //     isProgrammer: false,
// //     word: function () {
// //         console.log('word')
// //     }
// // }
// // console.log(person.lastName )
// //
// // let numbers = [ 1 , 3 ,4 ,2]
// //     for (number of numbers) {
// //         console.log(number)
// //         numbers.sort()
// //     }
//
// // const cars = ['Mazda', 'BMW' ,'AUdi']
// //     if (cars === 'Mazda', 'BMW') {
// //         console.log('this is true')
// //     } else {
// //         console.log('this is not true')
// //     }
//
// // const button = document.getElementById('js-button__selector')
// // const content = document.getElementById('js-content__info__selector')
// //
// //
// // addEventListener('dblclick',  () =>  {
// //     console.log('click!!!')
// //      if (content.classList.toggle('content-hidden')){
// //         button.textContent = 'Open content'
// //      } else {
// //          button.textContent = 'Close content'
// //      }
// //
// // })
//
// // const button = document.getElementById('js-button__selector')
// // const content = document.getElementById('js-content__info__selector')
// //
// // addEventListener('click', () => {
// //      if (content.classList.toggle('content-hidden')) {
// //          button.textContent = 'Open content'
// //      } else {
// //          button.textContent = 'Close content'
// //      }
// // })
//
//
// // const button = document.getElementById('js-button-selector')
// // const content = document.getElementById('js-content-info')
// //
// // addEventListener('click', () => {
// //     if (content.classList.toggle('content-hidden')) {
// //         button.textContent = 'Open content'
// //     } else {
// //         button.textContent = 'Close content'
// //     }
// // })
// //
// // const a = 4
// // let b = '2'
// // let c = +a + b
// //
// // console.log(c)
// // if (c < b){
// //     console.log('this is true')
// // } else  {
// //     console.log('this is not true')
// // }
//

const col = document.querySelectorAll('.column')
const title = document.querySelector('.text-wrapper')

// function generate() {
//     const codeColors = '0123456789ABCDEF'
//     let color = ""
//     for (let i = 0; i < 6; i++) {
//         color += codeColors[Math.floor(Math.random() * codeColors.length)]
//     }
//     return '#' + color
// }

function closeText() {
    setInterval(() => {
        title.onclick = function () {
            title.style.opacity = '0'
            title.style.transition = '.4s'
        }
    }, 500)
}

closeText()

addEventListener('click', function () {
    function randomColors() {
        col.forEach(function (column) {
            const text = column.querySelector('.color-code')
            const color = chroma.random()
            text.textContent = color
            column.style.backgroundColor = color
            column.style.transition = '.4s'

            setTextColor(text, color)
        })
    }

    function setTextColor(text, color) {
        const luminance = chroma(color).luminance()
        if (text.style.color = luminance >= .7) {
            text.style.color = 'black'
        } else {
            text.style.color = 'white'
        }
    }

    randomColors()
})


// const num = function (number) {
//     return number + 4
// }
// console.log(num(2))
//
// console.log(funk1('he'))
//
// function funk1(string) {
//     return string + 'llo'
// }


