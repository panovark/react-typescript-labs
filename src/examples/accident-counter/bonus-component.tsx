import { useState } from 'react';

type RGBColor = `rgb(${number}, ${number}, ${number})` | `#${string}`;

/**Sets a color state in RGB on Hex. */

export const useColor = (defaultColor: RGBColor = 'rgb(255, 0, 0)') => {
  const [color, setColor] = useState<RGBColor>(defaultColor);
  return [color, setColor] as const;
};
