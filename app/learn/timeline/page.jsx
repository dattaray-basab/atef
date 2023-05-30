import Image from "next/image";

const ReactPage = () => {
  return (
    <section>
      <div className='relative h-full w-full'>
        <Image src='/images/timeline_full.jpg' width={960} height={540} />
      </div>
    </section>
  );
};

export default ReactPage;
