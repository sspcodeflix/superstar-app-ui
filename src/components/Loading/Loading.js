import React from 'react'

function Loading({ title }) {
  return (
    <div className='loading-container'>
      <svg width="100px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="75" cy="50" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.9285714285714286s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.9285714285714286s"></animate>
        </circle><circle cx="72.52422169756048" cy="60.847093477938955" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.8571428571428571s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.8571428571428571s"></animate>
        </circle><circle cx="65.58724504646834" cy="69.54578706170075" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.7857142857142857s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.7857142857142857s"></animate>
        </circle><circle cx="55.56302334890786" cy="74.37319780454558" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.7142857142857143s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.7142857142857143s"></animate>
        </circle><circle cx="44.43697665109214" cy="74.37319780454558" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.6428571428571429s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.6428571428571429s"></animate>
        </circle><circle cx="34.41275495353166" cy="69.54578706170075" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5714285714285714s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5714285714285714s"></animate>
        </circle><circle cx="27.475778302439522" cy="60.847093477938955" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5s"></animate>
        </circle><circle cx="25" cy="50" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.42857142857142855s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.42857142857142855s"></animate>
        </circle><circle cx="27.475778302439522" cy="39.15290652206105" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.35714285714285715s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.35714285714285715s"></animate>
        </circle><circle cx="34.41275495353166" cy="30.454212938299257" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.2857142857142857s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.2857142857142857s"></animate>
        </circle><circle cx="44.43697665109214" cy="25.62680219545441" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.21428571428571427s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.21428571428571427s"></animate>
        </circle><circle cx="55.563023348907834" cy="25.626802195454403" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.14285714285714285s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.14285714285714285s"></animate>
        </circle><circle cx="65.58724504646834" cy="30.454212938299253" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.07142857142857142s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.07142857142857142s"></animate>
        </circle><circle cx="72.52422169756048" cy="39.15290652206106" fill="#d8796d" r="5">
          <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
          <animate attributeName="fill" values="#d8796d;#d8796d;#fd3616;#d8796d;#d8796d" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="0s"></animate>
        </circle>
      </svg>
      <br />
      {
        title ?
          <div className='loader-message'>
            {title}
          </div> : null
      }
    </div>
  )
}

export default Loading