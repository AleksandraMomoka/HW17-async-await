function timeout(data, ms) {
    return new Promise(resolve => setTimeout(function() {
        resolve(data);
    }, ms))
}

timeout({name: "user"}, 1000).then((data) => console.log("Hello!", data))

async function getUserInfo() {
    return timeout({name: 'Vic', age: 21, id: 1 },1000);
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return timeout(userInfo,1000); 
    
}
function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return timeout(userInfo,1000);
}

async function getResult() {
    let userInfo = await getUserInfo();
    await getUserAvatar(userInfo);
    await getUserAdditionalInfo(userInfo);

    console.log(userInfo);
}
getResult();


async function getUser() {
    throw new Error('error');
}
async function getInfo() {
    let user;
    try {
       user = await getUser();
    }
    catch (err) {
        console.error(err);
    }
}
 
getInfo();