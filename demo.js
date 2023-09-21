let sentToAirport = true;//simulate the order execution result

//1.create a promise object
let p = new Promise(function (resolve, reject) {
    //2.if the driver sent the user to the airport - resolve
    //3.the driver cancelled the order - reject

    if (sentToAirport) {
        resolve("from resolve(): sent to airport");//then what?
    } else {
        reject("from reject(): order canceled");//then what? ---> js 函数会报错,为了处理这个报错，需要在以下的then后写catch
    }
});

// 只有在promise结果是resolve的时候才执行这个！
p
    .then(function (message) {
        console.log(`${message} - promise resolved`)
    })
    .catch(function () {
        console.log(`${message} - promise rejected`)
    });

//一般需要从promise中返回一些值，不然使用promise就没有什么意义了
let users = fetch("https://jsonplaceholder.typicode.com/users")
//fetch will return a promise object
users.
    then(function (userData) {
        return userData.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    });