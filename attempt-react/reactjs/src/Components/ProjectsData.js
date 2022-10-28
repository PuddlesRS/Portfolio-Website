import sBB from '../images/superBuddyBall.jpg';
import tHav from '../images/techhaven.png';
import dMLMS from '../images/devMountainLMS.png';
import process from '../images/projectimages/techhaven/design-process.png';
import THheader from '../images/projectimages/techhaven/header.png';
import HFwire from '../images/projectimages/techhaven/higherfidelity-wireframe.png';
import survey from '../images/projectimages/techhaven/user-questions.png';
import WF1 from '../images/projectimages/techhaven/wireframe1.png';
import WF2 from '../images/projectimages/techhaven/wireframe2.png';
import landing from '../images/projectimages/techhaven/finished-landing.png';
import badges from '../images/projectimages/devmountain/badges.png';
import feeds from '../images/projectimages/devmountain/feeds-zoomin.png';
import DMheader from '../images/projectimages/devmountain/header.png';
import postFeed from '../images/projectimages/devmountain/ideate-feed.png';
import ideateScreens from '../images/projectimages/devmountain/ideate-screens.png';
import postGif from '../images/projectimages/devmountain/post.gif';
import dMSurvey from '../images/projectimages/devmountain/survey.png';


const ProjectsData = [
    {
        "id": "super-buddy-ball",
        "alt":"Super Buddy Ball: A marble rolling game",
        "category":"C#/Unity 3D",
        "link":"../Pages/Project-Pages/SuperBuddyBall.js",
        "title":"Super Buddy Ball",
        "text": "A ball rolling game made to emulate 'Super Monkey Ball's' unique camera movements",
        "image": sBB,
        "projtitle": "Super Buddy Ball - Made in Unity3D",
        "projtext": []
    },
    {
        id: "tech-haven-training",
        alt: "Medium article about TechHaven UI/UX research project",
        category: "UI/UX",
        link: "//medium.com/ryan-smith/techhaven-case-study-bb68a388c976",
        title: "TechHaven",
        text: "A ball rolling game made to emulate 'Super Monkey Ball's' unique camera movements",
        image: tHav,
        "projtitle": "TechHaven Case Study",
        "projtext":
            [
                <img src={THheader} alt="Wire frame drawings" className="proj-images THheader"/>,
                <h3 className="proj-sub-header">Overview</h3>,
                <p className="proj-body-text">As time passes the percentage of roles that can be filled by
                    unskilled workers declines. In the years since the recent recession jobs created allowing for
                    applicants with a high school diploma or less total around 1% of all jobs created. With some simple math
                    , we can conclude that the other 99% of jobs created require some form of skilled worker, generally with
                    a college degree. The most noticeable growth of a field requiring skilled workers is in the tech field.
                    Between 1992 and 2012 the number of jobs in software development has grown by over 500%, and internet jobs
                    almost 600%. Unfortunately, the growth of the pool of skilled workers is not keeping up the with the growth
                    of jobs requiring skilled workers. This is especially true in younger demographics (15–24), who make up roughly 40%
                    of all currently unemployed workers in the United States.</p>,
                <p className="proj-body-text">My team and I decided to create a platform aiding in the education of teens and younger adults, specifically in
                    areas that would help them find jobs in the tech field. Currently, most software and internet jobs require some
                    kind of college degree. This paradigm is likely unsustainable as the field is already finding itself with a
                    shortage of workers, and a skyrocketing demand for more employees with the skills needed to do the job.
                    Alternatives to college feel like one of a few potential solutions to help unskilled workers find their place in
                    the ever-growing tech industry.</p>,
                <h3>Our Design Process</h3>,
                <img src={process} alt="Empathize, Define, Ideate, Prototype, Validate" className="proj-images"/>,
                <h3>My Role</h3>,
                <p className="proj-body-text">I worked on a team of three UX designers. I was responsible for:</p>,
                <ul>
                    <li>User research and interviews </li>
                    <li>Persona building </li>
                    <li>Creation of a creative brief </li>
                    <li>User story mapping </li>
                    <li>Low and high fidelity wireframes </li>
                    <li>Post usability testing design edits </li>
                    <li>InVision prototyping </li>
                    <li>Usability testing </li>
                    <li>Critique presentation </li>
                </ul>,
                <img src={survey} alt="Survey questions" className="proj-images"/>,
                <p className="proj-body-text">Based on a couple of surveys as well as multiple face-to-face interviews with potential users, we were able
                   to identify a few potential problems to solve. The most common thing we heard from people was time constraints
                   were a big part of their decision when choosing whether or not to spend additional time learning outside of work.
                   Often people were supporting themselves by working full time. Not just that, the hours they worked were often irregularly
                    scheduled. Leading to only having small pockets of time throughout the day to get anything done outside of their job.</p>,
                <p className="proj-body-text">Another problem we identified was all but one of the people interviewed had little to no disposable income. The majority of people
                    kept a small list of relatively inexpensive entertainment and physical media subscriptions but felt that any more than what they had
                    could potentially become a burden to their financial stability. Many of them also stated an unwillingness to sacrifice their current
                    subscriptions in order to subscribe to an education service, even if it meant a potential long-term increase in job quality.</p>,
                <p className="proj-body-text">The last major pain point which came up often was two-pronged. People were unsure of how to apply their skills in the tech field. This
                    uncertainty seemed to manifest itself as another problem, a larger fear of the tech industry. People assuming that they “were not smart
                    enough for a job in the tech field,” or perhaps their non-computer related skills would be of little benefit in the field. Stating often
                    that what keeps them in their current job is a sense of satisfaction with both their skill and their confidence in employment security. It
                    seemed that moving from their job to a higher skill, more intense job worried them and created some discomfort.</p>,
                <h3>Audience</h3>,
                <p className="proj-body-text">After compiling and examining the research it became apparent the audience for our platform would consist mainly of people between the ages
                    of 19–25 who are not satisfied with their current career path. Specifically, those who felt lost in a traditional school environment,
                    or may not have had the monetary wealth to easily continue into higher education without accumulating a lot of debt.</p>,
                <h3>Solving Pain Points</h3>,
                <p className="proj-body-text">My team decided that we would work to find and create an affordable alternative to colleges and tech boot camps for those who couldn’t afford
                    them. Students could pick specific courses, even taking multiple at once. This allowed for students to build their own education path. The quality
                    of the content would still have to be king while maintaining a $0 price point.</p>,
                <p className="proj-body-text">Interviewees often mentioned they knew little about the tech field, but they also seemed to have skills that would transfer to some fields very
                    well if focused in the right direction. To attack this problem, a skills survey was originally meant to be a part of our platform. While
                    appealing in theory, we were worried that people who didn’t necessarily already have skills in certain areas might be turned off if the survey
                    was unable to return any solid recommendations. We really felt that an image of inclusion and safe learning was important. Turning people away
                    or making them feel inadequate because they didn’t already possess some useful skill in the field felt against the type of learning environment
                    we wanted to create.</p>,
                <p className="proj-body-text">Our solution to this problem was to instead create an interest survey. This way people who may have little currently applicable skills could
                    still find topics to learn about which they may be interested in. We could still give suggestions to users, without having to worry they might
                    feel like none of our courses would be a good fit for them.</p>,
                <img src={WF1}  alt="Low fidelity wireframe of landing" className="proj-images" />,
                <br />,
                <br />,
                <img src={WF2} alt="Low fidelity wireframe of course screen" className="proj-images"/>,
                <p className="proj-body-text">Next, we focused on the layout and structure of courses. Our research indicated students taking courses online prefer lessons which have
                    multiple methods of completion. Some people learn quickly and don’t require a lot of examples. For these students, most lessons could be
                    completed just by reading through a passage similar to something you might see in a textbook. For other students who learn better when given
                    more guidance through an experience, we would create video lessons that would attempt to more actively engage students. Helping to keep their
                    attention, as well as walking them through the more difficult concepts. We also created an interface for interactive lessons. These would be
                    required to be completed as intended. We made this decision because it served as a checkpoint of understanding for a user. A student would be
                    given tasks with examples which they would be expected to complete in order to continue through the lessons. This combined with periodic skill
                    assessments throughout the course is designed to give students a feeling of understanding. This understanding is aimed to help students feel
                    confident in what they learn, and themselves.</p>,
                <p className="proj-body-text">Managing student anxiety was always kept in mind when making design decisions. Making sure students felt they understood content was a major
                    barrier to making sure they felt comfortable, however; it simply isn’t possible to make sure all students immediately understand all course content.
                    This problem is amplified by students time constraints because if a student doesn’t understand something, they won’t be able to continue in a
                    course. Being unable to continue in a course twenty minutes into a lesson, after potentially only being able to set an hour or two aside, leads to
                    frustration and time waste.</p>,
                <p className="proj-body-text">Newer online education sites have been implementing some kind of inter-site messaging system as a way of circumventing this issue. We decided
                    something similar would be a nearly mandatory addition to our website. So we created an instant messaging system that would allow students to
                    message an instructor of their course directly. This way if a student had any questions they could get them answered as quickly as possible,
                    but didn’t completely solve the problem. Some of our users would be working all day, and only have time to work on courses late at night. During
                    those hours its generally pretty hit or miss if an instructor is immediately available to answer questions. Our workaround for this was to
                    create a lesson specific forum. A place for students stuck on a certain lesson to find or post questions and answers at any time. The answers
                    would be moderated by both students and teachers. A student has the ability to up or downvote an answer to a question based on whether or not
                    they answered the question. A teacher can go into the forum and answer questions, or if the question is already answered they can mark it as
                    a teacher-approved answer. A star was chosen as the glyph to represent both of these.</p>,
                <br />,
                <br/>,
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/280796278?h=5be4209c33" width="640" height="400" frameBorder="0" allowFullScreen ></iframe>,
                <h3>Visual Design Process</h3>,
                <p className="proj-body-text">We started the high-fidelity design process by creating a loose style guide. We decided that we wanted the majority of the site to be highlighted
                    with an Aquarius blue. It’s a calm color that wasn’t likely to be distracting in lessons and helped convey the inclusive and relaxed feel of
                    our website and courses. Montserrat was the font-family that we decided to use for all of the website. It is simple, legible, and not overly
                    formal. We also decided that almost all of the above the fold real estate on the home screen should be reserved for a graphic containing what
                    we felt was the most important part of the site for new users, the interest survey. We knew we wanted it to be accessible pre-login and post
                    login. We also guessed that someone creating an account without taking it was likely uninterested in taking the survey at all. This is why we
                    decided to allow students to dismiss the survey during the post logged in experience.</p>,
                <br/>,
                <img src={HFwire} alt="Higher fidelity wire frame" className="proj-images"/>,
                <h3>Prototyping and User Testing</h3>,
                <p className="proj-body-text">Once we had finished our first round of high fidelity designs we created a prototype on InVision which would allow us to test our user flows.
                    Afterward, we began having people in our potential demographic sit down and run through some tasks. We identified some problems with the
                    website being flat, our main call to action being a bit unclear, text sizes were too large, and a weak hierarchy. All of which led to a bit
                    of trouble navigating parts of our website. In our remaining time on the project, we began to tackle some of these issues. Call to actions
                    were too flat and too similar to the rest of the site to be clear. Our workaround was to find a complimentary, high contrast color that could
                    be used to pull them off the page as much as possible. We settled on a dark red which showed a beneficial addition with further testing. Users
                    were able to identify them as points of action significantly faster.</p>,
                <img src={landing} alt="landing page" className="proj-images" />,
                <h3>Conclusion</h3>,
                <p className="proj-body-text">We distributed our all of our work, from research to final prototype, over a six week period. I believe that our research helped inform a lot
                    of the decisions we made and helped us solve pain points potential users might have had with our platform.</p>,
                <p className="proj-body-text">Given more time, I would like to have refined the visual design of the website a lot more. We managed to fix some of the aspects of the landing
                    page that made it feel flat, however; a lot of the other screens still feel too one dimensional. I think it would serve the usability of the
                    site if we could’ve fixed that through a refinement of hierarchy. Both color depth and clear visual pathways through the site felt like problems
                    we might address to solve this. </p>,
                <p className="proj-body-text">It would also have been useful to get more rounds of user testing done. We only had the time to complete one full round, and a quick second
                    round of user testing. From each, I felt we were able to extract a lot of good, actionable information. Simply that we lacked the time to
                    implement and then test as much of it as I would have liked.</p>,
                <p className="proj-body-text">This was a tough project, and a useful learning experience. I couldn’t fit all of the relevant information into the case study, so if you have
                    any questions or comments feel free to contact me through the links proivded on the "About me" page</p>,
                <br />,
                <br />,
                <br />,
                <br />,
            ],
    },
    {
        id: "devMountain_leaning_management_system",
        alt: "Medium article about DevMountain Learning Management System",
        category: "UI/UX",
        link: "//medium.com/@ryan.smith.ux/devmountain-lms-companion-5abefd60bb6a",
        title: "Dev Mountain Learning Management System",
        text: "A ball rolling game made to emulate 'Super Monkey Ball's' unique camera movements",
        image: dMLMS,
        "projtitle": "DevMountain Learning Management System",
        "projtext":
            [
                <img src={DMheader} className="proj-images dmHeader" alt="app preview" />,

                <h3 className="proj-sub-header">Overview</h3>,

                <p>DevMountain is a boot camp for students hoping to either change their career, to learn new skills to further it. Students
                    who complete all coursework, maintain near perfect attendance, and meet course specific criteria are awarded a badge. This badge
                    indicates a student is a certified graduate of DevMountain and worked hard to complete their course.</p>,

                <img src={badges} className="proj-images" alt="DevMountain Badges"/>,

                <p>Instructors currently use excel or numbers spreadsheets to keep track of student’s badging progress, however;
                    DevMountain is mandating a switch to Canvas. Canvas is a web-based learning management system which should make
                    keeping track of students information easier. Students currently have no means of keeping track of their course
                    progress, since all of the information regarding their class performance is currently in an excel/numbers document.
                    DevMountain decided to see if it would be beneficial to create an internal LMS with an integration of Canvas’ expansive API.</p>,

                <h3>My Role</h3>,

                <p>I was a team member in a team of three UX designers and three iOS developers. The deliverables which I was in charge of or collaborated
                    on include:</p>,
                <p>User research and interviews</p>,

                <ol>
                    <li> Persona building  </li>
                    <li> Creation of a creative brief </li>
                    <li> User flows </li>
                    <li> User story maps </li>
                    <li> Low and high fidelity designs </li>
                    <li> Invision prototypes </li>
                    <li> Multiple Framer prototypes </li>
                    <li> Co-ordinating with developers to execute designs accurately </li>
                    <li> Usability testing </li>
                    <li> Critique presentations </li>
                </ol>,

                <h3>Project Brief</h3>,

                <p>Our product managers, lead UX instructor Brandon Beecroft and lead iOS instructor Karl Pfister held a meeting to brief everyone
                    on the perceived problems and business goals which the project was meant to solve. If our research was able to verify an in-house
                    LMS companion would provide value to DevMountain, the business goals we would be required to meet included:</p>,

                <ol>
                    <li> Create student accounts in the database automatically after enrollment is verified by Salesforce </li>
                    <li> Help students and instructs keep track of badging process </li>
                    <li> A means of badging a student through the application </li>
                    <li> A method of improving teacher-student communication </li>
                </ol>,

                <p>Because the easiest method of collecting and displaying all of this information seemed to include a profile, or something similar,
                    we decided to consider a means of advertising students. DevMountain has a group of staff dedicated to interacting with hiring managers
                    and the tech communities in their respective cities. They actively advertise graduates and programs to these circles in hopes of helping
                    increase the odds a student gets hired after school. If these hiring managers could get onto a DevMountain platform to quickly find
                    students and see their work all in one place it might help students advertise themselves.</p>,

                <h3>Empathize</h3>,
                <h2>User Research</h2>,

                <p>Before beginning the project it was important to determine if this LMS would actually be beneficial to the organization and its students.
                    So the first thing our team decided to do was create a survey which would be used to gather as much information as we could from graduates
                    of DevMountain. It was important for us to see what percentage of students cared about badging, kept track of their course progress,
                    thought keeping track of course progress could’ve been beneficial, and how successful they were in their job search after the course had ended.</p>,

                <img src={dMSurvey} className="proj-images" alt="Survey results"/>,

                <p>A couple of things stood out to us in the initial survey. For starters, 57% of students who responded to the survey agreed badging was something
                    they not only chose to pursue but was important to them. While only 48% of students felt they had a strong understanding of the requirements to
                    badge. Maybe if more students understood what it meant to badge, they would be more interested in pursuing a badge. And secondly a little over
                    89% of all students said tracking course progress is an important, and beneficial activity for enhancing their education. This confirmed our first
                    and most important assumption: students would benefit from keeping better track of their course and badge progress.</p>,
                <p>We took the information from our survey and created a new set of questions for currently enrolled students. Over the next three days, every student
                    actively enrolled in a program at the Salt Lake City campus was interviewed. It was quickly apparent students had a couple problems keeping up
                    with course progress.</p>,
                <p>We confirmed most students were unable to recite the requirements to badge in their course, verifying another of our assumptions. Students also
                    felt like instructor feedback on their work was given too infrequently and in low density, indicating a problem in student-teacher communication,
                    another of our assumptions.</p>,
                <p>A few of the students interviewed were also graduates of previous DevMountain cohorts, taking a second course to bolster a specific skillset.
                    Our line of questioning was expanded to encompass questions about the job search and what kinds of things they believed might have held some
                    weight in the eyes of hiring managers. This information was more aimed at creating a set of questions for hiring managers than to solidify any
                    design influencing decisions.</p>,
                <p>Unfortunately, we couldn’t get any hiring managers to sit down and talk with us. All of the ones we contacted were too busy. We based all design
                    decisions for what we imagined the hiring manager/design community flows would look like based off of interviews with students and instructors who
                    had strong feelings about what hiring managers would want to see in a student graduating from a boot camp. We took into consideration things such
                    as what advantages and disadvantages a graduate of DevMountain would have relative to a recent college graduate.</p>,
                <p>Most of the instructor needs were determined by DevMountain and given to us at project inception. Because of this, our instructor interviews
                    weren’t very complex and consisted mostly of more straightforward information gathering questions about courses and student success
                    post-graduation.</p>,

                <h3>Define</h3>,
                <h2>Audience</h2>,

                <p>This project was a bit of a special case, in which our audience was almost entirely predetermined as long as we could validate a need for the
                    application. Our platform would include a structure for all DevMountain students, current, and future (not past), to create a profile which
                    would house all of their information and progress. This information would be available to other students, hiring managers, and instructors, all
                    of whom would be our target audiences, with a focus on students and instructors.</p>,

                <h2>Problems</h2>,

                <p>Instructor/mentor problems:</p>,

                <ol>
                    <li> It takes a significant amount of time to type up and send badging applications for every student who meets the requirements to badge
                        at the end of a cohort. </li>
                    <li> Keeping track of student progress/ attendance in a single numbers/excel doc is clunky and unintuitive since most courses have multiple
                        instructors. </li>
                    <li> Students get assessed on projects and tests verbally, with no good means of scribing and sharing the information talked about currently </li>
                    <li> Getting a student’s information to them while not on campus was difficult </li>
                </ol>,

                <p>Student problems:</p>,

                <ol>
                    <li> No current means of keeping track of course progress or attendance without directly asking a mentor/instructor repeatedly. </li>
                    <li> Requirements to badge are unclear and are not written down anywhere. </li>
                    <li> Students didn’t feel as though they had a centralized place for all of their school-related information and work. </li>
                    <li> Advertising to hiring managers, even those already associated with DevMountain, was arduous. </li>
                </ol>,

                <h3>Ideate</h3>,
                
                <p>Visually we were mandated to stay within DevMountain’s preexisting style guide with the project leads only allowing a couple small deviations.</p>,
                <p>The first problems we decided to tackle were those of the students since they would be spending the most time on the application. To aid students
                    in keeping track of their course progress, they were given a feed system. New grades or announcements specific each student would populate the
                    feed. Each instance of a grade or event would be on an individual card. Each card afforded a student to like, comment, or click on it. Liking
                    was meant to indicate that a student had seen the card. Commenting allowed a student to open a line of communication with an instructor, who could
                    answer it whenever they had time. Clicking on a card would bring a student to a view containing more detailed information about a card. Events
                    would include things like locations, times, poster information etc. Clicking on a grade would lead to a detailed score breakdown, something
                    students currently did not have any means of getting access to. An instructor could also write a post in the application, or on Canvas, and send
                    it directly to a student, or group of students.</p>,

                <img src={postFeed} className="proj-images" alt="An example of a possible feed"/>,

                <p>To address the rest of the students’ and most of the instructors’ problems we created a profile page. The goal of the profile was to:</p>,

                <ol>
                    <li> Centralize all of a student’s information </li>
                    <li> Show the requirements to badge </li>
                    <li> Aid in keeping track of course and badging progress </li>
                    <li> Aid in advertising a student to hiring managers </li>
                    <li> Allow an instructor to view all of a student’s required badging material in one place, as well as compile it into a badging application
                        which would automatically be sent to Salesforce </li>
                    <li> Easily view a student’s attendance </li>
                </ol>,

                <p>Because it was all of a student’s information was already compiled into one page, all we needed to do was allow hiring managers to see it and
                    we would solve another problem.</p>,
                <p>Consolidating and displaying such a large amount of information, proved difficult. The profile was easily the largest roadblock of the entire
                    project. Between the three of us, we produced over 30 iterations of what we believed the profile page should look like.</p>,

                <img src={ideateScreens} className="proj-images" alt="Multiple wireframes used in the prototype"/>,

                <p>One problem we had was displaying whether or not a student had badged in a course. Especially since some students have two badges, and
                    could potentially have up to five. Our solution was to simply state a student was a certified graduate and give them a small green check mark.
                    Clicking on the mark or its text would bring up a small module detailing what being a certified graduate of each course entailed.</p>,

                <img src={feeds} className="proj-images" alt="Close up of profile pages"/>,

                <p>Once the profiles were completed a student directory was created. Basically, anyone could search or filter students based on predetermined
                    criteria. Since we wanted the page to be visible to hiring managers as well as students and faculty we made it a part of the pre-login experience.
                    But since anyone could theoretically find any student we felt that privacy measures needed to be put into place. Students can hide their entire
                    profile, or certain parts of their profile, from non-instructors. They can update their picture to be whatever they want, choose whether or not
                    to attach social media to their account, add or remove work etc. The only mandatory part of their profile was their name, what course they are in,
                    and whether or not they passed or failed the tests they took.</p>,

                <h3>Prototyping</h3>,
                <p>To aid in the handoff to developers as well as allow us to user test I took our high fidelity designs and turned them into Framer prototypes.
                    The main screens/flows which I focused on were the student directory, the instructor post, the adding information to a profile, and the
                    login/sign up flows.</p>,

                <img src={postGif} className="proj-images gif" alt="Framer prototype of an instructor making a post" />,

                <p>Once the prototypes were completed the developers were able to take all of the resources that my team had put into Zeplin and begin recreating
                    the Framer prototypes.</p>,
                <p>As of this moment, the test flight build for our application is under development. Once that stage of development is complete I plan on conducting
                    more usability testing with DevMountain staff and students.</p>,

                <h3>Conclusion</h3>,
                <p>This project allowed me to work in a team of very talented people and flesh out multiple skills that I wish to continue developing. My knowledge
                    of Framer and prototyping is significantly stronger. If you have any questions or comments feel free to reach out to me on LinkedIn (found on the About Me page of this site) or send me
                    an email at Ryan.Smith.Ux@gmail.com. </p>,
                <br />,
                <br />,
                <br />,
            ]
    },
];

export default ProjectsData;