import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {/* Your experience details */}

    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Dec 2024 - Jan 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title"> Instient Private Limited | Software Intern</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Banglore, India</h6>
          <p>
          Working on the backend development for a blog website, integrating SEO best practices to improve search engine visibility.
          Collaborating with the frontend team, who is using Angular, to ensure seamless integration of SEO-friendly content and metadata.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Jan 2024 -Present "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">KrtrimaIQ Cognitive Solutions  | AI Engineer Intern</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Banglore, India</h6>
          <p>
           I have worked on image generation using Flux Dev models, leveraging OpenAI to generate prompts for the Flux Dev model to create images, which were then used in video generation tasks. Additionally, I utilized NLP and LangChain in the same project to enhance it capabilities.My expertise in Python has been essential in developing and optimizing AI models for innovative results.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="May 2024 - July 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Finixia Dedacons Pvt Ltd | Web Development Intern</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Guwahati, India</h6>
          <p>
          Optimized React components to reduce loading times by 1.5 seconds, enhancing user experience. Improved workflows to save 3 hours weekly and increased platform uptime from 90%, while containerizing the application using Docker. Collaborated with a team of 4 developers, contributing 5K+ lines of code to a shared Git workflow, resulting in a 25% boost in team productivity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="June 2024 - July 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">NBPDCL | Industrial Trainee</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Hajipur,Bihar</h6>
          <p>
           Visited  NBPDCL Hajipur Power Station and gained knowledge in Power System protection and maintenance
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
