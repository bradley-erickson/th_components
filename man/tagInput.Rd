% Auto-generated: do not edit by hand
\name{tagInput}

\alias{tagInput}

\title{TagInput component}

\description{
A component for displaying and editing a list of tags.  @component @param {Array} value - An array of tags to be displayed @param {Array} options - An array of suggested tags for autocomplete @param {Function} onChange - A function to be called when a new tag is added @param {Function} onRemove - A function to be called when a tag is removed @param {String} color - The background color of each tag
}

\usage{
tagInput(color=NULL, onChange=NULL, onRemove=NULL, options=NULL,
value=NULL)
}

\arguments{
\item{color}{Character. The background color of each tag}

\item{onChange}{A function to be called when a new tag is added}

\item{onRemove}{A function to be called when a tag is removed}

\item{options}{List of characters. An array of suggested tags for autocomplete}

\item{value}{List of characters. An array of tags to be displayed}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

