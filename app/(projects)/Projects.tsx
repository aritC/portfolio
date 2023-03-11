import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center text-white p-10">
        <div className="text-4xl font-bold text-center mb-20">PROJECTS</div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-3 gap-5 ">
          <div className="lg:row-span-3">
            <ProjectCard
              title="MSGR"
              src="/msgr.mp4"
              ytid="Kt4zytCDLuI"
              para1="This is a simple chatroom where the users can login using thier GMAIL ID. After logging in the users can either opt to send text messages or send images to other users in the room. "
              para2="I am currently working on it add private and group chats and to also improve the UI/UX"
              skills={["ReactJs", "NodeJs", "Firebase"]}
              liveLink="https://msgr.aritchanda.com/"
              repoLink="https://github.com/aritC/MSGR"
              isPortrait
            />
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <ProjectCard
              title="Encryptor"
              src="/enc.mp4"
              ytid="9lZIbK-0KBY"
              para1="This app can be used by users to share secrets more securely. It will generate an encrypted link which can contain your secret text and can be unlocked only by the ones you share the password to. You can also set a limit on the number of times the secret can be viewed."
              para2="The password to the secret are encrypted using a salt and stored in the MySQL database so that even the db admin cannot leak any password. There is a cron job which cleans up the database and removes all the expired passwords daily saving storage space."
              skills={["AngularJs", "NodeJs", "MySQL", "Nginx"]}
              repoLink="https://github.com/aritC/encryptor"
              liveLink="https://encryptor.aritchanda.com/encrypt"
            />
          </div>
          <ProjectCard
            title="Warehouse Delivery Simulation"
            src="/ware.mp4"
            ytid="Y7SeetUmr0A"
            para1="This project was done for my CSE 561: Discrete Modelling/Simulation where me and my groupmate modeled and simulated how packages are delivered in a city from a delivery center. The number of deliveries to be made in one particular day varies greatly and the resources spent on ensuring that efficiency of deliveries is not compromised varies day-to-day. The delivery center can change the resources available to them on any given day, to get the average delivery time for packages. This way they can manage the resources spent and efficiency of their deliveries for that particular day."
            para2="Given the complexities of the simulation, we make assumptions to limit the problem statement. The city map is reduced into zones instead of individual houses, to reduce the computational complexity of the algorithm. These zones represent the group of houses in one direction of the warehouse. Based on the customizable average truck cost, and average time taken for delivery in a zone, and number of packages we calculate the total cost to company and the total delivery time taken."
            skills={["Java", "Discrete Event Simulation", "DEVS Tool"]}
            repoLink="Cannot Share Code as it's a course project"
            isLive={false}
            repoPresent={false}
            liveLink="Cannot Host as it's a course project"
          />
          <ProjectCard
            title="Bert QA App"
            ytid="DSb845i9usw"
            para1="It is a Question Answering app where the user can paste a Comprehension and ask questions related to it and get the answers. It uses BERT a state of the art NLP model which was finetuned for question answering. ReactJs is used as the frontend and Flask is used as the webserver which also queries the model for the answers."
            repoLink="https://github.com/aritC/bertqawebsite"
            liveLink="Im facing Memory and CPU usage issues since the model is huge so am trying to find a way to host it for cheap."
            isLive={false}
            skills={["ReactJs", "Python", "Flask", "NLP", "PyTorch"]}
            src="/bertqa.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
