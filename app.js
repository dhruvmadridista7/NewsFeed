const yargs = require('yargs');
const fs = require('fs');
const news = require('./news');

yargs.command({
    command:'sign_up',
    describe:'create user',
    builder:{
        uname:{
            describe:'userId',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        }
    },
    handler(argsv){
        news.addUser(argsv.uname,argsv.pass);
    }
});

yargs.command({
    command:'follow',
    describe:'follow user',
    builder:{
        from:{
            describe:'your userId',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        },
        to:{
            describe:'follower user id',
            demandOption:true,
            type:'string'
        }
    },
    handler(argsv){
        news.followUser(argsv.from,argsv.pass,argsv.to);
    }
});

yargs.command({
    command:'Add_Post',
    describe:'Create the News',
    builder:{
        user:{
            describe:'userId : ',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        },
        title:{
            describe:'Title : ',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Discription : ',  
            demandOption:true,
            type:'string'
        },
        upVote:{
            describe:'like the post',
            demandOption:true,
            type:'let'
        },
        downVote:{
            describe:'dislike the post',
            demandOption:false,
            type:'let'
        },
        comment:{
            describe:'Add comment : ',
            demandOption:false,
            type:[]
        }
    },
    handler(argsv){
        news.addPost(
            argsv.user,
            argsv.pass,
            argsv.title,
            argsv.body,
            argsv.upVote,
            argsv.downVote,
            argsv.command
        );
    }
});

yargs.command({
    command:'Feed',
    describe:'Getting All Users News',
    builder:{
        user:{
            describe:'your userID:',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        }
    },
    handler(argsv){
        news.userFeed(argsv.user,argsv.pass);
    }
});

yargs.command({
    command:'Profile',
    describe:'Getting All your posts',
    builder:{
        user:{
            describe:'your userID:',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        }
    },
    handler(argsv){
        news.userProfile(argsv.user,argsv.pass);
    }
});

yargs.command({
    command:'Comment',
    describe:'Say something about the post',
    builder:{
        yourId:{
            describe:'Your UserId',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        },
        user:{
            describe:'user name',
            demandOption:true,
            type:'string'
        },
        postTitle:{
            describe:'Enter the title of the News',
            demandOption:true,
            type:'string'
        },
        Comment:{
            describe:'Enter the comment',
            demandOption:true,
            type:'string'
        }
    },
    handler(argsv){
        news.addComment(argsv.yourId,argsv.pass,argsv.user,argsv.postTitle,argsv.Comment);
    }
});

yargs.command({
    command:'upVote',
    describe:'upVote the post:',
    builder:{
        yourId:{
            describe:'Your UserId',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        },
        user:{
            describe:'user name',
            demandOption:true,
            type:'string'
        },
        postTitle:{
            describe:'Enter the title of the News',
            demandOption:true,
            type:'string'
        },
        upVote:{
            describe:'upVote the post',
            demandOption:true,
            type:'let'
        }
    },
    handler(argsv){
        news.upVotePost(argsv.yourId,argsv.pass,argsv.user,argsv.postTitle,argsv.upVote);
    }
});

yargs.command({
    command:'downVote',
    describe:'downVote the post:',
    builder:{
        yourId:{
            describe:'Your UserId',
            demandOption:true,
            type:'string'
        },
        pass:{
            describe:'pass',  
            demandOption:true,
            type:'string'
        },
        user:{
            describe:'user name',
            demandOption:true,
            type:'string'
        },
        postTitle:{
            describe:'Enter the title of the News',
            demandOption:true,
            type:'string'
        },
        downVote:{
            describe:'downVote the post',
            demandOption:true,
            type:'let'
        }
    },
    handler(argsv){
        news.downVotePost(argsv.yourId,argsv.pass,argsv.user,argsv.postTitle,argsv.downVote);
    }
});


yargs.parse();
