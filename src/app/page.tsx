import Header from './components/Header';
import Body from './components/Body';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="max-w-[1230px] mx-auto w-full">
        <Header />
        <Body />
      </div>
    </div>
  );
}
