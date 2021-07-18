const create= (msg) =>{
    let container = document.getElementById('Container');
    //Creating a div
    div = document.createElement('div');
    div.className = 'appr';
    //Creating msg and appending it
    p = document.createElement('p');
    p.className = 'content';
    p.textContent = msg.msg;
    div.appendChild(p);
    //creating owner and appending it
    small = document.createElement('small');
    small.className = 'by';
    small.textContent = '~'+msg.owner;
    div.appendChild(small);
    //appending div to webpage
    container.appendChild(div);
};

msg = [{
    msg:'Thank you so much ma\'am.',
    owner:'Shivam Gupta'
},
{
    msg:"Happy Birthday ma'am! I had never thought learning would be so much fun until I started learning from you. You made every stepping stone of our academic lives into something so much more beautiful than what we could've ever imagined. Thank you for your unwavering support and hardwork in making us all better people. :)",
    owner:'Rhea Menon'
},
{
    msg:"Happy Birthday Ma'am Thank you for being an excellent teacher and friend to us. We feel comfortable with you. Thank you sooo much for your undivided attention and love for all us kids in your class. We love you ma'am <3",
    owner:'Harshal Gondkar'
},
{
    msg:"To the best teacher, the most caring and friendly of them all, I wish you a happy birthday, much love, health and lovely surprises! You're a truly fantastic teacher who’s personal favourite of mine! I have nothing but gratitude for you.. <3",
    owner:'Jyoti Ghosh'
},
{
    msg:"Happy Birthday Maam, Your Lectures are really fun on top of being very grasping, even after missing previous lectures I had no doubts moving forward as your teaching made the concepts very simpler for me, Thankyou and looking forward to more of your exceptional lectures!",
    owner:'Dhananjay Tore'
},
{
    msg:'Birthdays bring new joy, new discovery, and new hope-just like teachers! Accept my warmest congratulations on your milestone birthday.',
    owner:'Aniket Gami'
},
{
    msg:"My message for Edith ma'am.Wish you many many happy returns of the day Edith ma'am. We all haven't seen each other since start of our college but from the first day itself it has been a great happiness and excitement  to attend your lecture.Thankyou so much ma'am for always supporting us ,for always understanding us and motivating us.Wishing you a very happy birthday once again",
    owner:'Varada Bapat'
},
{
    msg:"A very very Happy Birthday to you Edith Ma'am. May your life explode with blessings and love today, and may you be the happiest person in the world because you do deserve everything good in this world. I hope you continue to be the same charming, loving  supportive, frank and friendly teacher that you always are because if you dont, I don't know who's going to be the mediator between Megha ma'am and us students and I don't know who's going to let us celebrate birthday parties in lectures! Much much love",
    owner:'Madhura Bhatkar'
},
{
    msg:"Happpiesst birthday Edith ma'am! Thank you for all the fun activity sessions during the lectures and for helping us everytime, especially in the first sem in understanding and help us sync in with everyone with this online mode platform.Have a great year ahead ma'am!God bless",
    owner:'Anurag Kshirsagar'
},
{
    msg:"Age passes with days, so the birthdays. The only thing which remains behind is memories. The memories to behold!! May you be blessed with wonderful memories!! Many many happy returns of the day Edith ma'am!!",
    owner:'Fathima Hannah'
},
{
    msg:"## A teacher like you has so many great qualities, but one in particular that I respect the most is your patience. ## ## You always have time for your students and you never give up on them. You truly are as committed as you are wonderful. ## Happy birthday to you , ma'am ",
    owner:'Vaibhav Ghadi'
},
{
    msg:"Happy birthday to one of the finest teacher teaching us. Have a great day mam..And I wish you a long happy life...Thank you for teaching us.",
    owner:'Anish More'
},
{
    msg:"You are the best professor in Whole CS  department. you are very friendly with students and not strict. Because of this student feel connected to you and they can share there concerns with you without fear. Wish you many many happy return of the day...",
    owner:'Anurag Phatak'
},
{
    msg:"I love the way you teach and care for us ma'am",
    owner:'Yuvraj Zala'
},
{
    msg:"May your birthday be the start of a year filled with good luck, good health and much happiness...You are the best teacher bcoz you know very well how students thinks...happy Birthday ma'am..",
    owner:'Kunal Ganjale'
},
{
    msg:"Happy birthday Edith Ma'am!! Ma'am you are the most patient and understanding teacher I have met. I feel like you have created a teaching environment where students can ask any doubts they have and not feel embarrassed about it and I really appreciate that. Thank you ma'am for all that you have done for us",
    owner:'Bhuvaneshwaryi Raja'
},{
    msg:"A teacher like you has so many great qualities, but one in particular that I respect the most is your patience.You always have time for your students and you never give up on them. It is truly heart touching how much you care about your students and their success. I personally am very grateful for all that you do, and I know that all my classmates think that too. Happy birthday Ma'am",
    owner:'Janhavi Parab'
}];
msg.forEach(create)