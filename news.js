const chalk = require('chalk');
const fs = require('fs');

//ADD USER
const addUser=(uname,pass)=>{
    //For adding users into All Users file  
    const usersFile = loadFiles("users");
    const duplicateUser = usersFile.find((user)=>user.uname===uname); 

    if(!duplicateUser){
        usersFile.push({
            uname:uname,       
            pass:pass
        })
        saveUser(usersFile,"users");
    }else{
        console.log('userName already exists!!!');
        return;
    }

    //Create a seperate file for user
    const newUserData = loadFiles(uname);
    if(!duplicateUser){
        newUserData.push({
            uname:uname,
            pass:pass
        })
        newUserData.push({
            follow : []
        });
        saveUser(newUserData,uname); 
        console.log(chalk.green('user Successfully added!'));
    }
}
const saveUser=(newUserData,uname)=>{
    const dataJson = JSON.stringify(newUserData);
    fs.writeFileSync(`${uname}.json`,dataJson);
}

//FOLLOOW USER
const followUser=(from,pass,to)=>{
    const fromUser = loadFiles(from);
    const users = loadFiles("users");

    let check = false;
    if(fromUser[0].uname === from && fromUser[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    users.forEach((user) => {
        if(user.uname === to){
            fromUser[1].follow.push(to);
            savePost(fromUser,from);
            console.log(`Successfully follow ${to}`);
        }
    });
}


//ADD POST
const addPost=(user,pass,title,body,upVote,downVote,comment)=>{
    const userFile = loadFiles(user);

    let check = false;
    if(userFile[0].uname === user && userFile[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }
    
    userFile.push({
        title : title,
        body : body,         
        comment:[],
        upVote:upVote,
        downVote:0
    })
    savePost(userFile,user);
    console.log("User : ",user);
    console.log("Title of the post : ",title);
    console.log("News : ", body);
    console.log("UpVotes : ",upVote);
    console.log("DownVotes : ",downVote);
    console.log("comments : ",comment);
    
    console.log(chalk.green('Posted Successfully'));
}
const savePost=(userData,user)=>{
    const dataJson = JSON.stringify(userData);
    fs.writeFileSync(`${user}.json`,dataJson);
}

//Show Feed
const userFeed=(user,pass)=>{
    const userFeed = loadFiles(user);

    let check = false;
    if(userFeed[0].uname === user && userFeed[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    var set = new Set();
    set.add(user);
    console.log(chalk.green('Your Feed'));
    console.log(chalk.green('Followed users posts'));
    
    const followedUsers = userFeed[1].follow;
    for(let i = 0;i<followedUsers.length;++i){
        const follower = loadFiles(followedUsers[i]);
        set.add(followedUsers[i]);
        for(let post = 2;post < follower.length;++post){
            console.log("User : ",followedUsers[i]);
            console.log("Title of the post : ",follower[post].title);
            console.log("News : ", follower[post].body);
            console.log("UpVotes : ",follower[post].upVote);
            console.log("DownVotes : ",follower[post].downVote);
            const comment = follower[post].comment;
            console.log("comments : ");
            for(let c = 0;c<comment.length;++c){
                console.log(comment[c]);
            }
            console.log("\n");
        }
    }

    console.log("=====================================");
    console.log(chalk.green('Rest All users posts'));
    const allUsers = loadFiles("users");
    allUsers.forEach((x) => {
        if(set.has(x.uname)){
            return;
        }
        const noFollower = loadFiles(x.uname);
        console.log("User : ",x.uname);
        set.add(x.uname);
        for(let post = 2;post < noFollower.length;++post){
            console.log("Title of the post : ",noFollower[post].title);
            console.log("News : ", noFollower[post].body);
            console.log("UpVotes : ",noFollower[post].upVote);
            console.log("DownVotes : ",noFollower[post].downVote);
            const comment = noFollower[post].comment;
            console.log("comments : ");
            for(let c = 0;c<comment.length;++c){
                console.log(comment[c]);
            }
            console.log("\n");
        }
    });
}

//CHECK PROFILE
const userProfile=(user,pass)=>{
    const profile = loadFiles(user);

    let check = false;
    if(profile[0].uname === user && profile[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    console.log(chalk.green('Your Profile'));
    console.log("Users you followed : ",profile[1].follow);
    for(let post = 2;post < profile.length;++post){
        console.log("Title of the post : ",profile[post].title);
        console.log("News : ", profile[post].body);
        console.log("UpVotes : ",profile[post].upVote);
        console.log("DownVotes : ",profile[post].downVote);
        const comment = profile[post].comment;
        console.log("comments : ");
        for(let c = 0;c<comment.length;++c){
            console.log(comment[c]);
        }
        console.log("\n");
    }
}

//Add comment
const addComment=(yourId,pass,user,postTitle,comment) => {
    const login = loadFiles(yourId);

    let check = false;
    if(login[0].uname === yourId && login[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    const userPost = loadFiles(user);
    let flag = true;
    userPost.forEach((x) => {
        if(x.title === postTitle)
        {
            var obj = {};
            obj[yourId] = comment;
            x.comment.push(obj);
            savePost(userPost,user);
            console.log(x);
            console.log(chalk.green('Comment added in the Post'));
            flag = false;
        }
    });
    if(flag){
        console.log(`This ${postTitle} post is not there`);
    }
}

//UPVOTE THE POST
const upVotePost=(yourId,pass,user,postTitle,upVote) => {
    const login = loadFiles(yourId);

    let check = false;
    if(login[0].uname === yourId && login[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    const userPost = loadFiles(user);
    let flag = true;
    userPost.forEach((x) => {
        if(x.title === postTitle)
        {
            if(upVote % 2){
                x.upVote += upVote;
            }
            savePost(userPost,user);
            console.log(x);
            console.log(chalk.green('Successfully Upvoted the post'));
            flag = false;
        }
    });
    if(flag){
        console.log(`This ${postTitle} post is not there`);
    }
}

//DOWNVOTE THE POST
const downVotePost=(yourId,pass,user,postTitle,downVote) => {
    const login = loadFiles(yourId);

    let check = false;
    if(login[0].uname === yourId && login[0].pass === pass){
        check = true;
    }
    if(!check){
        console.log("user name or pass is wrong");
        return;
    }

    const userPost = loadFiles(user);
    let flag = true;
    userPost.forEach((x) => {
        if(x.title === postTitle)
        {
            if(downVote % 2){
                x.downVote += downVote;
            }
            savePost(userPost,user);
            console.log(x);
            console.log(chalk.green('Successfully Downvoted the post'));
            flag = false;
        }
    });
    if(flag){
        console.log(`This ${postTitle} post is not there`);
    }
}

const loadFiles=(user)=>{
    try{
        const dataBuffer = fs.readFileSync(`${user}.json`);//add new file every time user creates
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e)
    {
        return [];
    }
}

module.exports = {
    addUser:addUser,
    addPost:addPost,
    userFeed:userFeed,
    addComment:addComment,
    upVotePost:upVotePost,
    downVotePost:downVotePost,
    followUser:followUser,
    userProfile:userProfile
}