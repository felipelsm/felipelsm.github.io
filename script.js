
document.addEventListener("DOMContentLoaded", startTab);

const backgroundColor = "rgb(193, 209, 218)";
const textColor = "rgb(131, 160, 175)";

var tabVec = document.getElementsByClassName("tab");
var container = document.getElementById("container");

const contentOptions = [];
contentOptions[0] = // Home
`<img class="profile-item" id="profile-picture" src="images/profile_pic.jpeg" alt="Profile picture" />
      
<div id="text-container">

  <h1 id="title">Felipe L Martins</h1>
  <p id="p1">I am a first-year Electrical Engineering major at Georgia Tech, passionate about the power of electronics and how they manage to interconnect everything in our daily lives, from household computers to automated vehicles.</p>
  <p id="p2">I am interested in Circuit Technology and Robotics, but also tread on Computer Engineering subjects such as Computer Architechture and Embedded Systems.</p>
  <p id="description">This website is a portfolio of my personal and academic projects. Feel free to explore the tabs and check out my work.</p>

  <p id="links-text">Contact me</p>
  <a class="link" href="https://github.com/felipelsm/Personal_Projects"> <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Github" width="65" height="65"/> </a>
  <a class="link" href="mailto: fmartins6@gatech.edu"> <img src="https://logowik.com/content/uploads/images/513_email.jpg" alt="Email" width="65" height="65"/></a>

</div>`;
contentOptions[1] = // About
`<div id="text-container">

    <h1 id="title">About Me</h1>
    
    <div class="about-container">
        <p class="about-title">Background</p>
        <p class="about-description">I am an international student from Sao Paulo, Brazil, but came to Atlanta in 2023 to study at Georgia Tech, right after graduating from highschool.</p>
    </div>
    
    <div class="about-container">
        <p class="about-title">Education</p>
        <p class="about-description">I am a first-year <a class="about-link" href="https://ece.gatech.edu/">Electrical Engineering</a> major at <a class="about-link" href="https://www.gatech.edu/">Georgia Institute of Technology</a>, with expected gradutaion in 2027</p>
        <p class="about-description">My course specializations are <a class="about-link" href="https://catalog.gatech.edu/programs/robotics-autonomous-systems-circuit-technology-electrical-engineering-bs/">Circuit Technology</a> and <a class="about-link" href="https://catalog.gatech.edu/programs/robotics-autonomous-systems-circuit-technology-electrical-engineering-bs/">Robotics & Autonomous Systems</a>.</p>
    </div>
    
    <div class="about-container">
        <p class="about-title">Relevant Coursework</p>
        <p class="about-description">Digital Systems Design</p>
        <p class="about-description">Intro to Signal Processing</p>
    </div>

    <div class="about-container">
        <p class="about-title">Skills</p>
        <p class="about-subtitle">Programming</p>
            <p class="about-description"><u>Coding:</u> C/C++, C#, Python</p>
            <p class="about-description"><u>Web development:</u> HTML, CSS, JS</p>
            <p class="about-description"><u>Data Analysis:</u> MATLAB</p>
        <p class="about-subtitle">Hardware</p>
            <p class="about-description">Arduino</p>
    </div>

    <div class="about-container">
        <p class="about-title">Activities</p>
        <p class="about-subtitle">Rocket Club</p>
            <p class="about-description">I am a member of Georgia Tech's <a class="about-link" href="https://rocketry.gatech.edu/">Ramblin' Rocket Club</a> in the Avionics team.</p>
            <p class="about-description"><u><b>Avionics:</b></u> Applied dual microcontroller communication with the UART protocol, soldered electronics components in the flight computer</p>
        <p class="about-subtitle">Personal Coding Projects</p>
            <p class="about-description">Since the beginning of 2020, I have been a taught myself how to code and applied it to various personal projects.</p>
            <p class="about-description"> I usually get interested in a specific topics and end up delving into how they work under the hood. The most remarkable examples are:</p>
            <p class="about-description"><u><b>Pong:</b></u> Developed the game 'Pong' in C, for Windows, without the help of any graphics library. I had to implement everything from the graphics buffering and rendering functions to the game logic, input handling and window operations.</p>
            <p class="about-description"><u><b>3D Graphics Engine:</b></u> This is still a work-in-progress. Since the making of Pong, I have been interested in game design and the logic that runs it. Because of that, and because there is some very interesting math behind everything, I have been designing a rudimentary graphics rasterizer. The goal is to turn it into a Game Engine in the future.</p>
    </div>

    <div class="about-container">
        <p class="about-title">Career Goals</p>
        <p class="about-subtitle">2024</p>
            <p class="about-description">Have a more than rough outline of my planned academic experience in Georgia Tech.</p>
            <p class="about-description">Undergraduate research.</p>
        <p class="about-subtitle">2025</p>
            <p class="about-description">Get work experience with internships and technical jobs in the campus, such as being a PI at The HIVE makerspace.</p>
        <p class="about-subtitle">2026</p>
            <p class="about-description">Continue to gain work experience with internships and hopefully assemble an effective network in the market and create good relations with the companies I work for.</p>
        <p class="about-subtitle">2027</p>
            <p class="about-description">Graduate as an Electrical Engineering major.</p>
            <p class="about-description">Start working for a company I admire while making decent money.</p>
        <p class="about-subtitle">2028-2030</p>
            <p class="about-description">Maybe start a Master's Degree in robotics after having specific career prospects and after having saved enough money not to need my family's help anymore.</p>
        </div>

</div>`;
contentOptions[2] = // Projects
`<div id="text-container">

    <h1 id="title">Projects</h1>

    <div class="project-container">
        <a class="project-title" href="project_car.html">Remote Controlled Car</a>
        <img class="project-pic" src="images/project_car.jpeg" alt="Remote Controlled Car" />
        <p class="project-description"><b>*WORK IN PROGRESS*</b></p>
        <p class="project-description">Developed a functional remote controlled car, including chassis design, motor control, electronic circuitry and Bluetooth connection.</p>
    </div>

    <div class="project-container">
        <a class="project-title" href="project_pong.html">Pong Digital Videogame</a>
        <img class="project-pic" src="images/project_pong_pic4.png" alt="Pong Digital Game" />
        <p class="project-description">Developed the pong videogame from scratch in the C language, implementing everything from screen buffering and rendering fuctions to the game and menu logic</p>
    </div>

<div/>

</div>`;
contentOptions[3] = // Resume
`<div id="text-container">

    <h1 id="title">Resume</h1>
    
    <a id="download" href="files/Resume_Martins_Felipe.pdf" download> Download file. </a>
    <div id="file-container">
        <embed id="file" src="files/Resume_Martins_Felipe.pdf" width="600px" height="800px" />
    <div/>

</div>`;


tabVec[0].addEventListener("click", function() {changeTab(0)});
tabVec[1].addEventListener("click", function() {changeTab(1)});
tabVec[2].addEventListener("click", function() {changeTab(2)});
tabVec[3].addEventListener("click", function() {changeTab(3)});

function startTab() {
    changeTab(0);
}
function changeTab(tab)
{
    container.innerHTML = contentOptions[tab];

    for(var i=0; i<tabVec.length; i++) {
        tabVec[i].style.backgroundColor = backgroundColor;
        tabVec[i].style.color = "white";
    }
    tabVec[tab].style.backgroundColor = "white";
    tabVec[tab].style.color = textColor;
}