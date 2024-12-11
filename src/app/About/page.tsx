import Image from 'next/image';
import aboutData from '../../text/about.json';

const About = () => {
  return (
    <div
      className="w-full g-fuchsia-100 flex items-center flex-grow"
      style={{ height: `calc(100vh - 445px)` }}
    >
      <div className="flex gap-16 items-center">
        <div className="w-2/5 h-[450px]">
          <Image
            className="h-full w-full object-cover"
            src="/photos/concert/1.webp"
            alt="Me"
            width={400}
            height={400}
          />
        </div>
        <div className="text-black flex flex-col g-fuchsia-300 w-3/5">
          <div className="flex flex-col">
            <p className="italic text-xl font-normal">{aboutData.title}</p>
            <p className="text-2xl font-medium">{aboutData.subtitle}</p>
          </div>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mt-${index === 0 ? 6 : 2} text-base leading-loose tracking-wide text-justify`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
