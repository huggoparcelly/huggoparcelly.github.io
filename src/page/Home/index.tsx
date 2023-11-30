import Profile from "../../components/Profile";
import Skills from "../../components/Skills";
import Project from '../../components/Project';


export default function Home() {
  return (
    <main className='page-container'>
      <Profile />
      <Project />
      <Skills />
    </main>
  )
}
