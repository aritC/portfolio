import Link from "next/link";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center text-white p-10">
        <div className="text-4xl font-bold text-center mb-20">
          WORK EXPERIENCE
        </div>
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-20">
          <WorkCard
            position="Software Engineering Intern"
            company="Gen Digital"
            dates="06/2022 - 08/2022"
            companyUrl="https://www.gendigital.com/"
            responsiblities={[
              "Reduced Partners Team’s workload by 2% by solving a reporting bug where Partners Team were not able to trace the orders back to the partners to pay them the commissions when orders were placed through the eCommerce Website.",
              "Enhanced the cancellation job filtration logic to prevent any unnecessary orders to be picked up by the job which had impacted 70+ transactions until then.",
              "Improved QA Teams test bench setup time by 40% by automating deployment of VM’s with all necessary tools and software already setup using Vagrant, Boxstarter and Chocolatey scripts.",
            ]}
          />
          <WorkCard
            position="Associate IT Consultant"
            company="ITC Infotech"
            dates="10/2019 - 07/2021"
            companyUrl="https://www.itcinfotech.com/about-us/"
            responsiblities={[
              "Analyzed and decreased the time and effort taken for migration by 40% using a Python based workflow to process legacy data and load into SessionM.",
              "Led a team of five developers which analyzed and designed a Business Admin Portal as POC Accelerator for SessionM.",
              "Designed a Four-Eyes module for the Portal which reduced risk of fraud by 15% using Serverless for the APIs and ReactJs and NodeJs for the website and Cassandra with Sequelize ORM for database.",
              "Implemented APIs for Support Module using AWS Serverless where admin or the customer can raise a support ticket from selected categories and subject of the ticket, with photo attachments and message and chat.",
              "Coded APIs for customers to raise a request for Missing Transactions which would also send a push notification to the customer's mobile app using SNS.",
            ]}
            achievements={[
              {
                title: "Quarterly Pat on the Back Award",
                details:
                  "Was awarded this for showing exemplary performace for Q3 in 2019 by delivering tasks on time and maintaing very good relation with the customer.",
              },
              {
                title:
                  "Nomination for TAP Resilience Award (Customer Champ Synergic Force)",
                details:
                  "Was nominated for recieving this award for maintaing very good relations with customer ",
              },
              {
                title: "The Dream Team (Super Squad)",
                details:
                  "My team was awarded this in the Yearly TAP award cermony for maintaining good efficiency even in the sudden switch to WFH due to COVID-19.",
              },
            ]}
          />
          <WorkCard
            position="SDE Intern"
            company="Amazon"
            dates="02/2019 - 09/2019"
            companyUrl="https://www.amazon.com/"
            responsiblities={[
              "Improved ML Model Development and Testing time by 20% by developing a Web App using ReactJs and NodeJs where the Operations Team could upload their CSV data and train a customized Machine Learning model. The files were uploaded to S3 and requests were queued using SQS which triggered StepFunctions workflow for training or prediction while logging state in DynamoDB.",
              "Coordinated with Operations Team to get live data which was cleaned and pre-processed using different text encoding techniques and applied various classification Machine Learning and Deep Learning algorithms to achieve best accuracy of 95%.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
