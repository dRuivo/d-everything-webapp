import clsx from "clsx"

const TIMELINE_INFO = [
  {
    date: 'June 2024',
    title: 'Release of VIIO.250 machine',
    description: ''
  },
  {
    date: 'December 2023',
    title: 'Changed position to System Engineer',
    description: ''
  },
  {
    date: 'March 2022',
    title: 'Changed position to Platform Solutions Engineer',
    description: ''
  },
  {
    date: 'November 2021',
    title: 'Release of BigRep PRO.2',
    description: ''
  },
  {
    date: 'May 2019',
    title: 'Release of BigRep STUDIO G2',
    description: ''
  },
  {
    date: 'November 2018',
    title: 'Release of BigRep PRO',
    description: ''
  },
  {
    date: 'July 2018',
    title: 'Changed Position to Head of Controls',
    description: '',	
  },
  {
    date: 'October 2017',
    title: 'Release of BigRep STUDIO',
    description: '',
  },
  {
    date: 'May 2016',
    title: 'Joined BigRep as Embedded Systems Engineer',
    description: '',
  }
]


export default function WorkTimeline() {
    return (
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {TIMELINE_INFO.map((info, index) => (
          <li key={info.date}>
            {index > 0 && <hr />}
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className={clsx("mb-10", index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end" )}>
              <time className="font-mono italic">{info.date}</time>
              <div className="text-lg font-black">{info.title}</div>
              {info.description}
            </div>
            {index < (TIMELINE_INFO.length - 1) && <hr />}
          </li>
        ))}
      </ul>
    )
}