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
    msg:"Happy Birthday ma'am!!! Thank you so much for making this online college fun with your lectures. Thank you for always teaching a topic because it's important and not just because it's in the syllabus. We're really lucky to have you as your teacher. Hope you have a great year ahead :)",
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
    msg:"Wish you many many happy returns of the day Edith ma'am. We all haven't seen each other since start of our college but from the first day itself it has been a great happiness and excitement  to attend your lecture.Thankyou so much ma'am for always supporting us ,for always understanding us and motivating us.Wishing you a very happy birthday once again",
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
    owner:'Fathima Hannah Azeez'
},
{
    msg:"A teacher like you has so many great qualities, but one in particular that I respect the most is your patience. You always have time for your students and you never give up on them. You truly are as committed as you are wonderful. Happy birthday to you , ma'am ",
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
},{
    msg:"Happy Birthday to our favourite and  most enthusiastic teacher of our Department . May God bless you with good health and prosperity .",
    owner:'Bhumika Vesvikar'
},{
    msg:"Thank you ma'am....for being the most patient and kind teacher. Actually thank you for being you. Being a versatile teacher you accepted a virtual mischievous class (not seeing their faces) and yet giving best to put right knowledge across... That's inspiring. Thank you for being as you are! Have a great time.",
    owner:'Tejas Pophale'
},{
    msg:"Happy Birthday Edith ma'am! We really enjoy learning when you're teaching.  Thank you ma'am for everything. Keep guiding us. Blessed to have a teacher like you!",
    owner:'Anushka Pradhan'
},{
    msg:"Happiest Birthday to you Edith maam. God may bless you with lots of blessings just like we got you as a blessing",
    owner:'Shrutika Gholap'
},{
    msg:"Happy Birthday Edith Ma'am, Thank you for being here with us to make our Academy life Special",
    owner:'Uzair Khan'
},{
    msg:"Happiest birthday Edith ma'am. May your birthday be sprinkled with fun and laughter. Have a great day and a wonderful year ahead!..",
    owner:'Ritesh Supe'
},{
    msg:"I wish you a  very Happy Birthday and many more to come! You are a teacher who cares with the kindest heart and the most beautiful soul, and I feel very grateful and fortunate to say that I have been a student of yours!",
    owner:'Sarthak Jadhav'
},{
    msg:"Happy Birthday Edith ma'am .  Thank you for your constant love and support.",
    owner:'Purva Gawde'
},{
    msg:"Many many Happy returns of the day ma’am. Talking to you is like talking to a mentor,friend, teacher, mother. I am so happy to get a teacher like you who has helped me solve soo many doubts and also be so chill at the same time. I hope the best for your life. Many many happy returns of the day again!",
    owner:'Anushi Gupta'
}];
msg.forEach(create)
