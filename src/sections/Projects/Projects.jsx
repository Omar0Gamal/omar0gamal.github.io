import styles from './ProjectsStyles.module.css';
import darkFire from '../../assets/darkFire.jpeg';
import Memory from '../../assets/MemoryManagment.png';
import Network from '../../assets/NetworkFrameWork.png';
import HarmonyHome from '../../assets/HarmonyHome.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={darkFire}
          link="https://github.com/Omar0Gamal/DarkFire"
          h3="Dark Fire"
          p="Game Engine"
        />
        <ProjectCard
          src={Memory}
          link="https://github.com/Omar0Gamal/MemoryManager"
          h3="Memory Management Framework"
          p="Memory Allocator"
        />
        <ProjectCard
          src={Network}
          link="https://github.com/Omar0Gamal/CPP-Networking-Framework"
          h3="Networking Framework"
          p="TCP/IP Stack"
        />
        <ProjectCard
          src={HarmonyHome}
          link="https://github.com/Omar0Gamal/Harmony-Home"
          h3="Harmony Home"
          p="Furniture Store"
        />
      </div>
    </section>
  );
}

export default Projects;
