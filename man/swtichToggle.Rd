% Auto-generated: do not edit by hand
\name{swtichToggle}

\alias{swtichToggle}

\title{SwtichToggle component}

\description{
A SwitchToggle component that can be toggled on or off.  @component @param {string} value - The current value of the component. @param {string} name - The name of the component. @param {function} onChange - A function that is called when the component is changed. @param {string} [onText="On"] - The text to display when the component is in the on position. @param {string} [offText="Off"] - The text to display when the component is in the off position. @param {string} [onColor="green"] - The color to display when the component is in the on position. @param {string} [offColor="red"] - The color to display when the component is in the off position.
}

\usage{
swtichToggle(name=NULL, offColor=NULL, offText=NULL, onChange=NULL,
onColor=NULL, onText=NULL, value=NULL)
}

\arguments{
\item{name}{Character. The name attribute of the radio buttons}

\item{offColor}{Character. The color of the switch when it is off}

\item{offText}{Character. The text to display when the switch is off}

\item{onChange}{A function to be called when the switch is toggled}

\item{onColor}{Character. The color of the switch when it is on}

\item{onText}{Character. The text to display when the switch is on}

\item{value}{Character. The current value of the switch}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

