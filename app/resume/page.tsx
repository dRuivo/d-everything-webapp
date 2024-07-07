import WorkTimeline from './work-timeline';

// Code: Resume page component
export default function Page() {
  return (
    <main className='grid grid-cols-1 justify-items-center'>
      <h2 className='text-center'>Welcome to my Resume Page!</h2>
      <div className='flex flex-col w-7/12 justify-center space-y-4'>
        {/* TODO: add more of my creative side. Poetry, drawing, photography */}
        <p>
          I am a creative problem solver with a passion for making things work. 
          I love to build stuff, improve processes and help others achieve their goals. 
          I have a background in engineering and a passion for technology, but I am also a maker, a creator and a crafter.
        </p>
        <p>
          I’ve spent over 8 years working in a tech company that does physical products that require their own software to run. 
          More than 6 of those years were spent partly doing management, this has given me a set of skills that can help you improve how you work.
        </p>
        <p>
          My background is in engineering, more specifically, I studied mechanical engineering and did a Masters in Robotics. 
          But more than that I am a maker, creator or crafter (whatever you’d prefer to call it). 
          I like to build and improve stuff around the house, make some music and I’m now getting into drawing. When it comes to my interests, I am all over the place, and I love it! I consider it one of my super powers!
        </p>
        <p>
          I am a generalist, a jack of all trades. 
          I believe that everything is figureoutable and that there is always a way to achieve our goals. 
          This is part of what makes me the ideal partner to discuss how you can spend the time on your projects in a more purposeful way and give you more time to create, make or craft.
        </p>
      </div>
      <div className='py-8'>
        <h3 className='text-center m-2'>Work Experience</h3>
        <p className='block text-center mb-4'>
          Here is a timeline of my work experience, including machines I've developed and position changes.
        </p>
        <WorkTimeline />
      </div>
    </main>
  );
}