import { createGlobalStyle } from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const GlobalStyle = createGlobalStyle`

/* reset default css styles */
  * {
		padding: 0;
		margin: 0;
		border: 0;
		font-family: Montserrat
	}
	*,
	:after,
	:before {
		box-sizing: border-box;
	}
	:active,
	:focus {
		outline: 0;
	}
	a:active,
	a:focus {
		outline: 0;
	}
	aside,
	footer,
	header,
	nav {
		display: block;
	}
	html {
		scroll-behavior: smooth;
	}
	body,
	html {
		height: 100%;
		width: 100%;
		font-size: 100%;
		font-family: 'Montserrat', sans-serif;
	}
	button,
	input,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
		border: none;
		background-color: transparent;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	main {
		display: block;
	}
	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}
	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	a {
		background-color: transparent;
	}
	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}
	b,
	strong {
		font-weight: bolder;
	}
	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	img {
		border-style: none;
	}
	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}
	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}
	progress {
		vertical-align: baseline;
	}
	textarea {
		overflow: auto;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		margin: 0;
	}
	button,
	input {
		overflow: visible;
	}
	button,
	select {
		text-transform: none;
	}
	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}
	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	[type="checkbox"],
	[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}
	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}
	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	details {
		display: block;
	}
	summary {
		display: list-item;
	}
	template {
		display: none;
	}
	[hidden] {
		display: none;
	}

	:root {
		--white: #fff;
	}

  #root{
		width: 100%;
    height: 100%;
    box-sizing: border-box;
    min-height: 100%;
  }

	.heading1 {
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: 22px;
	}

	.heading2 {
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 22px; 
	}

	.heading3 {
		font-family: Montserrat;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 22px;
	}
  
  	.smallText {
		font-family: Montserrat;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
	}
  	.Active {
		.ant-modal-content{
			background-color: #F2FBFB
		}
  	}
   	.Completed {
		.ant-modal-content{
			background-color: #EEFAE9
		}
  	}
	.Process {
		.ant-modal-content{
			background-color: #FFF7E8
		}
  	}
	.Canceled {
		.ant-modal-content{
			background-color: #FFEEEE
		}
  	}
  
`;
