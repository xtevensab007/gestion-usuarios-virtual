import { ExampleComponent } from '@/components/ExampleComponent';
import Link from 'next/link';


const Home = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <ExampleComponent text='Welcome to CodeF@ctory' />
      <Link href='/info'>
        <div className='card'>
          <h2>Usuario</h2>
          <span>Ingresar al modulo de usuarios</span>
        </div>
      </Link>
    </main>
  );
};

export default Home;
