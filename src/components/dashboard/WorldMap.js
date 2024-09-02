import React, { useEffect } from 'react';
import svgMap from 'svgmap'; // Import svgMap
import './SvgMapComponent.css'; // Import CSS for custom styling

const SvgMapComponent = () => {
  useEffect(() => {
    // Initialize the SVG map
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
          // Include your complete dataset here
          AF: { gdp: 587, change: 4.73 },
          AL: { gdp: 4583, change: 11.09 },
          DZ: { gdp: 4293, change: 10.01 },
          // ... add all other data
        }
      }
    });
  }, []);

  return (
    <div className="svgMapContainer">
      <div id="svgMap" className="svgMap"></div>
    </div>
  );
};

export default SvgMapComponent;
