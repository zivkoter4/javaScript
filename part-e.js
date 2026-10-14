//תרגיל 22
const movie = 
{
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4
};
const { rating, title, genre } = movie;
console.log(`${title}  | ${genre} | ${rating}`);

const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

//החיזוי שלי: הפלט יהיה 
//כי מתבצע חילוץ לפי מיקום  orbit ocean 

//תרגיל 23
const user = 
{
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};

const formatUser = ({ name, email }) => console.log(`${name} - ${email}`);
formatUser(user);

const getUserStatus  = ({name, isActive}) =>
{
    if(isActive===true)
        return console.log(`${name} - active`);
    else
        return console.log(`${name} - inactive`);
}

//זה לא ישנה את התוצאה מכיוון שהפעולה יודעת לקחת רק את התכונות שהיא מקבלת מתוך האובייקט

//תרגיל 24
const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0
};

const updatedPlayer = {...player, score: 1350};
console.log(player);
console.log(updatedPlayer);

const commentsAfterAdd = [...comments, newComment]
console.log(comments);
console.log(commentsAfterAdd);

//קריאת קוד
const sameReference = player;
const copiedPlayer = { ...player };
//samerefernce:
//משתנה שמצביע על אותו אובייקט, השינויים שמתבצעים על המקור מתבצעים גם בו
//copiedPlayer:
// משתנה שמחזיק את אותו אובייקט בנפרד, שינויים במקור לא משנים את ההעתק

//תרגיל 25
const tasks = 
[
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" }
];

const removeTaskById = (id, tasks) => tasks.filter(i=>i.id !== id);
const tasksAfterDelete = removeTaskById(tasks, 2);
console.log(tasks);
console.log(tasksAfterDelete);

//הפונקציה תחזיר את המערך ללא שינוי