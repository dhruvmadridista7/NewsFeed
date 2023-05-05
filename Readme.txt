//add show feed after sign_up

1) Sign Up :
command:
node .\app.js sign_up --uname "Enter user name" --pass "Enter Password"
Example:
node .\app.js sign_up --uname "varun" --pass "Varun123"

user Successfully added!

2) Follow :
command:
node .\app.js follow --from "Your user name" --pass "Your Password" --to "Who you want to follow"
Example:
node .\app.js follow --from "varun" --pass "Varun123" --to "nikhil"

Successfully follow nikhil

3) Add Post :
command:
node .\app.js Add_Post --user "your user name" --pass "Your Password" --title "Title of news" --body "description of news" --upVote 1/0
Example:
node .\app.js Add_Post --user "varun" --pass "Varun123" --title "AWS Blog" --body "AWS is largest cloud platform" --upVote 1

User :  varun
Title of the post :  AWS Blog
News :  AWS is largest cloud platform
UpVotes :  1
DownVotes :  undefined
comments :  undefined
Posted Successfully

4) Comment : 
command :
node .\app.js Comment --yourId "your userID" --pass "Your Password" --user "userID of post person" --postTitle "Title of post" --Comment "Add comment"
Example: 
node .\app.js Comment --yourId "nikhil" --pass "nikhil" --user "varun" --postTitle "AWS Blog" --Comment "But Azure is on the way"

{
  title: 'AWS Blog',
  body: 'AWS is largest cloud platform',
  comment: [ { dhruv: 'Yes it is' }, { nikhil: 'But Azure is on the way' } ],
  upVote: 1,
}
Comment added in the Post

5) Upvote the post:
command:
node .\app.js upVote --yourId "Your User ID" --pass "Your Password" --user "Post's userId" --postTitle "title of post" --upVote 1
Example:
node .\app.js upVote --yourId "nikhil" --pass "nikhil" --user "varun" --postTitle "AWS Blog" --upVote 1

{
  title: 'AWS Blog',
  body: 'AWS is largest cloud platform',
  comment: [ { dhruv: 'Yes it is' }, { nikhil: 'But Azure is on the way' } ],
  upVote: 2,
}
Successfully Upvoted the post

6) Downvote the post : 
command:
node .\app.js downVote --yourId "Your User ID" --pass "Your Password" --user "Post's userId" --postTitle "title of post" --downVote 1
Example:
node .\app.js downVote --yourId "nikhil" --pass "nikhil" --user "varun" --postTitle "AWS Blog" --downVote 1

{
  title: 'AWS Blog',
  body: 'AWS is largest cloud platform',
  comment: [ { dhruv: 'Yes it is' }, { nikhil: 'But Azure is on the way' } ],
  upVote: 2,
  downVote: 1
}
Successfully Downvoted the post

7) Show Feed :                                        
command:
node .\app.js Feed --user "your userID" --pass "Your Password"
Example:
node .\app.js Feed --user "varun" --pass "Varun123"

Your Feed
Followed users posts
User :  dhruv
Title of the post :  2nd post
News :  hello there
UpVotes :  3
DownVotes :  1
comments :
{ nikhil: 'first comment' }
{ himanshu: 'second comment' }
{ nikhil: 'third comment' }


User :  dhruv
Title of the post :  Random
News :  Add comment Post
UpVotes :  2
DownVotes :  1
comments :
{ himanshu: 'first comment' }
{ nikhil: 'second comment' }
{ himanshu: 'third comment' }


User :  nikhil
Title of the post :  1st post
News :  cooldude
UpVotes :  2
DownVotes :  1
comments :
{ dhruv: 'first comment' }
{ himanshu: 'second comment' }
{ dhruv: 'third comment' }


=====================================
Rest All users posts
User :  himanshu
Title of the post :  3rd post
News :  congrets on creacking Optum
UpVotes :  1
DownVotes :  1
comments :
{ dhruv: 'first comment' }
{ nikhil: 'second comment' }

8)
command:
node .\app.js Profile --user "Your user name" --pass "Your Password"
Example:
node .\app.js Profile --user "varun" --pass "Varun123"
Your Profile
Users you followed :  [ 'dhruv', 'nikhil' ]
Title of the post :  AWS Blog
News :  AWS is largest cloud platform
UpVotes :  2
DownVotes :  1
comments :
{ dhruv: 'Yes it is' }
{ nikhil: 'But Azure is on the way' }