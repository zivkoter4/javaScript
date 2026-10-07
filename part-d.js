//תרגיל 15
const players = [
    {id: 1, nickname: "pixel", score: 840, level: 5 },
    {id: 2, nickname: "Nova", score: 1200, level: 8 },
    {id: 3, nickname: "Blaze", score: 460, level: 3 },
];

players.forEach((player)=>
    console.log(`${player.score} points ${player.nickname}`));

players.forEach((player)=>
    console.log(`${player.score} points ${player.nickname}, id: ${player.id}, level: ${player.level}`));

const result = players.forEach(player => player.nickname); // result ערכו של 
console.log(result);                                      //  יהיה מכיוון שפוראיץ׳ מבצעת את הפעולה עצמה כל פעם אך אינה מחזירה משהו. undefinded  

//תרגיל 16
const scores = [840,1200,460,950];
const courses = ["javaScript", "Design", "Databases"];

const updateScores = scores.map((score) => score + 100);
const courseNameLengths = courses.map((name1) => name1.length);

console.log(updateScores);
console.log(courseNameLengths);
console.log(scores);
console.log(courses);
//מחזירה מערך חדש באותו אורך map מספר האיברים במערך נשאר זהה כי הפעולה

const doubledScores = scores.map(score => score*2);
//return התיקון: מחקתי את הסוגריים המסולסלות, אם שמים סוגריים מסולסלות חייב להוסיף 

//תרגיל 17
const posts = [
  { id: 101, username: "noa_dev", content: "First project!", likes: 45 },
  { id: 102, username: "dan_codes", content: "New feature", likes: 180 },
  { id: 103, username: "maya_js", content: "Weekend update", likes: 72 }
];

const postUsernames = posts.map((post) => post.username);

const postLabels = posts.map((post) => `${post.username} | ${post.content} | ${post.likes} likes`);

const postCards = posts.map(post => ({
id: post.id,
label: `${post.username} - ${post.likes} likes`
})); 
console.log(posts); //לא השתנה
console.log(postCards);

//תרגיל 18
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" },
  { id: 4, title: "Review text", completed: false, priority: "medium" }
];

const openTasks = tasks.filter((task) => task.completed===false);

const highPriorityTasks = tasks.filter((task) => task.priority==="high");

const urgentOpenTasks = tasks.filter((task) => task.completed===false && task.priority==="high");

const getTasksByPriority = (tasks, priority) =>
{
    const PriorityTasks = tasks.filter((task) => task.priority===priority);
    return PriorityTasks;
}

const result2 = tasks.filter(task => task.id === 3); //קריאת קוד
//יהיה מערך מכיוון שהפעולה פילטר תמיד מחזירה מערך המכיל את האיברים שעומדים בתנאי.  במקרה הזה יהיה במערך איבר אחד כי רק אובייקט אחד בעל אי-די 3. חresult 

//תרגיל 19
const movies = [
  { id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
  { id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
  { id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 }
];

const findMovieById = (movies, id) => movies.find((movie) => movie.id===id);
const movie12 = findMovieById(movies,12);
if(movie12)
    console.log(movie12);
else
    console.log("לא נמצא סרט");

const movie99 = findMovieById(movies,99);
if(movie99)
    console.log(movie99);
else
    console.log("לא נמצא סרט");


//תיקון קוד
const movie = movies.find((movie) => movie.id===12);
console.log(movie.title);
//במקום פילטר שיניתי לפיינד כך שיחזיר אותו כאיבר ולא מערך

//find מחזיר
//את האיבר הראשון שעומד בתנאי

//filter מחזיר
//מערך חדש המכיל את האיברים המקיימים את התנאי

//תרגיל 20
//forEacהשתמשתי ב
//בגלל שאני מפעיל את הפונקציה על כל איבר במערך  
players.forEach((player)=>
    console.log(`${player.nickname} - ${player.score} points `));

//mapהשתמשתי ב
//בגלל שאני מפעיל את הפונקציה על כל איבר במערך ויוצר מערך חדש עם התוצאות
const postUsername = posts.map((post) => post.username);

//filterהשתמשתי ב
//בגלל שאני מחזיר מערך רק עם האיברים שעומדים בתנאי מסויים
const notCompletedTasks = tasks.filter((task) => task.completed===false);

//findהשתמשתי ב
//בגלל שאני רוצה להחזיר איבר אחד מהמערך שעומד בתנאי
const movie13 = movies.find((movie) => movie.id===13);

//filter, mapהשתמשתי ב
//קודם כל יצרתי מערך שמכיל את כל הסרטים עם דירוג מעל 8 (התנאי)
//אחר כך הפעלתי את הפונקציה שמחזירה את שם הסרט על כל איבר במערך החדש והחזרתי מערך חדש עם כל התוצאות
const MoviesRateAbove8 = movies.filter((movie) => movie.rating>8);
const MoviesRateAbove8Title = MoviesRateAbove8.map((movie) => movie.title);

//findהשתמשתי ב
//בגלל שאני רוצה להחזיר איבר אחד מהמערך שעומד בתנאי
const post102 = posts.find((post) => post.id===102);

//סיכום בחירה
//מבצע פעולה על כולם: forEach
//יוצר תוצאה חדשה מכל אחד: map
//שומר רק חלק: filter
//מחזיר אחד: find

//תרגיל 21
const scoreAbove800Nicknames = players.filter((player) => player.score>800).map((player) => player.nickname);

const likesAbove100Usernames = posts.filter((post) => post.likes>100).map((post) => post.username);

const getOpenTasksTitles = (tasks) =>
{
    const notCompletedTasks2 = tasks.filter((task) => task.completed===false).map((task) => task.title);
    return notCompletedTasks2;
}

const result3 = players.filter((player) => player.score > 800).map((player) => player.nickname);
//אחרי הפעולה הראשונה סוג הערך הוא מערך של אובייקטים. כל האובייקטים שהניקוד שלהם מעל 800
//אחרי הפעולה השנייה סוג הערך הוא מערך של מחרוזות (השמות של השחקנים שהניקוד שלהם מעל 800)
//הוא מערך של מחרוזותresult
//כאשר מסננים קודם הפעולה מאפ רצה רק על חלק מהאיברים (רק על האיברים הרלוונטים) מה שיותר יעיל