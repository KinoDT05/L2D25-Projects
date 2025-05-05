import Banner from '../components/Banner';
import About from '../components/About';

export default function Homepage() {
    return (
        <main className='homepage'>
            <section>
                <Banner title = "GOTTA CATCH EM ALL"/>
            </section>
            <section>
                <About dev1='Cha Hua | 1 BS CS-DGDD' dev2='Erin | 1 BS CS-DGDD' dev3='Raizon | 1 BS CS-DGDD' dev4='Princess | 2 BS CS'/>
            </section>
        </main>
    );
}
