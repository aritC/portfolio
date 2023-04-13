import { useState } from "react";

interface Props {
  title: string;
  src: string;
  ytid: string;
  isPortrait?: boolean;
  para1: string;
  para2?: string;
  liveLink: string;
  repoLink: string;
  skills: string[];
  isLive?: boolean;
  repoPresent?: boolean;
}

const ProjectCard = ({
  title,
  src,
  ytid,
  isPortrait = false,
  para1,
  para2,
  liveLink,
  repoLink,
  skills,
  isLive = true,
  repoPresent = true,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="group relative h-full w-full cursor-pointer hover:scale-110 hover:z-20 lg:group-hover:ease-in lg:ease-out lg:duration-150 hover:shadow-2xl hover:shadow-black lg:transition-all "
        onClick={handleCardClick}
      >
        <div className="text-white font-bold absolute h-16 z-10 bottom-0 p-3 bg-gradient-to-t from-black w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:group-hover:ease-in md:ease-out md:duration-150 rounded-lg">
          {title}
        </div>
        <video
          loop
          autoPlay
          muted
          className={`lg:flex rounded-lg object-cover ${
            isPortrait ? "lg:h-full lg:w-auto" : ""
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-better-black bg-opacity-90">
          <div className="mx-auto max-w-3xl ">
            <iframe
              className="w-full h-96 mt-5"
              src={`https://www.youtube.com/embed/${ytid}`}
              title="MSGR"
              allowFullScreen
            />
            <div className="p-4">
              <div className="flex justify-between text-white text-3xl font-bold mb-2">
                <h2 className="pt-3">{title}</h2>
                <button
                  className="text-5xl focus:outline-none"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
              <div className="text-white mb-4">
                <p className="mb-2 max-h-[10rem] overflow-auto">{para1}</p>
                {para2 && <p>{para2}</p>}
              </div>
              <div className="text-white mb-4 text-lg">
                Skills:
                <ul className="inline-block">
                  {skills.map((skill, i) => {
                    return (
                      <li key={i} className="inline-block m-2">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex justify-between gap-44">
                {isLive ? (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    Live Here
                  </a>
                ) : (
                  <div> {liveLink}</div>
                )}
                {repoPresent ? (
                  <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    GitHub Repo
                  </a>
                ) : (
                  <div>{repoLink}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
