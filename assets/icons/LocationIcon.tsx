import React from 'react'

import { CustomIconProps } from '../../interfaces/general';

export const LocationIcon = ({ width = 32, height = 32, color = "#CECDD5", colorBackground = "white", fillOpacity = 0.1, ...props }: CustomIconProps) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill={colorBackground} fill-opacity={fillOpacity}/>
<path d="M16 22.675L19.7125 18.9625C20.4467 18.2283 20.9466 17.2928 21.1492 16.2744C21.3517 15.256 21.2477 14.2004 20.8503 13.2412C20.4529 12.2819 19.78 11.462 18.9167 10.8851C18.0533 10.3083 17.0383 10.0004 16 10.0004C14.9617 10.0004 13.9467 10.3083 13.0833 10.8851C12.22 11.462 11.5471 12.2819 11.1497 13.2412C10.7523 14.2004 10.6483 15.256 10.8508 16.2744C11.0534 17.2928 11.5533 18.2283 12.2875 18.9625L16 22.675ZM16 24.796L11.227 20.023C10.283 19.079 9.64014 17.8763 9.3797 16.5669C9.11925 15.2575 9.25293 13.9003 9.76382 12.6669C10.2747 11.4335 11.1399 10.3793 12.2499 9.63763C13.3599 8.89594 14.665 8.50006 16 8.50006C17.335 8.50006 18.6401 8.89594 19.7501 9.63763C20.8601 10.3793 21.7253 11.4335 22.2362 12.6669C22.7471 13.9003 22.8808 15.2575 22.6203 16.5669C22.3599 17.8763 21.717 19.079 20.773 20.023L16 24.796ZM16 16.75C16.3978 16.75 16.7794 16.592 17.0607 16.3107C17.342 16.0294 17.5 15.6478 17.5 15.25C17.5 14.8522 17.342 14.4706 17.0607 14.1893C16.7794 13.908 16.3978 13.75 16 13.75C15.6022 13.75 15.2206 13.908 14.9393 14.1893C14.658 14.4706 14.5 14.8522 14.5 15.25C14.5 15.6478 14.658 16.0294 14.9393 16.3107C15.2206 16.592 15.6022 16.75 16 16.75ZM16 18.25C15.2044 18.25 14.4413 17.9339 13.8787 17.3713C13.3161 16.8087 13 16.0456 13 15.25C13 14.4543 13.3161 13.6913 13.8787 13.1287C14.4413 12.5661 15.2044 12.25 16 12.25C16.7957 12.25 17.5587 12.5661 18.1213 13.1287C18.6839 13.6913 19 14.4543 19 15.25C19 16.0456 18.6839 16.8087 18.1213 17.3713C17.5587 17.9339 16.7957 18.25 16 18.25Z" fill={color}/>
</svg>
  )
}
