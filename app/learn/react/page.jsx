import Image from "next/image";

const ReactPage = () => {
  return (
    <section>
      <div className='h-96 w-96 relative'>
        <Image src='/app/images/timeline.png' fill />
      </div>
    </section>
  );
};

export default ReactPage;
