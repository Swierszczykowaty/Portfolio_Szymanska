const About = () => {
  return (
    <>
      <div className=" bg-fuchsia-100 flex items-center py-10"
       style={{ height: `calc(100vh - 288px)` }}
       >
        <div className="flex-grow flex justify-center items-center">
          <div className="flex gap-10 bg-fuchsia-200">
            <div className="w-1/3">
              <img className="h-full w-full object-cover" src="/photos/1.webp" alt="" />
            </div>
            <div className="text-black bg-fuchsia-300 w-2/3">
              <div className="flex flex-col mb-4">
                <p className="">O mnie</p>
                <p className="">Poznajmy się lepiej</p>
              </div>
              <p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
