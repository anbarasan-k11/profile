const imageurl= "http://localhost:3003/images"
  fetch(imageurl)
  .then(Response=>
    {
        return Response.json();
    }).then(data=>{
    const imagediv =document.getElementById('image');
    const imagelink =document.createElement('img');
    imagelink.setAttribute('id','imagelink')
    imagelink.setAttribute('src',data.icon)
    imagediv.append(imagelink);
})
var apiurl2= "http://localhost:3003/user"
    const h2=document.getElementById('h2');
    const p1=document.getElementById('p1');
    fetch(apiurl2)
    .then(Response=>
        {
            return Response.json();
        }).then(data=>{
        
            const newelament=document.createElement('h3');
            newelament.id=h2;
            newelament.textContent = data.name 
            h2.append(newelament);
            const newelament1=document.createElement('p');
            newelament1.id=p1;
            newelament1.textContent = data.age + data.experence 
            p1.append(newelament1);
        });
        //profestional skills
const skill=document.getElementById('skill');
//skill.addEventListener('click', function(){
    const skillurl="http://localhost:3003/personalskills";
    fetch(skillurl)
    .then(Response=>
        {
            return Response.json();
    }).then(data=>{
       const list1=document.getElementById('list1')
        const litag =document.getElementById('litag')
        const ultag =document.getElementById('ul');
        /*const person =   prompt('enter your skill:');
        if(person ==null || person ==''){
        alert('pls enter your skill')}
        li.append(person)
        console.log(li)
        ulTag.appendChild(li)
        console.log(ulTag)
        //li.innerHTML=ulTag
        console.log(person)*/
        
        for (let i=0;i < data.length;i++){
        const list=document.createElement('span')
        list.id=list1;
        const ul =document.createElement('ul')
        ul.id=ultag;
        const li =document.createElement('li')
        li.id=litag;
        li.textContent=data[i].language
       litag.append(li);
     }
    });
//})

const prograssbar="http://localhost:3003/languageskill";
fetch(prograssbar)
    .then(Response=>
    {
        return Response.json();
    }).then(data=>{
        const litag1=document.getElementById('litag1')
        const ul =document.getElementById('ul1');
        const progress=document.getElementById('progress')
        const ln=document.getElementById('ln');
        const Spanprogress=document.getElementById('spanprogress')
        for (let i=0;i < data.length;i++){
            const spanprogress=document.createElement('span')
            spanprogress.innerHTML=Spanprogress;
            const ul1 =document.createElement('ul')
            ul1.setAttribute('id','ultag')
            const litag =document.createElement('li')
            litag.setAttribute('id','litag')
            const languagespan=document.createElement('span')
            languagespan.setAttribute('id','languagespan')
            const Languagename = document.createElement('p')
            const Languagename1=document.createElement('p');
            Languagename.textContent=data[i].name //+ data[i].persentage 
            Languagename.setAttribute('justify-content','space-between')
            languagespan.append(Languagename);
            litag1.append(languagespan)
            Languagename1.textContent=data[i].persentage + '%';
            Languagename1.setAttribute('id','Languagename1')
            languagespan.append(Languagename1)
            litag1.append(languagespan)
            const prog=document.createElement('div')
            
            prog.setAttribute('id','progress');
           //prog.style.backgroundColor = 'rgb(0, 255, 255)';
            //prog.textContent=data[i].persentage + '%';
            //prog.setAttribute('value',data[i].persentage)
            const skillBar= document.createElement('div')
            skillBar.setAttribute('id','skillsbar');
            skillBar.style.width=data[i].persentage +'%'
            prog.append(skillBar)
            litag1.append(prog)  
            
        }
    })
    //getting phone number and emailid
const phone=document.getElementById('phone');
const email=document.getElementById('emailid');
var apiurl= "http://localhost:3003/userdetails"
fetch(apiurl)
.then(Response=>
    {
        return Response.json();
    }).then(data=>
    {
        const newelament=document.createElement('p');
        newelament.setAttribute('id','phone');
        newelament.textContent = data.phoneno;
        phone.append(newelament);
        const newelament1=document.createElement('p');
        newelament1.setAttribute('id','emailid');
        newelament1.textContent = data.emailid;
        email.append(newelament1);
        
    })
   
;//address details
const p=document.getElementById('address');
var apiurl1= "http://localhost:3003/address"
fetch(apiurl1)
.then(Response=>
    {
        return Response.json();
    }).then(data=>{
        const newelament=document.createElement('p');
        newelament.setAttribute( 'id','address');
        newelament.textContent = data.no +","+ data.street 
        p.append(newelament);
    });
    //my education
const educationurl="http://localhost:3003/myeducation";
fetch(educationurl)
.then(Response=>
    {
        return Response.json();
}).then(data=>{
   
   for (let i=0;i < data.length;i++){
    const coursespan =document.getElementById('coursespan')
    const couspan =document.createElement('span')
    const courseheader1 =document.createElement('header')
    const courseul1 =document.createElement('ul')
    const courseli1 =document.createElement('li')
    const coursep1=document.createElement('p') 
    var mybr = document.createElement('br');
    var mybr1 = document.createElement('br');
    courseheader1.textContent=data[i].degree;
    couspan.append(courseheader1) 
    coursep1.textContent=data[i].course;
    courseli1.append(coursep1);
    courseul1.append(courseli1)
    couspan.append(courseul1);
   coursespan.append(couspan)
   couspan.append(mybr);
   couspan.append(mybr1);
   const Yearspan=document.getElementById('yearspan');
   const yearspan=document.createElement('span')
   const yearp=document.createElement('p');
   var mybr2 = document.createElement('br');
   var mybr3 = document.createElement('br');
   yearp.textContent=data[i].academiyear;
   yearspan.append(yearp) 
   Yearspan.append(yearspan)  
   Yearspan.append(mybr2);
   Yearspan.append(mybr3);
   }
})
//work experence
const workurl="http://localhost:3003/workexperience";
fetch(workurl)
.then(Response=>
    {
        return Response.json();
}).then(data=>{
   
   for (let i=0;i < data.length;i++){
    const workspan =document.getElementById('workspan')
    const wospan =document.createElement('span')
    const workheader=document.createElement('header')
    const workul =document.createElement('ul')
    const workli =document.createElement('li')
    const workp=document.createElement('p') 
    var mybr = document.createElement('br');
    var mybr1 = document.createElement('br');
    workheader.textContent=data[i].job;
    workspan.append(workheader) 
    workp.textContent=data[i].job1;
    workli.append(workp);
    workul.append(workli)
    wospan.append(workul);
   workspan.append(wospan)
   workspan.append(mybr);
   workspan.append(mybr1);
   const Yearspan1=document.getElementById('yearspan1');
   const yearspan=document.createElement('span')
   const yearp=document.createElement('p');
   var mybr2 = document.createElement('br');
   var mybr3 = document.createElement('br');
   yearp.textContent=data[i].year;
   yearspan.append(yearp) 
   Yearspan1.append(yearspan)  
   Yearspan1.append(mybr2);
   Yearspan1.append(mybr3);
   }
});