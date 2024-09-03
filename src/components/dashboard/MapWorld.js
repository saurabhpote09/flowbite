import React, { useEffect } from 'react';
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';


const MapWorld = () => {
  useEffect(() => {
    const mapElement = document.getElementById('svgMap');
    if (!mapElement.innerHTML.trim()) {
      new svgMap({
        targetElementID: 'svgMap',
        data: {
          data: {
            gdp: {
              name: 'GDP per capita',
              format: '{0} USD',
              thousandSeparator: ',',
              thresholdMax: 50000,
              thresholdMin: 1000
            },
            change: {
              name: 'Change to year before',
              format: '{0} %'
            }
          },
          applyData: 'gdp',
          values: {
            AF: { gdp: 587, change: 4.73 },
            AL: { gdp: 4583, change: 11.09 },
            DZ: { gdp: 4293, change: 10.01 },
            AR: { gdp: 11465, change: 8.56 },
            BR: { gdp: 10662, change: 3.49 },
            CN: { gdp: 12200, change: 6.80 },
            DE: { gdp: 46100, change: 2.38 },
            FR: { gdp: 42200, change: 1.78 },
            IN: { gdp: 2247, change: 7.50 },
            JP: { gdp: 40700, change: 1.56 },
            MX: { gdp: 11025, change: 2.90 },
            RU: { gdp: 10200, change: 1.91 },
            US: { gdp: 67400, change: 2.50 }
            
          }
        }
      });
    }
    return () => {
      const mapInstance = document.querySelector(`#svgMap .svgmap`);
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []); 

  return (
    <div
      id="svgMap"

      
    ></div>
  );
};

export default MapWorld;
