import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div class="loading-container">
  	<div class="loader">
		<span class="loader-row"></span>
		<span class="loader-row"></span>
		<span class="loader-row"></span>
	</div>
</div>
  )
}

export default Spinner