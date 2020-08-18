import React from 'react';
import './../styles/coursePage.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import CourseComponent from './../components/presentations/coursePage';
import Footer from './../components/containers/Footer';

const useStyles = makeStyles({
    root: {
        background: 'white',
        borderRadius: '50px',
        border: '1px solid grey',
        color: 'grey',
        height: 48,
        padding: '0 50px',
        boxShadow: '0 2px 3px 1px #9e9e9e',
    },
    label: {
        textTransform: 'uppercase',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        fontSize: '20px',
    },
});

export default function Course() {
    const classes = useStyles();
    return (
        <div>
            <h2 className="courses">COURSES</h2>
            <p className="text">
                Our goal is to bring world class curriculum to our students. Leveraging our connections in Silicon Valley of
                the United States, we will always be introducing the newest and most relevant curriculum to our classrooms.
                <br></br>
                <br></br>
                Here are the current course offerings. Check back often for updates.
            </p>

            <hr className="line"></hr>

            <Grid container classname="tm-content">

                <Grid item xs={12} md={6} lg={6} className="coding">
                    <CourseComponent title="CODING" url="assets/images/helloworld.png"
                        subtitle="Young students will begin with block-based programming
                    using United States’s latest progressive curriculum.
                    Students will go through different levels to ensure solid
                    knowledge of the basics of computer coding. Then they will
                    progress to text based programming and work on real
                    world projects specially crafted by our own co-founder who
                    has almost two decades of programming experience.
                    Students will be empowered with the latest knowledge and technologies."
                    />

                </Grid>

                <Grid item xs={12} md={6} lg={6} className="coding">
                    <CourseComponent title="ROBOTIC" url="assets/images/robotic.jpg"
                        subtitle="Students will get to learn coding through
                            assembling and controlling robotics. In
                            robotics courses, students will develop
                            mechanical and coding skills along with
                            creativity, problem solving, and critical
                            thinking skills."
                    />
                </Grid>

            </Grid>


            <hr className="line"></hr>

            <Grid container className="tm-course" >

                <Grid item xs={12} md={5} xl={4} className="course">
                    <img src="assets/images/animation.gif" width="100%"></img>
                </Grid>

                <Grid item xs={12} md={7} xl={8} className="course">
                    <p className="New">
                        New Course: Animations and Games in JavaScript
                    <br />
                        <br />
                    Students will program animations, interactive art, and games using the same programming concepts and the design process computer scientists use daily. In the final project, students will develop a personalized, interactive program.
                    <br />
                        <br />
                    Start: 18 July. Every Saturday and Sunday from 3:30pm – 5:00pm. Approx. 3 months.
                    <br />
                    Prerequisite: Some coding knowledge.
                    <br />
                    Age: 13+
                    <br />
                        <br />
                    Tuition: $150
                    </p>
                </Grid>

            </Grid>

            <Grid container className="tm-course">

                <Grid item xs={12} md={7} xl={8} className="course">
                    <p className="New">
                        New Course: Intro to Web Development (online or in-person)
                        <br />
                        <br />
                        Students will learn problem solving techniques & how computer processes information, web development with HTML & CSS, and build their own personal website as an end of course project
                        <br />
                        <br />
                        Tuition: $150
                        <br />
                        <br />
                        Length: approx. 3 months. 18 July – 11 October. Saturdays and Sundays: 8:30am-10am.
                        <br />
                        <br />
                        Contact: 012 555 080
                    </p>
                </Grid>

                <Grid item xs={12} md={5} xl={4} className="pic">
                    <img src="assets/images/course.gif" width="100%"></img>
                </Grid>

            </Grid>

            <hr className="line"></hr>

            <h3 className="fine">To Fine Out More</h3>
            <div className='aligncenter'>
                <Button classes={{
                    root: classes.root,
                    label: classes.label,
                }} >
                    Get in Touch!
                </Button>
            </div>
            <Footer/>

        </div>
    );

};
