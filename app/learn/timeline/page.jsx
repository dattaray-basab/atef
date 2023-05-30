import Image from "next/image";

const ReactPage = () => {
  return (
    <section>
      <div className='relative h-full w-full'>
        <Image src='/images/timeline-full.jpg' width={800} height={500} />
      </div>
    </section>
  );
};

export default ReactPage;
