const About = () => {
  return (
    <>
      <div className="w-full g-fuchsia-100 flex items-center flex-grow"
       style={{ height: `calc(100vh - 288px)` }}

       >
        <div className="flex gap-16">
            <div className="w-2/5 h-[400px]">
              <img className="h-full w-full object-cover" src="/photos/1.webp" alt="" />
            </div>
            <div className="text-black flex flex-col g-fuchsia-300 w-3/5">
              <div className="flex flex-col">
                <p className="italic text-xl font-normal">O mnie</p>
                <p className="text-2xl font-medium">Poznajmy się lepiej</p>
              </div>
              <p className="mt-6 text-base leading-loose tracking-wide text-justify">
                Miłość do psów kiełkowała w moim sercu od najmłodszych lat,
                natomiast pasja do fotografowania narodziła się po tym jak w
                moim domu pojawił się mój pierwszy pies - Herman. Zauważyłam,
                że fotografowanie go sprawia mi niesamowitą przyjemność,
                początkowe zdjęcia były robione telefonem, były to zdjęcia
                życia codziennego. Z czasem jednak, przyszła chęć na coś
                więcej, chciałam, aby zdjęcia które robię nie nadawały się
                wyłącznie do albumu rodzinnego. Kilka lat ćwiczeń, zabawy ze
                światłem, nabycie pierwszego aparatu kompaktowego, później
                lustrzanki... i oto jestem! Jeśli marzy Ci się sesja w bajkowej
                scenerii Twojego psa lub razem z nim, zapraszam do obejrzenia
                portfolio i oferty! :
              </p>
              <p className=" mt-2 marker:text-base leading-loose tracking-wide text-justify">
                Wiecej tekstu tutaj moze byc w pargrafach jakis jak chesz 
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
