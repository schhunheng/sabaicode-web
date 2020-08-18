import React from "react";
import "./../styles/ourpeople.css";
import Grid from "@material-ui/core/Grid";
import Footer from './../components/containers/Footer';

export default function OurPeople() {
  return (
    <div className="our-people-page">
      
    <div className="our-people-title">
          <h2>OUR PEOPLE</h2>
          <p>
            We are a team of passionate people. We love STEM. We believe in
            computer science. We love sharing our knowledge with our students.
            We aspire to make a difference.
          </p>
      </div>
      <Grid container justify="flex-start" alignItems="flex-end" spacing ={4}>
      <Grid item xs={1}></Grid>
        <Grid item xs={10} sm={3}>
        <img src="assets/images/founder.jpg" alt="founder" className="founder" />
        </Grid>
        
        <Grid item xs={10} sm={2}>
          <h2 style={{textAlign:'center'}}>PISETH LENG</h2>
          <h4 style={{textAlign:'center'}}>Founder</h4>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container justify="center">
          <Grid item xs={10}>
            <div className="founder-des1">
              Piseth loves STEM since he was a kid. Growing up, his favorite
              subject was Mathematics. Through hard work, he passed the college
              entrance exam on a full scholarship to pursue a Bachelor of
              Science in Mathematics at the Royal University of Phnom Penh. To
              challenge himself further, a year later he also obtained a full
              scholarship to pursue a Bachelor of Science in Economics at the
              Royal University of Law and Economics.
            </div>
            <div className="founder-des2">
              Soon after graduation, he made a big leap in life and decided to
              pursue an MBA in the United States. Then he went on to start a
              career in one of the largest commercial banks in California. Over
              the years, he moved up the ranks to become a Vice President and
              specializes in financing technology companies.
            </div>
            <div className="founder-des3">
              Through his work and through living in Silicon Valley which is the
              technology hub of the United States, he came to believe strongly
              that STEM is the future of the world, and more importantly the
              future to which Cambodia should be headed. He believes that
              computer science is a critical part of STEM and too many Cambodian
              children lack the opportunity to learn and enjoy it at a young
              age.
            </div>
            <div className="founder-des4">
              Then and there, he realized his mission which is to bring the
              American quality of education to Cambodia. An education that
              focuses on computer science fundamentals straight from the top
              technology hub of United States. His vision is to see Cambodian
              children realize their full potential and become tomorrow’s
              leaders.
            </div>
            <div className="founder-des5">
              Piseth lives in San Francisco bay area with his wife and two young
              sons. He enjoys traveling to Cambodia and bringing with him the
              latest and greatest ways of educating computer science to
              Cambodian children.
            </div>
          </Grid>
      </Grid>
      {/* Co-founder */}
      <Grid container justify="flex-end" alignItems="flex-end" spacing ={4}>
        <Grid item xs={6}></Grid>
        <Grid item xs={12} sm={2}>
          <h2 style={{textAlign:'center'}}>SAREUON SOUM</h2>
          <h4 style={{textAlign:'center'}}>Co-Founder and Director</h4>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src="assets/images/co_founder.jpg" alt="co-founder"  className="co-founder"/>
        </Grid>
       
        
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container justify="center">
          <Grid item xs={10}>
          <div className="co-founder-des1">
              Sareuon is a computer engineer by training. Currently, he is Vice
              President of Platform at MangoMap, a Software as a Service company
              specializing in interactive web maps serving clients around the
              world. Sareuon leads the software development team and has over a
              decade of experience in Ruby on Rail and JavaScript programming.
            </div>
            <div className="co-founder-des2">
              Sareuon earned a Bachelor of Science in Mathematics and a Bachelor
              of Science in Computer Science from the Royal University of Phnom
              Penh, both on full scholarships.
            </div>
            <div className="co-founder-des3">
              Sareuon lives in Phnom Penh with his wife, son, and daughter. He
              is in charge of the daily operations of the school. In his free
              time, he enjoys playing soccer (a huge fan of the Cambodia’s
              soccer national team) and biking
            </div>
          
          </Grid>
      </Grid>
      {/* Coaches */}
      <Grid container justify="center" spacing ={4}>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={4}>
        <img src="assets/images/coaches.png" alt="coaches" />
        <h3 style={{textAlign:'center'}}>Our Coaches</h3>
        </Grid>
      
      </Grid>
      <Grid container justify="center">
          <Grid item xs={10}>
          <div class="coaches-des1">
              Our teachers, we call them coaches. Because they act as a coach
              rather than a teacher. They don’t tell the students what to do.
              Rather, they help the students figure things out. The class is for
              the students. So the students will do most of the work and gain
              the most benefits. The coaches are just there to guide,
              facilitate, and coach. Each coach will be responsible for 8
              students or less allowing for personalized and attentive learning.
            </div>
            <div className="coaches-des2">
              We want to provide high quality education. So we pick our coaches
              carefully. Our coaches are professionally trained in computer
              science. More importantly, they love to teach, and are fun to be
              with.
            </div>
          
          </Grid>
      </Grid>
      {/* footer  */}
      <Grid container justify="center">
        <Grid item xs={5}>
          <div className="our-people-footer">
            <hr />
            <p>Want to work with us?</p>
            <button > GET IN TOUCH</button>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: 30 }}>
      <Footer/>
     </div>
    </div>
  );
}
